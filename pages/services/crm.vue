<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">CRM & Sales Automation</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Stop Losing Leads<br /><span class="text-gradient">to Manual Follow-Up</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">A CRM system tracks every lead, automates follow-ups, and shows you exactly where each potential client is in your sales process.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss CRM Options
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Get a Quote</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div v-for="feat in features" :key="feat" class="card-glass p-4 flex items-center gap-3">
            <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-base flex-shrink-0"></iconify-icon>
            <span class="text-sm text-slate-300">{{ feat }}</span>
          </div>
        </div>
      </div>
    </section>
    <UiCTABanner title="Ready to Close More Deals?" subtitle="A CRM built for your specific sales process — not a generic tool your team ignores." primary-label="Get a CRM Demo" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({ title: 'CRM & Sales Automation | IRFATECH', description: 'IRFATECH builds CRM systems with WhatsApp integration, lead tracking, and automated follow-ups for growing businesses.' })
const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20a%20CRM%20system.'
const features = ['Lead Pipeline', 'WhatsApp Integration', 'Auto Follow-Ups', 'Customer History', 'Sales Reports', 'Team Management', 'Email Campaigns', 'Mobile Access']
</script>
