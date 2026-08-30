import { join, dirname } from 'node:path';
import { writeFile, mkdir, readdir, readFile } from 'node:fs/promises';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify';
import cloudflare from '@astrojs/cloudflare';
import i18nConfig from './src/config/i18n.config.ts';
import { SITE_URL_FALLBACK } from './src/config/site-url.ts';
import {
  canonicalOf,
  jsonLdUrlOf,
  siteUrlDisagreement,
  disagreementMessage,
} from './scripts/site-url-agreement.mjs';
import { SITE_NAME, THEME_COLOR } from './src/config/branding.ts';

/**
 * Load `.env` into `process.env` before anything below reads it.
 *
 * Astro loads `.env` files for `astro:env` and for `import.meta.env`, but this
 * file runs before any of that — Vite evaluates it as plain Node, where only
 * real environment variables exist. So `SITE_URL` in `.env` reached
 * `site.config.ts` and not `site` below, and a site configured the way
 * `.env.example` describes shipped canonical tags for the fallback domain
 * while its JSON-LD named the real one (#643).
 *
 * `.env.local` is loaded first on purpose. `process.loadEnvFile` does not
 * overwrite a variable that is already set, so whichever file is read first
 * wins — and Astro gives `.env.local` precedence over `.env`. Reading them in
 * this order matches that.
 *
 * Real environment variables are set before any of this runs, so they still
 * beat both files and a host's own configuration keeps precedence.
 *
 * Only these two: mode-specific files (`.env.production` and the like) would
 * need the mode, which Astro has not decided yet at this point. Anyone using
 * one of those still gets the mismatch — and `verifySiteUrl()` below stops the
 * build and says so, rather than letting it ship.
 */
for (const file of ['.env.local', '.env']) {
  try {
    process.loadEnvFile(file);
  } catch {
    // Not present. Nothing to load.
  }
}

/**
 * Deploy-target adapter selection. Vercel is the default; set
 * `DEPLOY_TARGET=netlify` or `DEPLOY_TARGET=cloudflare` to build for those
 * platforms instead. All three keep `output: 'static'`, so every page is
 * prerendered and only the `prerender = false` API routes (the contact form
 * and newsletter) ship as the platform's serverless/edge function — on
 * Cloudflare Pages, as a Pages Function.
 *
 * `DEPLOY_TARGET=github` installs no adapter at all: GitHub Pages has no
 * server runtime, so the deploy workflow removes the server-only API routes
 * from src/pages/api/ before building, and everything static lands in `dist/`,
 * ready for actions/upload-pages-artifact.
 */
const deployTarget = process.env.DEPLOY_TARGET;
function resolveAdapter() {
  switch (deployTarget) {
    case 'netlify':
      return netlify();
    case 'cloudflare':
      return cloudflare();
    case 'github':
      return undefined;
    default:
      return vercel();
  }
}

/**
 * Build-time check that the site knows its own address.
 *
 * With `SITE_URL` unset the build still succeeds, and every canonical tag,
 * `og:url`, `og:image`, RSS link and sitemap entry is written against the
 * placeholder above — pointing search engines and social crawlers at a domain
 * that isn't yours. Nothing in the output looks broken, so it survives to
 * production easily. Warn where it will be read: the build log.
 */
function siteUrlCheck() {
  return {
    name: 'site-url-check',
    hooks: {
      'astro:build:start': ({ logger }) => {
        if (process.env.SITE_URL) return;
        logger.warn(
          `SITE_URL is not set, so canonical URLs, og:image, RSS and the sitemap ` +
            `will all be written against ${SITE_URL_FALLBACK}. Set SITE_URL in ` +
            `your host's environment variables to your own domain.`
        );
      },
    },
  };
}

/**
 * Pagefind static search index, generated after every `astro build`.
 *
 * Runs in the `astro:build:done` hook so it indexes the *actual* output
 * directory — the Vercel adapter writes to `.vercel/output/static`, Netlify,
 * Cloudflare, and plain static builds to `dist/` — without the build command
 * needing to know which. The index is served from `/pagefind/` and loaded lazily by
 * `src/components/layout/SearchModal.astro`; `astro dev` has no index, and
 * the search modal explains that instead of erroring.
 */
function pagefind() {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const sitePath = fileURLToPath(dir);
        const outputPath = join(sitePath, 'pagefind');
        const { createIndex, close } = await import('pagefind');
        const { index } = await createIndex();
        const { page_count } = await index.addDirectory({ path: sitePath });
        await index.writeFiles({ outputPath });
        await close();
        logger.info(`indexed ${page_count} pages into ${outputPath}`);
      },
    },
  };
}

/**
 * Favicon PNG/ICO files, written after every `astro build`.
 *
 * These used to be prerendered endpoints under `src/pages/`. That worked on
 * Vercel and Netlify but broke on Cloudflare: `@astrojs/cloudflare` prerenders
 * routes inside workerd, and the renderer needs `sharp`, a native Node module
 * that cannot load there. Every favicon route failed with
 * `No such module "…/chunks/sharp"` and the build died — so Cloudflare users
 * got no site at all. Reported in #600.
 *
 * `astro:build:done` always runs in Node, whichever adapter is active, and
 * `dir` already points at that adapter's real output directory. So the same
 * files land in the same place on all three targets, with no native module
 * anywhere near a page.
 *
 * `favicon.svg` is written here too, rather than staying a route. It needs no
 * *native* module, so keeping it as a route looked safe — but `buildFaviconSvg`
 * decodes an embedded font subset with `Buffer` and parses it with fontkit,
 * and neither exists in workerd without `nodejs_compat`. As a route it emitted
 * a 0-byte file on Cloudflare while the build reported success. The cost is
 * that `astro dev` has no favicon, since build hooks do not run there.
 */
function faviconAssets() {
  const letter = SITE_NAME.charAt(0).toUpperCase();
  const pngSizes = {
    'favicon-32x32.png': 32,
    'apple-touch-icon.png': 180,
    'pwa-192x192.png': 192,
    'pwa-512x512.png': 512,
  };

  return {
    name: 'favicon-assets',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        // Imported here rather than at the top of this file: a static import
        // of the sharp-backed module makes pagefind's own dynamic import above
        // fail with "Vite module runner has been closed" (#600).
        const { buildFaviconSvg } = await import('./src/lib/favicon/svg.ts');
        const { renderFaviconPng, renderFaviconIco } = await import('./src/lib/favicon/raster.ts');
        const out = fileURLToPath(dir);

        await writeFile(join(out, 'favicon.svg'), buildFaviconSvg(letter, THEME_COLOR));

        for (const [name, size] of Object.entries(pngSizes)) {
          await writeFile(join(out, name), await renderFaviconPng(letter, THEME_COLOR, size));
        }
        await writeFile(join(out, 'favicon.ico'), await renderFaviconIco(letter, THEME_COLOR));

        logger.info(`wrote ${Object.keys(pngSizes).length + 2} favicon files to ${out}`);
      },
    },
  };
}

/**
 * OG share cards, drawn after every `astro build`.
 *
 * These used to be prerendered endpoints under `src/pages/og/`, and they hit
 * the same wall as the favicons in #600: rasterising needs `sharp`, which
 * cannot load in the workerd runtime the Cloudflare adapter prerenders in.
 * Worse than the favicons, `src/lib/og.ts` also held the `getBlogOgPath`
 * helpers that `BlogLayout` and `ProjectLayout` import — so `sharp` was
 * reachable from every blog and project page, not just from the card routes.
 * The library is split in two now: `og/svg.ts` is safe anywhere, `og/raster.ts`
 * is Node-only and reached only from here.
 *
 * Rather than re-deriving which cards to draw from the content collections —
 * which this file cannot read — the hook scans the built HTML for the
 * `og:image` each page declares, and draws exactly those. Cards therefore
 * match what the pages ask for by construction, and a page using its own cover
 * photo silently produces no card, which is correct. Title and subtitle come
 * from the same page's `og:title` and `og:description`.
 */
function ogCards() {
  const KINDS = [
    [/^\/og\/blog\/tag\//, 'BLOG'],
    [/^\/og\/blog\//, 'BLOG'],
    [/^\/og\/projects\//, 'PROJECTS'],
  ];

  async function htmlFiles(directory) {
    const found = [];
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) found.push(...(await htmlFiles(path)));
      else if (entry.name.endsWith('.html')) found.push(path);
    }
    return found;
  }

  const meta = (html, property) => {
    const m = html.match(new RegExp(`<meta property="${property}" content="([^"]*)"`));
    return m ? m[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
                   .replace(/&lt;/g, '<').replace(/&gt;/g, '>') : undefined;
  };

  return {
    name: 'og-cards',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const { renderOgPng } = await import('./src/lib/og/raster.ts');
        const out = fileURLToPath(dir);
        const siteUrl = process.env.SITE_URL || SITE_URL_FALLBACK;
        const domain = new URL(siteUrl).host;

        /**
         * Read every page first, because the ORDER decides what gets drawn and
         * it can't be left to the filesystem.
         *
         * A card is defined by the first page that references it, and 114
         * pages reference `/og/default.png`. `readdir` returns `404.html`
         * before `index.html` — digits sort ahead of letters — so the card
         * standing in for the whole site was drawn from the 404 page, and
         * every link to the homepage shared an image reading "Page not
         * found". Per-post cards were never affected: each is claimed by
         * exactly one page, so nothing races for those.
         *
         * The site's own front page goes first, so it names the card that
         * represents the site. Pages asking not to be indexed (404, the theme
         * demos) go last: they can still define a card nothing else claims,
         * but they can never take one from a page meant to be shared.
         */
        const rootIndex = join(out, 'index.html');
        const pages = [];
        for (const file of await htmlFiles(out)) {
          pages.push({ file, html: await readFile(file, 'utf8') });
        }
        const rank = ({ file, html }) =>
          /<meta name="robots" content="[^"]*noindex/i.test(html) ? 2 : file === rootIndex ? 0 : 1;
        pages.sort((a, b) => rank(a) - rank(b));

        // Collect one entry per distinct card path; several pages can point at
        // the same card (the default one, most obviously).
        const wanted = new Map();
        for (const { html } of pages) {
          const image = meta(html, 'og:image');
          if (!image) continue;
          let path;
          try {
            path = new URL(image, siteUrl).pathname;
          } catch {
            continue;
          }
          if (!path.startsWith('/og/') || !path.endsWith('.png') || wanted.has(path)) continue;
          wanted.set(path, {
            title: meta(html, 'og:title') || SITE_NAME,
            subtitle: meta(html, 'og:description'),
            kind: KINDS.find(([re]) => re.test(path))?.[1],
          });
        }

        for (const [path, card] of wanted) {
          const png = await renderOgPng({
            ...card,
            brandColor: THEME_COLOR,
            domain,
            siteName: SITE_NAME,
          });
          const target = join(out, path.replace(/^\//, ''));
          await mkdir(dirname(target), { recursive: true });
          await writeFile(target, png);
        }

        logger.info(`drew ${wanted.size} OG cards into ${out}`);
      },
    },
  };
}

/**
 * Stops a build whose pages disagree about the site's own address.
 *
 * The address is read from two places that cannot share code: `site` here,
 * from `process.env`, which writes the canonical tags, the sitemap, the RSS
 * links and robots.txt; and `url` in `src/config/site.config.ts`, from
 * `astro:env/server`, which writes the JSON-LD, the share cards and the
 * footer. See `scripts/site-url-agreement.mjs` for why neither can do the
 * other's job.
 *
 * They do not read the same places. `astro:env` loads `.env` files and this
 * file does not, so a user who follows `.env.example` and sets SITE_URL in
 * `.env` configures one of the two. Their pages then carry canonical tags for
 * the fallback domain and JSON-LD for their own (#643).
 *
 * This runs in `astro:build:done` rather than in `scripts/verify-build.mjs`,
 * where the theme's other output checks live, because that script runs on
 * `pnpm verify` and a deploy runs `astro build`. A misconfiguration that only
 * a local audit catches is one that reaches production.
 *
 * One page is enough: both values are global, so if they agree anywhere they
 * agree everywhere.
 */
function verifySiteUrl() {
  return {
    name: 'verify-site-url',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        async function htmlFiles(directory) {
          const found = [];
          for (const entry of await readdir(directory, { withFileTypes: true })) {
            const path = join(directory, entry.name);
            if (entry.isDirectory()) found.push(...(await htmlFiles(path)));
            else if (entry.name.endsWith('.html')) found.push(path);
          }
          return found;
        }

        // index.html first: it is the page most likely to carry both, and
        // finding it there avoids reading the rest of the site.
        const pages = await htmlFiles(root);
        pages.sort((a, b) => Number(b.endsWith('index.html')) - Number(a.endsWith('index.html')));

        for (const page of pages) {
          const html = await readFile(page, 'utf8');
          const canonical = canonicalOf(html);
          const jsonLd = jsonLdUrlOf(html);
          if (!canonical || !jsonLd) continue; // proves nothing either way

          const found = siteUrlDisagreement(html);
          if (found) throw new Error(disagreementMessage(page.replace(`${root}`, ''), found));

          logger.info(`site address agrees in canonical and JSON-LD: ${canonical}`);
          return;
        }

        logger.info('no page carries both a canonical tag and JSON-LD — nothing to compare');
      },
    },
  };
}

/**
 * Locales that actually have entries in a content collection.
 *
 * A locale with no blog posts still builds `/id/blog/`, `/id/blog/tag/...`
 * and so on, because the index route exists for every locale. Those pages
 * render an empty state, which is right for a visitor who switched language
 * — but submitting them in the sitemap asks Google to index a page with no
 * content, and it answers "Crawled – currently not indexed", which is noise
 * in a report you want to read for real problems.
 *
 * Derived from the filesystem rather than hardcoded, so it self-heals: drop
 * one Indonesian post into `src/content/blog/id/` and `/id/blog/` is back in
 * the sitemap on the next build with no config change. The pages themselves
 * are untouched and stay reachable and linked throughout.
 */
const populatedLocales = (collection) => {
  const base = join(process.cwd(), 'src', 'content', collection);
  const populated = new Set();
  let localeDirs;
  try {
    localeDirs = readdirSync(base, { withFileTypes: true });
  } catch {
    return populated;
  }
  for (const dir of localeDirs) {
    if (!dir.isDirectory()) continue;
    const hasEntries = readdirSync(join(base, dir.name)).some((f) => /\.mdx?$/.test(f));
    if (hasEntries) populated.add(dir.name);
  }
  return populated;
};

/** True when this URL is a listing page for a locale that has nothing to list. */
function isEmptyListing(pathname) {
  for (const collection of ['blog', 'projects']) {
    const populated = populatedLocales(collection);
    for (const locale of i18nConfig.locales) {
      if (populated.has(locale)) continue;
      const prefix = locale === i18nConfig.defaultLocale ? '' : `/${locale}`;
      if (new RegExp(`^${prefix}/${collection}(/(tag|page)/[^/]+)?/?$`).test(pathname)) return true;
    }
  }
  return false;
}

/**
 * True when a URL is a locale-prefixed detail page whose content has not been
 * translated for that locale — the route still builds it (serving the English
 * copy so the language switcher never 404s), but the page carries `noindex`
 * and must stay out of the sitemap.
 *
 * `services` and `solutions` fall back per entry, so `/id/services/websites/`
 * exists as English until `src/content/services/id/websites.mdx` does. `pages`
 * (the legal pages) behaves the same way. Checked against the filesystem so it
 * self-heals: drop the translated file in and the URL rejoins the sitemap on
 * the next build.
 */
function isUntranslatedLocaleDetail(pathname) {
  const collections = {
    services: 'services',
    solutions: 'solutions',
    projects: 'projects',
    blog: 'blog',
  };
  for (const locale of i18nConfig.locales) {
    if (locale === i18nConfig.defaultLocale) continue;
    // Content collections: /<locale>/<collection>/<slug>/
    const m = pathname.match(new RegExp(`^/${locale}/([^/]+)/([^/]+)/?$`));
    if (m && collections[m[1]]) {
      const dir = join(process.cwd(), 'src', 'content', collections[m[1]], locale);
      const slug = m[2];
      const exists = ['md', 'mdx'].some((ext) => {
        try {
          readFileSync(join(dir, `${slug}.${ext}`));
          return true;
        } catch {
          return false;
        }
      });
      if (!exists) return true;
    }
    // Legal pages: /<locale>/privacy/ and /<locale>/terms/
    const legal = pathname.match(new RegExp(`^/${locale}/(privacy|terms)/?$`));
    if (legal) {
      const exists = ['md', 'mdx'].some((ext) => {
        try {
          readFileSync(join(process.cwd(), 'src', 'content', 'pages', locale, `${legal[1]}.${ext}`));
          return true;
        } catch {
          return false;
        }
      });
      if (!exists) return true;
    }
  }
  return false;
}

/**
 * Map of URL path → ISO date, built from content frontmatter.
 *
 * Read with `fs` and a regex rather than through `astro:content`, because
 * this file is evaluated as plain Node before any Astro runtime exists —
 * the same constraint that keeps `site.config.ts` out of here. Only the two
 * collections that actually carry dates are scanned; everything else is
 * absent from the map and simply gets no `lastmod`.
 *
 * Computed once and cached: `serialize` runs per URL, and re-reading the
 * blog directory 160 times would be pointless work.
 */
let lastmodCache;
function contentLastmod() {
  if (lastmodCache) return lastmodCache;
  lastmodCache = new Map();

  const read = (file) => {
    try {
      return readFileSync(file, 'utf8');
    } catch {
      return '';
    }
  };
  // Frontmatter only — a date-looking string in the body must not win.
  const frontmatter = (text) => text.split(/^---\s*$/m)[1] ?? '';
  const field = (fm, name) => {
    const match = fm.match(new RegExp(`^${name}:\\s*["']?([0-9]{4}-[0-9]{2}-[0-9]{2}[^"'\\s]*)`, 'm'));
    return match ? match[1] : undefined;
  };

  const defaultLocale = i18nConfig.defaultLocale;

  for (const collection of ['blog', 'pages']) {
    const base = join(process.cwd(), 'src', 'content', collection);
    let localeDirs;
    try {
      localeDirs = readdirSync(base, { withFileTypes: true });
    } catch {
      continue; // collection has no directory yet
    }

    for (const localeDir of localeDirs) {
      if (!localeDir.isDirectory()) continue;
      const locale = localeDir.name;
      const prefix = locale === defaultLocale ? '' : `/${locale}`;

      for (const entry of readdirSync(join(base, locale))) {
        if (!/\.mdx?$/.test(entry)) continue;
        const fm = frontmatter(read(join(base, locale, entry)));
        // `updatedAt` wins when present — that is what "last modified" means.
        const date = field(fm, 'updatedAt') || field(fm, 'publishedAt');
        if (!date) continue;
        const slug = entry.replace(/\.mdx?$/, '');
        lastmodCache.set(`${prefix}/${collection}/${slug}`, new Date(date).toISOString());
      }
    }
  }

  return lastmodCache;
}

/**
 * Native Astro i18n is only wired up when the user opts in *and* has
 * more than one locale configured. With i18n off (the default) this
 * block is undefined and the build emits the exact same routes as
 * before — no /en/ prefix, no extra pages.
 */
const i18nEnabled = i18nConfig.enabled === true && i18nConfig.locales.length > 1;
const astroI18nOptions = i18nEnabled
  ? {
      defaultLocale: i18nConfig.defaultLocale,
      locales: i18nConfig.locales,
      routing: {
        prefixDefaultLocale: false,
        redirectToDefaultLocale: false,
      },
    }
  : undefined;

/**
 * 301s from the previous Nuxt site's URLs to their Astro equivalents.
 *
 * The Nuxt → Astro rebuild (Aug 2026) changed both the routing and several
 * slugs, so every URL Google had indexed for the old site started returning
 * 404 — 32 "Not found" and 41 "Page with redirect" in Search Console, and the
 * rankings that rode on those URLs went with them. There is no server on
 * GitHub Pages to issue a real 301, so `output: 'static'` renders each of
 * these as an HTML page carrying `<meta http-equiv="refresh">` plus a
 * `<link rel="canonical">` at the destination — which Google treats as a
 * permanent redirect and which passes the old page's signals forward.
 *
 * `build.format: 'directory'` (the default) writes each key to
 * `<path>/index.html`, so `/services/erp` also answers `/services/erp/`.
 *
 * Keep this list in sync with the "Not found (404)" export from Search
 * Console — anything in that report that maps to a real page today belongs
 * here.
 */
const legacyRedirects = {
  // Service slugs that were renamed
  '/services/erp': '/services/erp-solutions/',
  '/services/crm': '/services/crm-automation/',
  '/services/ai-automation': '/services/ai-workflows/',
  // Sections that were renamed
  '/portfolio': '/projects/',
  '/industries': '/solutions/',
  '/landflix': '/projects/landflix/',
  // Old blog posts folded into the rewritten set
  '/blog/odoo-erp-india-sme': '/blog/erp-for-growing-smbs/',
  '/blog/why-retail-shops-need-erp': '/blog/erp-for-growing-smbs/',
  '/blog/best-crm-for-small-businesses': '/blog/crm-sales-automation/',
  '/blog/whatsapp-business-automation-guide': '/blog/whatsapp-business-automation-india/',
  '/blog/business-website-cost-guide': '/blog/business-websites-that-generate-leads/',
  '/blog/ai-workflows-local-businesses': '/blog/ai-workflow-automation/',
  '/blog/how-small-businesses-can-automate-operations': '/blog/ai-workflow-automation/',
  '/blog/digital-transformation-real-estate': '/blog/inside-landflix/',
};

export default defineConfig({
  output: 'static',
  adapter: resolveAdapter(),
  site: process.env.SITE_URL || SITE_URL_FALLBACK,
  trailingSlash: 'ignore',
  redirects: legacyRedirects,
  ...(astroI18nOptions ? { i18n: astroI18nOptions } : {}),

  // Astro 7 changed the default to 'jsx', which strips whitespace between
  // inline elements (React-style). Pin to `true` to keep this theme's v6
  // rendering — significant whitespace between inline tags is preserved.
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  env: {
    schema: {
      SITE_URL: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_GA_MEASUREMENT_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_GTM_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      // Umami — privacy-friendly, cookieless analytics. Set the website ID to
      // enable it; the src defaults to Umami Cloud, override it when self-hosting.
      PUBLIC_UMAMI_WEBSITE_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_UMAMI_SRC: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: 'https://cloud.umami.is/script.js',
      }),
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      RESEND_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      RESEND_AUDIENCE_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      NEWSLETTER_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      GOOGLE_SITE_VERIFICATION: envField.string({ context: 'server', access: 'public', optional: true }),
      BING_SITE_VERIFICATION: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_GOOGLE_MAPS_API_KEY: envField.string({ context: 'client', access: 'public', optional: true, default: '' }),
      PUBLIC_CONSENT_ENABLED: envField.boolean({ context: 'client', access: 'public', optional: true, default: false }),
      PUBLIC_PRIVACY_POLICY_URL: envField.string({ context: 'client', access: 'public', optional: true, default: '' }),
    },
  },

  image: {
    layout: 'constrained',
  },

  integrations: [
    react(),
    mdx(),
    sitemap({
      // The theme's own demo pages are not part of this business's site. They
      // were shipping in the sitemap and indexable, which spends crawl budget
      // and adds pages with no relationship to anything the entity graph
      // describes. Both also carry `noindex`.
      filter: (page) => {
        const { pathname } = new URL(page);
        return (
          !/\/(components|preview-hero)\/?$/.test(pathname) &&
          !isEmptyListing(pathname) &&
          !isUntranslatedLocaleDetail(pathname)
        );
      },

      /**
       * hreflang annotations, emitted as `xhtml:link` alternates.
       *
       * The pages already carry `<link rel="alternate" hreflang>` in their
       * head, so this is deliberate redundancy: the sitemap states the whole
       * language graph in one small file the crawler fetches once, instead of
       * requiring it to fetch and parse all 162 pages to assemble the same
       * picture. For a site whose alternates matter commercially — Timor-Leste
       * is served in Portuguese and Tetum — the cheaper channel is worth having.
       *
       * Read from `i18n.config.ts` rather than restated here, so the sitemap
       * cannot drift from the locales the site actually builds. The default
       * locale maps to itself and lives at the root; the rest are path
       * prefixes. `tet` has no ISO 639-1 code, so the 639-3 code is correct
       * and is what the HTML tags already use.
       */
      i18n: {
        defaultLocale: i18nConfig.defaultLocale,
        locales: Object.fromEntries(i18nConfig.locales.map((locale) => [locale, locale])),
      },

      /**
       * `lastmod`, from real content dates only.
       *
       * Deliberately partial. Google treats lastmod as a scheduling signal
       * only while it stays accurate, so inventing a date is worse than
       * omitting one: a sitemap that claims every page changed at build time
       * teaches the crawler to ignore the field. Blog posts carry
       * `publishedAt`/`updatedAt` in frontmatter and get a real date; services,
       * solutions and projects have no date field, so they get none.
       *
       * Note this cannot come from git. `actions/checkout@v4` in the deploy
       * workflows runs at its default shallow depth, so `git log` for a file
       * is empty in CI and every page would land on the same commit date.
       *
       * To widen coverage later, add an optional `updatedAt` to the services
       * and solutions schemas and extend `contentLastmod()` to read it.
       */
      serialize: (item) => {
        let next = item;

        // `x-default` — the version served to a language we don't publish.
        //
        // The `i18n` option above emits one alternate per configured locale
        // but no x-default, while SEO.astro already writes one into every
        // page's head. Google asks that the HTML and sitemap channels agree
        // when a site uses both; leaving the sitemap short of a tag the HTML
        // declares is the kind of small disagreement that makes it discount
        // the annotations wholesale. Points at the default-locale URL, which
        // is what the head tag points at.
        if (next.links?.length) {
          const fallback = next.links.find((link) => link.lang === i18nConfig.defaultLocale);
          if (fallback && !next.links.some((link) => link.lang === 'x-default')) {
            next = { ...next, links: [...next.links, { lang: 'x-default', url: fallback.url }] };
          }
        }

        const lastmod = contentLastmod().get(new URL(next.url).pathname.replace(/\/$/, ''));
        return lastmod ? { ...next, lastmod } : next;
      },
    }),
    icon(),
    siteUrlCheck(),
    pagefind(),
    faviconAssets(),
    ogCards(),
    verifySiteUrl(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  security: {
    checkOrigin: true,
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

});
