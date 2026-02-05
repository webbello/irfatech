# Repository Guidelines

## Project Structure & Module Organization
- `app.vue` is the root entry; page routes live in `pages/` (Nuxt file-based routing).
- Reusable UI is in `components/`; shared layout chrome is in `layouts/`.
- Global styles and Tailwind imports are in `assets/css/`.
- Content-driven pages use Markdown in `content/` (blog posts in `content/blog/`).
- Public static files (icons, images, etc.) belong in `public/`.
- Nuxt and Tailwind configuration live in `nuxt.config.ts` and `tailwind.config.js`.

## Build, Test, and Development Commands
- `npm install`: install dependencies (runs `nuxt prepare` postinstall).
- `npm run dev`: start the Nuxt dev server with HMR.
- `npm run build`: build the production app.
- `npm run preview`: serve the production build locally.
- `npm run generate`: generate a static build (for static hosting).

## Coding Style & Naming Conventions
- Use 2-space indentation in Vue and config files.
- Prefer Vue 3 Composition API and `<script setup>` where applicable.
- Component names are `PascalCase.vue` (e.g., `components/GlobeAnimation.vue`).
- Routes follow file-based naming in `pages/` (e.g., `pages/blog/[...slug].vue`).
- Tailwind is the primary styling system; keep custom CSS in `assets/css/main.css`.

## Testing Guidelines
- No test framework is currently configured. If you add tests, document the tool and add scripts to `package.json`.
- Suggested convention: place tests in `tests/` and use `*.spec.ts` naming.

## Content & Assets
- Blog posts live in `content/blog/` with frontmatter fields like `title`, `description`, `date`, and `image`.
- Gallery content is maintained in `pages/gallery.vue` (see `allImages`).

## Commit & Pull Request Guidelines
- Commit messages use a simple conventional prefix: `feat:`, `fix:`, `chore:`. (Recent history shows `feat:`.)
- PRs should include: a short description, screenshots for UI changes, and any relevant content updates or data files.
- Link related issues or notes in the PR description when applicable.

## Configuration & Deployment Notes
- Static deployment is supported via `npm run generate` (Netlify/Vercel/GitHub Pages/S3).
- Keep SEO metadata centralized in Nuxt config and page-level head declarations.
