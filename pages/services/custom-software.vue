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
