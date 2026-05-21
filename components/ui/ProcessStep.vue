<template>
  <div class="flex flex-col sm:flex-row items-start gap-5">
    <!-- Step number + connector -->
    <div class="flex flex-col items-center flex-shrink-0">
      <div class="w-12 h-12 rounded-full bg-electric-500/10 border-2 border-electric-500/40 flex items-center justify-center font-bold text-electric-400 text-lg">
        {{ step }}
      </div>
      <div v-if="!isLast" class="w-0.5 h-10 sm:h-16 bg-gradient-to-b from-electric-500/30 to-transparent mt-2 hidden sm:block"></div>
    </div>
    <!-- Content -->
    <div class="pt-2 pb-8 sm:pb-0">
      <div class="flex items-center gap-2 mb-2">
        <iconify-icon :icon="icon" class="text-xl text-electric-400"></iconify-icon>
        <h3 class="text-base font-semibold text-white">{{ title }}</h3>
      </div>
      <p class="text-sm text-slate-400 leading-relaxed max-w-xs">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  step: { type: Number, required: true },
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  isLast: { type: Boolean, default: false },
})
</script>
