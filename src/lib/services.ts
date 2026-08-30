/**
 * Shared helpers for the services index and detail pages.
 *
 * Services are the commercial offerings catalogue (`/services/<slug>`) —
 * the enquiry-driving pages the old site built its lead generation on. They
 * sit alongside (not on top of) `solutions`, which are sector/problem landing
 * pages: a service page sells "what we do", a solution page sells "what we
 * can fix for you". Same locale-prefix conventions as `lib/solutions`: the
 * default locale stays at the site root (`/services/...`), additional
 * locales live under a prefix (`/<locale>/services/...`).
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { getPublishedPosts, getPostSlug } from '@/lib/blog';
import siteConfig from '@/config/site.config';
import { toWhatsAppDigits } from '@/lib/contact-channel';
import { defaultLocale, localizedPath, isEnabled, getLocales, getEntryLocale } from '@/i18n';

/**
 * Strip the locale prefix (and any `.md`/`.mdx` extension) from a service id
 * to get its URL slug (e.g. "en/erp-solutions" → "erp-solutions").
 */
export function getServiceSlug(serviceId: string, locale: string = defaultLocale): string {
  const localePrefix = new RegExp(`^(${[locale, ...getLocales()].join('|')})/`);
  return serviceId.replace(localePrefix, '').replace(/\.mdx?$/, '');
}

/** URL path for an individual service, locale-aware. */
export function getServiceUrl(serviceId: string, locale: string = defaultLocale): string {
  return localizedPath(`/services/${getServiceSlug(serviceId, locale)}`, locale);
}

/** URL of the services index for a locale (`/services` or `/<locale>/services`). */
export function getServicesBaseUrl(locale: string = defaultLocale): string {
  return localizedPath('/services', locale);
}

/**
 * The non-default locales that should get their own prefixed service routes.
 * Empty when i18n is off or only one locale is configured.
 */
export function getSecondaryLocales(): string[] {
  if (!isEnabled()) return [];
  return getLocales().filter((locale) => locale !== defaultLocale);
}

/**
 * All visible services for a locale, ordered by their `order` field. Falls
 * back to the default locale when a secondary locale has no services of its
 * own yet, mirroring `getVisibleSolutions` — so a locale that hasn't
 * translated this content still gets a working services section instead of
 * an empty one.
 */
export async function getVisibleServices(
  locale: string = defaultLocale
): Promise<CollectionEntry<'services'>[]> {
  const published = (entry: CollectionEntry<'services'>) =>
    import.meta.env.PROD ? entry.data.draft !== true : true;

  const localized = await getCollection('services', (entry) => {
    return getEntryLocale(entry.id) === locale && published(entry);
  });

  if (locale === defaultLocale) {
    return localized.sort((a, b) => a.data.order - b.data.order);
  }

  const source = await getCollection('services', (entry) => {
    return getEntryLocale(entry.id) === defaultLocale && published(entry);
  });

  // Fall back PER ENTRY, not per locale.
  //
  // This used to be all-or-nothing: if the locale had even one translated
  // file, `localized` was returned whole and the English catalogue was
  // dropped. That made partial translation impossible — adding a single
  // `pt` file deleted the other seven `/pt/services/*` URLs from the build,
  // because they were no longer in the list the routes are generated from.
  // Translating a catalogue one page at a time is the normal way this work
  // actually happens, so the fallback has to survive it.
  //
  // The English set is the catalogue of record: every entry keeps its URL in
  // every locale, showing the translation where one exists and English where
  // it does not. Nothing 404s mid-translation, and each new file swaps itself
  // in on the next build.
  const translated = new Map(localized.map((entry) => [getServiceSlug(entry.id), entry]));
  const merged = source.map((entry) => translated.get(getServiceSlug(entry.id)) ?? entry);

  // An entry that exists only in this locale has no English counterpart to
  // merge over, so it would vanish from the map above. Keep it.
  const sourceSlugs = new Set(source.map((entry) => getServiceSlug(entry.id)));
  const localeOnly = localized.filter((entry) => !sourceSlugs.has(getServiceSlug(entry.id)));

  return [...merged, ...localeOnly].sort((a, b) => a.data.order - b.data.order);
}

/**
 * True when `id` is the default-locale entry being rendered under a non-default
 * locale — the English copy standing in until a translation exists. The route
 * still builds the page (so the language switcher never 404s), but it must be
 * `noindex` and kept out of the sitemap.
 */
export function isFallbackEntry(id: string, locale: string): boolean {
  return locale !== defaultLocale && getEntryLocale(id) !== locale;
}

/**
 * Verified `{ locale, url }` alternates for a service slug — only the locales
 * that actually have a translated file, so `hreflang` never points at a page
 * that is really the English fallback. Mirrors `getPostTranslations`.
 */
export async function getServiceTranslations(
  slug: string
): Promise<{ locale: string; url: string }[]> {
  if (!isEnabled()) return [];
  const have = new Set(
    (await getCollection('services')).map((entry) => {
      const loc = getEntryLocale(entry.id);
      return `${loc}/${getServiceSlug(entry.id, loc)}`;
    })
  );
  return getLocales()
    .filter((loc) => have.has(`${loc}/${slug}`))
    .map((loc) => ({ locale: loc, url: localizedPath(`/services/${slug}`, loc) }));
}

/**
 * Resolve related-post slugs to their blog entries for a locale (with the
 * usual default-locale fallback for the post itself). Slugs that don't match
 * a published post are silently dropped — a content-editor typo shouldn't
 * take down the build the way a broken route would.
 */
export async function getRelatedPosts(
  slugs: string[],
  locale: string = defaultLocale
): Promise<CollectionEntry<'blog'>[]> {
  if (slugs.length === 0) return [];
  const posts = await getPublishedPosts(locale);
  const fallback = locale === defaultLocale ? posts : await getPublishedPosts(defaultLocale);
  return slugs
    .map((slug) => posts.find((p) => getPostSlug(p.id, locale) === slug) ?? fallback.find((p) => getPostSlug(p.id, defaultLocale) === slug))
    .filter((p): p is CollectionEntry<'blog'> => Boolean(p));
}

/**
 * The site's WhatsApp number in wa.me digits — the same number the contact
 * form hands off to when `contact.channel` is "whatsapp", so a service-page
 * enquiry lands in the same inbox. Falls back to `phone` when unset.
 */
export function getWhatsAppNumber(): string {
  return siteConfig.contact?.whatsappNumber ?? siteConfig.phone ?? '';
}

/** Full wa.me URL pre-filled with a service's enquiry message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${toWhatsAppDigits(getWhatsAppNumber())}?text=${encodeURIComponent(message)}`;
}
