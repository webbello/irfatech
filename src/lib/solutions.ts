/**
 * Shared helpers for the solutions index and detail pages.
 *
 * Solutions are simpler than blog/projects: no pagination, no tag archives —
 * there are a handful of them and they're meant to be found individually, by
 * search intent, not browsed as a list. Mirrors the locale-prefix conventions
 * in `lib/blog` and `lib/projects` so it stays consistent with the rest of
 * the site: the default locale stays at the site root (`/solutions/...`),
 * additional locales live under a prefix (`/<locale>/solutions/...`).
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, localizedPath, isEnabled, getLocales, getEntryLocale } from '@/i18n';

/**
 * Strip the locale prefix (and any `.md`/`.mdx` extension) from a solution id
 * to get its URL slug (e.g. "en/erp-for-small-business" → "erp-for-small-business").
 */
export function getSolutionSlug(solutionId: string, locale: string = defaultLocale): string {
  const localePrefix = new RegExp(`^(${[locale, ...getLocales()].join('|')})/`);
  return solutionId.replace(localePrefix, '').replace(/\.mdx?$/, '');
}

/** URL path for an individual solution, locale-aware. */
export function getSolutionUrl(solutionId: string, locale: string = defaultLocale): string {
  return localizedPath(`/solutions/${getSolutionSlug(solutionId, locale)}`, locale);
}

/** URL of the solutions index for a locale (`/solutions` or `/<locale>/solutions`). */
export function getSolutionsBaseUrl(locale: string = defaultLocale): string {
  return localizedPath('/solutions', locale);
}

/**
 * The non-default locales that should get their own prefixed solution routes.
 * Empty when i18n is off or only one locale is configured.
 */
export function getSecondaryLocales(): string[] {
  if (!isEnabled()) return [];
  return getLocales().filter((locale) => locale !== defaultLocale);
}

/**
 * All visible solutions for a locale, ordered by their `order` field. Falls
 * back to the default locale when a secondary locale has no solutions of its
 * own yet, mirroring `getVisibleProjects` — so a locale that hasn't
 * translated this content still gets a working solutions section instead of
 * an empty one.
 */
export async function getVisibleSolutions(
  locale: string = defaultLocale
): Promise<CollectionEntry<'solutions'>[]> {
  const published = (entry: CollectionEntry<'solutions'>) =>
    import.meta.env.PROD ? entry.data.draft !== true : true;

  const localized = await getCollection('solutions', (entry) => {
    return getEntryLocale(entry.id) === locale && published(entry);
  });

  if (locale === defaultLocale) {
    return localized.sort((a, b) => a.data.order - b.data.order);
  }

  const source = await getCollection('solutions', (entry) => {
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
  const translated = new Map(localized.map((entry) => [getSolutionSlug(entry.id), entry]));
  const merged = source.map((entry) => translated.get(getSolutionSlug(entry.id)) ?? entry);

  // An entry that exists only in this locale has no English counterpart to
  // merge over, so it would vanish from the map above. Keep it.
  const sourceSlugs = new Set(source.map((entry) => getSolutionSlug(entry.id)));
  const localeOnly = localized.filter((entry) => !sourceSlugs.has(getSolutionSlug(entry.id)));

  return [...merged, ...localeOnly].sort((a, b) => a.data.order - b.data.order);
}

/** Resolve related-solution slugs to their entries, for the current locale (with default-locale fallback). */
export async function getRelatedSolutions(
  slugs: string[],
  locale: string = defaultLocale
): Promise<CollectionEntry<'solutions'>[]> {
  if (slugs.length === 0) return [];
  const all = await getVisibleSolutions(locale);
  const bySlug = new Map(all.map((s) => [getSolutionSlug(s.id, locale), s]));
  return slugs.map((slug) => bySlug.get(slug)).filter((s): s is CollectionEntry<'solutions'> => Boolean(s));
}
