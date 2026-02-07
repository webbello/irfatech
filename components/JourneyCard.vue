<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
      <img 
        v-if="journey.image"
        :src="journey.image" 
        :alt="journey.title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
      <div class="absolute top-4 right-4">
        <span class="bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-medium">
          {{ journey.duration }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ journey.title }}</h3>
      <p class="text-gray-600 mb-4">{{ journey.description }}</p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center text-sm text-gray-500">
          <iconify-icon icon="lucide:map-pin" class="mr-1"></iconify-icon>
          {{ journey.distance }}
        </div>
        <NuxtLink 
          :to="`/journeys/${journey.id}`"
          class="text-blue-600 hover:text-blue-700 font-medium flex items-center"
        >
          Read More
          <iconify-icon icon="lucide:arrow-right" class="ml-1"></iconify-icon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  journey: {
    type: Object,
    required: true
  }
})
</script>
