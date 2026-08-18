/**
 * Brand values needed before `astro:env` exists.
 *
 * `astro.config.mjs` generates the favicon PNG/ICO files in a build hook and
 * needs the site's initial and its theme colour to do it — but it cannot
 * import `site.config.ts`, which reads `astro:env/server` and so cannot be
 * loaded at config time. Same constraint as `site-url.ts`, same answer: keep
 * the values in a plain module both sides import, so they cannot drift.
 *
 * Change them here. `site.config.ts` reads from this file.
 */
export const SITE_NAME = 'IRFATECH';

/** Browser toolbar colour, and the fill behind the favicon letter. */
export const THEME_COLOR = '#F94C10';

/**
 * Colour mode a visitor gets before they choose one.
 *
 * `'light'` means a first-time visitor sees the light theme whatever their OS
 * is set to; `'system'` would follow `prefers-color-scheme` instead. Either
 * way the switcher still offers all three, and an explicit choice is
 * remembered in `localStorage.theme` and always wins over this.
 *
 * Lives here, next to the other pre-`astro:env` brand values, because four
 * separate places need it and three of them are client scripts: the bootstrap
 * in BaseLayout that runs before first paint, ThemeModeDropdown, and
 * ThemeToggle. They each had their own hardcoded copy of the default, which
 * is three chances for the site to disagree with itself about what it looks
 * like before anyone has touched a control.
 */
export const DEFAULT_THEME_MODE: 'system' | 'light' | 'dark' = 'light';
