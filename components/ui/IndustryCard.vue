<template>
  <div class="card-glass p-5 flex flex-col items-center text-center gap-3 group hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
    <div class="w-12 h-12 rounded-xl bg-navy-700 border border-navy-600/50 flex items-center justify-center group-hover:bg-electric-500/10 group-hover:border-electric-500/30 transition-all duration-300">
      <iconify-icon :icon="industry.icon" class="text-2xl text-slate-400 group-hover:text-electric-400 transition-colors duration-300"></iconify-icon>
    </div>
    <div>
      <h3 class="text-sm font-semibold text-white mb-1">{{ industry.label }}</h3>
      <p class="text-xs text-slate-500 leading-relaxed">{{ industry.desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  industry: {
    type: Object,
    required: true,
  },
})
</script>
