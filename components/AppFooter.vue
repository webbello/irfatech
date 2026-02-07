<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-max section-padding">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <iconify-icon icon="lucide:globe" class="text-2xl text-blue-400"></iconify-icon>
            <span class="font-bold text-xl">Saloo & Neena Journey</span>
          </div>
          <p class="text-gray-300 mb-4">
            First and fastest circumnavigators of the globe covering six continents. 
            Guinness World Record holders from Kolkata, India.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <iconify-icon icon="lucide:twitter" class="text-xl"></iconify-icon>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/journeys" class="text-gray-300 hover:text-white transition-colors">Journeys</NuxtLink></li>
            <li><NuxtLink to="/achievements" class="text-gray-300 hover:text-white transition-colors">Achievements</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="text-gray-300 hover:text-white transition-colors">Gallery</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Contact</h3>
          <div class="space-y-2 text-gray-300">
            <p class="flex items-center">
              <iconify-icon icon="lucide:map-pin" class="mr-2"></iconify-icon>
              Kolkata, India
            </p>
            <p class="flex items-center">
              <iconify-icon icon="lucide:mail" class="mr-2"></iconify-icon>
              contact@saloojourney.com
            </p>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Saloo & Neena Chowdhury. All rights reserved. Developed and designed by pyindia.com.</p>
      </div>
    </div>
  </footer>
</template>
