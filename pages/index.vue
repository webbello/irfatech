<template>
  <div class="md:pt-16">
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSaloo />
    <!-- Guinness Records -->

    <!-- The Choudhury Trophy Section -->
    <ChoudhuryTrophy />
    <!-- Contessa Classic Car Section -->
    <ContessaClassicCar />

    <!-- Featured Achievements -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">World Records & Achievements</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Recognized by Guinness World Records for extraordinary achievements in motor rallying and circumnavigation.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <iconify-icon icon="lucide:trophy" class="text-2xl text-white"></iconify-icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">First Circumnavigators</h3>
            <p class="text-gray-600">First people to circumnavigate the globe by car covering six continents (1989)</p>
            <div class="mt-4 text-sm text-blue-600 font-medium">69 days, 19 hours, 5 minutes</div>
          </div>
          
          <div class="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <iconify-icon icon="lucide:zap" class="text-2xl text-white"></iconify-icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fastest Record</h3>
            <p class="text-gray-600">Beat the British Army record by 3 hours 45 minutes (1991)</p>
            <div class="mt-4 text-sm text-purple-600 font-medium">39 days, 20 hours, 15 minutes</div>
          </div>
          
          <div class="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <iconify-icon icon="lucide:car" class="text-2xl text-white"></iconify-icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">Ambassador Legacy</h3>
            <p class="text-gray-600">Hindustan Ambassador proved Indian automotive excellence globally</p>
            <div class="mt-4 text-sm text-green-600 font-medium">40,535 KM covered</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Teaser Section -->
    <TimelineTeaser />

    <!-- Gallery Preview Section -->
     <GalleryPreview />

    <!-- Recent Journeys -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Journeys</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Explore the incredible adventures and challenges faced during their world record journeys.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JourneyCard 
            v-for="journey in featuredJourneys" 
            :key="journey.id"
            :journey="journey"
          />
        </div>
        <!-- CTA -->
        <div class="text-center mt-12">
          <NuxtLink to="/journeys" class="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-lg shadow-2xl hover:scale-110 transition">
              Explore Their Journey →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContessaClassicCar from '@/components/sections/ContessaClassicCar.vue';
import AboutSaloo from '@/components/sections/AboutSaloo.vue';
import ChoudhuryTrophy from '../components/sections/ChoudhuryTrophy.vue';
import TimelineTeaser from '@/components/sections/TimelineTeaser.vue';
import GalleryPreview from '../components/sections/GalleryPreview.vue';
import HeroSection from '../components/sections/HeroSection.vue';
useSeoMeta({
  title: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
  description: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders from Kolkata, India.',
  
  // Add these missing tags
  ogType: 'website',
  ogSiteName: 'Saloo & Neena Chowdhury',
  ogLocale: 'en_US',
  
  ogTitle: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
  ogDescription: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders from Kolkata, India.',
  ogImage: 'https://salooneenachoudhury.com/images/gallery/og-image.jpg', // Changed to HTTPS
  ogImageWidth: '1200', // Add this
  ogImageHeight: '630', // Add this
  ogImageAlt: 'Saloo and Neena Chowdhury - Guinness World Record Circumnavigators', // Add this
  ogUrl: 'https://salooneenachoudhury.com',
  
  twitterCard: 'summary_large_image',
  twitterTitle: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
  twitterDescription: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders from Kolkata, India.',
  twitterImage: 'https://salooneenachoudhury.com/images/gallery/og-image.jpg', // Changed to HTTPS
  twitterImageAlt: 'Saloo and Neena Chowdhury - Guinness World Record Circumnavigators', // Add this
  
  // Optional but recommended
  robots: 'index, follow',
  canonical: 'https://salooneenachoudhury.com'
})

const featuredJourneys = [
  {
    id: 1,
    title: 'First Circumnavigation (1989)',
    description: 'The historic first journey that established them as the first circumnavigators.',
    image: '/images/journey/Saloo-Journey1.jpg',
    duration: '69 days, 19 hours, 5 minutes',
    distance: '45,000 km'
  },
  {
    id: 2,
    title: 'Record Breaking Journey (1991)',
    description: 'The journey that broke the British Army record and secured their place in history.',
    image: '/images/journey/Saloo-Journey2.jpg',
    duration: '39 days, 20 hours, 15 minutes',
    distance: '40,535 km'
  },
  {
    id: 3,
    title: 'Australian Adventure',
    description: 'Facing wild horses and challenging terrain across the Australian continent.',
    image: '/images/journey/Saloo-Journey3.jpg',
    duration: '7 days',
    distance: '8,500 km'
  }
]
</script>
