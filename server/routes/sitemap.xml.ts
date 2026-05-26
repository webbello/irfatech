/**
 * sitemap.xml — Sitemap Index
 * Points crawlers to the two sub-sitemaps: pages + blog.
 * Adding a new blog post? Nothing to change — blog.xml reads the filesystem.
 */
export default defineEventHandler((event) => {
  const baseURL = 'https://irfatech.in'
  const today = new Date().toISOString().split('T')[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseURL}/sitemap/pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseURL}/sitemap/blog.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return xml
})
