<template>
  <!-- Contessa Classic Car Heritage Section -->
    <section class="section-padding bg-gradient-to-r from-gray-50 to-blue-50">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">The Legendary Contessa Classic</h2>
            <p class="text-lg text-gray-600 mb-6">
              Our trusted companion for first and fastest circumnavigation world record journeys was the iconic Hindustan Contessa Classic - 
              a car that became synonymous with Indian motor rallying excellence.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <iconify-icon icon="lucide:check-circle" class="text-green-600 mt-1 mr-3"></iconify-icon>
                <div>
                  <h4 class="font-semibold">Reliability Champion</h4>
                  <p class="text-gray-600">Withstood extreme conditions across six continents</p>
                </div>
              </div>
              <div class="flex items-start">
                <iconify-icon icon="lucide:check-circle" class="text-green-600 mt-1 mr-3"></iconify-icon>
                <div>
                  <h4 class="font-semibold">Indian Engineering</h4>
                  <p class="text-gray-600">Proved Indian automotive excellence on the world stage</p>
                </div>
              </div>
              <div class="flex items-start">
                <iconify-icon icon="lucide:check-circle" class="text-green-600 mt-1 mr-3"></iconify-icon>
                <div>
                  <h4 class="font-semibold">Rally Heritage</h4>
                  <p class="text-gray-600">The car that made circumnavigation history</p>
                </div>
              </div>
            </div>
            <NuxtLink to="/blog/car-that-conquered-world" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-6">
              Read the Contessa Classic Story
              <iconify-icon icon="lucide:arrow-right" class="ml-2"></iconify-icon>
            </NuxtLink>
          </div>
          <div class="relative">
            <AmbassadorCarShowcase />
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
defineProps({
  journey: {
    type: Object,
    required: true
  }
})
</script>
