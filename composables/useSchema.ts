/**
 * Schema.org composable — inject structured data per page.
 * Usage: call the relevant helper inside <script setup> of each page.
 */

const BASE_URL = 'https://irfatech.in'

const ORG = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'IRFAtech',
  alternateName: 'Integrated Resources For Automation',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  founder: { '@type': 'Person', name: 'Muhammad Irfan' },
  foundingDate: '2009',
  areaServed: 'India',
}

/** Inject a Service schema for each service page */
export function useServiceSchema(opts: {
  name: string
  description: string
  url: string
  keywords?: string[]
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: opts.name,
          description: opts.description,
          url: `${BASE_URL}${opts.url}`,
          provider: ORG,
          areaServed: 'India',
          serviceType: opts.name,
          ...(opts.keywords ? { keywords: opts.keywords.join(', ') } : {}),
        }),
      },
    ],
  })
}

/** Inject an Article schema for blog posts */
export function useArticleSchema(opts: {
  title: string
  description: string
  slug: string
  date?: string
  image?: string
  author?: string
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: opts.title,
          description: opts.description,
          url: `${BASE_URL}/blog/${opts.slug}`,
          datePublished: opts.date,
          dateModified: opts.date,
          image: opts.image || `${BASE_URL}/images/og-image.jpg`,
          author: {
            '@type': 'Person',
            name: opts.author || 'Muhammad Irfan',
            worksFor: ORG,
          },
          publisher: ORG,
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${opts.slug}` },
        }),
      },
    ],
  })
}

/** Inject a FAQPage schema — pass array of { q, a } objects */
export function useFaqSchema(faqs: { q: string; a: string }[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }),
      },
    ],
  })
}

/** Inject LocalBusiness schema — used on the Contact page */
export function useLocalBusinessSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${BASE_URL}/#localbusiness`,
          name: 'IRFAtech',
          description: 'Digital infrastructure company helping SMBs automate, organize, and grow digitally.',
          url: BASE_URL,
          telephone: '+91 88 6481 2200',
          email: 'irfatechgroup@gmail.com',
          priceRange: '$$',
          currenciesAccepted: 'INR',
          paymentAccepted: 'Bank Transfer, UPI, Cash',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '19:00',
            },
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'IRFAtech Services',
            itemListElement: [
              'Business Websites', 'ERP Solutions', 'CRM Systems',
              'AI Automation', 'Custom Software', 'WhatsApp Automation',
              'Mobile Apps', 'Maintenance & Support',
            ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
          },
        }),
      },
    ],
  })
}

/** BreadcrumbList schema for inner pages */
export function useBreadcrumbSchema(crumbs: { name: string; url: string }[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: crumb.name,
            item: `${BASE_URL}${crumb.url}`,
          })),
        }),
      },
    ],
  })
}
