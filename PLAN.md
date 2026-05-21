# IRFATECH Website — Master Implementation Plan

> **Integrated Resources For Automation**
> Transforming this repo from a personal adventure site into a B2B business acquisition machine.

---

## Project Status

| Phase | Name | Status |
|-------|------|--------|
| 0 | Foundation Reset | ✅ Complete |
| 1 | Design System + Layout | ✅ Complete |
| 2 | Core Pages | ✅ Complete |
| 3 | Technical Features | ✅ Complete |
| 4 | Content & Launch | 🔄 In Progress |

---

## Website Goal

Every section must do one of:
- Build trust
- Explain value clearly
- Generate a lead (WhatsApp / form / consultation)
- Position IRFAtech as a serious business technology company

---

## Sitemap (Final)

```
/                              Home
/about                         About & Founder Story
/services                      Services Overview
  /services/websites            Business Website Development
  /services/erp                 ERP Solutions (Odoo + Custom)
  /services/crm                 CRM & Sales Automation
  /services/ai-automation       AI & Workflow Automation
  /services/custom-software     Custom Software Development
  /services/mobile-apps         Mobile App Development
  /services/whatsapp-automation WhatsApp Business Automation
  /services/maintenance         Maintenance & Support Plans
/industries                    Industries We Serve
/portfolio                     Business Transformations
  /portfolio/[slug]             Individual Case Study
/landflix                      Landflix Product Page
/blog                          Blog Index
  /blog/[slug]                  Individual Post
/contact                       Contact & Consultation
/privacy                       Privacy Policy
/terms                         Terms of Service
```

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-950` | `#020B18` | Page background |
| `navy-900` | `#04142A` | Section background |
| `navy-800` | `#071E3D` | Card background |
| `navy-700` | `#0D2B52` | Borders, dividers |
| `electric-400` | `#38BDF8` | Headings, highlights |
| `electric-500` | `#0EA5E9` | Primary CTA buttons |
| `electric-600` | `#0284C7` | Button hover state |
| `accent-400` | `#818CF8` | Secondary CTAs, badges |
| `accent-500` | `#6366F1` | Tags, chips |

### Typography

- Font: Inter (system fallback)
- Hero H1: 4xl–6xl, bold, electric-400
- Section H2: 3xl–4xl, bold, white
- Body: base, slate-300
- Caption: sm, slate-400

### Component Utilities

| Class | Description |
|-------|-------------|
| `.btn-primary` | Electric blue, rounded-full, glow shadow |
| `.btn-whatsapp` | Green #25D366, WhatsApp branded |
| `.btn-ghost` | Outline, electric border, transparent bg |
| `.section-dark` | navy-950 background |
| `.section-mid` | navy-900 background |
| `.card-glass` | backdrop-blur, navy-800/60, electric border |
| `.glow-text` | electric-400 with drop-shadow |
| `.text-gradient` | electric-400 → accent-400 gradient text |
| `.section-padding` | py-20 px-4 sm:px-6 lg:px-8 |
| `.container-max` | max-w-7xl mx-auto |

---

## Phase 0 — Foundation Reset

> **Goal:** Clean slate. Update tech, brand identity, base config.

### Tasks

- [ ] `package.json` — rename to `irfatech`, update description
- [ ] `tailwind.config.js` — new brand color palette + animations
- [ ] `assets/css/main.css` — new utility classes, dark base
- [ ] `nuxt.config.ts` — IRFATECH meta, Schema.org Organization, PWA manifest link
- [ ] `public/manifest.json` — PWA manifest
- [ ] `public/robots.txt` — update sitemap URL
- [ ] Delete old content: `content/blog/*.md` (circumnavigation articles)
- [ ] Delete old section components: `components/sections/` (all old ones)
- [ ] Delete unused components: `AmbassadorCar*.vue`, `GlobeAnimation.vue`, `GlobeParallax.vue`, `ArchivalVideo.vue`

---

## Phase 1 — Design System + Layout

> **Goal:** Header, footer, floating WhatsApp button. The chrome that wraps every page.

### Tasks

- [ ] `layouts/default.vue` — dark bg, add WhatsAppFloat
- [ ] `components/AppHeader.vue` — rewrite with new nav + mega-menu for Services
- [ ] `components/AppFooter.vue` — 4-column layout (brand, services, company, contact)
- [ ] `components/WhatsAppFloat.vue` — fixed bottom-right, pulse animation
- [ ] `components/ui/CTABanner.vue` — reusable "Let's Digitize Your Business" banner
- [ ] `components/ui/SectionHeader.vue` — reusable section title + subtitle
- [ ] `components/ui/ServiceCard.vue` — icon + title + description card
- [ ] `components/ui/IndustryCard.vue` — industry tile component
- [ ] `components/ui/ProcessStep.vue` — numbered step component
- [ ] `components/ui/TestimonialCard.vue` — star rating + quote card
- [ ] `components/BlogCard.vue` — restyle existing (keep structure)

---

## Phase 2 — Core Pages

> **Goal:** All pages built, linked, and rendering correctly.

### Homepage (`pages/index.vue`)

- [ ] S1: Hero — headline, subheading, 3 CTAs, trust badges
- [ ] S2: Services Grid — 8 service cards
- [ ] S3: Why IRFAtech — 5 differentiators
- [ ] S4: Industries — 7 industry tiles
- [ ] S5: Landflix Showcase — product highlight
- [ ] S6: Process — 4-step flow (Discover → Design → Build → Support)
- [ ] S7: Testimonials — 3 client cards
- [ ] S8: CTA Banner — "Let's Digitize Your Business"

### About Page (`pages/about.vue`)

- [ ] Founder story section
- [ ] Mission & Vision cards
- [ ] Values grid (4 cards)
- [ ] Company timeline (reuse TimelineEvent.vue)
- [ ] CTA — "Work with the Founder Directly"

### Services Pages

- [ ] `pages/services/index.vue` — 8 service cards overview
- [ ] `pages/services/websites.vue`
- [ ] `pages/services/erp.vue`
- [ ] `pages/services/crm.vue`
- [ ] `pages/services/ai-automation.vue`
- [ ] `pages/services/custom-software.vue`
- [ ] `pages/services/mobile-apps.vue`
- [ ] `pages/services/whatsapp-automation.vue`
- [ ] `pages/services/maintenance.vue`

Each service page sections:
- Hero (problem headline)
- What it is
- Features/Deliverables (checklist)
- Industries served
- Our Process (3 steps)
- Pricing signal
- CTA

### Industries Page (`pages/industries.vue`)

- [ ] 7 industry tiles: Real Estate, Retail, Distribution, Clinics, Restaurants, Coaching, SMB

### Portfolio Page

- [ ] `pages/portfolio/index.vue` — filterable grid "Business Transformations"
- [ ] `pages/portfolio/[slug].vue` — case study detail template
- [ ] Initial case study content files in `content/portfolio/`

### Landflix Page (`pages/landflix.vue`)

- [ ] Product hero
- [ ] Feature grid
- [ ] Screenshots carousel
- [ ] "Built by IRFAtech" story
- [ ] CTA

### Blog

- [ ] `pages/blog/index.vue` — category filter + BlogCard grid
- [ ] `pages/blog/[slug].vue` — post with TOC, read time, share, related posts, inline service CTA
- [ ] 8 initial blog posts in `content/blog/`

### Contact Page (`pages/contact.vue`)

- [ ] WhatsApp CTA block
- [ ] Inquiry form (Formspree endpoint)
- [ ] Email + phone direct links
- [ ] Book a Call link

### Legal Pages

- [ ] `pages/privacy.vue`
- [ ] `pages/terms.vue`

---

## Phase 3 — Technical Features

> **Goal:** SEO, GEO, PWA, performance, analytics wired up.

### SEO + GEO

- [x] `useSeoMeta()` on every page (title, description, OG, Twitter)
- [x] Schema.org `Organization` — global in nuxt.config.ts
- [x] Schema.org `Service` — `useServiceSchema()` composable, wired on ERP page (template for others)
- [x] Schema.org `Article` — `useArticleSchema()` composable, wired on blog `[slug].vue`
- [x] Schema.org `FAQPage` — `useFaqSchema()` composable, wired on ERP + FAQ sections
- [x] Schema.org `LocalBusiness` — `useLocalBusinessSchema()` composable, wired on Contact
- [x] Schema.org `BreadcrumbList` — `useBreadcrumbSchema()` composable, wired on key pages
- [x] FAQ sections on ERP service page (GEO-targeted answers)

### Performance

- [x] `@nuxt/image` module configured in nuxt.config.ts (WebP + quality 85)
- [ ] Replace all remaining `<img>` tags with `<NuxtImg>` (Phase 4 when real images added)
- [x] Preconnect hints for Google Fonts in nuxt.config.ts head
- [ ] Lighthouse audit — run after real images/content added

### PWA

- [x] `public/manifest.json` created
- [x] Manifest linked in nuxt.config.ts head
- [x] SVG icons created in `public/icons/` (replace with PNG before launch)

### Analytics

- [x] Plausible.io — `plugins/analytics.client.ts` (production-only, no cookie banner needed)
- [ ] Replace `irfatech.com` in analytics plugin with real domain before launch

### Composables

- [x] `composables/useSchema.ts` — all Schema.org helpers
- [x] `composables/useWhatsApp.ts` — centralised WA URL builder

### Sitemap

- [x] `server/routes/sitemap.xml.ts` — all routes + 8 blog posts + 3 portfolio slugs

---

## Phase 4 — Content & Launch

> **Goal:** Real content, final QA, deploy.

### Content

- [x] 8 blog articles written and formatted
- [x] 3 portfolio case studies written (Landflix, Distributor ERP, Clinic)
- [x] All 8 service pages with full copy
- [x] About / founder story written
- [ ] Real testimonials collected from clients (currently using placeholders)
- [ ] Landflix screenshots added (currently placeholder)
- [ ] Real founder photo added (currently icon placeholder)
- [ ] OG images created for each page (currently using default)

### QA Checklist

- [x] All routes return 200 (verified via curl)
- [x] Sitemap accessible at /sitemap.xml ✓
- [x] robots.txt correct ✓
- [ ] Mobile responsive — full visual QA on real device
- [ ] WhatsApp button test on real device
- [ ] Formspree endpoint wired (replace placeholder form ID)
- [ ] OG images verified on social share (use opengraph.xyz)
- [ ] 404 page styled (Nuxt default currently)
- [ ] Replace phone number placeholder (`923001234567`) with real number
- [ ] Replace email placeholder (`hello@irfatech.com`) with real email

### Launch

- [ ] `nuxt generate` passes without errors
- [ ] Deploy to GitHub Pages (`docs/` folder)
- [ ] Custom domain in `public/CNAME`
- [ ] Google Search Console submitted with sitemap URL
- [ ] Plausible domain set to real domain

### Launch

- [ ] `nuxt generate` passes without errors
- [ ] Deploy to GitHub Pages (docs/ folder)
- [ ] Custom domain configured in `public/CNAME`
- [ ] Google Search Console submitted

---

## Component Inventory

| Component | Action | Reason |
|-----------|--------|--------|
| `AppHeader.vue` | Rewrite | New nav, mega-menu, WhatsApp button |
| `AppFooter.vue` | Rewrite | 4-column IRFATECH layout |
| `BlogCard.vue` | Restyle | Keep structure, new colors |
| `SocialShare.vue` | Keep | Already works |
| `TimelineEvent.vue` | Keep + reuse | Repurposed for company milestones |
| `AchievementCard.vue` | Delete | Not needed |
| `AmbassadorCarAnimation.vue` | Delete | Not needed |
| `AmbassadorCarShowcase.vue` | Delete | Not needed |
| `ArchivalVideo.vue` | Delete | Not needed |
| `GlobeAnimation.vue` | Delete | Not needed |
| `GlobeParallax.vue` | Delete | Not needed |
| `JourneyCard.vue` | Delete | Not needed |
| `sections/AboutSaloo.vue` | Delete | Not needed |
| `sections/AmbassadorCar.vue` | Delete | Not needed |
| `sections/ChoudhuryTrophy.vue` | Delete | Not needed |
| `sections/ContessaClassicCar.vue` | Delete | Not needed |
| `sections/GalleryPreview.vue` | Delete | Not needed |
| `sections/GuinnessWorldRecords.vue` | Delete | Not needed |
| `sections/HeroSection.vue` | Delete | Replaced by new Hero |
| `sections/TimelineTeaser.vue` | Delete | Not needed |
| `WhatsAppFloat.vue` | New | Global floating CTA |
| `ui/CTABanner.vue` | New | Reusable CTA section |
| `ui/SectionHeader.vue` | New | Reusable section title |
| `ui/ServiceCard.vue` | New | Service grid card |
| `ui/IndustryCard.vue` | New | Industry tile |
| `ui/ProcessStep.vue` | New | Numbered process step |
| `ui/TestimonialCard.vue` | New | Client review card |
| `ui/CaseStudyCard.vue` | New | Portfolio card |

---

## Blog Content Plan

| Filename | Title | Target Keyword |
|----------|-------|----------------|
| `how-small-businesses-can-automate-operations.md` | How Small Businesses Can Automate Their Operations in 2025 | business automation SMB |
| `why-retail-shops-need-erp.md` | Why Every Retail Shop Needs an ERP System | ERP for retail |
| `best-crm-for-small-businesses.md` | Best CRM Solutions for Small Businesses | CRM small business |
| `whatsapp-business-automation-guide.md` | Complete Guide to WhatsApp Business Automation | WhatsApp automation |
| `odoo-erp-pakistan-sme.md` | Odoo ERP for Pakistan SMEs — What You Need to Know | Odoo ERP Pakistan |
| `ai-workflows-local-businesses.md` | How AI Workflows Can Transform Local Businesses | AI for local business |
| `digital-transformation-real-estate.md` | Digital Transformation for Real Estate Businesses | real estate technology |
| `business-website-cost-guide.md` | How Much Does a Business Website Cost in 2025? | business website cost |

---

## Tech Stack

| Layer | Package | Version |
|-------|---------|---------|
| Framework | Nuxt | ^4.2.0 |
| Content | @nuxt/content | ^2.13.2 |
| Styling | Tailwind CSS | ^4.x |
| Images | @nuxt/image | ^2.0.0 |
| Utilities | @vueuse/core + nuxt | ^14.x |
| Icons | Iconify (local) | ^3.x |
| Deploy | GitHub Pages (SSG) | — |
| Forms | Formspree | free tier |
| Analytics | Google Analytics 4 | — |

---

## WhatsApp Integration

All CTA buttons use this pattern:
```
https://wa.me/[PHONE]?text=Hi%20IRFAtech%2C%20I%20need%20help%20with%20[SERVICE]
```

Service-specific pre-filled messages on each service page CTA.

Phone number placeholder: `[WHATSAPP_NUMBER]` — replace before launch.

---

## Key Principles

1. **Not a portfolio** — a business acquisition system
2. **Every section** must build trust, explain value, or generate a lead
3. **Founder-led** positioning throughout (not corporate fake)
4. **SMB language** — avoid jargon, speak business outcomes
5. **Mobile-first** — majority of SMB owners browse on phone
6. **Speed over decoration** — fast load > fancy animations
