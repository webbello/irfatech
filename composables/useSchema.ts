/**
 * Schema.org composable — inject structured data per page.
 * Usage: call the relevant helper inside <script setup> of each page.
 */

const BASE_URL = 'https://irfatech.in'

const ORG = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'IRFATECH',
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
          name: 'IRFATECH',
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
            name: 'IRFATECH Services',
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

/** HowTo schema — for service pages with numbered process steps */
export function useHowToSchema(opts: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: opts.name,
          description: opts.description,
          provider: ORG,
          step: opts.steps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }),
      },
    ],
  })
}

/** Speakable schema — marks key sections as AI/voice-readable summaries */
export function useSpeakableSchema(cssSelectors: string[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: cssSelectors,
          },
        }),
      },
    ],
  })
}

/** Enhanced Organization schema for homepage — richer entity for GEO */
export function useEnhancedOrgSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['Organization', 'ProfessionalService'],
          '@id': `${BASE_URL}/#organization`,
          name: 'IRFATECH',
          alternateName: 'Integrated Resources For Automation',
          description: 'IRFATECH is a B2B business technology and automation company helping SMBs in India digitalize operations through ERP, CRM, AI automation, WhatsApp automation, custom software, and mobile apps.',
          url: BASE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/images/logo.png`,
            width: 200,
            height: 60,
          },
          image: `${BASE_URL}/images/og/og-home.png`,
          foundingDate: '2009',
          slogan: 'Digital Infrastructure for Growing Businesses',
          founder: {
            '@type': 'Person',
            name: 'Muhammad Irfan',
            jobTitle: 'Founder & CEO',
            worksFor: { '@id': `${BASE_URL}/#organization` },
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+91 88 6481 2200',
              email: 'irfatechgroup@gmail.com',
              contactType: 'customer service',
              availableLanguage: ['English', 'Hindi', 'Urdu'],
              contactOption: 'TollFree',
            },
            {
              '@type': 'ContactPoint',
              telephone: '+91 88 6481 2200',
              contactType: 'sales',
              availableLanguage: ['English', 'Hindi', 'Urdu'],
            },
          ],
          areaServed: [
            { '@type': 'City', name: 'Kolkata' },
            { '@type': 'City', name: 'Siliguri' },
            { '@type': 'State', name: 'West Bengal' },
            { '@type': 'Country', name: 'India' },
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'IRFATECH Business Technology Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP Solutions', url: `${BASE_URL}/services/erp-solutions` } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & Sales Automation', url: `${BASE_URL}/services/crm-automation` } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Workflow Automation', url: `${BASE_URL}/services/ai-workflows` } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp Automation', url: `${BASE_URL}/services/whatsapp-automation` } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development', url: `${BASE_URL}/services/custom-software` } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Websites', url: `${BASE_URL}/services/websites` } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development', url: `${BASE_URL}/services/mobile-apps` } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance & Support', url: `${BASE_URL}/services/maintenance` } },
            ],
          },
          knowsAbout: [
            'ERP Systems', 'Odoo ERP', 'CRM Software', 'Sales Automation',
            'AI Workflow Automation', 'WhatsApp Business API', 'Custom Software Development',
            'Laravel Development', 'Vue.js Development', 'Mobile App Development',
            'Business Websites', 'SMB Digitalization', 'Business Process Automation',
            'Inventory Management', 'Billing Software', 'Lead Tracking Systems',
            'Digital Transformation India', 'Business Technology West Bengal',
          ],
          sameAs: [
            'https://linkedin.com/company/irfatech',
            'https://facebook.com/irfatech',
            'https://instagram.com/irfatech',
          ],
          priceRange: '$$',
          currenciesAccepted: 'INR',
        }),
      },
    ],
  })
}
