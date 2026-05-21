<template>
  <div class="card-glass p-6 flex flex-col gap-4">
    <!-- Stars -->
    <div class="flex items-center gap-0.5">
      <iconify-icon
        v-for="i in 5"
        :key="i"
        icon="lucide:star"
        class="text-sm text-amber-400"
        style="fill: currentColor"
      ></iconify-icon>
    </div>
    <!-- Quote -->
    <blockquote class="text-slate-300 text-sm leading-relaxed flex-1">
      "{{ testimonial.quote }}"
    </blockquote>
    <!-- Author -->
    <div class="flex items-center gap-3 pt-2 border-t border-navy-700/50">
      <div class="w-10 h-10 rounded-full bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
        <span class="text-sm font-bold text-electric-400">{{ testimonial.name[0] }}</span>
      </div>
      <div>
        <div class="text-sm font-semibold text-white">{{ testimonial.name }}</div>
        <div class="text-xs text-slate-500">{{ testimonial.role }}, {{ testimonial.company }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
})
</script>
