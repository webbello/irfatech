<template>
  <div class="w-full h-full relative">
    <!-- Road Animation -->
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <!-- Road -->
      <!-- <path 
        d="M0 400 Q300 350 600 400 T1200 400" 
        stroke="#e5e7eb" 
        stroke-width="80" 
        fill="none" 
        class="road-path"
      />
      <path 
        d="M0 400 Q300 350 600 400 T1200 400" 
        stroke="#d1d5db" 
        stroke-width="4" 
        fill="none" 
        stroke-dasharray="20,20"
        class="road-center-line"
      /> -->
      
      <!-- Ambassador Car SVG -->
      <g class="ambassador-car" transform="translate(100, 350)">
        <foreignObject x="60" y="100" width="280" height="120">
            <img src="/cars/Ambassador1.png" alt="Ambassador Car" style="width: 100%; height: 100%; object-fit: contain;" />
          </foreignObject>
      </g>
      
      <!-- Dust clouds -->
      <g class="dust-clouds">
        <circle cx="50" cy="420" r="8" fill="#d1d5db" opacity="0.6" class="dust-1"/>
        <circle cx="70" cy="425" r="6" fill="#d1d5db" opacity="0.4" class="dust-2"/>
        <circle cx="90" cy="418" r="10" fill="#d1d5db" opacity="0.5" class="dust-3"/>
      </g>
      
      <!-- Route markers -->
      <g class="route-markers">
        <circle cx="200" cy="380" r="3" fill="#ef4444" class="marker-1"/>
        <circle cx="400" cy="420" r="3" fill="#ef4444" class="marker-2"/>
        <circle cx="600" cy="380" r="3" fill="#ef4444" class="marker-3"/>
        <circle cx="800" cy="420" r="3" fill="#ef4444" class="marker-4"/>
        <circle cx="1000" cy="380" r="3" fill="#ef4444" class="marker-5"/>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.ambassador-car {
  animation: drive-forward 15s linear infinite;
}

.dust-1 {
  animation: dust-float 2s ease-in-out infinite;
}

.dust-2 {
  animation: dust-float 2.5s ease-in-out infinite 0.5s;
}

.dust-3 {
  animation: dust-float 3s ease-in-out infinite 1s;
}

.road-center-line {
  animation: road-move 3s linear infinite;
}

.route-markers circle {
  animation: marker-pulse 2s ease-in-out infinite;
}

.marker-1 { animation-delay: 0s; }
.marker-2 { animation-delay: 0.4s; }
.marker-3 { animation-delay: 0.8s; }
.marker-4 { animation-delay: 1.2s; }
.marker-5 { animation-delay: 1.6s; }

@keyframes drive-forward {
  0% {
    transform: translate(100px, 350px);
  }
  100% {
    transform: translate(1100px, 350px);
  }
}

@keyframes dust-float {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.5);
  }
}

@keyframes road-move {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 40;
  }
}

@keyframes marker-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
}
</style>
