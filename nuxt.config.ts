export default defineNuxtConfig({
  compatibilityDate: '2026-01-13',
  ssr: false,
  target: 'static',

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'iconify-icon'
    }
  },

  vite: {
    css: {
      postcss: {
        plugins: [
          require('@tailwindcss/postcss')
        ]
      }
    }
  },

  css: ['~/assets/css/main.css'],

  image: {
    quality: 85,
    format: ['webp', 'jpg'],
  },

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      title: 'IRFAtech — Digital Infrastructure for Growing Businesses',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'IRFAtech helps businesses automate, organize, and grow digitally. Websites, ERP, CRM, AI automation, and custom software for SMBs.'
        },
        { name: 'keywords', content: 'ERP solutions, CRM software, business automation, WhatsApp automation, AI workflows, custom software development, business websites, IRFAtech' },
        { name: 'author', content: 'IRFAtech' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'IRFAtech' },
        { property: 'og:image', content: 'https://irfatech.com/images/og-image.svg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@irfatech' },
        { name: 'theme-color', content: '#0EA5E9' },
        { name: 'color-scheme', content: 'dark' }
      ],
      link: [
        { rel: 'canonical', href: 'https://irfatech.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ],
      script: [
        {
          src: 'https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js',
          defer: true
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'IRFAtech',
            'alternateName': 'Integrated Resources For Automation',
            'description': 'IRFAtech helps businesses automate, organize, and grow digitally through websites, ERP, CRM, AI automation, and custom software.',
            'url': 'https://irfatech.com',
            'logo': 'https://irfatech.com/images/logo.png',
            'foundingDate': '2009',
            'founder': {
              '@type': 'Person',
              'name': 'Muhammad Irfan'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'customer service',
              'availableLanguage': ['English', 'Urdu']
            },
            'sameAs': [],
            'knowsAbout': [
              'ERP Solutions',
              'CRM Systems',
              'Business Automation',
              'WhatsApp Automation',
              'AI Workflows',
              'Custom Software Development',
              'Business Websites',
              'Mobile App Development'
            ]
          })
        }
      ]
    }
  },

  content: {
    highlight: {
      theme: 'github-dark'
    },
    experimental: {
      clientDB: true
    }
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    }
  },

  experimental: {
    payloadExtraction: false
  }
})
