<template>
  <div class="relative overflow-hidden border-y border-navy-700/30 bg-navy-900/40 py-4 transition-colors duration-300">
    <div class="flex animate-marquee whitespace-nowrap">
      <span v-for="n in 2" :key="n" class="flex items-center gap-0">
        <span
          v-for="cap in capabilities"
          :key="`${n}-${cap}`"
          class="inline-flex items-center gap-3 px-6 text-sm font-semibold text-slate-400 uppercase tracking-widest"
        >
          {{ cap }}
          <span class="text-electric-500 text-xs">•</span>
        </span>
      </span>
    </div>
    <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-950 to-transparent pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-950 to-transparent pointer-events-none"></div>
  </div>
</template>

<script setup>
const capabilities = [
  'Odoo ERP Implementations', 'WhatsApp CRM Automations', 'AI Business Workflows',
  'Custom Database Portals', 'Sales Invoicing Systems', 'Professional Platforms',
  'iOS & Android Mobile Operations', 'Multi-Branch Inventory Sync', 'Digital Transformations',
]
</script>
