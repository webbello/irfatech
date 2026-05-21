<template>
  <NuxtLink
    :to="`/services/${service.slug}`"
    class="card-glass-hover p-6 flex flex-col gap-4 group"
  >
    <div class="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center group-hover:bg-electric-500/20 group-hover:border-electric-500/40 transition-all duration-300">
      <iconify-icon :icon="service.icon" class="text-2xl text-electric-400"></iconify-icon>
    </div>
    <div>
      <h3 class="text-base font-semibold text-white mb-1.5 group-hover:text-electric-400 transition-colors">
        {{ service.title }}
      </h3>
      <p class="text-sm text-slate-400 leading-relaxed">{{ service.short }}</p>
    </div>
    <div class="flex items-center gap-1 text-xs text-electric-500 font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      Learn more
      <iconify-icon icon="lucide:arrow-right" class="text-sm"></iconify-icon>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>
