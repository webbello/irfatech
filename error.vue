<template>
  <div class="min-h-screen bg-navy-950 flex items-center justify-center px-4">
    <!-- Background mesh -->
    <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>

    <div class="text-center relative max-w-lg mx-auto">
      <!-- Error code -->
      <div class="text-8xl md:text-9xl font-bold text-gradient mb-4 leading-none">
        {{ error?.statusCode || 404 }}
      </div>

      <!-- Icon -->
      <div class="w-16 h-16 rounded-2xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mx-auto mb-6">
        <iconify-icon
          :icon="error?.statusCode === 500 ? 'lucide:server-crash' : 'lucide:map-pin-off'"
          class="text-3xl text-electric-400"
        ></iconify-icon>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold text-white mb-3">
        {{ error?.statusCode === 500 ? 'Something Went Wrong' : 'Page Not Found' }}
      </h1>

      <p class="text-slate-400 leading-relaxed mb-8">
        {{ error?.statusCode === 500
          ? 'We hit an unexpected error. Our team has been notified.'
          : "The page you're looking for doesn't exist or has been moved." }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <NuxtLink to="/" class="btn-primary px-7 py-3">
          <iconify-icon icon="lucide:home" class="text-base"></iconify-icon>
          Back to Home
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-ghost px-7 py-3">
          Contact Us
        </NuxtLink>
      </div>

      <!-- Quick links -->
      <div class="mt-10 pt-8 border-t border-navy-700/50">
        <p class="text-xs text-slate-500 mb-4 uppercase tracking-wider">Quick links</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink
            v-for="link in quickLinks"
            :key="link.href"
            :to="link.href"
            class="text-sm text-slate-400 hover:text-electric-400 transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
</script>
