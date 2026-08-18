/**
 * Client-side "default locale by region" heuristic for a first-time visit
 * to the homepage.
 *
 * There's no server-side IP geolocation available here — this theme
 * deploys the exact same static build to Vercel, Netlify, and Cloudflare
 * (see astro.config.mjs), and Astro's edge-middleware support only covers
 * non-prerendered routes, which the homepage deliberately isn't. So this
 * uses the one client-side signal that's both free and unambiguous for
 * Timor-Leste: its IANA time zone, `Asia/Dili`, isn't shared with any
 * other country. It's a proxy for "this device is set up for Timor-Leste,"
 * not true IP geolocation — good enough for a default that's one click
 * to change, not for anything that needs to be precise.
 */
const TIMEZONE_LOCALE_MAP: Record<string, string> = {
  'Asia/Dili': 'tet',
};

/** The locale a given IANA time zone should default to, if any. */
export function localeForTimezone(timeZone: string | undefined): string | undefined {
  return timeZone ? TIMEZONE_LOCALE_MAP[timeZone] : undefined;
}
