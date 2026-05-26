<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">Maintenance & Support</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            We Do Not Disappear<br /><span class="text-gradient">After Launch</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">Ongoing maintenance, security updates, performance monitoring, and fast support — so your systems stay running and your business never stops.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Ask About Support Plans
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Get a Quote</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div v-for="plan in plans" :key="plan.name" class="card-glass p-6 flex flex-col gap-4" :class="plan.featured ? 'border-electric-500/40 shadow-glow-sm' : ''">
            <div v-if="plan.featured" class="badge self-start">Most Popular</div>
            <h3 class="text-xl font-bold text-white">{{ plan.name }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ plan.desc }}</p>
            <ul class="space-y-2.5 flex-1">
              <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-2 text-sm text-slate-300">
                <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                {{ feat }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-ghost text-sm px-4 py-2.5 justify-center mt-auto">Get This Plan</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ -->
    <section class="section-padding section-dark">
      <div class="container-max max-w-3xl mx-auto">
        <UiSectionHeader eyebrow="FAQ" title="Maintenance & Support Questions" />
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.q" class="card-glass p-6">
            <h3 class="text-base font-semibold text-white mb-2">{{ faq.q }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <UiCTABanner title="Already Have a System That Needs Support?" subtitle="We maintain systems we built and systems built by others. Let us assess yours." primary-label="Discuss Support Needs" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'Maintenance & Support Plans | IRFATECH',
  description: 'IRFATECH provides ongoing maintenance, security updates, performance monitoring, and fast support for websites, ERP, and custom software.',
  ogTitle: 'Maintenance & Support Plans | IRFATECH',
  ogDescription: 'Always on, always supported — ongoing monitoring, updates, and priority support so your systems never go down.',
  ogUrl: 'https://irfatech.in/services/maintenance',
  ogImage: 'https://irfatech.in/images/og/og-maintenance.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Maintenance & Support Plans — IRFATECH',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-maintenance.png',
  twitterImageAlt: 'Maintenance & Support Plans | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/maintenance' }] })

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Maintenance & Support', url: '/services/maintenance' },
])

useServiceSchema({
  name: 'Maintenance & Support',
  description: 'Ongoing maintenance, security updates, performance monitoring, and priority support for websites, ERP, and custom software.',
  url: '/services/maintenance',
  keywords: ['website maintenance India', 'ERP support', 'software maintenance', 'IT support Kolkata', 'business system support'],
})

const faqs = [
  { q: 'Do you maintain systems built by other developers?', a: 'Yes. We regularly take over maintenance of systems we did not build — websites, ERP installations, custom applications. We start with a technical audit to understand what we are working with.' },
  { q: 'What does the response time commitment mean?', a: 'Response time is how quickly we acknowledge your support request. Resolution time depends on the issue complexity. Critical system-down issues are always prioritised regardless of plan tier.' },
  { q: 'What counts as a "change request"?', a: 'A change request is any modification to existing functionality — updating content, adjusting a form, changing a report layout. New features or major redesigns are scoped separately.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes. Plans are month-to-month. You can upgrade anytime and downgrade with 30 days notice.' },
  { q: 'Is data backup included?', a: 'Yes. All plans include automated backup management — daily backups on Business and Enterprise plans, monthly on Basic. We also test restores periodically to ensure backups are actually usable.' },
]

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20maintenance%20and%20support.'
const plans = [
  { name: 'Basic', desc: 'For small websites and simple systems.', featured: false, features: ['Monthly security updates', 'Uptime monitoring', 'Backup management', '4-hour response time', '2 hours change requests/month'] },
  { name: 'Business', desc: 'For active systems where downtime impacts revenue.', featured: true, features: ['Weekly updates & monitoring', '24/7 uptime alerts', 'Daily backups', '2-hour response time', '8 hours change requests/month', 'Monthly report'] },
  { name: 'Enterprise', desc: 'For complex ERP and multi-system environments.', featured: false, features: ['Continuous monitoring', 'Priority 1-hour response', 'Dedicated support channel', 'Unlimited change requests', 'Quarterly system review', 'SLA guarantee'] },
]
</script>
