export { default as Hero } from './Hero.astro';
export { heroSectionVariants } from './hero.variants';
export type { HeroSectionVariants } from './hero.variants';

/**
 * Alternate homepage hero layouts — interchangeable with `Hero`, not
 * variants of it. Swap the import (and the props, they don't share a
 * shape) in HomeView.astro to try one instead of the current hero.
 */
export { default as HeroPhotoFocus } from './HeroPhotoFocus.astro';
export { default as HeroSplit } from './HeroSplit.astro';
