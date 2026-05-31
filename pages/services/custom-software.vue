<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">Custom Software</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Software Built Exactly<br /><span class="text-gradient">for How You Work</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">Custom dashboards, portals, APIs, and business applications designed around your specific operations — when off-the-shelf software simply does not fit.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss My Project
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Get a Proposal</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="item in buildItems" :key="item.title" class="card-glass p-6 flex flex-col gap-3 hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center">
              <iconify-icon :icon="item.icon" class="text-xl text-electric-400"></iconify-icon>
            </div>
            <h3 class="text-base font-semibold text-white">{{ item.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-10">
          <p class="text-sm text-slate-500 mb-4">Built with proven technologies</p>
          <div class="flex flex-wrap gap-3 justify-center">
            <span v-for="tech in techStack" :key="tech" class="px-4 py-2 rounded-full bg-navy-800 border border-navy-700 text-sm text-slate-300">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ -->
    <section class="section-padding section-dark">
      <div class="container-max max-w-3xl mx-auto">
        <UiSectionHeader eyebrow="FAQ" title="Custom Software Questions" />
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.q" class="card-glass p-6">
            <h3 class="text-base font-semibold text-white mb-2">{{ faq.q }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Social Share strip -->
    <section class="py-8 section-mid border-t border-navy-700/30">
      <div class="container-max flex flex-wrap items-center gap-3">
        <span class="text-sm text-slate-500 shrink-0">Share this page:</span>
        <SocialShare title="Custom Software Development | IRFATECH" description="Software built exactly for how you work — dashboards, portals, and business apps." />
      </div>
    </section>


    <UiCTABanner title="Have a Software Idea?" subtitle="Tell us about it. We will assess the scope and give you an honest estimate — no obligation." primary-label="Discuss My Software Project" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'Custom Software Development | IRFATECH',
  description: 'IRFATECH builds custom dashboards, portals, APIs, and business applications using Laravel, Vue.js, and modern tech stacks.',
  ogTitle: 'Custom Software Development | IRFATECH',
  ogDescription: 'Software built around your business — Laravel + Vue.js dashboards, portals, and applications tailored to your exact workflows.',
  ogUrl: 'https://irfatech.in/services/custom-software',
  ogImage: 'https://irfatech.in/images/og/og-custom.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Custom Software Development — IRFATECH',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-custom.png',
  twitterImageAlt: 'Custom Software Development | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/custom-software' }] })

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Custom Software', url: '/services/custom-software' },
])

useServiceSchema({
  name: 'Custom Software Development',
  description: 'Tailor-built dashboards, portals, APIs, and business applications using Laravel and Vue.js for SMBs.',
  url: '/services/custom-software',
  keywords: ['custom software India', 'Laravel development', 'Vue.js development', 'business dashboard', 'custom portal development'],
})

const faqs = [
  { q: 'When does a business need custom software instead of off-the-shelf tools?', a: 'When your process is unique enough that generic software forces you to work around it — rather than with it. Common triggers: multiple systems that do not talk to each other, manual steps between software tools, or a workflow no existing product supports.' },
  { q: 'How much does custom software cost?', a: 'Cost depends on complexity. A focused internal dashboard or portal typically starts from ₹1–3 lakh. Larger systems with multiple modules, integrations, and mobile access are quoted based on scope. We give honest estimates after a free assessment.' },
  { q: 'What technology does IRFATECH use?', a: 'We build with Laravel (PHP backend), Vue.js (frontend), MySQL/PostgreSQL (database), and REST APIs. These are proven, maintainable technologies — not trendy frameworks that become unmaintainable in 2 years.' },
  { q: 'Can you take over software built by another developer?', a: 'Yes. We regularly inherit existing systems, audit them, and either extend or rebuild where needed. We give an honest assessment of what we find.' },
  { q: 'Who owns the code?', a: 'You do. On project completion, full source code is delivered and you have complete ownership. No vendor lock-in.' },
]

useHowToSchema({
  name: 'How IRFATECH builds custom software for a business',
  description: 'The process for scoping, building, and delivering custom business software.',
  steps: [
    { name: 'Requirements Discovery', text: 'We document your exact requirements, map your data model, and identify integration points with existing systems.' },
    { name: 'Architecture & Proposal', text: 'We design the system architecture, choose the right approach, and deliver a detailed proposal with timeline and cost.' },
    { name: 'Development in Sprints', text: 'We build in 2-week sprints with working demos at each milestone — so you see progress and can course-correct early.' },
    { name: 'QA, Handover & Support', text: 'Full testing, deployment, documentation, team training, and 30 days of post-launch support included.' },
  ],
})

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20custom%20software%20development.'
const buildItems = [
  { icon: 'lucide:layout-dashboard', title: 'Business Dashboards', desc: 'Real-time dashboards that surface the metrics that matter most to your operations.' },
  { icon: 'lucide:door-open', title: 'Customer Portals', desc: 'Self-service portals where customers can track orders, submit requests, and view their account.' },
  { icon: 'lucide:plug', title: 'API Integrations', desc: 'Connect your existing tools — accounting, logistics, communication — into a unified workflow.' },
  { icon: 'lucide:database', title: 'Data Management Systems', desc: 'Custom databases and admin panels to manage complex data that spreadsheets cannot handle.' },
  { icon: 'lucide:store', title: 'Marketplace Platforms', desc: 'Multi-vendor marketplaces and listing platforms built to your specific requirements.' },
  { icon: 'lucide:settings-2', title: 'Business Process Tools', desc: 'Internal tools that replace manual processes — approval workflows, task management, reporting.' },
]
const techStack = ['Laravel', 'Vue.js', 'Nuxt.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'Docker', 'Linux Servers']
</script>
