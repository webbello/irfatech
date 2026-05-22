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
    <UiCTABanner title="Already Have a System That Needs Support?" subtitle="We maintain systems we built and systems built by others. Let us assess yours." primary-label="Discuss Support Needs" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({ title: 'Maintenance & Support Plans | IRFATECH', description: 'IRFATECH provides ongoing maintenance, security updates, performance monitoring, and fast support for websites, ERP, and custom software.' })
const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20maintenance%20and%20support.'
const plans = [
  { name: 'Basic', desc: 'For small websites and simple systems.', featured: false, features: ['Monthly security updates', 'Uptime monitoring', 'Backup management', '4-hour response time', '2 hours change requests/month'] },
  { name: 'Business', desc: 'For active systems where downtime impacts revenue.', featured: true, features: ['Weekly updates & monitoring', '24/7 uptime alerts', 'Daily backups', '2-hour response time', '8 hours change requests/month', 'Monthly report'] },
  { name: 'Enterprise', desc: 'For complex ERP and multi-system environments.', featured: false, features: ['Continuous monitoring', 'Priority 1-hour response', 'Dedicated support channel', 'Unlimited change requests', 'Quarterly system review', 'SLA guarantee'] },
]
</script>
