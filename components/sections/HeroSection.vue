<template>
<section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white pt-24 overflow-hidden">
      
    <!-- Animated Gradient Orbs -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Badge -->
        <div class="flex justify-center mb-8 animate-bounce" style="animation-duration: 2s;">
            <div class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-2xl">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Guinness World Record Holders</span>
            </div>
        </div>

        <!-- Title -->
        <div class="text-center mb-14">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent mb-4">
            Saloo & Neena Choudhury
        </h1>
        <p class="px-6 text-lg sm:text-xl md:text-2xl text-amber-200">
            Pioneers of World Record Circumnavigation · Two Champions · One Legacy
        </p>
        </div>

        <!-- ================= CERTIFICATES LAYOUT ================= -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">

        <!-- ================= SALOO COLUMN ================= -->
        <div>
            <div class="text-center mb-6">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Saloo Choudhury
            </h3>
            <p class="text-amber-200 mt-1">2 Guinness World Records</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Certificate 1 -->
            <div>
                <p class="text-center text-sm text-amber-300 mb-2 font-semibold">Certificate #1</p>
                <div class="rounded-3xl bg-slate-900/80 border border-amber-500/40 p-5 hover:scale-[1.03] transition">
                <img src="/images/guinness/Saloo-First-and-Fastest-Circumnavigation.jpg"
                    class="rounded-xl h-full w-full object-cover mb-4" alt="">
                <span class="inline-block text-xs px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full mb-2">9 Sep - 17 Nov 1989</span>
                <p class="font-semibold text-amber-200 text-sm">First & Fastest Circumnavigation</p>
                </div>
            </div>

            <!-- Certificate 2 -->
            <div>
                <p class="text-center text-sm text-amber-300 mb-2 font-semibold">Certificate #2</p>
                <div class="rounded-3xl bg-slate-900/80 border border-amber-500/40 p-5 hover:scale-[1.03] transition">
                <img src="/images/guinness/Saloo-Fastest-Circumnavigation.jpg"
                    class="rounded-xl h-full w-full object-cover mb-4" alt="">
                <span class="inline-block text-xs px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full mb-2">7 Nov - 17 Dec 1991</span>
                <p class="font-semibold text-amber-200 text-sm">Fastest Circumnavigation</p>
                </div>
            </div>
            </div>
        </div>

        <!-- ================= NEENA COLUMN ================= -->
        <div>
            <div class="text-center mb-6">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                Neena Choudhury
            </h3>
            <p class="text-orange-200 mt-1">2 Guinness World Records</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Certificate 1 -->
            <div>
                <p class="text-center text-sm text-orange-300 mb-2 font-semibold">Certificate #1</p>
                <div class="rounded-3xl bg-slate-900/80 border border-orange-500/40 p-5 hover:scale-[1.03] transition">
                <img src="/images/guinness/Neena-First-and-Fastest-Circumnavigation.jpg"
                    class="rounded-xl h-full w-full object-cover mb-4" alt="">
                <span class="inline-block text-xs px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full mb-2">9 Sep - 17 Nov 1989</span>
                <p class="font-semibold text-orange-200 text-sm">First & Fastest Circumnavigation</p>
                </div>
            </div>

            <!-- Certificate 2 -->
            <div>
                <p class="text-center text-sm text-orange-300 mb-2 font-semibold">Certificate #2</p>
                <div class="rounded-3xl bg-white-900/80 border border-orange-500/40 p-5 hover:scale-[1.03] transition">
                <img src="/images/guinness/Neena-Fastest-Circumnavigation.jpg"
                    class="rounded-xl h-full w-full object-cover mb-4" alt="">
                <span class="inline-block text-xs px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full mb-2">7 Nov - 17 Dec 1991</span>
                <p class="font-semibold text-orange-200 text-sm">Fastest Circumnavigation</p>
                </div>
            </div>
            </div>
        </div>

        </div>

        <!-- CTA -->
        

    </div>
      <!-- Animated Ambassador Car SVG -->
      <!-- <div class="absolute inset-0 opacity-20">
        <AmbassadorCarAnimation />
      </div> -->
      
      <!-- Globe Animation Background -->
      <div class="absolute inset-0 opacity-10">
        <GlobeAnimation />
      </div>
      
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <iconify-icon icon="lucide:chevron-down" class="text-2xl text-gray-400"></iconify-icon>
      </div>
    </section>
</template>