/**
 * /sitemap/blog.xml — Dynamic blog sitemap
 *
 * Automatically discovers every .md file in content/blog/ at build time.
 * No manual updates needed when a new post is published — just add the .md file.
 *
 * Emits:
 *  - <loc> with canonical post URL
 *  - <lastmod> from the post's `date` front matter (falls back to file mtime)
 *  - <image:image> with the post's hero image and title
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  image?: string
}

/** Minimal front matter parser — handles quoted and unquoted YAML values */
function parseFrontMatter(content: string): Record<string, string> {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  const result: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const raw = line.slice(colonIdx + 1).trim()
    // Strip surrounding quotes (single or double)
    result[key] = raw.replace(/^["']|["']$/g, '')
  }
  return result
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default defineEventHandler((event) => {
  const base = 'https://irfatech.in'
  const fallbackImage = `${base}/images/og/og-blog.png`

  // Resolve content/blog relative to the project root (process.cwd() at build time)
  const blogDir = resolve(process.cwd(), 'content/blog')

  let posts: PostMeta[] = []

  try {
    const files = readdirSync(blogDir).filter(f => f.endsWith('.md'))

    posts = files.map((file) => {
      const filePath = resolve(blogDir, file)
      const raw = readFileSync(filePath, 'utf-8')
      const fm = parseFrontMatter(raw)
      const slug = file.replace(/\.md$/, '')

      // Use front matter date; fall back to file modification time
      let date = fm.date || ''
      if (!date) {
        const mtime = statSync(filePath).mtime
        date = mtime.toISOString().split('T')[0]
      }

      return {
        slug,
        title: fm.title || slug,
        description: fm.description || '',
        date,
        image: fm.image || undefined,
      }
    })

    // Sort newest-first
    posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  }
  catch (err) {
    // During SSR hydration in dev the content dir might not resolve — return empty gracefully
    console.warn('[sitemap/blog.xml] Could not read content/blog:', err)
  }

  const urlEntries = posts.map((post) => {
    const loc = `${base}/blog/${post.slug}`
    const imageUrl = post.image || fallbackImage
    const imageTitle = escapeXml(post.title)

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${imageTitle}</image:title>
      <image:caption>${escapeXml(post.description)}</image:caption>
    </image:image>
  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return xml
})
