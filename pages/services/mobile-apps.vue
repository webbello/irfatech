<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">Mobile Apps</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Your Business,<br /><span class="text-gradient">In Every Pocket</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">Mobile apps for customers, field teams, or internal operations. Built for iOS and Android with a single codebase — keeping costs manageable.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss My App Idea
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Get a Proposal</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="item in appTypes" :key="item.title" class="card-glass p-6 flex flex-col gap-3 hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
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
        <UiSectionHeader eyebrow="FAQ" title="Mobile App Questions" />
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
        <SocialShare title="Mobile App Development | IRFATECH" description="Your business in every pocket — iOS and Android apps for teams and customers." />
      </div>
    </section>


    <UiCTABanner title="Have a Mobile App Idea?" subtitle="Tell us about it — we will scope it out and give you an honest estimate." primary-label="Discuss My App" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'Mobile App Development | IRFATECH',
  description: 'IRFATECH builds iOS and Android mobile apps for businesses — customer apps, field team tools, and management apps.',
  ogTitle: 'Mobile App Development | IRFATECH',
  ogDescription: 'Your business, in every pocket — iOS and Android apps for field teams, customers, and management dashboards.',
  ogUrl: 'https://irfatech.in/services/mobile-apps',
  ogImage: 'https://irfatech.in/images/og/og-mobile.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Mobile App Development — IRFATECH',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-mobile.png',
  twitterImageAlt: 'Mobile App Development | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/mobile-apps' }] })

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Mobile App Development', url: '/services/mobile-apps' },
])

useServiceSchema({
  name: 'Mobile App Development',
  description: 'iOS and Android mobile apps for businesses — customer apps, field team tools, and management dashboards.',
  url: '/services/mobile-apps',
  keywords: ['mobile app development India', 'business app development', 'iOS Android app', 'mobile app Kolkata', 'mobile app Siliguri'],
})

const faqs = [
  { q: 'Do you build native iOS and Android apps or cross-platform?', a: 'We build cross-platform apps that run natively on both iOS and Android from a single codebase. This approach keeps development cost and maintenance manageable without sacrificing performance or user experience.' },
  { q: 'How long does it take to build a mobile app?', a: 'A focused business app (3–5 core screens, one user role) typically takes 6–10 weeks. Apps with multiple user types, offline capability, or complex integrations take 10–16 weeks.' },
  { q: 'Will the app be listed on the App Store and Google Play?', a: 'Yes. We handle the App Store and Google Play submission process, including store listing, screenshots, and compliance checks. Apple and Google review times add 1–3 days after submission.' },
  { q: 'Can the app connect to our existing ERP or CRM?', a: 'Yes. API integration with your existing systems is standard in all apps we build. The app becomes a mobile interface for data that already lives in your backend systems.' },
  { q: 'What happens after launch? Who maintains the app?', a: 'We offer ongoing maintenance plans covering OS updates, bug fixes, and new feature additions. Apps that are not maintained tend to break when iOS or Android releases major updates — we keep yours current.' },
]

useHowToSchema({
  name: 'How IRFATECH builds a mobile app for a business',
  description: 'The end-to-end process for designing, building, and launching a business mobile app.',
  steps: [
    { name: 'App Scoping & UX Planning', text: 'We define user roles, core screens, data flows, and integration requirements before any design work begins.' },
    { name: 'UI Design & Prototype', text: 'We design every screen, share an interactive prototype for your feedback, and get sign-off before development.' },
    { name: 'Development & API Integration', text: 'We build the app, connect it to your backend systems, and test on real iOS and Android devices.' },
    { name: 'App Store Submission & Launch', text: 'We handle App Store and Google Play submission, manage the review process, and support your launch.' },
  ],
})

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20a%20mobile%20app.'
const appTypes = [
  { icon: 'lucide:users', title: 'Customer Apps', desc: 'Let customers track orders, book appointments, browse products, and contact you from your branded app.' },
  { icon: 'lucide:truck', title: 'Field Team Apps', desc: 'Mobile tools for delivery staff, sales reps, and field technicians to log work in real time.' },
  { icon: 'lucide:layout-dashboard', title: 'Management Apps', desc: 'Mobile dashboards so business owners can monitor operations and view reports on the go.' },
  { icon: 'lucide:shopping-bag', title: 'E-Commerce Apps', desc: 'Mobile storefronts with product catalog, cart, checkout, and order tracking.' },
  { icon: 'lucide:calendar', title: 'Booking Apps', desc: 'Service booking apps for clinics, coaching centers, and service businesses.' },
  { icon: 'lucide:map-pin', title: 'Location-Based Apps', desc: 'Property search, nearby services, delivery tracking — apps where location is a core feature.' },
]
</script>
