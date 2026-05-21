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
    <UiCTABanner title="Have a Mobile App Idea?" subtitle="Tell us about it — we will scope it out and give you an honest estimate." primary-label="Discuss My App" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({ title: 'Mobile App Development | IRFAtech', description: 'IRFAtech builds iOS and Android mobile apps for businesses — customer apps, field team tools, and management apps.' })
const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFAtech%2C%20I%20need%20a%20mobile%20app.'
const appTypes = [
  { icon: 'lucide:users', title: 'Customer Apps', desc: 'Let customers track orders, book appointments, browse products, and contact you from your branded app.' },
  { icon: 'lucide:truck', title: 'Field Team Apps', desc: 'Mobile tools for delivery staff, sales reps, and field technicians to log work in real time.' },
  { icon: 'lucide:layout-dashboard', title: 'Management Apps', desc: 'Mobile dashboards so business owners can monitor operations and view reports on the go.' },
  { icon: 'lucide:shopping-bag', title: 'E-Commerce Apps', desc: 'Mobile storefronts with product catalog, cart, checkout, and order tracking.' },
  { icon: 'lucide:calendar', title: 'Booking Apps', desc: 'Service booking apps for clinics, coaching centers, and service businesses.' },
  { icon: 'lucide:map-pin', title: 'Location-Based Apps', desc: 'Property search, nearby services, delivery tracking — apps where location is a core feature.' },
]
</script>
