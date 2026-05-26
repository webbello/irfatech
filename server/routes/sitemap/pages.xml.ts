/**
 * /sitemap/pages.xml — Static pages sitemap
 * Covers all non-blog routes. Update this file when adding new pages.
 * Images reference the per-page OG PNG from Phase 1.
 */

interface PageEntry {
  url: string
  changefreq: string
  priority: number
  lastmod?: string
  image?: { loc: string; title: string }
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
  const today = new Date().toISOString().split('T')[0]

  const pages: PageEntry[] = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      image: { loc: `${base}/images/og/og-home.png`, title: 'IRFATECH — Digital Infrastructure for Growing Businesses' },
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: 0.9,
      image: { loc: `${base}/images/og/og-about.png`, title: 'About IRFATECH — Founder-Led Business Technology' },
    },
    {
      url: '/services',
      changefreq: 'monthly',
      priority: 0.9,
      image: { loc: `${base}/images/og/og-services.png`, title: 'IRFATECH Services — Full-Stack Business Digitalization' },
    },
    {
      url: '/services/erp-solutions',
      changefreq: 'monthly',
      priority: 0.85,
      image: { loc: `${base}/images/og/og-erp.png`, title: 'ERP Solutions for SMBs | IRFATECH' },
    },
    {
      url: '/services/crm-automation',
      changefreq: 'monthly',
      priority: 0.85,
      image: { loc: `${base}/images/og/og-crm.png`, title: 'CRM & Sales Automation | IRFATECH' },
    },
    {
      url: '/services/ai-workflows',
      changefreq: 'monthly',
      priority: 0.85,
      image: { loc: `${base}/images/og/og-ai.png`, title: 'AI & Workflow Automation | IRFATECH' },
    },
    {
      url: '/services/whatsapp-automation',
      changefreq: 'monthly',
      priority: 0.85,
      image: { loc: `${base}/images/og/og-whatsapp.png`, title: 'WhatsApp Business Automation | IRFATECH' },
    },
    {
      url: '/services/custom-software',
      changefreq: 'monthly',
      priority: 0.85,
      image: { loc: `${base}/images/og/og-custom.png`, title: 'Custom Software Development | IRFATECH' },
    },
    {
      url: '/services/websites',
      changefreq: 'monthly',
      priority: 0.85,
      image: { loc: `${base}/images/og/og-websites.png`, title: 'Business Website Development | IRFATECH' },
    },
    {
      url: '/services/mobile-apps',
      changefreq: 'monthly',
      priority: 0.85,
      image: { loc: `${base}/images/og/og-mobile.png`, title: 'Mobile App Development | IRFATECH' },
    },
    {
      url: '/services/maintenance',
      changefreq: 'monthly',
      priority: 0.8,
      image: { loc: `${base}/images/og/og-maintenance.png`, title: 'Maintenance & Support Plans | IRFATECH' },
    },
    {
      url: '/industries',
      changefreq: 'monthly',
      priority: 0.8,
      image: { loc: `${base}/images/og/og-industries.png`, title: 'Industries We Serve | IRFATECH' },
    },
    {
      url: '/landflix',
      changefreq: 'monthly',
      priority: 0.75,
    },
    {
      url: '/portfolio',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: 0.9,
      image: { loc: `${base}/images/og/og-blog.png`, title: 'IRFATECH Blog — Business Tech Insights' },
    },
    {
      url: '/contact',
      changefreq: 'yearly',
      priority: 0.75,
      image: { loc: `${base}/images/og/og-contact.png`, title: 'Contact IRFATECH — Free Business Consultation' },
    },
  ]

  const urlEntries = pages.map((page) => {
    const imageTag = page.image
      ? `\n    <image:image>
      <image:loc>${escapeXml(page.image.loc)}</image:loc>
      <image:title>${escapeXml(page.image.title)}</image:title>
    </image:image>`
      : ''

    return `  <url>
    <loc>${escapeXml(base + page.url)}</loc>
    <lastmod>${page.lastmod || today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>${imageTag}
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
