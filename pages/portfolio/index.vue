<template>
  <div class="pt-16">

    <!-- Hero -->
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative text-center max-w-3xl mx-auto">
        <div class="badge mb-6">
          <iconify-icon icon="lucide:briefcase" class="text-xs"></iconify-icon>
          Our Work
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Business<br />
          <span class="text-gradient">Transformations</span>
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          Not just projects — real businesses that we helped digitize, automate, and scale. Each one a problem solved.
        </p>
      </div>
    </section>

    <!-- Filter + Grid -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <!-- Filter chips -->
        <div class="flex flex-wrap gap-2 justify-center mb-10">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            :class="activeFilter === filter
              ? 'bg-electric-500 text-white shadow-glow-sm'
              : 'bg-navy-800 text-slate-400 hover:text-white border border-navy-700'"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Case Study Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCaseStudyCard
            v-for="study in filteredStudies"
            :key="study.slug"
            :case-study="study"
          />
        </div>

        <!-- Empty state -->
        <div v-if="filteredStudies.length === 0" class="text-center py-16 text-slate-500">
          <iconify-icon icon="lucide:folder-open" class="text-5xl mb-3"></iconify-icon>
          <p>No case studies found for this filter.</p>
        </div>
      </div>
    </section>

    <UiCTABanner
      title="Want Results Like These?"
      subtitle="Every transformation started with a simple conversation. Let's have yours."
      primary-label="Start Your Transformation"
    />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Portfolio — Business Transformations | IRFATECH',
  description: 'See how IRFATECH has helped businesses across real estate, retail, distribution, clinics, and more go digital and grow faster.',
})

const activeFilter = ref('All')

const filters = ['All', 'Real Estate', 'Retail', 'Distribution', 'Healthcare', 'Custom Software']

const caseStudies = [
  {
    slug: 'landflix-real-estate-platform',
    title: 'Landflix — Smart Real Estate Platform',
    industry: 'Real Estate',
    summary: 'Built a full property listing and lead management platform from scratch, replacing WhatsApp-based listings with a professional digital presence.',
    result: '3x more qualified leads per month',
    tags: ['Real Estate', 'Custom Software', 'CRM'],
    image: '',
  },
  {
    slug: 'distributor-erp-transformation',
    title: 'Multi-Branch ERP for Regional Distributor',
    industry: 'Distribution',
    summary: 'Replaced Excel-based billing and inventory with a full Odoo ERP covering 3 branches, 500+ SKUs, and automated invoicing.',
    result: '60% reduction in billing errors',
    tags: ['ERP', 'Odoo', 'Distribution'],
    image: '',
  },
  {
    slug: 'clinic-patient-management',
    title: 'Digital Patient Management for Clinic Group',
    industry: 'Healthcare',
    summary: 'Digitized patient records, appointment booking, and billing for a 3-location clinic group that was still using paper files.',
    result: '40% faster patient processing',
    tags: ['Healthcare', 'Custom Software'],
    image: '',
  },
]

const filteredStudies = computed(() => {
  if (activeFilter.value === 'All') return caseStudies
  return caseStudies.filter(s => s.industry === activeFilter.value || s.tags.includes(activeFilter.value))
})
</script>
