<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About Saloo & Neena Chowdhury</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The pioneering couple from Kolkata who made history as the first and fastest 
            circumnavigators of the globe by car, covering six continents.
          </p>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div class="relative">
              <img 
                src="/images/gallery/Scan8.jpg"
                alt="Saloo and Neena Chowdhury - World Record Holders"
                class="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
              <div class="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg">
                <iconify-icon icon="lucide:trophy" class="text-2xl"></iconify-icon>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <h2 class="text-3xl font-bold">World Record Holders</h2>
            <p class="text-gray-700 leading-relaxed">
              The Guinness Book of World Records has reconfirmed Saloo and Neena Chowdhury of Kolkata 
              as the first and fastest circumnavigators of the globe covering six continents. This motor 
              rallyist couple beat the British Army's record with determination and vengeance.
            </p>
            <p class="text-gray-700 leading-relaxed">
              "We participate in a rally to win, with a vengeance. Who remembers the runner up?" says the couple. 
              Neena, who has accompanied Saloo on all his expeditions, adds, "It is a challenge for us. 
              We love adventure and are ready to face the hardships. Glamour comes only as a reward after you win."
            </p>
            
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="text-center p-4 bg-blue-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">1989</div>
                <div class="text-sm text-gray-600">First Journey</div>
              </div>
              <div class="text-center p-4 bg-purple-50 rounded-lg">
                <div class="text-2xl font-bold text-purple-600">1991</div>
                <div class="text-sm text-gray-600">Record Breaking</div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Journey Story -->
        <div class="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 class="text-3xl font-bold mb-6 text-center">The Journey to Glory</h2>
          
          <div class="space-y-6 text-gray-700">
            <p class="leading-relaxed">
              The 'first and fastest' accolade did not come to them easy. For the first time, they covered 
              45,000 kilometres in 69 days, 19 hours and 5 minutes, in 1989. The Guinness Book of World 
              Records certified Saloo and Neena Chowdhury as the first and fastest circumnavigators of the globe, 
              covering six continents.
            </p>
            
            <p class="leading-relaxed">
              However, in the 1991 edition of the book, they dropped the 'first' and mentioned them only as 
              the fastest. The British Army had accomplished the same feat in 40 days in 1991, but with 
              significant advantages - no customs hassles, passport or visa problems, delays at international 
              airports, and the backup of the Royal Air Force.
            </p>
            
            <p class="leading-relaxed">
              Not ones to give up, the Chowdhurys hit the road again. They were flagged from Delhi on 
              November 7, 1991. This time, they covered 40,535 kilometres in a record time of 39 days, 
              20 hours, 15 minutes — 3 hours and 45 minutes less than the time taken by the army.
            </p>
          </div>

          <div class="mt-10">
            <ArchivalVideo
              :title="archivalVideos.aboutJourney.title"
              :year="archivalVideos.aboutJourney.year"
              :note="archivalVideos.aboutJourney.note"
              :youtube-id="archivalVideos.aboutJourney.youtubeId"
              :transcript="archivalVideos.aboutJourney.transcript"
            />
          </div>
        </div>

        <!-- Legal Battle -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-6 text-center">The Legal Victory</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4">The Challenge</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                When Guinness would not concede them the 'first' title, the Chowdhurys filed a case 
                against Guinness Publishing Limited in the Calcutta High Court. They demanded recognition 
                as the first and fastest circumnavigators and sought seven-and-a-half million pounds in damages.
              </p>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold mb-4">The Victory</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                After five years of legal battle, on April 7, 1998, both parties signed an MOU. 
                Guinness Publishing Limited consented to recognize the Chowdhurys as the first and fastest 
                man and woman, to be included in all future editions of the Guinness Book of World Records.
              </p>
            </div>
          </div>
          
          <div class="text-center mt-8 p-6 bg-green-50 rounded-lg">
            <iconify-icon icon="lucide:award" class="text-4xl text-green-600 mb-4"></iconify-icon>
            <p class="text-lg font-semibold text-green-800">
              The Guinness World Records Road Challenge trophy is named the "Choudhury Trophy" 
              in honor of their pioneering feat.
            </p>
          </div>
        </div>

        <!-- Personal Philosophy -->
        <div class="text-center">
          <blockquote class="text-2xl font-medium text-gray-800 mb-4">
            "I did it for the city I was born in. It will feature on the world map of motor rallying."
          </blockquote>
          <cite class="text-gray-600">- Saloo Chowdhury</cite>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArchivalVideo from '@/components/ArchivalVideo.vue'
import { archivalVideos } from '@/config/archivalVideos'

useSeoMeta({
  title: 'About Saloo & Neena Chowdhury - World Record Circumnavigators',
  description: 'Learn about the pioneering couple from Kolkata who became the first and fastest circumnavigators of the globe by car, covering six continents and breaking world records.',
  ogTitle: 'About Saloo & Neena Chowdhury - World Record Circumnavigators',
  ogDescription: 'Learn about the pioneering couple from Kolkata who became the first and fastest circumnavigators of the globe by car, covering six continents and breaking world records.'
})
</script>
