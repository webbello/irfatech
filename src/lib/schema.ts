import type {
  WebSite,
  Organization,
  Person,
  LocalBusiness,
  BlogPosting,
  BreadcrumbList,
  FAQPage,
  WebPage,
  HowTo,
  Service,
  CreativeWork,
  WithContext,
} from 'schema-dts';
import siteConfig from '@/config/site.config';

/** A service/solution offering, for `hasOfferCatalog` — name plus its own page. */
export interface OfferedService {
  name: string;
  url: string;
}

/**
 * Fragment `@id`s for the site's core entities. Every schema function below
 * that describes "the business" (Organization, ProfessionalService, Person,
 * WebSite) points back at these instead of re-emitting anonymous nodes, so
 * a consumer reading multiple JSON-LD blocks on the same page — or across
 * pages — can resolve them as the same real-world entity rather than
 * unrelated fragments.
 *
 * `ORGANIZATION_ID` is intentionally reused as `ProfessionalService`'s own
 * `@id` (see `createProfessionalServiceSchema`): they describe the same
 * business under two different schema.org types, and sharing one `@id` is
 * the standard way to tell a consumer "these are the same node," rather
 * than emitting two competing entities for one company.
 */
const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const FOUNDER_ID = `${siteConfig.url}/#founder`;

/**
 * Create WebSite schema for homepage
 */
export function createWebsiteSchema(locale?: string): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@id': ORGANIZATION_ID },
    ...(locale ? { inLanguage: locale } : {}),
  };
}

/**
 * Create Person schema for the site's founder
 */
export function createPersonSchema(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: siteConfig.author,
    jobTitle: 'Founder & Automation Engineer',
    url: siteConfig.url,
    email: siteConfig.email,
    worksFor: { '@id': ORGANIZATION_ID },
    ...(siteConfig.authorImage ? { image: `${siteConfig.url}${siteConfig.authorImage}` } : {}),
    ...(siteConfig.address?.city
      ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            addressCountry: 'IN',
          },
        }
      : {}),
    sameAs: siteConfig.socialLinks,
  };
}

/**
 * Broad topics this business works in — feeds `knowsAbout` on both schemas
 * below. A flat list rather than pulled from the services/solutions content
 * collections: those are written as page copy (headlines, prose), not
 * discrete topic names, and `knowsAbout` reads best as the latter.
 */
const KNOWS_ABOUT = [
  'ERP Systems',
  'Odoo ERP',
  'CRM Software',
  'Sales Automation',
  'AI Workflow Automation',
  'WhatsApp Business Platform',
  'Custom Software Development',
  'Laravel Development',
  'Vue.js Development',
  'Business Websites',
  'Mobile App Development',
  'Offline-First Field Data Collection',
  'SMB Digitalization',
  'Business Process Automation',
];

/**
 * Create ProfessionalService schema for local SEO
 *
 * `services`, when passed, becomes `hasOfferCatalog` — pass the site's real
 * services/solutions with their own URLs (see callers for what's used).
 * Omitted, the catalog is left out entirely rather than guessed at.
 */
export function createProfessionalServiceSchema(
  services?: OfferedService[]
): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService' as 'LocalBusiness',
    '@id': ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.authorImage ? { image: `${siteConfig.url}${siteConfig.authorImage}` } : {}),
    ...(siteConfig.foundingYear ? { foundingDate: siteConfig.foundingYear } : {}),
    ...(siteConfig.address?.city
      ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            addressCountry: 'IN',
          },
        }
      : {}),
    // City/state first — what actually moves local-pack rankings — then the
    // country-level entries the business also genuinely serves.
    areaServed: [
      ...(siteConfig.address?.city ? [{ '@type': 'City' as const, name: siteConfig.address.city }] : []),
      ...(siteConfig.address?.state ? [{ '@type': 'State' as const, name: siteConfig.address.state }] : []),
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Timor-Leste' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    knowsAbout: KNOWS_ABOUT,
    ...(services?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${siteConfig.name} Services`,
            itemListElement: services.map((service) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.name,
                url: service.url,
              },
            })),
          },
        }
      : {}),
    sameAs: siteConfig.socialLinks,
  };
}

/**
 * Create Organization schema
 *
 * The logo is always the build-generated `apple-touch-icon.png` (180×180,
 * see `faviconAssets()` in astro.config.mjs), never `branding.logo.imageUrl`
 * directly — Google's Organization-logo guidance requires a raster image
 * with explicit pixel dimensions, and `branding.logo.imageUrl` is an SVG
 * (chosen deliberately elsewhere so the mark stays crisp at any size),
 * which doesn't qualify.
 */
export function createOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/apple-touch-icon.png`,
      width: '180',
      height: '180',
    },
    ...(siteConfig.foundingYear ? { foundingDate: siteConfig.foundingYear } : {}),
    knowsAbout: KNOWS_ABOUT,
    sameAs: siteConfig.socialLinks,
    contactPoint: siteConfig.phone
      ? {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'customer service',
          ...(siteConfig.languages?.length ? { availableLanguage: siteConfig.languages } : {}),
        }
      : undefined,
  };
}

/**
 * Marks which parts of a page are suitable for a voice assistant or AI
 * agent to read aloud/summarize on their own, rather than the whole page.
 * Pass real CSS selectors present on the page — Hero.astro's title slot
 * always renders an `h1`/`h2`, and `.hero-description-slot` wraps its
 * description slot, so `['h1', '.hero-description-slot']` covers any page
 * built on that component.
 */
export function createSpeakableSchema(cssSelectors: string[], url?: string): WithContext<WebPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    ...(url ? { '@id': url, url } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };
}

/**
 * Create BlogPosting schema for blog posts
 */
export function createBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  /**
   * Plain string when the cover is a real photo/screenshot (dimensions
   * unknown at this layer). Pass `{url, width, height}` when the caller
   * knows the exact raster size — e.g. the build-generated OG card, always
   * 1200×630 — so the image qualifies as a proper `ImageObject` instead of
   * a bare URL Google has to fetch and measure itself.
   */
  image: string | { url: string; width: number; height: number };
  datePublished: Date;
  dateModified?: Date;
  author: { name: string; url?: string };
  locale?: string;
}): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${post.url}#article`,
    headline: post.title,
    description: post.description,
    url: post.url,
    image:
      typeof post.image === 'string'
        ? post.image
        : {
            '@type': 'ImageObject',
            url: post.image.url,
            width: String(post.image.width),
            height: String(post.image.height),
          },
    datePublished: post.datePublished.toISOString(),
    dateModified: post.dateModified?.toISOString() || post.datePublished.toISOString(),
    ...(post.locale ? { inLanguage: post.locale } : {}),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: siteConfig.name,
      ...(siteConfig.branding.logo.imageUrl
        ? {
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}/apple-touch-icon.png`,
              width: '180',
              height: '180',
            },
          }
        : {}),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}

/**
 * Create BreadcrumbList schema
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Create FAQPage schema
 */
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Create a single `Service` schema for a service detail page — the offering's
 * name, what it is, where it lives, and who provides it. Feed it the same
 * copy the page shows so the structured data matches the visible content.
 */
export function createServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  locale?: string;
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    serviceType: service.name,
    ...(service.locale ? { inLanguage: service.locale } : {}),
    provider: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    // Gated on the field this actually reads (`address.country`), not on
    // `phone` — the two are unrelated, and the old `phone`-gated check
    // could silently emit `areaServed: undefined` whenever a phone number
    // was configured without an address.
    ...(siteConfig.address?.country
      ? { areaServed: { '@type': 'Country', name: siteConfig.address.country } }
      : {}),
  };
}

/**
 * Create a HowTo schema from a service page's numbered process steps —
 * mirrors `createFAQSchema`'s contract: emit it only for steps that are
 * actually rendered on the page.
 */
export function createHowToSchema(howTo: {
  name: string;
  description: string;
  steps: Array<{ title: string; description: string }>;
}): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

/**
 * Create a `CreativeWork` schema for a project case study page — the
 * work's name, what it is, who built it, and (when the project links to a
 * live site or a screenshot) the URL/image the page itself shows. Kept to
 * fields the `projects` collection actually has real data for, rather than
 * guessing at ones it doesn't (no fabricated dates/ratings).
 */
export function createCreativeWorkSchema(project: {
  name: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string[];
  locale?: string;
}): WithContext<CreativeWork> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    ...(project.image ? { image: project.image } : {}),
    ...(project.keywords?.length ? { keywords: project.keywords.join(', ') } : {}),
    ...(project.locale ? { inLanguage: project.locale } : {}),
    creator: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: siteConfig.name,
    },
  };
}
