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
  const all = await getCollection('services', (entry) => {
    return getEntryLocale(entry.id) === locale && (import.meta.env.PROD ? entry.data.draft !== true : true);
  });
  if (all.length > 0 || locale === defaultLocale) {
    return all.sort((a, b) => a.data.order - b.data.order);
  }
  const fallback = await getCollection('services', (entry) => {
    return getEntryLocale(entry.id) === defaultLocale && (import.meta.env.PROD ? entry.data.draft !== true : true);
  });
  return fallback.sort((a, b) => a.data.order - b.data.order);
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
