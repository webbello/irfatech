<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Achievements & Records</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the remarkable achievements and world records set by 
            Saloo & Neena Chowdhury in the field of motor rallying.
          </p>
        </div>

        <!-- Main Achievement -->
        <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-16 border border-yellow-200">
          <div class="text-center">
            <div class="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <iconify-icon icon="lucide:trophy" class="text-4xl text-white"></iconify-icon>
            </div>
            <h2 class="text-3xl font-bold mb-4 text-yellow-800">Guinness World Record Holders</h2>
            <p class="text-xl text-yellow-700 mb-6">
              First and Fastest Circumnavigators of the Globe by Car
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-yellow-800">39</div>
                <div class="text-yellow-600">Days, 20 Hours, 15 Minutes</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-yellow-800">40,535</div>
                <div class="text-yellow-600">Kilometers Covered</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-yellow-800">6</div>
                <div class="text-yellow-600">Continents Traversed</div>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <ArchivalVideo
              :title="archivalVideos.achievements.title"
              :year="archivalVideos.achievements.year"
              :note="archivalVideos.achievements.note"
              :youtube-id="archivalVideos.achievements.youtubeId"
              :transcript="archivalVideos.achievements.transcript"
            />
          </div>
        </div>

        <!-- Achievement Categories -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AchievementCard 
            v-for="achievement in achievements" 
            :key="achievement.id"
            :achievement="achievement"
          />
        </div>

        <!-- Timeline of Recognition -->
        <div class="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 class="text-3xl font-bold mb-8 text-center">Recognition Timeline</h2>
          
          <div class="space-y-6">
            <div 
              v-for="recognition in recognitions" 
              :key="recognition.year"
              class="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <iconify-icon :icon="recognition.icon" class="text-2xl text-blue-600"></iconify-icon>
              </div>
              <div class="flex-1">
                <div class="flex items-center space-x-2 mb-1">
                  <span class="font-bold text-blue-600">{{ recognition.year }}</span>
                  <span class="text-gray-400">•</span>
                  <span class="font-semibold">{{ recognition.title }}</span>
                </div>
                <p class="text-gray-600">{{ recognition.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Legacy Impact -->
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-8">Legacy & Impact</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-blue-50 rounded-lg p-6">
              <iconify-icon icon="lucide:award" class="text-4xl text-blue-600 mb-4"></iconify-icon>
              <h3 class="text-xl font-semibold mb-2">Choudhury Trophy</h3>
              <p class="text-gray-700">
                The Guinness World Records Road Challenge trophy is named in their honor, 
                recognizing their pioneering contribution to motor rallying.
              </p>
            </div>
            
            <div class="bg-green-50 rounded-lg p-6">
              <iconify-icon icon="lucide:map" class="text-4xl text-green-600 mb-4"></iconify-icon>
              <h3 class="text-xl font-semibold mb-2">Kolkata on World Map</h3>
              <p class="text-gray-700">
                Their achievement put Kolkata and India on the world map of motor rallying, 
                inspiring future generations of adventurers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArchivalVideo from '@/components/ArchivalVideo.vue'
import { archivalVideos } from '@/config/archivalVideos'

useSeoMeta({
  title: 'Achievements - Saloo & Neena Chowdhury World Records',
  description: 'Discover the remarkable achievements and Guinness World Records set by Saloo & Neena Chowdhury in motor rallying and circumnavigation.',
  ogTitle: 'Achievements - Saloo & Neena Chowdhury World Records'
})

const achievements = [
  {
    id: 1,
    title: 'First & Fastest Circumnavigators',
    description: 'First man and woman to circumnavigate the globe by car covering six continents',
    icon: 'lucide:globe',
    color: 'blue',
    year: '1989',
    details: ['45,000 km in 69 days', 'Six continents covered', 'Guinness certified']
  },
  {
    id: 2,
    title: 'Fastest Record',
    description: 'Fastest circumnavigation beating the British Army record by 3 hours 45 minutes',
    icon: 'lucide:zap',
    color: 'purple',
    year: '1991',
    details: ['39 days 20 hours 15 minutes', 'Beat military record', 'No special privileges']
  },
  {
    id: 3,
    title: 'Legal Victory',
    description: 'Won 5-year legal battle against Guinness Publishing for proper recognition',
    icon: 'lucide:scale',
    color: 'green',
    year: '1998',
    details: ['Calcutta High Court case', 'Full recognition restored', 'Justice served']
  },
  {
    id: 4,
    title: 'Endurance Champions',
    description: 'Demonstrated exceptional endurance and determination across challenging terrains',
    icon: 'lucide:mountain',
    color: 'orange',
    year: 'Ongoing',
    details: ['Extreme weather conditions', 'Wild animal encounters', 'Mechanical challenges']
  },
  {
    id: 5,
    title: 'Cultural Ambassadors',
    description: 'Represented India and Kolkata on the global stage of motor rallying',
    icon: 'lucide:flag',
    color: 'red',
    year: 'Legacy',
    details: ['International recognition', 'Cultural bridge building', 'National pride']
  },
  {
    id: 6,
    title: 'Inspiration Source',
    description: 'Inspired countless adventurers and rally enthusiasts worldwide',
    icon: 'lucide:heart',
    color: 'pink',
    year: 'Continuing',
    details: ['Motivational speaking', 'Adventure community', 'Next generation inspiration']
  }
]

const recognitions = [
  {
    year: '1989',
    title: 'First Guinness Recognition',
    description: 'Initially recognized as first and fastest circumnavigators by Guinness World Records',
    icon: 'lucide:award'
  },
  {
    year: '1991',
    title: 'Title Challenged',
    description: 'Guinness dropped "first" title after British Army achievement, keeping only "fastest"',
    icon: 'lucide:alert-triangle'
  },
  {
    year: '1991',
    title: 'New Record Set',
    description: 'Completed second journey in record time, beating British Army by significant margin',
    icon: 'lucide:clock'
  },
  {
    year: '1993-1998',
    title: 'Legal Battle Period',
    description: 'Five-year legal fight in Calcutta High Court for proper recognition and damages',
    icon: 'lucide:scale'
  },
  {
    year: '1998',
    title: 'Complete Victory',
    description: 'Guinness officially recognized them as first and fastest, Choudhury Trophy established',
    icon: 'lucide:trophy'
  },
  {
    year: 'Present',
    title: 'Lasting Legacy',
    description: 'Continued recognition in all Guinness World Records editions and motor rallying community',
    icon: 'lucide:infinity'
  }
]
</script>
