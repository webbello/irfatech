<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">Business Websites</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            A Website That Actually<br /><span class="text-gradient">Generates Business</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">Your website is your most important salesperson — it works 24/7. We build fast, professional websites designed to build trust and convert visitors into leads.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss My Website
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Get a Quote</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="badge mb-4">What We Build</div>
            <h2 class="text-3xl font-bold text-white mb-5">Websites Built for Business Outcomes</h2>
            <p class="text-slate-400 leading-relaxed mb-4">We do not build brochure websites. Every element is designed with one goal: turning visitors into inquiries.</p>
            <p class="text-slate-400 leading-relaxed">Built with Nuxt.js — fast-loading, SEO-optimized, and fully mobile-responsive from day one.</p>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="feat in features" :key="feat" class="card-glass p-4 flex items-center gap-3">
              <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-base flex-shrink-0"></iconify-icon>
              <span class="text-sm text-slate-300">{{ feat }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding section-dark">
      <div class="container-max max-w-3xl mx-auto">
        <UiSectionHeader eyebrow="FAQ" title="Website Questions Answered" />
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.q" class="card-glass p-6">
            <h3 class="text-base font-semibold text-white mb-2">{{ faq.q }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Related Reading -->
    <section class="section-padding section-mid">
      <div class="container-max max-w-3xl mx-auto">
        <div class="flex items-center gap-2 mb-6">
          <iconify-icon icon="lucide:book-open" class="text-electric-400 text-base"></iconify-icon>
          <span class="text-sm font-semibold text-electric-400 uppercase tracking-wide">From the Blog</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NuxtLink to="/blog/business-website-cost-guide" class="card-glass p-5 group hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="text-xs text-electric-400 mb-2 uppercase tracking-wide">Pricing Guide</div>
            <h3 class="text-sm font-semibold text-white group-hover:text-electric-300 transition-colors leading-snug">How Much Does a Business Website Cost in India? (2025 Honest Guide)</h3>
            <div class="flex items-center gap-1 mt-3 text-xs text-slate-500 group-hover:text-electric-400 transition-colors">
              <span>Read article</span>
              <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform"></iconify-icon>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- Social Share strip -->
    <section class="py-8 section-mid border-t border-navy-700/30">
      <div class="container-max flex flex-wrap items-center gap-3">
        <span class="text-sm text-slate-500 shrink-0">Share this page:</span>
        <SocialShare title="Business Website Development | IRFATECH" description="Professional websites built to generate leads and win clients for your business." />
      </div>
    </section>


    <UiCTABanner title="Ready for a Website That Works?" subtitle="Book a free consultation — we will scope your website and give you an honest timeline and cost." primary-label="Get a Website Quote" :whatsapp-url="whatsappUrl" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Business Website Development | IRFATECH',
  description: 'IRFATECH builds professional business websites that are fast, SEO-optimized, and designed to generate leads for SMBs across India.',
  ogTitle: 'Business Website Development | IRFATECH',
  ogDescription: 'A website that actually wins clients — professional, fast, and built to convert visitors into customers.',
  ogUrl: 'https://irfatech.in/services/websites',
  ogImage: 'https://irfatech.in/images/og/og-websites.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Business Website Development — IRFATECH',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-websites.png',
  twitterImageAlt: 'Business Website Development | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/websites' }] })

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Business Websites', url: '/services/websites' },
])

useServiceSchema({
  name: 'Business Website Development',
  description: 'Professional business websites that are fast, SEO-optimized, and designed to generate leads for SMBs across India.',
  url: '/services/websites',
  keywords: ['business website India', 'website development Kolkata', 'website development Siliguri', 'SEO website SMB', 'professional business website'],
})

useHowToSchema({
  name: 'How IRFATECH builds a business website',
  description: 'Step-by-step process for building a professional business website with IRFATECH.',
  steps: [
    { name: 'Discovery & Briefing', text: 'We understand your business goals, target audience, competitors, and the pages you need — before any design starts.' },
    { name: 'Design & Prototype', text: 'We design the homepage and key pages, share them for your feedback, and get sign-off before development begins.' },
    { name: 'Development & Content', text: 'We build the site, integrate your content, set up forms, WhatsApp button, analytics, and CMS so you can self-manage.' },
    { name: 'SEO & Launch', text: 'We optimize on-page SEO, test across devices, set up Google Search Console, then deploy to your domain.' },
  ],
})

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20a%20business%20website.'
const features = ['Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'WhatsApp Integration', 'Contact Forms', 'Blog / CMS', 'Analytics Ready', 'SSL Secured']
const faqs = [
  { q: 'How long does a business website take?', a: 'A standard business website (5-10 pages) typically takes 2-4 weeks. E-commerce or complex portals take longer.' },
  { q: 'Do you provide hosting?', a: 'We can recommend and set up hosting for you, or deploy to your existing hosting. We guide you on the best option for your budget.' },
  { q: 'Will I be able to update content myself?', a: 'Yes. We integrate a simple CMS so you can update text, images, and blog posts without touching any code.' },
  { q: 'Is SEO included?', a: 'On-page SEO (meta tags, structure, page speed) is included in every website. Content-based SEO is a separate ongoing service.' },
]

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)
</script>
