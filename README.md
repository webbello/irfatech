<p align="center">
  <strong>IRFAtech</strong> — Digital Infrastructure for Growing Businesses
</p>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-7.0-bc52ee?logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e" alt="License" /></a>
</p>

---

## Overview

This repository is the source for **[irfatech.in](https://irfatech.in)** — IRFAtech's website. IRFAtech (Integrated Resources For Automation & Technology) is a B2B business technology and automation company, founded by Mohammed Irfan, helping growing SMBs in India and Timor-Leste replace manual processes with ERP systems, AI workflow automation, custom software, WhatsApp automation, CRM systems, business websites, mobile apps, and ongoing support.

The site is built on **[Astro Rocket](https://github.com/hansmartensdev/Astro-Rocket)**, a free, open-source Astro 7 + Tailwind CSS v4 starter theme — MIT licensed, no attribution required. Full credit to Hans Martens for the theme this site is built on; the copy, content, blog, and case studies here are IRFAtech's own.

## Quick Start

### Prerequisites

- **Node.js 22.12.0+**
- **pnpm 9.x** (recommended) or npm/yarn

### Installation

```bash
git clone https://github.com/webbello/irfatech.git
cd irfatech
pnpm install
cp .env.example .env
pnpm dev
```

Visit `http://localhost:4321` to see the site.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the development server with hot reload |
| `pnpm build` | Build for production (also runs `astro check`, content validation, and link checks) |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Run the Astro/TypeScript type checker |
| `pnpm lint` / `pnpm lint:fix` | ESLint, with autofix |
| `pnpm format` / `pnpm format:check` | Prettier |
| `pnpm test` | Vitest unit tests |
| `pnpm test:e2e` | Playwright end-to-end tests |

`pnpm build` is the real test before shipping a change — it catches problems the dev server won't.

## Where things live

| Content | Location |
|---|---|
| Site identity, contact details, branding | `src/config/site.config.ts`, `src/config/branding.ts` |
| Navigation (header/footer menus) | `src/config/nav.config.ts` |
| Languages | `src/config/i18n.config.ts` — currently English (default), Bahasa Indonesia, Português, and Tetun |
| All interface text | `src/i18n/en.json` (and the other locale files) |
| Blog posts | `src/content/blog/en/*.mdx` |
| Case studies / portfolio | `src/content/projects/en/*.mdx` |
| Colour themes | `src/styles/themes/*.css` |

See [AGENTS.md](AGENTS.md) for a fuller map of the codebase and its conventions.

## Environment variables

Copy `.env.example` to `.env` and fill in what you need:

```bash
SITE_URL=https://irfatech.in

# Optional — contact form and newsletter (server-side only)
RESEND_API_KEY=your-resend-api-key
RESEND_AUDIENCE_ID=your-audience-id

# Optional — analytics and search-console verification
PUBLIC_GA_MEASUREMENT_ID=
PUBLIC_UMAMI_WEBSITE_ID=
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
```

`SITE_URL` matters everywhere — canonical tags, `og:url`, RSS, and the sitemap are all built from it, and it needs to be set on the hosting platform too, not just locally.

## Deployment

Adapter configs are included for Vercel (default), Netlify, and Cloudflare Workers:

```bash
# Vercel
vercel

# Netlify
netlify deploy --prod

# Cloudflare
DEPLOY_TARGET=cloudflare pnpm build && npx wrangler deploy
```

## Theme documentation

For the full technical reference — the component library, design tokens, i18n internals, animation system, and SEO toolkit this site is built on — see the [Astro Rocket documentation](https://github.com/hansmartensdev/Astro-Rocket).

## License

MIT — see [LICENSE](LICENSE).
