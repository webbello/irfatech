<template>
  <NuxtLink :to="`/portfolio/${caseStudy.slug}`" class="card-glass-hover group overflow-hidden flex flex-col">
    <!-- Image placeholder -->
    <div class="h-44 bg-navy-700 relative overflow-hidden">
      <NuxtImg
        v-if="caseStudy.image"
        :src="caseStudy.image"
        :alt="caseStudy.title"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <iconify-icon icon="lucide:briefcase" class="text-4xl text-navy-600"></iconify-icon>
      </div>
      <!-- Overlay tags -->
      <div class="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
        <span
          v-for="tag in caseStudy.tags?.slice(0, 2)"
          :key="tag"
          class="badge text-xs"
        >{{ tag }}</span>
      </div>
    </div>

    <div class="p-5 flex flex-col gap-3 flex-1">
      <div class="text-xs text-slate-500 font-medium uppercase tracking-wider">{{ caseStudy.industry }}</div>
      <h3 class="text-base font-semibold text-white group-hover:text-electric-400 transition-colors leading-snug">
        {{ caseStudy.title }}
      </h3>
      <p class="text-sm text-slate-400 leading-relaxed flex-1">{{ caseStudy.summary }}</p>

      <!-- Result metrics -->
      <div v-if="caseStudy.result" class="pt-3 border-t border-navy-700/50">
        <div class="flex items-center gap-2 text-xs text-electric-400 font-medium">
          <iconify-icon icon="lucide:trending-up" class="text-sm"></iconify-icon>
          {{ caseStudy.result }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  caseStudy: {
    type: Object,
    required: true,
  },
})
</script>
