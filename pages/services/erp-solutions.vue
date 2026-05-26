<template>
  <div class="pt-16">

    <!-- Hero -->
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">ERP Solutions</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Stop Managing Your Business<br />
            <span class="text-gradient">in Spreadsheets</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">
            A proper ERP system connects your inventory, billing, CRM, and operations into one real-time dashboard — so you stop making decisions on outdated data.
          </p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss ERP for My Business
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">
              Get a Proposal
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- What it is -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="badge mb-4">What We Deliver</div>
            <h2 class="text-3xl font-bold text-white mb-5 leading-tight">
              One System. Your Entire Business.
            </h2>
            <p class="text-slate-400 leading-relaxed mb-4">
              IRFATECH implements and customizes <strong class="text-white">Odoo ERP</strong> — one of the most capable open-source business systems available — and adapts it to fit exactly how your business works.
            </p>
            <p class="text-slate-400 leading-relaxed">
              We don't give you a generic system and leave you to figure it out. We configure it for your operations, train your team, and stay as your long-term support partner.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="module in modules" :key="module" class="card-glass p-4 flex items-center gap-3">
              <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-base flex-shrink-0"></iconify-icon>
              <span class="text-sm text-slate-300">{{ module }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="section-padding section-dark">
      <div class="container-max">
        <UiSectionHeader
          eyebrow="Who It's For"
          title="ERP Works Across Every Industry"
          subtitle="We've implemented ERP systems for retailers, distributors, clinics, manufacturers, and more."
        />
        <div class="flex flex-wrap gap-3 justify-center">
          <span v-for="ind in industries" :key="ind" class="px-4 py-2 rounded-full bg-navy-800 border border-navy-700 text-sm text-slate-300">
            {{ ind }}
          </span>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <UiSectionHeader eyebrow="Our Process" title="How We Implement Your ERP" :centered="false" />
          </div>
          <div>
            <UiProcessStep
              v-for="(step, i) in process"
              :key="step.title"
              :step="i + 1"
              :icon="step.icon"
              :title="step.title"
              :description="step.description"
              :is-last="i === process.length - 1"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding section-dark">
      <div class="container-max max-w-3xl mx-auto">
        <UiSectionHeader eyebrow="FAQ" title="Common Questions About ERP" />
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.q" class="card-glass p-6">
            <h3 class="text-base font-semibold text-white mb-2">{{ faq.q }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <UiCTABanner
      title="Ready to Replace the Spreadsheets?"
      subtitle="Book a free consultation — we'll assess your operations and recommend the right ERP configuration."
      primary-label="Book ERP Consultation"
      :whatsapp-url="whatsappUrl"
    />

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ERP Solutions — Odoo Implementation for SMBs | IRFATECH',
  description: 'IRFATECH implements and customizes Odoo ERP for small and medium businesses. Inventory, billing, CRM, and operations — all in one system.',
  ogTitle: 'ERP Solutions for SMBs | IRFATECH',
  ogDescription: 'Stop managing your business in spreadsheets. IRFATECH builds real ERP systems for growing businesses.',
  ogUrl: 'https://irfatech.in/services/erp-solutions',
  ogImage: 'https://irfatech.in/images/og/og-erp.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'ERP Solutions for SMBs — IRFATECH Odoo Implementation',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-erp.png',
  twitterImageAlt: 'ERP Solutions for SMBs | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/erp-solutions' }] })

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'ERP Solutions', url: '/services/erp-solutions' },
])

useServiceSchema({
  name: 'ERP Solutions',
  description: 'Odoo ERP implementation and customization for small and medium businesses. Covers inventory, billing, CRM, HR, and operations.',
  url: '/services/erp-solutions',
  keywords: ['ERP', 'Odoo', 'inventory management', 'billing software', 'SMB ERP India'],
})

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20ERP%20for%20my%20business.'

const modules = [
  'Inventory Management', 'Billing & Invoicing', 'Purchase Orders',
  'CRM & Leads', 'HR & Payroll', 'Accounting', 'Multi-Branch', 'Reporting & Analytics',
]

const industries = ['Retail', 'Distribution', 'Manufacturing', 'Healthcare', 'Restaurants', 'Coaching Centers', 'Real Estate', 'SMB Enterprises']

const process = [
  { icon: 'lucide:search', title: 'Business Discovery', description: 'We study your current operations — how you manage stock, bill customers, and run day-to-day — before writing a single line of configuration.' },
  { icon: 'lucide:pencil-ruler', title: 'ERP Blueprint', description: 'We map your processes to the ERP system, design the module structure, and get your sign-off before implementation.' },
  { icon: 'lucide:settings-2', title: 'Configuration & Customization', description: 'We configure Odoo, build any custom modules you need, migrate your existing data, and test everything against real scenarios.' },
  { icon: 'lucide:graduation-cap', title: 'Training & Go-Live', description: 'We train your team hands-on, run a parallel period if needed, then switch you over. Support continues for 30 days after go-live.' },
]

const faqs = [
  { q: 'How long does ERP implementation take?', a: 'For a basic retail or distribution ERP (inventory + billing + CRM), expect 3–6 weeks. More complex implementations with custom modules take 6–12 weeks.' },
  { q: 'Do I need to replace my current software immediately?', a: 'No. We can run a parallel period where both systems operate, so your team can get comfortable before you make the full switch.' },
  { q: 'What if my business has specific processes that standard ERP doesn\'t support?', a: 'That\'s what customization is for. Odoo has a full development framework. IRFATECH builds custom modules to handle processes that are unique to your business.' },
  { q: 'Is Odoo expensive?', a: 'Odoo has a free community edition and affordable paid plans. Implementation cost depends on complexity. IRFATECH offers packages designed for SMB budgets — contact us for a quote.' },
  { q: 'What happens after the ERP goes live?', a: 'We provide 30 days of post-launch support included in every project. After that, we offer ongoing maintenance plans so you always have someone to call.' },
]

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)

// AEO: HowTo schema — matches the 4-step process section
useHowToSchema({
  name: 'How to implement ERP for your business with IRFATECH',
  description: 'IRFATECH\'s proven 4-step Odoo ERP implementation process for small and medium businesses.',
  steps: process.map(s => ({ name: s.title, text: s.description })),
})
</script>
