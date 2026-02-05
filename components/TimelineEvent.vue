<template>
  <div class="relative mb-10 md:mb-12">
    <div
      class="flex flex-col md:items-center gap-4 md:gap-0"
      :class="isEven(index) ? 'md:flex-row' : 'md:flex-row-reverse'"
    >
      <!-- Timeline marker -->
      <div
        class="w-full md:w-2/12 flex justify-start md:justify-center order-1 md:order-none"
        aria-hidden="true"
      >
        <div class="relative">
          <div
            class="w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white shadow-lg z-10 relative"
            :class="dotClass(index)"
          >
            <div class="absolute inset-0 rounded-full animate-ping opacity-60" :class="dotClass(index)"></div>
          </div>

          <!-- Globe animation for destinations -->
          <div class="absolute -top-8 -left-8 w-16 h-16 opacity-15">
            <GlobeParallax :index="index" />
          </div>
        </div>
      </div>

      <!-- Content -->
      <div
        class="w-full md:w-5/12 order-2 md:order-none text-left"
        :class="isEven(index) ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'"
      >
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4 justify-start" :class="isEven(index) ? 'md:justify-end' : 'md:justify-start'">
            <span
              class="px-4 py-2 text-white rounded-full font-bold text-base shadow-lg"
              :class="badgeClass(index)"
            >
              {{ event.year }}
            </span>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-2">{{ event.title }}</h3>
          <p class="text-slate-600 mb-4 leading-relaxed">{{ event.description }}</p>

          <div
            class="flex items-center mb-4 justify-start text-sm font-semibold"
            :class="isEven(index) ? 'md:justify-end text-red-600' : 'md:justify-start text-amber-600'"
          >
            <iconify-icon icon="lucide:map-pin" class="mr-1"></iconify-icon>
            <span>{{ event.location }}</span>
          </div>

          <div class="space-y-2">
            <h4 class="font-semibold text-sm text-slate-700">Key Achievements:</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="achievement in event.achievements"
                :key="achievement"
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                :class="pillClass(index)"
              >
                <iconify-icon icon="lucide:check-circle" class="text-emerald-600"></iconify-icon>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div
        class="w-full md:w-5/12 order-3 md:order-none mt-4 md:mt-0"
        :class="isEven(index) ? 'md:pl-8' : 'md:pr-8'"
      >
        <div class="relative overflow-hidden rounded-2xl shadow-xl border-2" :class="imageBorderClass(index)">
          <img
            v-if="event.image"
            :src="event.image"
            :alt="event.title"
            class="w-full h-56 sm:h-64 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const isEven = (value) => value % 2 === 0
const badgeClass = (value) => (isEven(value) ? 'bg-red-600' : 'bg-amber-600')
const dotClass = (value) =>
  isEven(value) ? 'bg-gradient-to-br from-red-600 to-amber-600' : 'bg-gradient-to-br from-amber-600 to-red-600'
const pillClass = (value) =>
  isEven(value) ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
const imageBorderClass = (value) => (isEven(value) ? 'border-red-200' : 'border-amber-200')
</script>
