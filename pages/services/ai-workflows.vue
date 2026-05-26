<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">AI & Workflow Automation</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Let AI Handle<br /><span class="text-gradient">the Repetitive Work</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">AI chatbots, document automation, and smart workflows — built for real-world business operations, not just demos.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss AI for My Business
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Book Consultation</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="item in automations" :key="item.title" class="card-glass p-6 flex flex-col gap-3 hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center">
              <iconify-icon :icon="item.icon" class="text-xl text-electric-400"></iconify-icon>
            </div>
            <h3 class="text-base font-semibold text-white">{{ item.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ -->
    <section class="section-padding section-dark">
      <div class="container-max max-w-3xl mx-auto">
        <UiSectionHeader eyebrow="FAQ" title="AI Automation Questions Answered" />
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
        <SocialShare title="AI & Workflow Automation | IRFATECH" description="Let AI handle repetitive work. Smart workflows built for real business operations." />
      </div>
    </section>


    <UiCTABanner title="What Can AI Automate for Your Business?" subtitle="Book a free consultation — we will identify the highest-ROI automation opportunities in your operations." primary-label="Get AI Consultation" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'AI & Workflow Automation — Smart Business Systems | IRFATECH',
  description: 'IRFATECH builds custom AI chatbots, document automation, and intelligent workflows for businesses in Siliguri, Kolkata, and West Bengal.',
  ogTitle: 'AI & Workflow Automation Systems | IRFATECH',
  ogDescription: 'Let AI handle repetitive work. IRFATECH builds smart workflows and custom AI solutions for growing businesses.',
  ogUrl: 'https://irfatech.in/services/ai-workflows',
  ogImage: 'https://irfatech.in/images/og/og-ai.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'AI & Workflow Automation Systems — IRFATECH',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-ai.png',
  twitterImageAlt: 'AI & Workflow Automation Systems | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/ai-workflows' }] })

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'AI & Workflow Automation', url: '/services/ai-workflows' },
])

useServiceSchema({
  name: 'AI & Workflow Automation',
  description: 'Custom AI chatbots, document automation, and intelligent business workflows for SMBs.',
  url: '/services/ai-workflows',
  keywords: ['AI automation', 'business workflows', 'AI chatbots', 'document automation India', 'AI Siliguri', 'AI Kolkata'],
})

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20AI%20automation%20for%20my%20business.'

const faqs = [
  { q: 'Do I need a tech team to maintain AI workflows?', a: 'No. IRFATECH builds AI workflows with a non-technical operator in mind. Once set up, most workflows run without any manual intervention. We also provide ongoing support.' },
  { q: 'Which business tasks can AI realistically automate?', a: 'High-value automation targets include: customer inquiry replies (WhatsApp/email), invoice and document generation, lead qualification, data entry from PDFs, and daily/weekly report creation. We start with the highest-ROI tasks first.' },
  { q: 'How is AI automation different from standard software automation?', a: 'Standard automation follows fixed rules. AI automation can interpret unstructured data — like a customer\'s free-text WhatsApp message — and respond intelligently, adapting to context rather than just matching keywords.' },
  { q: 'How long does it take to set up AI workflows?', a: 'Simple automations (e.g., WhatsApp auto-reply, invoice generation) take 1–2 weeks. Complex multi-step workflows with integrations across multiple systems take 3–6 weeks.' },
  { q: 'What does AI automation cost?', a: 'Costs depend on complexity. We structure projects with a one-time build fee and optional monthly maintenance. Contact us for a free assessment and honest estimate.' },
]

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)

useHowToSchema({
  name: 'How IRFATECH implements AI automation for a business',
  description: 'The process IRFATECH uses to identify, build, and deploy AI workflows for SMBs.',
  steps: [
    { name: 'Automation Audit', text: 'We review your current operations to identify the 3–5 tasks that consume the most manual hours and are best suited for automation.' },
    { name: 'Workflow Design', text: 'We design the automation logic, map data flows between systems, and get your sign-off before building.' },
    { name: 'Build & Integration', text: 'We build the AI workflow, connect it to your existing tools (WhatsApp, ERP, email), and test it with real business scenarios.' },
    { name: 'Handover & Monitoring', text: 'We train your team to monitor the automation, set up alerts for edge cases, and provide 30 days of post-launch support.' },
  ],
})

const automations = [
  { icon: 'lucide:bot', title: 'AI Chat Assistants', desc: 'Custom AI chatbots that handle customer inquiries, qualify leads, and book appointments around the clock.' },
  { icon: 'lucide:file-text', title: 'Document Automation', desc: 'Automatically generate quotes, invoices, contracts, and reports from your existing data.' },
  { icon: 'lucide:workflow', title: 'Smart Workflows', desc: 'Multi-step automation that triggers actions across your systems when business events occur.' },
  { icon: 'lucide:mail', title: 'Message Automation', desc: 'Intelligent sequences that send the right message at the right time based on customer behavior.' },
  { icon: 'lucide:bar-chart-2', title: 'Data Processing', desc: 'Automatically extract, clean, and process data from multiple sources into clean reports.' },
  { icon: 'lucide:brain', title: 'AI-Powered Insights', desc: 'Use AI to analyze your business data and surface patterns, risks, and opportunities.' },
]
</script>
