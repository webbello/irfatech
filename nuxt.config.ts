export default defineNuxtConfig({
  compatibilityDate: '2026-01-13',
  ssr: false,
  target: 'static',
  modules: [
    '@nuxt/content',
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
  
  app: {
    baseURL: '/', // Changed from '/saloo/' to '/'
    buildAssetsDir: 'assets',
    head: {
      title: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders Saloo & Neena Chowdhury from Kolkata.' 
        },
        { name: 'keywords', content: 'Saloo Chowdhury, Neena Chowdhury, Guinness World Record, circumnavigation, motor rally, adventure, Kolkata, Ambassador car, world record holders' },
        { name: 'author', content: 'Saloo & Neena Chowdhury' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://salooneenachoudhury.com/images/gallery/og-image.jpg' },
        { property: 'og:site_name', content: 'Saloo & Neena Chowdhury' },
        { name: 'twitter:creator', content: '@SalooNeena' },
        { name: 'theme-color', content: '#3b82f6' }
      ],
      link: [
        { rel: 'canonical', href: 'https://salooneenachoudhury.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: 'https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js',
          defer: true
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Saloo Chowdhury",
            "alternateName": "Neena Chowdhury",
            "description": "World Record Holders - First and fastest circumnavigators of the globe by car",
            "url": "https://salooneenachoudhury.com",
            "sameAs": [
              "https://www.guinnessworldrecords.com"
            ],
            "knowsAbout": [
              "Motor Rally",
              "Circumnavigation",
              "World Records",
              "Adventure Travel",
              "Guinness World Records"
            ],
            "award": [
              "Guinness World Record - First Circumnavigation by Car (1989)",
              "Guinness World Record - Fastest Circumnavigation by Car (1991)"
            ],
            "birthPlace": {
              "@type": "Place",
              "name": "Kolkata, India"
            }
          })
        }
      ]
    }
  },

  content: {
    highlight: {
      theme: 'github-dark'
    },
    // Important: Configure content for static generation
    experimental: {
      clientDB: true // Enable client-side content database
    }
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'], // Add your routes here
      crawlLinks: true, // This will crawl and prerender all linked pages

    }
  },
  
  experimental: {
    payloadExtraction: false
  }
})
