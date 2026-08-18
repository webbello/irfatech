/**
 * The colour themes, single-sourced for the desktop swatch row and the
 * dropdown picker.
 *
 * All twelve palettes exist as files in `src/styles/themes/`, but only the
 * ones marked `shipped` are imported by `src/styles/tokens/colors.css` and
 * therefore have any CSS on the page. This site ships `orange` alone: the
 * other twelve were 104 KB of a 226 KB render-blocking stylesheet that no
 * visitor could ever select.
 *
 * `shipped` is the load-bearing flag — it must match the imports in
 * colors.css. A palette that isn't shipped must never be offered or restored
 * from storage, because selecting it would set `data-theme` to a value with
 * no tokens behind it and the page would fall back to unstyled colours.
 * `showInSelector` is the softer curation on top: whether a shipped palette
 * appears in the pickers.
 */
export interface ColourTheme {
  /** Matches the `html[data-theme="…"]` selector in src/styles/themes/. */
  id: string;
  /** Label shown in the pickers. */
  name: string;
  /** Swatch colour (the palette's brand-500). */
  color: string;
  /** Offer this theme in the pickers. Only meaningful when `shipped`. */
  showInSelector: boolean;
  /**
   * Is this palette's CSS actually imported in tokens/colors.css? Unshipped
   * palettes have no tokens on the page, so nothing may select them.
   */
  shipped: boolean;
}

// All 12 themes in Tailwind color order.
export const colourThemes: ColourTheme[] = [
  { id: 'orange',  name: 'Orange',  color: 'oklch(62.5% 0.22  38)',  showInSelector: true, shipped: true },
  { id: 'amber',   name: 'Amber',   color: 'oklch(68.4% 0.155 64)',  showInSelector: true, shipped: false },
  { id: 'lime',    name: 'Lime',    color: 'oklch(64.8% 0.194 136)', showInSelector: true, shipped: false },
  { id: 'emerald', name: 'Emerald', color: 'oklch(65.2% 0.174 151)', showInSelector: true, shipped: false },
  { id: 'teal',    name: 'Teal',    color: 'oklch(67.2% 0.116 190)', showInSelector: true, shipped: false },
  { id: 'cyan',    name: 'Cyan',    color: 'oklch(67.2% 0.116 208)', showInSelector: true, shipped: false },
  { id: 'sky',     name: 'Sky',     color: 'oklch(66.5% 0.150 239)', showInSelector: true, shipped: false },
  { id: 'blue',    name: 'Blue',    color: 'oklch(62.1% 0.207 255)', showInSelector: true, shipped: false },
  { id: 'indigo',  name: 'Indigo',  color: 'oklch(58.9% 0.224 263)', showInSelector: true, shipped: false },
  { id: 'violet',  name: 'Violet',  color: 'oklch(59.9% 0.222 279)', showInSelector: true, shipped: false },
  { id: 'purple',  name: 'Purple',  color: 'oklch(59.7% 0.251 296)', showInSelector: true, shipped: false },
  { id: 'magenta', name: 'Magenta', color: 'oklch(58.8% 0.268 330)', showInSelector: true, shipped: false },
];

/** Palettes whose CSS is on the page. Nothing may set `data-theme` outside this. */
export const shippedThemes: ColourTheme[] = colourThemes.filter((theme) => theme.shipped);

/** Ids of the shipped palettes — read by the pre-paint bootstrap in BaseLayout. */
export const shippedThemeIds: string[] = shippedThemes.map((theme) => theme.id);

/** The themes the pickers actually offer: shipped *and* curated in. */
export const selectorThemes: ColourTheme[] = colourThemes.filter(
  (theme) => theme.shipped && theme.showInSelector
);
