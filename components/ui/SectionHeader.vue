<template>
  <div :class="['mb-12', centered ? 'text-center' : '']">
    <div :class="['inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20 text-xs font-medium mb-4', centered ? 'mx-auto' : '']" v-if="eyebrow">
      <iconify-icon v-if="eyebrowIcon" :icon="eyebrowIcon" class="text-xs"></iconify-icon>
      {{ eyebrow }}
    </div>
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
      <slot>{{ title }}</slot>
    </h2>
    <p v-if="subtitle" class="text-slate-400 text-lg max-w-2xl leading-relaxed" :class="centered ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  eyebrowIcon: String,
  title: String,
  subtitle: String,
  centered: { type: Boolean, default: true },
})
</script>
