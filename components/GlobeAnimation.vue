<template>
  <div class="w-full h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
    <!-- Stars background -->
    <div class="absolute inset-0 opacity-50">
      <div
        v-for="i in 100"
        :key="i"
        class="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
        :style="{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }"
      />
    </div>

      <!-- Globe Container - Positioned at top on mobile -->
      <div class="absolute top-8 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-[85vw] h-[85vw] md:w-[min(70vw,70vh)] md:h-[min(70vw,70vh)] max-w-[600px] max-h-[600px]">
        
        <!-- Outer glow -->
        <div class="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        
        <!-- Orbit rings -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-400/20 rounded-full orbit-ring" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-purple-400/10 rounded-full orbit-ring-slow" />
        
        <!-- Earth Globe -->
        <div class="relative w-full h-full rounded-full overflow-hidden earth-container">
          <div class="absolute inset-0 earth-globe" />
          
          <!-- Atmosphere glow -->
          <div class="absolute inset-0 rounded-full shadow-[inset_15px_60px_120px_60px_rgba(0,0,0,0.6),0_0_80px_rgba(59,130,246,0.3)]" />
          
          <!-- Journey markers -->
          <div class="marker marker-asia" title="Asia" />
          <div class="marker marker-europe" title="Europe" />
          <div class="marker marker-africa" title="Africa" />
          <div class="marker marker-north-america" title="North America" />
          <div class="marker marker-south-america" title="South America" />
          <div class="marker marker-australia" title="Australia" />
        </div>
      </div>

      <!-- Floating travel icons -->
      <div class="absolute top-[45%] md:top-1/4 left-1/4 floating-icon">
        <svg class="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
      
      <div class="absolute top-[55%] md:top-3/4 right-1/4 floating-icon" style="animation-delay: 2s">
        <svg class="w-8 h-8 md:w-10 md:h-10 text-purple-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <div class="absolute top-[50%] md:top-1/2 right-1/3 floating-icon" style="animation-delay: 4s">
        <svg class="w-8 h-8 md:w-10 md:h-10 text-green-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

    
  </div>
</template>
<style scoped>
        .earth-globe {
          background-image: url('https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg');
          background-size: 200% 100%;
          background-repeat: repeat-x;
          background-position: 0 0;
          filter: brightness(1.2) contrast(1.1) saturate(1.3);
          animation: earth-rotate 40s linear infinite;
        }

        @keyframes earth-rotate {
          from { background-position: 0 0; }
          to { background-position: 200% 0; }
        }

        .orbit-ring {
          animation: orbit-rotate 30s linear infinite;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateX(75deg);
        }

        .orbit-ring-slow {
          animation: orbit-rotate 45s linear infinite reverse;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateX(75deg);
        }

        @keyframes orbit-rotate {
          from { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); }
          to { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); }
        }

        .marker {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #ef4444;
          border: 2px solid #fca5a5;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.8), inset 0 0 5px rgba(255, 255, 255, 0.3);
          animation: marker-pulse 2s ease-in-out infinite;
          z-index: 10;
        }

        @keyframes marker-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.5); }
        }

        .marker-asia { top: 35%; right: 25%; animation-delay: 0s; }
        .marker-europe { top: 30%; left: 45%; animation-delay: 0.3s; }
        .marker-africa { top: 50%; left: 50%; animation-delay: 0.6s; }
        .marker-north-america { top: 25%; left: 20%; animation-delay: 0.9s; }
        .marker-south-america { top: 60%; left: 30%; animation-delay: 1.2s; }
        .marker-australia { top: 70%; right: 20%; animation-delay: 1.5s; }

        .floating-icon {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-5deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .earth-globe,
          .orbit-ring,
          .orbit-ring-slow,
          .floating-icon,
          .marker {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }

        @media (max-width: 768px) {
          .marker {
            width: 7px;
            height: 7px;
            border-width: 1.5px;
          }
        }

        @media (max-width: 480px) {
          .marker {
            width: 6px;
            height: 6px;
            border-width: 1px;
          }
        }
    </style>
<script setup>
// Vue 3 Composition API - no additional logic needed for this component
</script>