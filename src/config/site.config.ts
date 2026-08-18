import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';
import i18nConfig, { type I18nConfig } from './i18n.config';
import { SITE_URL_FALLBACK } from './site-url';
import { SITE_NAME, THEME_COLOR } from './branding';

export { i18nConfig };
export type { I18nConfig };

export interface SiteConfig {
  name: string;
  description: string;
  /** Identity line under the logo in the centered footer */
  tagline?: string;
  /** Short facts line under the footer tagline (licensing, location, availability) */
  footerNote?: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  /**
   * Other names the business is genuinely known by. Emitted as schema.org
   * `alternateName`, which is how a knowledge graph learns that "IRFAtech",
   * "IRFATECH" and the expanded form all denote one entity — without this the
   * casing in `name` and the casing used in the site's own prose read as two
   * different strings.
   */
  alternateName?: string[];
  /** Registered legal entity name, when it differs from the trading name. */
  legalName?: string;
  /**
   * The founder, kept deliberately separate from the business above.
   *
   * `socialLinks` here must be the *person's own* profiles and nothing else.
   * The company's profiles live in `socialLinks` at the bottom of this file.
   * `sameAs` is the property search engines use to decide that two identifiers
   * denote the same real-world thing, so listing a company page under a Person
   * is a direct instruction to merge the founder and the company into one
   * entity. Leave this empty rather than borrowing the company's links.
   */
  founder?: {
    /** The founder's own page. Defaults to `/about/` — never the site root,
     *  which belongs to the organization. */
    url?: string;
    jobTitle?: string;
    /** One line separating the person from the business, for `description`. */
    description?: string;
    /** Raster photo of the founder (PNG/JPEG/WebP). SVG is skipped: schema.org
     *  image fields are consumed by pipelines that don't rasterize. */
    image?: string;
    /** The founder's *personal* profiles only. See the note above. */
    socialLinks?: string[];
  };
  /** ISO 8601 year the business was founded — feeds Organization schema's `foundingDate`. */
  foundingYear?: string;
  /** Languages the team can be reached in, for schema's `contactPoint.availableLanguage` and llms.txt. */
  languages?: string[];
  /**
   * Countries the business actually serves, for schema `areaServed`. Named
   * countries only — "Worldwide" is not a country and a `Country` node that
   * can't be resolved lowers confidence in the resolvable ones next to it.
   * Use `areaServedNote` for a broader plain-text claim instead.
   */
  countriesServed?: string[];
  /** Free-text area statement appended to `areaServed`, e.g. "Worldwide". */
  areaServedNote?: string;
  /**
   * Raster image representing the business itself (premises, team, or the
   * logo mark as a fallback) for `LocalBusiness.image`. Not the founder's
   * avatar: that's a different entity, and not an SVG.
   */
  businessImage?: string;
  /** Coordinates of the business, for `LocalBusiness.geo`. */
  geo?: {
    latitude: number;
    longitude: number;
  };
  /**
   * Opening hours, for `LocalBusiness.openingHoursSpecification`. Days use
   * schema.org day names ("Monday" … "Sunday"); times are 24h "HH:MM".
   * Leave empty when you'd rather publish nothing than publish a guess.
   */
  openingHours?: Array<{
    days: string[];
    opens: string;
    closes: string;
  }>;
  /** Price band, e.g. "₹₹" or "₹₹₹". Empty means "not published". */
  priceRange?: string;
  /** ISO 4217 codes accepted, e.g. "INR, USD". */
  currenciesAccepted?: string;
  /**
   * Where the contact form actually delivers a message. `email` sends via
   * Resend (src/pages/api/contact.ts, unchanged); `whatsapp` skips the
   * server round-trip entirely and opens a wa.me link pre-filled with the
   * visitor's message, so they send it from their own WhatsApp — no API,
   * no credentials, no message-template approval. Swap channels later by
   * changing `channel` here; see src/lib/contact-channel.ts.
   */
  contact?: {
    channel: 'email' | 'whatsapp';
    /** International format, e.g. "+91 88648 12200". Falls back to `phone` when unset. */
    whatsappNumber?: string;
  };
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  /**
   * Header options. Set `showSocialLinks: true` to render an icon link in the
   * top-right for each entry in `socialLinks` (GitHub, X, etc. — the icon is
   * inferred from the URL). Off by default; an explicit `<Header
   * showSocialLinks>` prop still overrides this per-usage.
   */
  header?: {
    showSocialLinks?: boolean;
  };
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo (relative to site root, e.g. '/avatar.jpg'). Used in Person schema. */
  authorImage?: string;
  /**
   * Set to false if your blog post images already match your theme color
   * and you don't want the brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Global, decorative visual effects (purely additive — the site works
   * fully without them).
   */
  effects?: {
    /**
     * Cursor trail on desktop (pointer dot + lagging ring + comet particles).
     * `true` by default; set to `false` to turn it off site-wide as a
     * visual-comfort / accessibility preference. The trail is already skipped
     * automatically under `prefers-reduced-motion` and on coarse/touch
     * pointers, regardless of this flag.
     */
    cursorTrail?: boolean;
  };
  /**
   * Article features — opt-in modules for blog posts.
   * Each is OFF by default so the theme stays as light as it is today
   * for users who don't enable them.
   */
  articleFeatures?: {
    /** Table of contents shown on blog posts (auto-generated from headings) */
    toc?: {
      /** Master switch — set to true to enable site-wide */
      enabled: boolean;
      /**
       * Where to render the TOC.
       * - 'inline'  → card at the top of every post (default; preserves
       *               full reading width on desktop)
       * - 'sidebar' → sticky sidebar on `xl+` viewports (≥1280px),
       *               hidden on smaller screens
       * - 'auto'    → sidebar on `xl+`, inline card below `xl` so phone
       *               and tablet readers still get the navigation
       */
      layout?: 'inline' | 'sidebar' | 'auto';
      /**
       * Which side the sidebar TOC sits on (only applies when `layout` is
       * 'sidebar' or 'auto'). Defaults to 'right'.
       */
      sidebarPosition?: 'left' | 'right';
      /** Minimum headings before the TOC renders (avoid TOCs on short posts) */
      minHeadings?: number;
      /** Deepest heading level to include (2 = H2 only, 3 = H2+H3, etc.) */
      maxDepth?: 2 | 3 | 4;
    };
    /** Comments at the bottom of blog posts (powered by Giscus, Cusdis, or Artalk) */
    comments?: {
      /** Master switch — set to true to enable site-wide */
      enabled: boolean;
      /** Comments provider — 'giscus' (GitHub Discussions) or 'cusdis'. */
      provider?: 'giscus' | 'cusdis' | 'artalk';
      /** Giscus configuration. Get values from https://giscus.app */
      giscus?: {
        repo: `${string}/${string}`;
        repoId: string;
        category: string;
        categoryId: string;
        mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
        strict?: boolean;
        reactionsEnabled?: boolean;
        emitMetadata?: boolean;
        inputPosition?: 'top' | 'bottom';
        /**
         * Giscus theme. Leave empty (the default) to follow the site's own
         * light/dark mode — resolved on the client and kept in sync as the
         * visitor toggles. Set a specific Giscus theme name (e.g.
         * 'dark_dimmed', 'preferred_color_scheme') to override.
         */
        theme?: string;
        /**
         * Giscus language. Leave empty (the default) to follow the site's
         * current locale. Set a specific Giscus lang code (e.g. 'en', 'nl')
         * to override.
         */
        lang?: string;
      };
      /** Cusdis configuration. Get your App ID from your Cusdis dashboard. */
      cusdis?: {
        /** Cusdis App ID (from the Cusdis dashboard's "Embed Code"). */
        appId: string;
        /**
         * Cusdis instance host. Defaults to the hosted service
         * 'https://cusdis.com'; set this to your own URL when self-hosting.
         */
        host?: string;
        /**
         * Theme. Leave empty (the default) to follow the site's own light/dark
         * mode — resolved on the client and re-rendered when the visitor
         * toggles (Cusdis has no live theme API, so the thread briefly reloads
         * on toggle). Use 'auto' to follow the OS preference instead, or
         * 'light' / 'dark' for a fixed theme.
         */
        theme?: '' | 'light' | 'dark' | 'auto';
        /**
         * Language. Leave empty (the default) to follow the site's current
         * locale. Set a Cusdis language code to override. Availability depends
         * on Cusdis's language packs; an unknown code falls back to English.
         */
        lang?: string;
      };
      /** Artalk configuration. Requires your own Artalk server. */
      artalk?: {
        /**
         * Artalk server address, for example:
         * 'https://comments.example.com'
         */
        server: string;
        /**
         * Site name used by Artalk for multi-site isolation. This should match
         * the site created in the Artalk dashboard/server config.
         */
        site: string;
        /**
         * Optional client JS URL. Defaults to `${server}/dist/Artalk.js`.
         * Useful when serving the client from a CDN or custom asset path.
         */
        jsUrl?: string;
        /**
         * Optional client CSS URL. Defaults to `${server}/dist/Artalk.css`.
         * Useful when serving the client from a CDN or custom asset path.
         */
        cssUrl?: string;
        /**
         * Dark mode. Leave empty (the default) to follow the site's own
         * light/dark mode and keep it in sync live. Set 'auto' to follow the
         * OS preference instead, or use true / false for a fixed mode.
         */
        darkMode?: boolean | 'auto';
        /**
         * Language. Leave empty (the default) to follow the site's current
         * locale. Set a specific Artalk locale code such as 'zh-CN' or 'en'
         * to override.
         */
        locale?: string;
      };
    };
  };
  /**
   * Newsletter signup, shown in the "follow along" section of the blog index
   * and the foot of every post.
   *
   * Off by default, and deliberately so: the form posts to `/api/newsletter`,
   * which needs `RESEND_API_KEY` and `RESEND_AUDIENCE_ID`. Without those the
   * endpoint answers "Newsletter service is not configured", so a site that
   * showed the form before its owner had a mailing list would be collecting
   * failures. Set your keys, then turn this on.
   */
  newsletter?: {
    /** Master switch — set to true to show the signup site-wide */
    enabled: boolean;
  };
  /**
   * Blog listing configuration. Counts that were previously hard-coded across
   * `lib/blog.ts` and the route files live here so they're tunable in one
   * place. (The existing `blogImageOverlay` / `articleFeatures` keys are left
   * where they are for backwards compatibility and may fold in at a major.)
   */
  blog?: {
    /** Regular (non-featured) posts shown per blog index page. Default 12. */
    postsPerPage?: number;
    /** How many of the most-used tags to surface in the blog tag cloud. Default 10. */
    tagCloudLimit?: number;
  };
  /** Projects listing configuration. */
  projects?: {
    /** Projects shown per page on the projects listing. Default 12. */
    perPage?: number;
    /** How many of the most-used tags to surface in the projects tag cloud. Default 10. */
    tagCloudLimit?: number;
  };
  /**
   * Internationalization (i18n) — see `src/config/i18n.config.ts`.
   * Lives in a separate file so the i18n module can be imported by
   * unit tests without pulling in `astro:env/server`.
   */
  i18n?: I18nConfig;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /**
       * Optional path to a custom logo image in public/ (e.g. '/logo.svg').
       * When set, it replaces the generated letter-monogram badge in the
       * header, footer, and anywhere <Logo> is rendered — no layout edits
       * needed. Leave unset to keep the monogram. Per-author byline avatars
       * (which pass an explicit letter) are unaffected.
       */
      image?: string;
      /** Path to logo image for structured data (e.g. '/logo.png'). Add a PNG to public/ and set this. */
      imageUrl?: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  // Read from ./branding so the build-time favicon generator, which cannot
  // import this file, uses the same values. Change them there.
  name: SITE_NAME,
  description:
    'IRFAtech (Integrated Resources For Automation & Technology) is a digital transformation partner for small businesses, enterprises, governments, and NGOs — ERP, AI automation, custom software, and offline-first field data collection, across India, Timor-Leste, and beyond.',
  tagline: 'Digital Infrastructure for Growing Businesses',
  footerNote: 'Digital transformation partner · Serving India & Timor-Leste',
  url: SITE_URL || SITE_URL_FALLBACK,
  // Generated at build time from `name`, `tagline` and the brand colour below.
  // Point this at a file in `public/` to use your own — it has to be a raster
  // (PNG or JPEG): social platforms don't render SVG share images.
  ogImage: '/og/default.png',
  author: 'Mohammed Irfan',
  email: 'irfatech.in@gmail.com',
  phone: '+91 88648 12200',
  foundingYear: '2009',
  languages: ['English', 'Hindi', 'Urdu'],
  // `name` above is the wordmark's casing. These are the other spellings the
  // business is referred to in its own copy and by other people; without them
  // the two are unrelated strings to a machine.
  alternateName: ['IRFAtech', 'Integrated Resources For Automation & Technology'],
  founder: {
    // The founder's own page, not the site root. The root is the
    // organization's URL; three entities sharing one URL is what makes a
    // resolver merge them.
    url: '/about/',
    jobTitle: 'Founder & Automation Engineer',
    description:
      'Founder of IRFAtech, working on ERP, workflow automation and custom software for growing businesses in India and Timor-Leste.',
    // No raster photo published yet. `/avatar.svg` deliberately not used here:
    // schema.org image fields are read by pipelines that do not rasterize SVG,
    // and it is the site's generic mark rather than a photo of a person.
    image: '',
    // Empty on purpose. The LinkedIn/Facebook/Instagram accounts in
    // `socialLinks` below belong to the *company*, and listing them here would
    // tell every search engine that Mohammed Irfan and IRFAtech are the same
    // entity. Add personal profiles (personal LinkedIn, GitHub, X) here when
    // there are ones worth publishing — and nothing else.
    socialLinks: [],
  },
  countriesServed: ['India', 'Timor-Leste'],
  areaServedNote: 'Worldwide',
  // Raster, and about the business rather than a person. Points at the
  // build-generated brand mark until a real photo of the team or workspace
  // exists to put here.
  businessImage: '/apple-touch-icon.png',
  // Unset until real values are published — every one of these is a claim a
  // customer can turn up and test, so a guess is worse than a gap:
  //   geo:              coordinates of the business
  //   openingHours:     e.g. [{ days: ['Monday', … ], opens: '10:00', closes: '19:00' }]
  //   priceRange:       e.g. '₹₹'
  //   currenciesAccepted: e.g. 'INR, USD'
  // Filling any of them in is enough on its own; the schema picks up whatever
  // is present and omits the rest.
  openingHours: [],
  priceRange: '',
  contact: {
    channel: 'whatsapp',
  },
  address: {
    street: '',
    city: 'Kolkata',
    state: 'West Bengal',
    zip: '',
    country: 'India',
  },
  // The *company's* profiles. Kept apart from `founder.socialLinks` above so
  // schema.org never states that the person and the business are one entity.
  socialLinks: [
    'https://linkedin.com/company/irfatech',
    'https://facebook.com/irfatech',
    'https://instagram.com/irfatech_in',
  ],
  header: {
    // Flip to `true` to show the social icons (incl. GitHub) in the header.
    showSocialLinks: false,
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  effects: {
    // Off for IRFAtech: a comet-trail cursor reads as creative-portfolio
    // flourish, not the "Trust & Authority" / enterprise-software register
    // that fits a B2B automation vendor selling to SMBs, governments, and
    // NGOs. The component stays in the theme for sites where it does fit.
    cursorTrail: false,
  },
  articleFeatures: {
    toc: {
      enabled: true,
      layout: 'auto',
      sidebarPosition: 'right',
      minHeadings: 3,
      maxDepth: 3,
    },
    comments: {
      enabled: false,
      provider: 'giscus',
      giscus: {
        repo: 'owner/repo',
        repoId: '',
        category: 'General',
        categoryId: '',
        mapping: 'pathname',
        strict: false,
        reactionsEnabled: true,
        emitMetadata: false,
        inputPosition: 'bottom',
        // Empty → follow the site's light/dark mode and current locale.
        theme: '',
        lang: '',
      },
      // Used when provider is 'cusdis'. Get your App ID from the Cusdis
      // dashboard (Embed Code); `host` defaults to the hosted service.
      cusdis: {
        appId: '',
        host: 'https://cusdis.com',
        // Empty → follow the site's light/dark mode and current locale.
        theme: '',
        lang: '',
      },
      // Used when provider is 'artalk'. Point `server` at your own Artalk
      // service — use an https:// address in production (a plain http:// URL
      // is blocked as mixed content on an https site and is open to
      // tampering). Comments render only once both `server` and `site` are set.
      artalk: {
        server: '',
        // The Artalk "site" name you configured in the Artalk dashboard
        // (used for multi-site isolation).
        site: '',
        // Optional: override the client asset URLs when needed.
        // jsUrl: 'https://cdn.example.com/artalk/Artalk.js',
        // cssUrl: 'https://cdn.example.com/artalk/Artalk.css',
        // Leave undefined → follow the site's light/dark mode and locale.
        // darkMode: 'auto',
        // locale: 'en',
      },
    },
  },
  newsletter: {
    // On by default: the form knows whether it has keys and says so itself,
    // in dev only. Set RESEND_API_KEY and RESEND_AUDIENCE_ID to make it work.
    enabled: true,
  },
  blog: {
    postsPerPage: 12,
    tagCloudLimit: 10,
  },
  projects: {
    perPage: 12,
    tagCloudLimit: 10,
  },
  i18n: i18nConfig,
  branding: {
    logo: {
      alt: 'IRFAtech',
      // image: '/logo.svg', // Optional: set to a file in public/ to use a custom logo image instead of the letter monogram.
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: THEME_COLOR,
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
