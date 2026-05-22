<template>
  <div class="pt-16">
    <!-- Hero -->
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative text-center max-w-3xl mx-auto">
        <div class="badge mb-6">
          <iconify-icon icon="lucide:building" class="text-xs"></iconify-icon>
          Industries
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Solutions Built for<br />
          <span class="text-gradient">Your Industry</span>
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          We don't sell generic software. We build systems that fit how your specific industry operates — because we've done it before.
        </p>
      </div>
    </section>

    <!-- Industry Details -->
    <section class="section-padding section-mid">
      <div class="container-max space-y-6">
        <div
          v-for="(industry, i) in industryDetails"
          :key="industry.label"
          class="card-glass p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start hover:border-electric-500/30 transition-all duration-300"
          :class="i % 2 === 1 ? 'lg:grid-cols-3' : ''"
        >
          <!-- Label -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
              <iconify-icon :icon="industry.icon" class="text-2xl text-electric-400"></iconify-icon>
            </div>
            <div>
              <h2 class="text-xl font-bold text-white mb-1">{{ industry.label }}</h2>
              <p class="text-sm text-slate-400">{{ industry.desc }}</p>
            </div>
          </div>

          <!-- Problems -->
          <div>
            <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Common Challenges</h3>
            <ul class="space-y-2">
              <li v-for="p in industry.problems" :key="p" class="flex items-start gap-2 text-sm text-slate-400">
                <iconify-icon icon="lucide:alert-circle" class="text-amber-500/70 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                {{ p }}
              </li>
            </ul>
          </div>

          <!-- Solutions -->
          <div>
            <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">IRFATECH Solutions</h3>
            <ul class="space-y-2">
              <li v-for="s in industry.solutions" :key="s" class="flex items-start gap-2 text-sm text-slate-300">
                <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                {{ s }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <UiCTABanner
      title="Don't See Your Industry?"
      subtitle="We've worked with many more business types. Let's talk and see how we can help yours."
      primary-label="Tell Us About Your Business"
    />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Industries We Serve — Real Estate, Retail, Clinics & More | IRFATECH',
  description: 'IRFATECH builds digital solutions for real estate, retail shops, distributors, clinics, restaurants, coaching centers, and SMB enterprises.',
})

const industryDetails = [
  {
    icon: 'lucide:building-2',
    label: 'Real Estate',
    desc: 'Property agencies, developers, and brokers',
    problems: ['Manual property listings on WhatsApp', 'Lost leads with no follow-up system', 'No visibility into agent performance'],
    solutions: ['Property listing platform (like Landflix)', 'CRM with WhatsApp lead capture', 'Agent dashboard with performance analytics'],
  },
  {
    icon: 'lucide:shopping-bag',
    label: 'Retail Shops',
    desc: 'Shops, boutiques, and product sellers',
    problems: ['Manual billing and inventory tracking', 'Stock-outs and over-ordering', 'No customer purchase history'],
    solutions: ['POS system with real-time inventory', 'Automated reorder alerts', 'Customer loyalty and purchase tracking'],
  },
  {
    icon: 'lucide:truck',
    label: 'Distributors',
    desc: 'Wholesale and supply chain businesses',
    problems: ['Manual order processing across branches', 'Delayed invoicing and payment tracking', 'No route or delivery visibility'],
    solutions: ['ERP with multi-branch order management', 'Automated invoicing and payment reminders', 'Delivery tracking and route management'],
  },
  {
    icon: 'lucide:stethoscope',
    label: 'Clinics & Healthcare',
    desc: 'Clinics, diagnostic centers, and hospitals',
    problems: ['Paper-based patient records', 'Appointment booking via phone calls', 'Manual billing and insurance claims'],
    solutions: ['Digital patient record management', 'Online appointment booking system', 'Automated billing and reporting'],
  },
  {
    icon: 'lucide:utensils',
    label: 'Restaurants',
    desc: 'Restaurants, cafes, and food businesses',
    problems: ['Manual order taking causing errors', 'No visibility into bestsellers', 'Customer feedback not captured'],
    solutions: ['Digital ordering and POS integration', 'Sales analytics and menu optimization', 'Customer feedback and loyalty system'],
  },
  {
    icon: 'lucide:graduation-cap',
    label: 'Coaching Centers',
    desc: 'Academies, tutors, and training institutes',
    problems: ['Manual fee collection and tracking', 'Attendance and schedule management by hand', 'No parent communication system'],
    solutions: ['Enrollment and fee management system', 'Digital attendance and scheduling', 'WhatsApp-based parent notifications'],
  },
  {
    icon: 'lucide:briefcase',
    label: 'SMB Enterprises',
    desc: 'Any growing business with multiple operations',
    problems: ['Data scattered across spreadsheets', 'No unified view of business performance', 'Manual processes slowing growth'],
    solutions: ['Full ERP and CRM integration', 'Real-time business dashboard', 'End-to-end workflow automation'],
  },
]
</script>
