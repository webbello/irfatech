<template>
  <section class="section-padding section-mid reveal-up transition-colors duration-300">
    <div class="container-max">
      <div class="mb-12 max-w-2xl">
        <div class="badge mb-4">
          <iconify-icon icon="lucide:layers" class="text-xs"></iconify-icon>
          Capabilities
        </div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Eight solutions built for<br />
          your operational growth.
        </h2>
        <p class="text-slate-400 text-lg leading-relaxed">
          From connected Odoo ERP systems to WhatsApp automation — each service is engineered to eliminate manual friction, reduce cost, and build durable business value.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-5">

        <NuxtLink
          to="/services/erp-solutions"
          class="sm:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden bg-navy-800/50 border border-navy-700/50 rounded-2xl p-8 flex flex-col hover:border-electric-500/40 hover:bg-navy-800/80 hover:shadow-glow transition-all duration-300"
        >
          <div class="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-electric-500/5 group-hover:bg-electric-500/10 transition-colors duration-500 blur-3xl"></div>
          <div class="relative flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between mb-8">
                <div class="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
                  <iconify-icon icon="lucide:layout-dashboard" class="text-2xl text-electric-500"></iconify-icon>
                </div>
                <span class="badge">Flagship Core Solution</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-electric-500 transition-colors duration-200">ERP Solutions (Odoo)</h3>
              <p class="text-slate-400 text-base leading-relaxed mb-6 max-w-md">
                Stop managing operations in siloed spreadsheets. We customize and implement Odoo ERP to connect your inventory, billing, purchase orders, accounting, and multi-branch operations.
              </p>
              <div class="flex flex-wrap gap-2 mb-8">
                <span v-for="tag in ['Inventory', 'Automated Invoicing', 'Purchases', 'Accounting', 'Consolidated Analytics']" :key="tag"
                  class="px-3 py-1 rounded-full bg-navy-700/50 text-slate-400 text-xs font-medium border border-navy-700/30">{{ tag }}</span>
              </div>
            </div>
            <div class="flex items-center gap-2 text-sm text-electric-500 font-semibold group-hover:gap-3 transition-all duration-200">
              Explore ERP Solutions
              <iconify-icon icon="lucide:arrow-right" class="text-base group-hover:translate-x-1 transition-transform duration-200"></iconify-icon>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/whatsapp-automation"
          class="group bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 hover:bg-navy-800/70 hover:shadow-glow transition-all duration-300">
          <div>
            <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20">
              <iconify-icon icon="lucide:message-circle" class="text-xl text-emerald-400"></iconify-icon>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200">WhatsApp Automation</h3>
            <p class="text-sm text-slate-400 leading-relaxed">Connect your business workflows straight to WhatsApp Business API. Automate confirmations, invoices, and alerts.</p>
          </div>
          <div class="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-electric-500 transition-colors duration-200">
            WhatsApp Integration <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/ai-workflows"
          class="group bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 flex flex-col justify-between hover:border-accent-500/30 hover:bg-navy-800/70 hover:shadow-glow transition-all duration-300">
          <div>
            <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-accent-500/10 border border-accent-500/20">
              <iconify-icon icon="lucide:bot" class="text-xl text-accent-400"></iconify-icon>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200">AI Workflows</h3>
            <p class="text-sm text-slate-400 leading-relaxed">Intelligent automation that takes repetitive data processes, document parsing, and email routing off your hands.</p>
          </div>
          <div class="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-electric-500 transition-colors duration-200">
            AI Automations <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/crm-automation"
          class="sm:col-span-2 group bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 hover:border-electric-500/30 hover:bg-navy-800/70 hover:shadow-glow transition-all duration-300">
          <div class="flex flex-col sm:flex-row items-start gap-5">
            <div class="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <iconify-icon icon="lucide:users" class="text-xl text-electric-500"></iconify-icon>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200">CRM & Sales Automation</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-4 max-w-xl">
                Keep your pipeline clean and clear. Log leads from your website and WhatsApp automatically, track follow-ups, and measure team closing ratios from a single system.
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in ['Lead Pipeline', 'WhatsApp Sync', 'Deal Analytics']" :key="tag"
                  class="px-2.5 py-0.5 rounded-full bg-navy-700/50 text-slate-400 text-xs border border-navy-700/20">{{ tag }}</span>
              </div>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink
          v-for="s in bottomServices"
          :key="s.slug"
          :to="`/services/${s.slug}`"
          class="group bg-navy-800/35 border border-navy-700/30 rounded-2xl p-6 flex flex-col justify-between hover:border-electric-500/30 hover:bg-navy-800/60 hover:shadow-glow transition-all duration-300"
        >
          <div>
            <div class="w-9 h-9 rounded-xl bg-navy-700/60 border border-navy-600/30 flex items-center justify-center mb-5 flex-shrink-0">
              <iconify-icon :icon="s.icon" class="text-lg text-slate-400 group-hover:text-electric-500 transition-colors duration-200"></iconify-icon>
            </div>
            <h3 class="text-base font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200 leading-snug">{{ s.title }}</h3>
            <p class="text-xs text-slate-400 leading-relaxed">{{ s.short }}</p>
          </div>
          <div class="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-electric-500 transition-colors duration-200">
            Details <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from '~/config/site'

const bottomServices = computed(() =>
  services.filter(s => ['custom-software', 'websites', 'mobile-apps', 'maintenance'].includes(s.slug))
)
</script>
