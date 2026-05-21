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

    <UiCTABanner title="Ready for a Website That Works?" subtitle="Book a free consultation — we will scope your website and give you an honest timeline and cost." primary-label="Get a Website Quote" :whatsapp-url="whatsappUrl" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Business Website Development | IRFAtech',
  description: 'IRFAtech builds professional business websites that are fast, SEO-optimized, and designed to generate leads for SMBs across Pakistan.',
})
const whatsappUrl = 'https://wa.me/923001234567?text=Hi%20IRFAtech%2C%20I%20need%20a%20business%20website.'
const features = ['Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'WhatsApp Integration', 'Contact Forms', 'Blog / CMS', 'Analytics Ready', 'SSL Secured']
const faqs = [
  { q: 'How long does a business website take?', a: 'A standard business website (5-10 pages) typically takes 2-4 weeks. E-commerce or complex portals take longer.' },
  { q: 'Do you provide hosting?', a: 'We can recommend and set up hosting for you, or deploy to your existing hosting. We guide you on the best option for your budget.' },
  { q: 'Will I be able to update content myself?', a: 'Yes. We integrate a simple CMS so you can update text, images, and blog posts without touching any code.' },
  { q: 'Is SEO included?', a: 'On-page SEO (meta tags, structure, page speed) is included in every website. Content-based SEO is a separate ongoing service.' },
]
</script>
