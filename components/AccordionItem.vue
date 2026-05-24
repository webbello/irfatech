<template>
  <div
    class="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0"
    :class="isActive ? 'w-[340px] sm:w-[400px]' : 'w-[56px] sm:w-[64px]'"
    @mouseenter="$emit('mouseenter')"
  >
    <!-- Background Image -->
    <img
      :src="item.imageUrl"
      :alt="item.title"
      class="absolute inset-0 w-full h-full object-cover"
      @error="onImageError"
    />

    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 transition-opacity duration-500"
      :class="isActive
        ? 'bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-navy-950/10'
        : 'bg-gradient-to-t from-navy-950/80 via-navy-950/50 to-navy-950/30'"
    />

    <!-- Collapsed: vertical title at bottom -->
    <div
      v-if="!isActive"
      class="absolute inset-x-0 bottom-0 flex items-center justify-center pb-4 pointer-events-none"
    >
      <span
        class="text-white text-xs sm:text-sm font-semibold tracking-wide"
        style="writing-mode: vertical-rl; text-orientation: mixed;"
      >
        {{ item.title }}
      </span>
    </div>

    <!-- Expanded: horizontal title + description at bottom -->
    <div
      v-else
      class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none"
    >
      <span class="block text-white text-lg font-semibold mb-2">
        {{ item.title }}
      </span>
      <p class="text-slate-300 text-sm leading-relaxed animate-fadeIn">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['mouseenter'])

function onImageError(e) {
  e.target.src = 'https://placehold.co/400x420/1e293b/14b8a6?text=IRFATECH'
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out both;
}
</style>
