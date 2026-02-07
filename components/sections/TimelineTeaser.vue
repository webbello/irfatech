<template>
    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">The Timeline</h2>
                <p class="text-xl text-amber-200">Every adventure has its milestones</p>
            </div>

            <!-- Timeline Container -->
            <div class="relative max-w-5xl mx-auto">
                <!-- Timeline line - Hidden on mobile, visible on md+ -->
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-200 via-amber-200 to-red-200 h-full"></div>
                
                <!-- Mobile Timeline line - Visible only on mobile -->
                <div class="md:hidden absolute left-8 top-0 w-0.5 bg-gradient-to-b from-red-200 via-amber-200 to-red-200 h-full"></div>
                
                <div class="space-y-12">
                    <!-- Event 1: 1989 -->
                    <div class="relative">
                        <!-- Desktop: Alternating layout -->
                        <div class="md:flex md:items-center md:justify-between">
                            <!-- Left side (odd events) -->
                            <div class="md:w-5/12 md:text-right md:pr-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg">1989</div>
                                    <h3 class="text-2xl font-bold mb-3">First Circumnavigation Attempt</h3>
                                    <p class="text-gray-200 mb-4 leading-relaxed">Saloo and Neena embark on their first journey to circumnavigate the globe by car, covering 45,000 kilometres in 69 days, 19 hours and 5 minutes.</p>
                                    <p class="text-sm text-red-600 font-semibold mb-4">📍 Starting from Delhi, India</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ First circumnavigation by car
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            ✓ Covered six continents
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ Guinness World Record certified
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Center dot -->
                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-600 to-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <!-- Right side / Mobile layout -->
                            <div class="md:w-5/12 md:pl-8 pl-20 md:pl-8 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">1989</div>
                                    <h3 class="text-xl font-bold mb-2">First Circumnavigation Attempt</h3>
                                    <p class="text-gray-200 mb-3 text-sm leading-relaxed">Saloo and Neena embark on their first journey to circumnavigate the globe by car, covering 45,000 kilometres in 69 days, 19 hours and 5 minutes.</p>
                                    <p class="text-xs text-red-600 font-semibold mb-3">📍 Starting from Delhi, India</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-gray-300">✓ First circumnavigation by car</div>
                                        <div class="flex items-center gap-2 text-xs text-gray-300">✓ Covered six continents</div>
                                        <div class="flex items-center gap-2 text-xs text-gray-300">✓ Guinness World Record certified</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-red-200">
                                    <img src="/images/journey/Saloo-Journey16.jpg" alt="1989 Journey" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 2: 1991 Challenge -->
                    <div class="relative">
                        <div class="md:flex md:items-center md:justify-between md:flex-row-reverse">
                            <div class="md:w-5/12 md:text-left md:pl-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg">1991</div>
                                    <h3 class="text-2xl font-bold mb-3">British Army Challenge</h3>
                                    <p class="text-gray-200 mb-4 leading-relaxed">The British Army accomplishes circumnavigation in 40 days, leading Guinness to drop the "first" title from the Chowdhurys' record.</p>
                                    <p class="text-sm text-amber-600 font-semibold mb-4">📍 Global</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Army had significant advantages
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            • No customs or visa delays
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Royal Air Force backup
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-600 to-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <div class="md:w-5/12 md:pr-8 pl-20 md:pl-0 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">1991</div>
                                    <h3 class="text-xl font-bold mb-2">British Army Challenge</h3>
                                    <p class="text-gray-200 mb-3 text-sm leading-relaxed">The British Army accomplishes circumnavigation in 40 days, leading Guinness to drop the "first" title from the Chowdhurys' record.</p>
                                    <p class="text-xs text-amber-600 font-semibold mb-3">📍 Global</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-gray-300">• Army had significant advantages</div>
                                        <div class="flex items-center gap-2 text-xs text-gray-300">• No customs or visa delays</div>
                                        <div class="flex items-center gap-2 text-xs text-gray-300">• Royal Air Force backup</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
                                    <img src="/images/journey/Saloo-Journey19.jpg" alt="1991 Challenge" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div class="text-center mt-16">
                <a href="/timeline" class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-lg group">
                    View Complete Timeline
                    <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>