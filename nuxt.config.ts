export default defineNuxtConfig({
  compatibilityDate: '2026-01-13',
  ssr: true,

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
      title: 'IRFATECH — We Build Smart Software That Helps You Scale.',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'IRFATECH helps businesses automate, organize, and grow digitally. Websites, ERP, CRM, AI automation, and custom software for SMBs.'
        },
        { name: 'keywords', content: 'ERP solutions, CRM software, business automation, WhatsApp automation, AI workflows, custom software development, business websites, IRFATECH' },
        { name: 'author', content: 'IRFATECH' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'IRFATECH' },
        { property: 'og:locale', content: 'en_IN' },
        { property: 'og:image', content: 'https://irfatech.in/images/og/og-home.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'IRFATECH — Digital Infrastructure for Growing Businesses' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@irfatech' },
        { name: 'twitter:creator', content: '@irfatech' },
        { name: 'twitter:image', content: 'https://irfatech.in/images/og/og-home.png' },
        { name: 'twitter:image:alt', content: 'IRFATECH — Digital Infrastructure for Growing Businesses' },
        { name: 'theme-color', content: '#0EA5E9' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'google-site-verification', content: 'TGC7wuyok9pN8kHGZFUyXyVZ1d_y3lZ6a5yBkTtT7yY' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap'
        }
      ],
      script: [
        {
          innerHTML: `
            (function() {
              var theme = localStorage.getItem('color-scheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
              } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          type: 'text/javascript'
        },
        {
          src: 'https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js',
          defer: true
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'IRFATECH',
            'alternateName': 'Integrated Resources For Automation',
            'description': 'IRFATECH helps businesses automate, organize, and grow digitally through websites, ERP, CRM, AI automation, and custom software.',
            'url': 'https://irfatech.in',
            'logo': 'https://irfatech.in/images/logo.png',
            'foundingDate': '2009',
            'founder': {
              '@type': 'Person',
              'name': 'Muhammad Irfan'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+91 88 6481 2200',
              'email': 'irfatechgroup@gmail.com',
              'contactType': 'customer service',
              'availableLanguage': ['English', 'Hindi', 'Urdu']
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
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      // Crawl links from the homepage + explicitly pre-render all sitemap routes
      routes: ['/', '/sitemap.xml', '/sitemap/pages.xml', '/sitemap/blog.xml'],
      crawlLinks: true,
    }
  },

  experimental: {
    payloadExtraction: false
  }
})
