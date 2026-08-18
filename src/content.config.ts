import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import i18nConfig from './config/i18n.config';

// Locale field for the non-folder collections (pages, faqs) that get their
// locale from frontmatter rather than their folder. The folder collections —
// blog, projects, solutions, services — derive their locale from the entry
// id's folder segment (`getEntryLocale` in `lib/i18n`) instead, so the two
// sources (folder vs field) can never drift apart.
const localeSchema = z
  .string()
  .refine((value) => i18nConfig.locales.includes(value), {
    message: `locale must be one of the configured i18n locales: ${i18nConfig.locales.join(', ')}`,
  })
  .default(i18nConfig.defaultLocale);

// Blog collection with Content Layer API
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
      title: z.string().max(100),
      description: z.string().max(200),
      publishedAt: z.coerce.date(),
      /**
       * CMS datetime widgets (Sveltia/Decap) commonly write `''` for a
       * cleared optional date rather than omitting the key, which
       * `z.coerce.date()` rejects (empty string coerces to an invalid
       * Date). Treat an empty string the same as "not set" instead of
       * failing the whole build over it.
       */
      updatedAt: z.preprocess(
        (value) => (value === '' ? undefined : value),
        z.coerce.date().optional()
      ),
      author: z.string().default('Team'),
      /**
       * A root-relative path into public/ (e.g. "/uploads/blog/x.webp"),
       * NOT an image() asset reference. CMS-uploaded cover images live in
       * public/uploads/blog specifically so Sveltia's own editor preview
       * can render them — a src/assets path processed through image()
       * isn't a real, fetchable URL until Astro's build pipeline runs, so
       * the CMS can never show a live preview of one. Hand-authored
       * decorative art still lives in src/assets/blog/*.svg and is
       * rendered separately via `svgSlug` (BlogImageSVG.astro), which
       * this field doesn't touch.
       */
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      svgSlug: z.string().optional(),
      /**
       * Explicit editor choice of which cover visual to render — see
       * `resolveCoverVisual` in lib/blog.ts. Optional and unset by
       * default, so posts written before this field existed keep their
       * original behavior (svgSlug wins whenever both are set).
       */
      coverType: z.enum(['auto', 'svg', 'image', 'none']).optional(),
      /**
       * Optional stable canonical id, decoupled from the slug. Used by
       * <PostLink> for durable internal links that survive slug renames.
       * Lowercase kebab-case.
       */
      uid: z.preprocess(
        (value) => (value === '' ? undefined : value),
        z
          .string()
          .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            'uid must be lowercase kebab-case, e.g. "getting-started"'
          )
          .optional()
      ),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      /** FAQ items emitted as FAQ JSON-LD alongside the BlogPosting schema. */
      faqs: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
      /** Per-post override: hide table of contents on this post */
      toc: z.boolean().optional(),
      /** Per-post override: hide comments on this post */
      comments: z.boolean().optional(),
    }),
});

// Pages collection for static pages
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.coerce.date().optional(),
    locale: localeSchema,
  }),
});

// Authors collection
const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      avatar: image().optional(),
      social: z
        .object({
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
});

// FAQs collection (for JSON-LD FAQ schema)
const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
    locale: localeSchema,
  }),
});

// Projects collection — one MDX file per project
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /**
       * Lucide icon shown on the project card, e.g. "rocket", "book-open",
       * "shopping-bag". Give each project its own: the card is mostly text,
       * and one repeated icon across every card makes them read as
       * placeholders. Falls back to "layers" when unset.
       */
      icon: z.string().optional(),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /**
       * Optional gallery — when provided, renders a swipeable carousel in the
       * hero in place of the single `image`. A slide is either an image
       * (`src` + `alt`) or a self-hosted video (`video` + `poster` + `alt`).
       * Video files live in `public/` and are referenced by root-relative
       * path; the poster is required so the slide costs nothing until played.
       */
      gallery: z
        .array(
          z.union([
            z.object({
              src: image(),
              alt: z.string(),
            }),
            z.object({
              video: z
                .string()
                .regex(
                  /^\/.+/,
                  'video must be a root-relative path to a file in public/, e.g. "/videos/demo.mp4"'
                ),
              poster: image(),
              alt: z.string(),
            }),
          ])
        )
        .default([]),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      year: z.number().optional(),
      client: z.string().optional(),
      /**
       * Which schema.org type this work actually is. A SaaS product the
       * business built and runs is a `WebApplication`; a client engagement is
       * a `CreativeWork` (the default). Everything used to be the latter,
       * which tells a machine little beyond "a thing that was made".
       */
      schemaType: z.enum(['CreativeWork', 'SoftwareApplication', 'WebApplication']).optional(),
      /** For app-typed projects: schema.org `applicationCategory`. */
      applicationCategory: z.string().optional(),
      role: z.string().optional(),
      services: z.array(z.string()).default([]),
      /** Optional editorial tagline — short facts rendered as a single line under the hero description with brand-coloured dot separators. */
      meta: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      placeholder: z.boolean().default(false),
      /** Per-project override: hide table of contents on this project */
      toc: z.boolean().optional(),
    }),
});

// Solutions collection — one MDX file per sector/problem landing page
// (e.g. "ERP for Small Business", "School Inspection"). Distinct from
// `projects` (case studies of specific engagements) and `blog` (articles):
// a solution page is evergreen, problem-first marketing copy aimed at a
// single search intent, per Business.md's "Landing Page Strategy".
const solutions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/solutions' }),
  schema: z.object({
    title: z.string(),
    /** Sector badge shown in the hero and on the index card, e.g. "Government", "Small Business". */
    sector: z.string(),
    /** Problem-first H1, distinct from `title` (which is also the nav/card label). */
    headline: z.string(),
    description: z.string(),
    icon: z.string().default('layers'),
    /** Paragraphs describing the problem this page targets. */
    challenge: z.array(z.string()),
    /** What IRFAtech does about it — rendered as a checklist, like the Services page. */
    approach: z.array(
      z.object({
        lead: z.string(),
        text: z.string(),
      })
    ),
    /** Outcome/benefit cards. */
    outcomes: z.array(
      z.object({
        icon: z.string().optional(),
        title: z.string(),
        description: z.string(),
      })
    ),
    /** Slugs of related solutions to cross-link at the foot of the page. */
    related: z.array(z.string()).default([]),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Services collection — one MDX file per commercial offering (e.g. "ERP
// Solutions", "WhatsApp Automation"). Distinct from `solutions` (sector/problem
// landing pages): a service page is the business's own offering catalogue,
// reached from `/services`, and carries the enquiry-driving structure the old
// site built its service pages on — features, industries, process, FAQs, and
// a WhatsApp-first CTA with a service-specific pre-filled message.
const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    /** Short label shown in the hero badge and breadcrumbs, e.g. "ERP Solutions". */
    badge: z.string(),
    /** One-line card description for the /services grid. */
    short: z.string(),
    /** Problem-first H1, distinct from `title` (which is also the nav/card label). */
    headline: z.string(),
    description: z.string(),
    icon: z.string().default('layers'),
    /** Pre-filled WhatsApp message for this service's enquiry CTA. */
    whatsappMessage: z.string(),
    /** Copy for the page's closing CTA band. */
    ctaTitle: z.string(),
    ctaSubtitle: z.string(),
    /** Primary CTA opens WhatsApp; secondary links to /contact. */
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
    /** What the service delivers, rendered as icon cards. */
    features: z.array(
      z.object({
        icon: z.string().optional(),
        title: z.string(),
        description: z.string(),
      })
    ),
    /** Industries/sectors the service fits — rendered as chips when present. */
    industries: z.array(z.string()).default([]),
    /** Numbered process steps — rendered as a "How it works" rail when present. */
    process: z.array(
      z.object({
        icon: z.string().optional(),
        title: z.string(),
        description: z.string(),
      })
    ).default([]),
    /** FAQ Q&As — rendered as an accordion and emitted as FAQPage JSON-LD. */
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
    /** Slugs of blog posts to cross-link as "Related reading" at the foot of the page. */
    relatedPosts: z.array(z.string()).default([]),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Stack collection — one MDX file per tool, editable like blog posts
const stack = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/stack' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    version: z.string(),
    url: z.string().url(),
    icon: z.string(), // icon name, e.g. 'brand-astro'
    colorOklch: z.string(), // OKLCH params, e.g. '62.5% 0.22 38'
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  pages,
  authors,
  faqs,
  stack,
  projects,
  solutions,
  services,
};
