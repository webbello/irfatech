/**
 * schema.org structured data, built as ONE connected graph per page.
 *
 * Every builder here returns a bare node — no `@context` — and `buildGraph()`
 * wraps a page's nodes into a single `{"@context", "@graph": [...]}` document
 * that `JsonLd.astro` emits as one `<script>`.
 *
 * That shape is the point, not a detail. Structured data is only useful to a
 * machine as a *graph*: WebSite contains WebPage, WebPage is about a Service,
 * the Service is provided by the Organization, the Organization was founded by
 * the Person. Those edges are expressed as `@id` references, and an `@id` is
 * only reliably resolvable inside the same JSON-LD document. Emitting each
 * type as its own `<script>` — which this file used to do — leaves a consumer
 * with a pile of valid-but-unrelated assertions and references that point at
 * nodes defined nowhere on the page.
 *
 * Two rules follow from that, and both are load-bearing:
 *
 *  1. The identity nodes (Organization, Person, WebSite) go on *every* page,
 *     so no reference to them ever dangles.
 *  2. Every page gets a WebPage node. It is the hub the rest hangs from — the
 *     node that says "this document exists, it belongs to this site, this is
 *     its breadcrumb trail, this is what it's about."
 */
import siteConfig from '@/config/site.config';

/**
 * A schema.org node. Deliberately loose: this file assembles multi-typed nodes
 * (`["Organization", "ProfessionalService"]`) and `@id`-only references, and
 * `schema-dts` models neither comfortably. Correctness is enforced by the
 * builders below rather than by the type.
 */
export type SchemaNode = Record<string, unknown> & {
  '@type'?: string | string[];
  '@id'?: string;
};

export interface SchemaGraph {
  '@context': 'https://schema.org';
  '@graph': SchemaNode[];
}

/* -------------------------------------------------------------------------- */
/* Identity                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Fragment `@id`s for the three entities that exist site-wide.
 *
 * These are identifiers, not fetchable addresses — they never move, and every
 * other node points at them rather than restating the entity inline.
 */
export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;
export const FOUNDER_ID = `${siteConfig.url}/#founder`;
export const LOGO_ID = `${siteConfig.url}/#logo`;

/** A bare `{'@id': …}` reference to another node in the same graph. */
export const ref = (id: string): SchemaNode => ({ '@id': id });

/* -------------------------------------------------------------------------- */
/* URLs                                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Absolute, canonical-form URL for an internal path.
 *
 * The trailing slash matters more than it looks. The site is served as
 * directory-style static HTML, so `/services/erp-solutions` 301s to
 * `/services/erp-solutions/`, and the canonical tag and sitemap both use the
 * slashed form. A JSON-LD node keyed to the unslashed URL is therefore keyed
 * to a redirect, and is not guaranteed to be identified with the page it
 * describes — which quietly broke every breadcrumb trail and every entry in
 * the offer catalog. `localizedPath()` and friends return unslashed paths, so
 * everything they produce goes through here before it reaches a graph.
 */
export function absoluteUrl(pathOrUrl: string): string {
  const url = new URL(pathOrUrl, `${siteConfig.url}/`);
  // Leave real files (`/og/card.png`, `/rss.xml`) alone; only directory-style
  // page paths get the slash.
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]{2,5}$/i.test(url.pathname)) {
    url.pathname += '/';
  }
  return url.toString();
}

/** `@id` of the WebPage node for a page URL. */
export const webPageId = (url: string): string => `${absoluteUrl(url)}#webpage`;
/** `@id` of the primary image node for a page URL. */
export const primaryImageId = (url: string): string => `${absoluteUrl(url)}#primaryimage`;
/** `@id` of the BreadcrumbList node for a page URL. */
export const breadcrumbId = (url: string): string => `${absoluteUrl(url)}#breadcrumb`;
/** `@id` of the Service node a service/solution page describes. */
export const serviceId = (url: string): string => `${absoluteUrl(url)}#service`;

/** Raster formats a structured-data consumer will actually render. */
function isRasterImage(url: string): boolean {
  return /\.(png|jpe?g|webp|gif)(\?|$)/i.test(url);
}

/**
 * An ImageObject, or `undefined` when the image can't serve as one.
 *
 * SVG is rejected on purpose: schema.org image fields feed pipelines that
 * don't rasterize, so an SVG there is a field that looks populated and isn't.
 */
function imageNode(
  url: string | undefined,
  opts: { id?: string; width?: number; height?: number; caption?: string } = {}
): SchemaNode | undefined {
  if (!url) return undefined;
  const absolute = url.startsWith('http') ? url : absoluteUrl(url);
  if (!isRasterImage(absolute)) return undefined;
  return {
    '@type': 'ImageObject',
    ...(opts.id ? { '@id': opts.id } : {}),
    url: absolute,
    contentUrl: absolute,
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
    ...(opts.caption ? { caption: opts.caption } : {}),
  };
}

/** Drop keys whose value is undefined/null/empty so no empty field ships. */
function compact(node: SchemaNode): SchemaNode {
  const out: SchemaNode = {};
  for (const [key, value] of Object.entries(node)) {
    if (value === undefined || value === null || value === '') continue;
    if (Array.isArray(value) && value.length === 0) continue;
    out[key] = value;
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/* Site-wide entities                                                          */
/* -------------------------------------------------------------------------- */

/** A service/solution offering, for the offer catalog — name plus its own page. */
export interface OfferedService {
  name: string;
  /** Root-relative path; normalized to canonical form here. */
  url: string;
  /** Sector/category, used to tell same-named offerings apart. */
  category?: string;
}

/**
 * Broad topics this business works in — feeds `knowsAbout` on the
 * organization and the founder. A flat list rather than one derived from the
 * services/solutions collections: those are page copy (headlines, prose), not
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

function postalAddressNode(): SchemaNode | undefined {
  const address = siteConfig.address;
  if (!address?.city) return undefined;
  return compact({
    '@type': 'PostalAddress',
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.zip,
    addressCountry: 'IN',
  });
}

/**
 * Everywhere the business is served, as resolvable places plus (optionally) a
 * plain-text reach statement.
 *
 * The text entry is not decoration — `areaServed` accepts Text as well as
 * Place, and that is the honest way to say "worldwide". The previous version
 * said it as `{"@type": "Country", "name": "Worldwide"}`, which is not a
 * country: unresolvable, and it drags down confidence in the real countries
 * sitting beside it.
 */
function areaServedNodes(): Array<SchemaNode | string> {
  const address = siteConfig.address;
  return [
    ...(address?.city ? [{ '@type': 'City', name: address.city }] : []),
    ...(address?.state ? [{ '@type': 'State', name: address.state }] : []),
    ...(siteConfig.countriesServed ?? []).map((name) => ({ '@type': 'Country', name })),
    ...(siteConfig.areaServedNote ? [siteConfig.areaServedNote] : []),
  ];
}

function contactPointNodes(): SchemaNode[] {
  const points: SchemaNode[] = [];
  if (siteConfig.phone) {
    points.push(
      compact({
        '@type': 'ContactPoint',
        '@id': `${siteConfig.url}/#contact-phone`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: 'customer service',
        availableLanguage: siteConfig.languages,
        areaServed: siteConfig.countriesServed,
      })
    );
  }
  // WhatsApp is this business's primary intake channel (see
  // `contact.channel`), and nothing in the markup said so.
  const whatsappNumber = siteConfig.contact?.whatsappNumber ?? siteConfig.phone;
  if (siteConfig.contact?.channel === 'whatsapp' && whatsappNumber) {
    points.push(
      compact({
        '@type': 'ContactPoint',
        '@id': `${siteConfig.url}/#contact-whatsapp`,
        contactType: 'sales',
        url: `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`,
        telephone: whatsappNumber,
        availableLanguage: siteConfig.languages,
      })
    );
  }
  return points;
}

function openingHoursNodes(): SchemaNode[] {
  return (siteConfig.openingHours ?? []).map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  }));
}

/**
 * The business — one node, two types.
 *
 * This used to be two separate top-level blocks, an `Organization` and a
 * `ProfessionalService`, sharing the `@id` `#organization` in the hope a
 * consumer would merge them. In RDF it would; in the pipelines that actually
 * read this it doesn't reliably, and the two carried *disjoint* properties —
 * logo and contactPoint on one, address, areaServed and the service catalog on
 * the other. Whichever block a given parser picked up, it saw half a company.
 *
 * `"@type": ["Organization", "ProfessionalService"]` states the same thing the
 * shared `@id` was trying to, in the one form every consumer understands: this
 * is a single business that is both.
 *
 * `services`/`solutions`, when passed, become `hasOfferCatalog`. They're kept
 * as two named catalogs rather than one flat list because several offerings
 * share a name across the two collections ("Business Websites" exists as both
 * a service and a sector solution) — merged, those become indistinguishable
 * duplicate entities; split and categorized, they stay tellable apart.
 */
export function createOrganizationNode(
  catalogs: { services?: OfferedService[]; solutions?: OfferedService[] } = {}
): SchemaNode {
  const offerCatalogs = [
    buildOfferCatalog(`${siteConfig.name} Services`, 'services', catalogs.services),
    buildOfferCatalog(`${siteConfig.name} Solutions`, 'solutions', catalogs.solutions),
  ].filter(Boolean) as SchemaNode[];

  return compact({
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: absoluteUrl('/'),
    // A reference, not a definition. `createLogoNode()` puts the ImageObject
    // at the top level of the graph, where a consumer that flattens the
    // document finds it without having to descend into this node first.
    logo: ref(LOGO_ID),
    // A business image, not the founder's avatar — a different entity — and
    // raster, because `imageNode` drops anything a consumer can't rasterize.
    // Until a real photo exists, `businessImage` points at the brand mark, so
    // this references the logo node instead of restating the same file as a
    // second, anonymous ImageObject.
    image: businessImageNode(),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundingYear,
    founder: ref(FOUNDER_ID),
    address: postalAddressNode(),
    areaServed: areaServedNodes(),
    knowsAbout: KNOWS_ABOUT,
    contactPoint: contactPointNodes(),
    openingHoursSpecification: openingHoursNodes(),
    priceRange: siteConfig.priceRange,
    currenciesAccepted: siteConfig.currenciesAccepted,
    geo: siteConfig.geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        }
      : undefined,
    hasOfferCatalog: offerCatalogs.length === 1 ? offerCatalogs[0] : offerCatalogs,
    // The company's own profiles. The founder's node deliberately does not
    // repeat these — see `createFounderNode`.
    sameAs: siteConfig.socialLinks,
  });
}

/**
 * The brand mark, as its own top-level graph node.
 *
 * Google's Organization-logo guidance wants a raster with known pixel
 * dimensions, which is why this is the build-generated `apple-touch-icon.png`
 * and never `branding.logo.imageUrl` — that one is an SVG, chosen deliberately
 * elsewhere so the mark stays crisp at any size, and it doesn't qualify.
 */
export function createLogoNode(): SchemaNode {
  return imageNode('/apple-touch-icon.png', { id: LOGO_ID, width: 180, height: 180 })!;
}

/** The business's own image — or a reference to the logo node it duplicates. */
function businessImageNode(): SchemaNode | undefined {
  const image = imageNode(siteConfig.businessImage);
  if (!image) return ref(LOGO_ID);
  return image.url === absoluteUrl('/apple-touch-icon.png') ? ref(LOGO_ID) : image;
}

function buildOfferCatalog(
  name: string,
  slug: string,
  offerings: OfferedService[] | undefined
): SchemaNode | undefined {
  if (!offerings?.length) return undefined;
  return {
    '@type': 'OfferCatalog',
    '@id': `${siteConfig.url}/#catalog-${slug}`,
    name,
    numberOfItems: offerings.length,
    itemListElement: offerings.map((offering, index) => ({
      '@type': 'Offer',
      position: index + 1,
      // Points at the same `@id` the offering's own page publishes, so the
      // catalog entry and the detail page are one entity rather than two.
      itemOffered: compact({
        '@type': 'Service',
        '@id': serviceId(offering.url),
        name: offering.name,
        url: absoluteUrl(offering.url),
        category: offering.category,
      }),
    })),
  };
}

/**
 * The founder — a person, explicitly not the company.
 *
 * Three things here exist to keep the two entities apart, because the previous
 * version merged them by accident:
 *
 *  - `sameAs` comes from `founder.socialLinks`, never the company's. `sameAs`
 *    is the identity-resolution property: listing the company's LinkedIn page
 *    under a Person tells a knowledge graph the person *is* the company.
 *  - `url` is the founder's own page, not the site root. The root is the
 *    organization's URL, and two entities claiming one URL is the other half
 *    of the same mistake.
 *  - the relationship is stated explicitly in both directions — `worksFor`
 *    here, `founder` on the organization — so a consumer has a modeled link
 *    between two distinct entities instead of having to guess at a merge.
 */
export function createFounderNode(): SchemaNode {
  const founder = siteConfig.founder;
  return compact({
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: siteConfig.author,
    jobTitle: founder?.jobTitle,
    description: founder?.description,
    url: absoluteUrl(founder?.url ?? '/about/'),
    email: siteConfig.email,
    image: imageNode(founder?.image),
    worksFor: ref(ORGANIZATION_ID),
    knowsAbout: KNOWS_ABOUT,
    // Where he works — not `address`, which on a Person reads as a home
    // address the site never meant to publish.
    workLocation: siteConfig.address?.city
      ? { '@type': 'Place', address: postalAddressNode() }
      : undefined,
    // Personal profiles only, and omitted entirely when there are none.
    sameAs: founder?.socialLinks,
  });
}

/**
 * The site itself.
 *
 * `description` is passed in per locale rather than read from config: the
 * config description is English, and a `/pt/` page declaring `inLanguage: pt`
 * beside an English description contradicts itself in the same node.
 */
export function createWebSiteNode(opts: { locale?: string; description?: string } = {}): SchemaNode {
  return compact({
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: absoluteUrl('/'),
    description: opts.description || siteConfig.description,
    publisher: ref(ORGANIZATION_ID),
    inLanguage: opts.locale,
  });
}

/* -------------------------------------------------------------------------- */
/* Page-level nodes                                                            */
/* -------------------------------------------------------------------------- */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export type PageType =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'ItemPage'
  | 'ProfilePage';

export interface WebPageOptions {
  /** The page's own URL. Normalized to canonical (trailing-slash) form. */
  url: string;
  name: string;
  description?: string;
  locale?: string;
  /** Page flavour — AboutPage, ContactPage, CollectionPage, … */
  type?: PageType;
  /** The page's lead image (usually the OG image). */
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  datePublished?: Date;
  dateModified?: Date;
  /** `@id` of the entity the page is *about* (a Service, a project, …). */
  aboutId?: string;
  /** `@id` of the page's main entity (an ItemList on a collection page). */
  mainEntityId?: string;
  /** Q&As rendered on this page. Adds the FAQPage type and `mainEntity`. */
  faqs?: FaqItem[];
  /** True when this page publishes a BreadcrumbList node. */
  hasBreadcrumb?: boolean;
  /** CSS selectors a voice assistant may read aloud. */
  speakableSelectors?: string[];
}

/**
 * The page node — the hub every other node on the page hangs from.
 *
 * Before this existed, a service page shipped a Service, an FAQPage, a HowTo
 * and a BreadcrumbList: four assertions with no host document, no modification
 * date, no declared relationship to each other, and a breadcrumb trail whose
 * destination was a node nobody had defined. This is what makes the rest a
 * graph instead of a pile.
 *
 * When the page carries Q&As it takes the `FAQPage` type alongside its own —
 * an FAQ section is genuinely part of the page — and the questions go in
 * `mainEntity` while `about` keeps pointing at the offering the page sells.
 * Only Q&As *rendered on the page* may be passed: structured data that isn't
 * in the visible content is a guidelines violation, not a shortcut.
 */
export function createWebPageNode(opts: WebPageOptions): SchemaNode {
  const url = absoluteUrl(opts.url);
  const types: string[] = [opts.type && opts.type !== 'WebPage' ? opts.type : 'WebPage'];
  if (opts.faqs?.length) types.push('FAQPage');

  const image = imageNode(opts.image, {
    id: primaryImageId(url),
    width: opts.imageWidth,
    height: opts.imageHeight,
    caption: opts.imageAlt,
  });

  return compact({
    '@type': types.length === 1 ? types[0] : types,
    '@id': webPageId(url),
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: ref(WEBSITE_ID),
    about: opts.aboutId ? ref(opts.aboutId) : undefined,
    mainEntity: opts.faqs?.length
      ? opts.faqs.map(questionNode)
      : opts.mainEntityId
        ? ref(opts.mainEntityId)
        : undefined,
    primaryImageOfPage: image,
    // The same node, referenced rather than restated — one `@id`, one
    // definition.
    image: image ? ref(primaryImageId(url)) : undefined,
    breadcrumb: opts.hasBreadcrumb ? ref(breadcrumbId(url)) : undefined,
    inLanguage: opts.locale,
    datePublished: opts.datePublished?.toISOString(),
    dateModified: (opts.dateModified ?? opts.datePublished)?.toISOString(),
    publisher: ref(ORGANIZATION_ID),
    speakable: opts.speakableSelectors?.length
      ? { '@type': 'SpeakableSpecification', cssSelector: opts.speakableSelectors }
      : undefined,
  });
}

function questionNode(faq: FaqItem): SchemaNode {
  return {
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  };
}

/**
 * BreadcrumbList for a page.
 *
 * Every `item` goes through `absoluteUrl`, which is the fix for a chain that
 * used to point at redirecting URLs: `/services` 301s to `/services/`, so the
 * middle of each trail resolved to something other than the page it named.
 */
export function createBreadcrumbNode(items: BreadcrumbItem[], pageUrl: string): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId(pageUrl),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/**
 * An enumerable list of things on an index page.
 *
 * Index pages previously shipped nothing but the site-wide WebSite node, so
 * the site's own inventory — services, solutions, posts, projects — existed as
 * a machine-readable set precisely nowhere, and had to be scraped out of the
 * DOM and guessed at. `ItemList` is the type whose entire job is "these N
 * things, in this order, at these URLs".
 */
export function createItemListNode(opts: {
  url: string;
  name: string;
  description?: string;
  items: Array<{ name: string; url: string; description?: string }>;
}): SchemaNode {
  const url = absoluteUrl(opts.url);
  return compact({
    '@type': 'ItemList',
    '@id': `${url}#list`,
    name: opts.name,
    description: opts.description,
    numberOfItems: opts.items.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: opts.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  });
}

/** The blog as a work in its own right, published on the blog index. */
export function createBlogNode(opts: {
  url: string;
  name: string;
  description?: string;
  locale?: string;
}): SchemaNode {
  const url = absoluteUrl(opts.url);
  return compact({
    '@type': 'Blog',
    '@id': `${url}#blog`,
    name: opts.name,
    description: opts.description,
    url,
    publisher: ref(ORGANIZATION_ID),
    inLanguage: opts.locale,
    mainEntityOfPage: ref(webPageId(url)),
  });
}

/* -------------------------------------------------------------------------- */
/* Offerings                                                                   */
/* -------------------------------------------------------------------------- */

export interface ServiceOptions {
  name: string;
  description: string;
  /** The offering's own page. */
  url: string;
  /** Sector/category badge, e.g. "Government", "Small Business". */
  category?: string;
  /** Sectors this offering is aimed at, for `audience`. */
  audiences?: string[];
  /**
   * Same-named offerings elsewhere on the site. Emitted as `isRelatedTo`, so
   * the services page and the sector-solution page that share a name resolve
   * as two related offerings rather than two indistinguishable entities.
   */
  relatedOfferings?: Array<{ name: string; url: string }>;
}

/**
 * A single offering, for a service or solution detail page.
 *
 * Note what is *not* here: `inLanguage`. `Service` is an Intangible, not a
 * CreativeWork, and has no `inLanguage` property — the previous version set it
 * anyway, which is a property outside its domain and simply gets discarded.
 * The page's language belongs on the WebPage node, where it's modeled, and
 * `availableLanguage` carries the one fact that's actually about the service:
 * which languages you can be served in.
 */
export function createServiceNode(opts: ServiceOptions): SchemaNode {
  const url = absoluteUrl(opts.url);
  return compact({
    '@type': 'Service',
    '@id': serviceId(url),
    name: opts.name,
    description: opts.description,
    url,
    serviceType: opts.name,
    // Only when it adds something: most service pages' badge is their own
    // title, and `category: "ERP Solutions"` on a service named "ERP
    // Solutions" is a field carrying no information.
    category: opts.category && opts.category !== opts.name ? opts.category : undefined,
    provider: ref(ORGANIZATION_ID),
    areaServed: areaServedNodes(),
    availableLanguage: siteConfig.languages,
    audience: opts.audiences?.length
      ? {
          '@type': 'BusinessAudience',
          audienceType: opts.audiences.join(', '),
        }
      : undefined,
    isRelatedTo: opts.relatedOfferings?.length
      ? opts.relatedOfferings.map((related) => ({
          '@type': 'Service',
          '@id': serviceId(related.url),
          name: related.name,
          url: absoluteUrl(related.url),
        }))
      : undefined,
    mainEntityOfPage: ref(webPageId(url)),
  });
}

/**
 * The delivery process shown on a service page, as an ordered list.
 *
 * This replaces the `HowTo` that used to be emitted here, which was wrong on
 * two counts. `HowTo` means "instructions the reader can carry out", and these
 * steps ("Business discovery", "ERP blueprint", "Training & go-live") are the
 * vendor's own delivery phases — describing them as reader instructions states
 * something untrue to every consumer that parses it. And Google retired HowTo
 * rich results in 2023, so the misstatement bought nothing either.
 */
export function createProcessListNode(opts: {
  url: string;
  name: string;
  steps: Array<{ title: string; description: string }>;
}): SchemaNode {
  const url = absoluteUrl(opts.url);
  return {
    '@type': 'ItemList',
    '@id': `${url}#process`,
    name: opts.name,
    numberOfItems: opts.steps.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: opts.steps.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: step.title,
      description: step.description,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Articles and projects                                                       */
/* -------------------------------------------------------------------------- */

export interface BlogPostOptions {
  title: string;
  description: string;
  url: string;
  /**
   * Plain string when the cover is a real photo/screenshot (dimensions
   * unknown at this layer). Pass `{url, width, height}` when the caller knows
   * the exact raster size — e.g. the build-generated OG card, always
   * 1200×630 — so the image is a proper `ImageObject` rather than a bare URL
   * a consumer has to fetch and measure itself.
   */
  image: string | { url: string; width: number; height: number };
  datePublished: Date;
  dateModified?: Date;
  author: { name: string; url?: string };
  locale?: string;
  tags?: string[];
  /** Word count of the post body, for `wordCount`. */
  wordCount?: number;
  /** Reading time in minutes, for `timeRequired`. */
  readingMinutes?: number;
}

export function createBlogPostNode(post: BlogPostOptions): SchemaNode {
  const url = absoluteUrl(post.url);
  const image =
    typeof post.image === 'string'
      ? imageNode(post.image)
      : imageNode(post.image.url, { width: post.image.width, height: post.image.height });

  // The site's own founder writes under his own name, so the post resolves to
  // the Person the graph already defines instead of minting a fresh, anonymous
  // author node per post — which is how thirteen posts ended up building
  // author authority for thirteen unrelated entities.
  const isFounder = post.author.name === siteConfig.author;

  return compact({
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    image,
    datePublished: post.datePublished.toISOString(),
    dateModified: (post.dateModified ?? post.datePublished).toISOString(),
    inLanguage: post.locale,
    keywords: post.tags,
    articleSection: post.tags?.[0],
    wordCount: post.wordCount,
    timeRequired: post.readingMinutes ? `PT${post.readingMinutes}M` : undefined,
    author: isFounder
      ? ref(FOUNDER_ID)
      : compact({ '@type': 'Person', name: post.author.name, url: post.author.url }),
    publisher: ref(ORGANIZATION_ID),
    isPartOf: ref(webPageId(url)),
    mainEntityOfPage: ref(webPageId(url)),
  });
}

export interface ProjectOptions {
  name: string;
  description: string;
  /** The case-study page on this site. */
  url: string;
  /** The live product/site the case study is about, when there is one. */
  liveUrl?: string;
  image?: string;
  keywords?: string[];
  locale?: string;
  year?: number;
  client?: string;
  /**
   * Which schema.org type the work actually is. A SaaS product the business
   * built and runs is a `WebApplication`; a client engagement is a
   * `CreativeWork`. Everything used to be the latter, which says little more
   * than "a thing that was made".
   */
  type?: 'CreativeWork' | 'SoftwareApplication' | 'WebApplication';
  applicationCategory?: string;
}

export function createProjectNode(project: ProjectOptions): SchemaNode {
  const pageUrl = absoluteUrl(project.url);
  const type = project.type ?? 'CreativeWork';
  const isApp = type === 'SoftwareApplication' || type === 'WebApplication';

  return compact({
    '@type': type,
    '@id': `${pageUrl}#project`,
    name: project.name,
    description: project.description,
    // For a real product the canonical address is the product's own; the case
    // study is where it's *described*, which is what mainEntityOfPage says.
    url: project.liveUrl || pageUrl,
    sameAs: project.liveUrl ? [project.liveUrl] : undefined,
    image: imageNode(project.image),
    keywords: project.keywords,
    inLanguage: project.locale,
    datePublished: project.year ? String(project.year) : undefined,
    creator: ref(ORGANIZATION_ID),
    ...(isApp
      ? {
          applicationCategory: project.applicationCategory ?? 'BusinessApplication',
          operatingSystem: 'Web',
          publisher: ref(ORGANIZATION_ID),
        }
      : {}),
    // schema.org has no `client` property. `sourceOrganization` is the
    // modeled equivalent — the organization on whose behalf the creator was
    // working — and it's what a case study's named client actually is.
    ...(project.client
      ? { sourceOrganization: { '@type': 'Organization', name: project.client } }
      : {}),
    mainEntityOfPage: ref(webPageId(pageUrl)),
  });
}

/* -------------------------------------------------------------------------- */
/* Assembly                                                                    */
/* -------------------------------------------------------------------------- */

/** Wrap a page's nodes into the single JSON-LD document `JsonLd.astro` emits. */
export function buildGraph(nodes: Array<SchemaNode | undefined>): SchemaGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter((node): node is SchemaNode => Boolean(node)),
  };
}
