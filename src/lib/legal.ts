/**
 * Helpers for the standalone legal pages (`/privacy`, `/terms`).
 *
 * These live in the `pages` content collection — one MDX file per locale under
 * `src/content/pages/<locale>/` — so the copy is editable like any other
 * content and can be translated file by file. The default locale is served at
 * the site root (`/privacy`); other locales sit under a prefix
 * (`/<locale>/privacy`) and fall back to the English copy, marked `noindex`,
 * until a translation exists.
 *
 * The old Nuxt site had `/privacy/` and `/terms/` indexed; the Astro rebuild
 * dropped both and they started 404ing. Recreating them here restores those
 * URLs.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, localizedPath, getLocales, isEnabled } from '@/i18n';

/**
 * Standalone pages that live in the `pages` collection and are served at the
 * site root — the legal pages plus the Timor-Leste market page. All share the
 * same per-locale fallback behaviour, so they go through the helpers below.
 */
export type LegalSlug = 'privacy' | 'terms' | 'timor-leste';

/** Strip the `<locale>/` folder segment and the extension from a `pages` id. */
export function getPageSlug(id: string): string {
  return id.replace(/^[^/]+\//, '').replace(/\.mdx?$/, '');
}

/**
 * The `pages` entry for a legal slug in `locale`. Falls back to the
 * default-locale entry when the locale has no translation yet; `isFallback`
 * says which happened so the route can `noindex` the fallback.
 */
export async function getLegalPage(
  slug: LegalSlug,
  locale: string = defaultLocale,
): Promise<{ entry: CollectionEntry<'pages'>; isFallback: boolean }> {
  const bySlug = (await getCollection('pages')).filter((p) => getPageSlug(p.id) === slug);
  const localized = bySlug.find((p) => p.data.locale === locale);
  if (localized) return { entry: localized, isFallback: false };

  const fallback = bySlug.find((p) => p.data.locale === defaultLocale);
  if (!fallback) throw new Error(`Legal page "${slug}" has no default-locale entry`);
  return { entry: fallback, isFallback: locale !== defaultLocale };
}

/**
 * Verified per-locale alternates for a legal slug — only the locales that
 * actually have a translated file, so the `hreflang` set never points at a
 * page that is really just the English fallback.
 */
export async function getLegalAlternates(
  slug: LegalSlug,
): Promise<{ locale: string; url: string }[]> {
  if (!isEnabled()) return [];
  const have = new Set(
    (await getCollection('pages'))
      .filter((p) => getPageSlug(p.id) === slug)
      .map((p) => p.data.locale),
  );
  return getLocales()
    .filter((loc) => have.has(loc))
    .map((loc) => ({ locale: loc, url: localizedPath(`/${slug}`, loc) }));
}

/** Non-default locales that get their own prefixed legal routes. */
export function getSecondaryLocales(): string[] {
  if (!isEnabled()) return [];
  return getLocales().filter((loc) => loc !== defaultLocale);
}
