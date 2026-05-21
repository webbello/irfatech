<template>
  <div class="pt-16">
    <div v-if="study">

      <!-- Header -->
      <section class="section-padding section-dark relative overflow-hidden">
        <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
        <div class="container-max relative max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <div class="flex items-center gap-2 mb-6">
            <NuxtLink to="/portfolio" class="text-sm text-slate-400 hover:text-electric-400 transition-colors flex items-center gap-1">
              <iconify-icon icon="lucide:arrow-left" class="text-xs"></iconify-icon>
              Business Transformations
            </NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">{{ study.industry }}</span>
          </div>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {{ study.title }}
          </h1>

          <p class="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
            {{ study.summary }}
          </p>

          <!-- Meta row -->
          <div class="flex flex-wrap gap-4">
            <div v-for="tag in study.tags" :key="tag" class="badge">{{ tag }}</div>
          </div>
        </div>
      </section>

      <!-- Case Study Body -->
      <section class="section-padding section-mid">
        <div class="container-max max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <!-- Main content -->
            <div class="lg:col-span-2 space-y-10">

              <!-- Problem -->
              <div>
                <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <iconify-icon icon="lucide:alert-circle" class="text-sm text-amber-400"></iconify-icon>
                  </div>
                  The Business Problem
                </h2>
                <div class="card-glass p-6">
                  <p class="text-slate-400 leading-relaxed">{{ study.problem }}</p>
                  <ul v-if="study.problemPoints" class="mt-4 space-y-2.5">
                    <li v-for="p in study.problemPoints" :key="p" class="flex items-start gap-2 text-sm text-slate-400">
                      <iconify-icon icon="lucide:x-circle" class="text-amber-500/70 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                      {{ p }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Solution -->
              <div>
                <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-electric-500/10 flex items-center justify-center">
                    <iconify-icon icon="lucide:lightbulb" class="text-sm text-electric-400"></iconify-icon>
                  </div>
                  The IRFAtech Solution
                </h2>
                <div class="card-glass p-6">
                  <p class="text-slate-400 leading-relaxed">{{ study.solution }}</p>
                  <ul v-if="study.solutionPoints" class="mt-4 space-y-2.5">
                    <li v-for="s in study.solutionPoints" :key="s" class="flex items-start gap-2 text-sm text-slate-300">
                      <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                      {{ s }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Results -->
              <div v-if="study.results">
                <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-accent-500/10 flex items-center justify-center">
                    <iconify-icon icon="lucide:trending-up" class="text-sm text-accent-400"></iconify-icon>
                  </div>
                  Results & Impact
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div v-for="metric in study.results" :key="metric.label" class="card-glass p-5 text-center">
                    <div class="text-3xl font-bold text-electric-400 mb-1">{{ metric.value }}</div>
                    <div class="text-xs text-slate-500 uppercase tracking-wider">{{ metric.label }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <aside class="space-y-5">
              <!-- Project details -->
              <div class="card-glass p-5 sticky top-24">
                <h3 class="text-sm font-semibold text-white mb-4">Project Details</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <iconify-icon icon="lucide:building" class="text-electric-400 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                    <div>
                      <div class="text-xs text-slate-500 mb-0.5">Industry</div>
                      <div class="text-sm text-white">{{ study.industry }}</div>
                    </div>
                  </li>
                  <li v-if="study.duration" class="flex items-start gap-3">
                    <iconify-icon icon="lucide:clock" class="text-electric-400 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                    <div>
                      <div class="text-xs text-slate-500 mb-0.5">Timeline</div>
                      <div class="text-sm text-white">{{ study.duration }}</div>
                    </div>
                  </li>
                  <li v-if="study.services?.length" class="flex items-start gap-3">
                    <iconify-icon icon="lucide:layers" class="text-electric-400 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                    <div>
                      <div class="text-xs text-slate-500 mb-0.5">Services Delivered</div>
                      <div class="flex flex-wrap gap-1 mt-1">
                        <span v-for="s in study.services" :key="s" class="badge text-xs">{{ s }}</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="pt-5 mt-5 border-t border-navy-700/50 space-y-2">
                  <p class="text-xs text-slate-500">Want similar results for your business?</p>
                  <NuxtLink to="/contact" class="btn-primary text-xs px-4 py-2.5 w-full justify-center">
                    Book a Consultation
                  </NuxtLink>
                  <a
                    :href="whatsappUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-whatsapp text-xs px-4 py-2.5 w-full justify-center"
                  >
                    <iconify-icon icon="lucide:message-circle" class="text-sm"></iconify-icon>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <UiCTABanner
        title="Ready for Your Own Transformation?"
        subtitle="Every business transformation starts with a conversation. Let's have yours."
        primary-label="Start Your Project"
      />
    </div>

    <!-- 404 -->
    <div v-else class="section-padding section-dark text-center">
      <iconify-icon icon="lucide:file-x" class="text-6xl text-navy-700 mb-4"></iconify-icon>
      <h1 class="text-2xl font-bold text-white mb-2">Case Study Not Found</h1>
      <NuxtLink to="/portfolio" class="btn-ghost px-6 py-3">← Back to Portfolio</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const whatsappUrl = useWhatsApp('Hi IRFAtech, I saw your portfolio and would like to discuss a similar project.')

// Static case studies data — move to content/portfolio/ as markdown files when scaling
const caseStudies = [
  {
    slug: 'landflix-real-estate-platform',
    title: 'Landflix — Smart Real Estate Platform',
    industry: 'Real Estate',
    summary: 'Built a full property listing and lead management platform from scratch, replacing WhatsApp-based listings with a scalable digital product.',
    problem: 'The client was running their entire real estate business through WhatsApp group chats — no searchable listings, no lead tracking, no agent performance visibility.',
    problemPoints: [
      'Property listings shared as images in WhatsApp — no searchable catalog',
      'Leads lost because follow-ups were manual and inconsistent',
      'No way to see which agent was performing and which listings were getting traction',
      'No professional web presence to share with serious buyers',
    ],
    solution: 'IRFAtech designed and built Landflix — a full property technology platform with agent dashboards, smart search, WhatsApp lead integration, and real-time analytics.',
    solutionPoints: [
      'Searchable property catalog with filters (location, price, type, area)',
      'Individual agent dashboards with listing management',
      'WhatsApp API integration — every inquiry logged to CRM automatically',
      'Analytics dashboard showing views, inquiries, and conversion by listing',
      'Mobile-responsive for buyers browsing on phones',
    ],
    results: [
      { value: '3×', label: 'More Qualified Leads' },
      { value: '80%', label: 'Less Manual Work' },
      { value: '100%', label: 'Digital Listings' },
    ],
    tags: ['Real Estate', 'Custom Platform', 'CRM', 'WhatsApp API'],
    duration: '12 weeks',
    services: ['Custom Software', 'CRM Integration', 'WhatsApp Automation'],
  },
  {
    slug: 'distributor-erp-transformation',
    title: 'Multi-Branch ERP for Regional Distributor',
    industry: 'Distribution',
    summary: 'Replaced Excel-based billing and inventory with a full Odoo ERP covering 3 branches, 500+ SKUs, and automated invoicing.',
    problem: 'A regional wholesale distributor was managing 3 branches with separate Excel sheets for inventory, billing in a desktop accounting tool, and purchase orders through WhatsApp. Reconciliation took 2 days every month.',
    problemPoints: [
      '3 branches with no shared inventory visibility',
      'Billing errors averaging 15% of invoices per month',
      'Month-end reconciliation taking 2 full working days',
      'No purchase order tracking — stock-outs were common',
    ],
    solution: 'Implemented Odoo ERP with multi-branch inventory, automated billing, purchase order management, and a real-time consolidated dashboard for the owner.',
    solutionPoints: [
      'Unified inventory across all 3 branches with transfer management',
      'Automated invoicing — invoices generated from delivery orders, zero manual entry',
      'Purchase order workflow with supplier tracking',
      'Owner dashboard: daily sales, outstanding payments, stock alerts',
      'Staff trained in 2 sessions — system live within 6 weeks',
    ],
    results: [
      { value: '60%', label: 'Fewer Billing Errors' },
      { value: '2 Days → 2 Hours', label: 'Month-End Close' },
      { value: '6 Weeks', label: 'To Go Live' },
    ],
    tags: ['ERP', 'Odoo', 'Distribution', 'Multi-Branch'],
    duration: '6 weeks',
    services: ['ERP Solutions', 'Odoo Customization'],
  },
  {
    slug: 'clinic-patient-management',
    title: 'Digital Patient Management System for Clinic Group',
    industry: 'Healthcare',
    summary: 'Digitized patient records, appointment booking, and billing for a 3-location clinic group that was still operating on paper files.',
    problem: 'A growing clinic group with 3 locations was managing everything on paper — patient records, appointment books, and handwritten billing. Patient wait times were long, records were sometimes lost, and the billing team worked late every day.',
    problemPoints: [
      'Paper patient files — records lost or misfiled regularly',
      'Appointment scheduling via phone calls — double bookings and no-shows common',
      'Billing calculated manually — errors and delays',
      'No visibility across locations — management could not see daily stats',
    ],
    solution: 'Built a custom clinic management system with digital patient records, online appointment booking with SMS reminders, automated billing, and a management dashboard covering all 3 locations.',
    solutionPoints: [
      'Digital patient profiles with medical history, prescriptions, and visit records',
      'Online appointment booking — patients book themselves, receive reminders',
      'Automated billing with invoice generation and payment tracking',
      'Management dashboard: patient flow, revenue, doctor performance by location',
    ],
    results: [
      { value: '40%', label: 'Faster Patient Processing' },
      { value: '70%', label: 'Fewer No-Shows' },
      { value: '0', label: 'Lost Records' },
    ],
    tags: ['Healthcare', 'Custom Software', 'Appointment System'],
    duration: '8 weeks',
    services: ['Custom Software', 'WhatsApp Automation'],
  },
]

const study = computed(() => caseStudies.find(s => s.slug === route.params.slug))

if (study.value) {
  useSeoMeta({
    title: `${study.value.title} — IRFAtech Portfolio`,
    description: study.value.summary,
    ogTitle: study.value.title,
    ogDescription: study.value.summary,
  })

  useBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: study.value.title, url: `/portfolio/${study.value.slug}` },
  ])
}
</script>
