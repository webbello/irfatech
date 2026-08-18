import { cva, type VariantProps } from 'class-variance-authority';

export const footerVariants = cva('py-[var(--space-stack-lg)]', {
  variants: {
    background: {
      default: 'bg-background border-t border-border',
      secondary: 'bg-background-secondary border-t border-border',
      invert: 'invert-section bg-background border-t border-border',
      /* Fixed Techlo Lite navy — see .footer-techlo in global.css and the
         --techlo-* tokens in tokens/primitives.css. Site-wide footer
         colour, independent of light/dark mode. */
      techlo: 'footer-techlo bg-background border-t border-border',
      /* Same navy, no top border — for the one page (home) where the
         section directly above the footer is CtaBeamBand, itself the
         same navy. A border there would draw a seam across one
         continuous surface instead of separating two different ones. */
      'techlo-seamless': 'footer-techlo bg-background',
    },
  },
  defaultVariants: {
    background: 'default',
  },
});

export const footerColumnGridVariants = cva('grid grid-cols-1 gap-[var(--space-stack-lg)]', {
  variants: {
    columns: {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

export type FooterVariants = VariantProps<typeof footerVariants>;
export type FooterColumnGridVariants = VariantProps<typeof footerColumnGridVariants>;
