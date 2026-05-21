<template>
  <section class="section-padding bg-navy-900 relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-max text-center relative">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20 text-xs font-medium mb-6">
        <iconify-icon icon="lucide:rocket" class="text-xs"></iconify-icon>
        Ready to grow?
      </div>

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {{ title }}
      </h2>

      <p class="text-slate-400 text-lg max-w-xl mx-auto mb-8">
        {{ subtitle }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink :to="primaryHref" class="btn-primary px-8 py-3.5 text-base">
          <iconify-icon icon="lucide:calendar" class="text-base"></iconify-icon>
          {{ primaryLabel }}
        </NuxtLink>
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-8 py-3.5 text-base">
          <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
          {{ secondaryLabel }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: "Let's Digitize Your Business" },
  subtitle: { type: String, default: 'Book a free consultation and discover how IRFAtech can automate and scale your operations.' },
  primaryLabel: { type: String, default: 'Schedule Consultation' },
  primaryHref: { type: String, default: '/contact' },
  secondaryLabel: { type: String, default: 'Talk on WhatsApp' },
  whatsappUrl: { type: String, default: 'https://wa.me/918864812200?text=Hi%20IRFAtech%2C%20I%20need%20help%20with%20my%20business.' },
})
</script>
