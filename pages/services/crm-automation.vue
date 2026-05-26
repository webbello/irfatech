<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">CRM & Sales Automation</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Stop Losing Leads<br /><span class="text-gradient">to Manual Follow-Up</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">A CRM system tracks every lead, automates follow-ups, and shows you exactly where each potential client is in your sales process.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss CRM Options
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Get a Quote</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div v-for="feat in features" :key="feat" class="card-glass p-4 flex items-center gap-3">
            <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-base flex-shrink-0"></iconify-icon>
            <span class="text-sm text-slate-300">{{ feat }}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ -->
    <section class="section-padding section-dark">
      <div class="container-max max-w-3xl mx-auto">
        <UiSectionHeader eyebrow="FAQ" title="Common CRM Questions" />
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
          <NuxtLink to="/blog/best-crm-for-small-businesses" class="card-glass p-5 group hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="text-xs text-electric-400 mb-2 uppercase tracking-wide">CRM Guide</div>
            <h3 class="text-sm font-semibold text-white group-hover:text-electric-300 transition-colors leading-snug">Best CRM Solutions for Small Businesses in 2025</h3>
            <div class="flex items-center gap-1 mt-3 text-xs text-slate-500 group-hover:text-electric-400 transition-colors">
              <span>Read article</span>
              <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform"></iconify-icon>
            </div>
          </NuxtLink>
          <NuxtLink to="/blog/digital-transformation-real-estate" class="card-glass p-5 group hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="text-xs text-electric-400 mb-2 uppercase tracking-wide">Real Estate</div>
            <h3 class="text-sm font-semibold text-white group-hover:text-electric-300 transition-colors leading-snug">Digital Transformation for Real Estate Businesses in India</h3>
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
        <SocialShare title="CRM & Sales Automation | IRFATECH" description="Stop losing leads. Track every customer and automate follow-ups with a custom CRM." />
      </div>
    </section>


    <UiCTABanner title="Ready to Close More Deals?" subtitle="A CRM built for your specific sales process — not a generic tool your team ignores." primary-label="Get a CRM Demo" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'CRM & Sales Automation — Lead Tracking Systems | IRFATECH',
  description: 'IRFATECH builds custom CRM systems with WhatsApp API integration, lead tracking, and automated follow-ups for businesses in Kolkata, Siliguri, and across West Bengal.',
  ogTitle: 'CRM & Sales Automation Systems | IRFATECH',
  ogDescription: 'Stop losing leads. IRFATECH builds custom WhatsApp-integrated CRM systems for growing businesses.',
  ogUrl: 'https://irfatech.in/services/crm-automation',
  ogImage: 'https://irfatech.in/images/og/og-crm.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'CRM & Sales Automation Systems — IRFATECH',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-crm.png',
  twitterImageAlt: 'CRM & Sales Automation Systems | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/crm-automation' }] })

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'CRM & Sales Automation', url: '/services/crm-automation' },
])

useServiceSchema({
  name: 'CRM & Sales Automation',
  description: 'Custom CRM systems with WhatsApp API integration, lead tracking, auto follow-ups, and sales analytics.',
  url: '/services/crm-automation',
  keywords: ['CRM software', 'WhatsApp CRM', 'lead tracking system', 'sales automation India', 'CRM Siliguri', 'CRM Kolkata'],
})

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20a%20CRM%20system.'
const features = ['Lead Pipeline', 'WhatsApp Integration', 'Auto Follow-Ups', 'Customer History', 'Sales Reports', 'Team Management', 'Email Campaigns', 'Mobile Access']

const faqs = [
  { q: 'What is a CRM and does my business need one?', a: 'A CRM (Customer Relationship Management) system tracks every lead and customer interaction so nothing falls through the cracks. If you have a sales team or more than 20 active leads at a time, a CRM will directly increase your conversion rate.' },
  { q: 'How is your CRM different from Salesforce or HubSpot?', a: 'Off-the-shelf CRMs are built for generic sales processes. IRFATECH builds custom CRM systems tailored to your specific sales flow, WhatsApp integration, and industry — so your team actually uses it.' },
  { q: 'Does the CRM integrate with WhatsApp?', a: 'Yes. WhatsApp integration is a core part of every CRM we build. Leads from WhatsApp go directly into the pipeline, and follow-up messages can be sent from within the CRM.' },
  { q: 'How long does CRM implementation take?', a: 'A basic CRM with lead pipeline, WhatsApp integration, and automation typically takes 3–5 weeks. Custom workflows or deeper integrations add time.' },
  { q: 'Can my team access it on mobile?', a: 'Yes. All CRM systems we build are fully mobile-responsive and can be packaged as a mobile app for your sales team.' },
]

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)

useHowToSchema({
  name: 'How to set up a CRM for your business with IRFATECH',
  description: 'IRFATECH\'s process for building and deploying a custom CRM system.',
  steps: [
    { name: 'Sales Process Mapping', text: 'We study how your team currently handles leads — from first contact to closed deal — before designing the system.' },
    { name: 'CRM Design & Configuration', text: 'We configure the pipeline stages, fields, automation rules, and WhatsApp integration specific to your sales process.' },
    { name: 'Team Onboarding', text: 'We train your sales team hands-on, set up their accounts, and configure their mobile access.' },
    { name: 'Go-Live & Optimisation', text: 'We monitor usage for 30 days after launch and adjust workflows based on real usage patterns.' },
  ],
})
</script>
