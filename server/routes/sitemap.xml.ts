export default defineEventHandler(async (event) => {
  const baseURL = 'https://irfatech.com'

  const routes = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.9 },
    { url: '/services', changefreq: 'monthly', priority: 0.9 },
    { url: '/services/websites', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/erp', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/crm', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/ai-automation', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/custom-software', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/whatsapp-automation', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/mobile-apps', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/maintenance', changefreq: 'monthly', priority: 0.8 },
    { url: '/industries', changefreq: 'monthly', priority: 0.8 },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
    { url: '/landflix', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.9 },
    { url: '/blog/how-small-businesses-can-automate-operations', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/why-retail-shops-need-erp', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/whatsapp-business-automation-guide', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/best-crm-for-small-businesses', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/odoo-erp-pakistan-sme', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/ai-workflows-local-businesses', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/digital-transformation-real-estate', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/business-website-cost-guide', changefreq: 'monthly', priority: 0.7 },
    { url: '/portfolio/landflix-real-estate-platform', changefreq: 'monthly', priority: 0.7 },
    { url: '/portfolio/distributor-erp-transformation', changefreq: 'monthly', priority: 0.7 },
    { url: '/portfolio/clinic-patient-management', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'yearly', priority: 0.7 },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseURL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return sitemap
})
