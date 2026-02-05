<template>
  <NuxtLink 
    :to="post._path"
    class="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ring-1 ring-red-100/60"
    :class="featured ? 'md:col-span-1' : ''"
  >
    <div class="relative" :class="featured ? 'h-64' : 'h-48'">
      <img 
        v-if="post.image"
        :src="post.image" 
        :alt="post.title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"></div>
      
      <!-- Featured badge -->
      <div v-if="featured" class="absolute top-4 left-4">
        <span class="bg-gradient-to-r from-red-600 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          Featured
        </span>
      </div>
      
      <!-- Category badge -->
      <div class="absolute top-4 right-4">
        <span class="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
          {{ post.category }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <div class="flex items-center text-sm text-slate-500 mb-3">
        <iconify-icon icon="lucide:calendar" class="mr-1"></iconify-icon>
        <span class="mr-4">{{ formatDate(post.date) }}</span>
        <iconify-icon icon="lucide:user" class="mr-1"></iconify-icon>
        <span>{{ post.author }}</span>
      </div>
      
      <h3 class="text-xl font-semibold text-slate-900 mb-2 line-clamp-2">{{ post.title }}</h3>
      <p class="text-slate-600 mb-4 line-clamp-3">{{ post.description }}</p>
      
      <!-- Tags -->
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in post.tags.slice(0, 3)" 
          :key="tag"
          class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
        >
          #{{ tag }}
        </span>
      </div>
      
      <div class="flex items-center justify-between">
        <span class="text-red-600 hover:text-amber-600 font-semibold flex items-center">
          Read More
          <iconify-icon icon="lucide:arrow-right" class="ml-1"></iconify-icon>
        </span>
        
        <div class="flex items-center text-sm text-slate-500">
          <iconify-icon icon="lucide:clock" class="mr-1"></iconify-icon>
          <span>{{ readingTime }} min read</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})

// Format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Calculate reading time (rough estimate)
const readingTime = computed(() => {
  const wordsPerMinute = 200
  const wordCount = props.post.description ? props.post.description.split(' ').length : 100
  return Math.ceil(wordCount / wordsPerMinute) || 3
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
