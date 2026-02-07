<template>
  <div class="relative">
    <!-- Main Ambassador Car Illustration -->
    <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
      <svg viewBox="0 0 400 250" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <!-- Car Shadow -->
        <ellipse cx="200" cy="220" rx="120" ry="15" fill="#000000" opacity="0.1"/>
        
        <!-- Ambassador Car Body -->
        <g class="ambassador-showcase">
          <!-- Replace SVG car with actual image -->
          <foreignObject x="60" y="100" width="280" height="120">
            <img src="/cars/contessa.png" alt="Ambassador Car" style="width: 100%; height: 100%; object-fit: contain;" />
          </foreignObject>
        </g>
        
        <!-- World Route Lines -->
        <g class="route-lines" opacity="0.3">
          <path d="M50 50 Q200 30 350 50" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="5,5" class="route-1"/>
          <path d="M30 80 Q200 60 370 80" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="5,5" class="route-2"/>
          <path d="M60 30 Q200 10 340 30" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="5,5" class="route-3"/>
        </g>
        
        <!-- Continent Markers -->
        <g class="continent-markers">
          <circle cx="80" cy="60" r="4" fill="#ef4444" class="continent-marker"/>
          <text x="80" y="50" text-anchor="middle" font-size="8" fill="#374151">Asia</text>
          
          <circle cx="150" cy="40" r="4" fill="#ef4444" class="continent-marker"/>
          <text x="150" y="30" text-anchor="middle" font-size="8" fill="#374151">Europe</text>
          
          <circle cx="220" cy="35" r="4" fill="#ef4444" class="continent-marker"/>
          <text x="220" y="25" text-anchor="middle" font-size="8" fill="#374151">N.America</text>
          
          <circle cx="290" cy="45" r="4" fill="#ef4444" class="continent-marker"/>
          <text x="290" y="35" text-anchor="middle" font-size="8" fill="#374151">S.America</text>
          
          <circle cx="120" cy="75" r="4" fill="#ef4444" class="continent-marker"/>
          <text x="120" y="90" text-anchor="middle" font-size="8" fill="#374151">Africa</text>
          
          <circle cx="320" cy="70" r="4" fill="#ef4444" class="continent-marker"/>
          <text x="320" y="85" text-anchor="middle" font-size="8" fill="#374151">Australia</text>
        </g>
      </svg>
    </div>
    
    <!-- Floating Stats -->
    <div class="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-float">
      <div class="text-center">
        <div class="text-2xl font-bold text-blue-600">2x</div>
        <div class="text-xs text-gray-600">World Records</div>
      </div>
    </div>
    
    <div class="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-float" style="animation-delay: 1s;">
      <div class="text-center">
        <div class="text-2xl font-bold text-green-600">100%</div>
        <div class="text-xs text-gray-600">Reliability</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headlight {
  animation: headlight-glow 2s ease-in-out infinite alternate;
}

.route-lines path {
  animation: route-flow 4s linear infinite;
}

.route-1 { animation-delay: 0s; }
.route-2 { animation-delay: 1s; }
.route-3 { animation-delay: 2s; }

.continent-marker {
  animation: marker-pulse 3s ease-in-out infinite;
}

.continent-marker:nth-child(1) { animation-delay: 0s; }
.continent-marker:nth-child(3) { animation-delay: 0.5s; }
.continent-marker:nth-child(5) { animation-delay: 1s; }
.continent-marker:nth-child(7) { animation-delay: 1.5s; }
.continent-marker:nth-child(9) { animation-delay: 2s; }
.continent-marker:nth-child(11) { animation-delay: 2.5s; }

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes headlight-glow {
  0% { opacity: 0.8; }
  100% { opacity: 1; filter: drop-shadow(0 0 8px #fbbf24); }
}

@keyframes route-flow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 20; }
}

@keyframes marker-pulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.3); 
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>
