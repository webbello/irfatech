<template>
  <NuxtLink
    :to="post._path"
    class="card-glass-hover group overflow-hidden flex flex-col"
  >
    <!-- Image -->
    <div class="relative overflow-hidden" :class="featured ? 'h-56' : 'h-44'">
      <NuxtImg
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div v-else class="w-full h-full bg-navy-700 flex items-center justify-center">
        <iconify-icon icon="lucide:book-open" class="text-4xl text-navy-600"></iconify-icon>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>

      <!-- Badges -->
      <div class="absolute top-3 left-3 flex gap-2">
        <span v-if="featured" class="badge-accent text-xs">Featured</span>
        <span v-if="post.category" class="badge text-xs">{{ post.category }}</span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-col gap-3 flex-1">
      <div class="flex items-center gap-3 text-xs text-slate-500">
        <span class="flex items-center gap-1">
          <iconify-icon icon="lucide:calendar" class="text-xs"></iconify-icon>
          {{ formatDate(post.date) }}
        </span>
        <span class="flex items-center gap-1">
          <iconify-icon icon="lucide:clock" class="text-xs"></iconify-icon>
          {{ readingTime }} min read
        </span>
      </div>

      <h3 class="text-base font-semibold text-white group-hover:text-electric-400 transition-colors leading-snug line-clamp-2">
        {{ post.title }}
      </h3>
      <p class="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-1">{{ post.description }}</p>

      <!-- Tags -->
      <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in post.tags.slice(0, 3)"
          :key="tag"
          class="px-2 py-0.5 rounded-full bg-navy-700 text-slate-400 text-xs"
        >
          #{{ tag }}
        </span>
      </div>

      <div class="flex items-center gap-1 text-xs text-electric-500 font-medium mt-auto pt-2 border-t border-navy-700/50">
        Read article
        <iconify-icon icon="lucide:arrow-right" class="text-sm group-hover:translate-x-1 transition-transform"></iconify-icon>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  post: { type: Object, required: true },
  featured: { type: Boolean, default: false },
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

const readingTime = computed(() => {
  const words = props.post.description?.split(' ').length ?? 100
  return Math.max(Math.ceil(words / 200), 3)
})
</script>
