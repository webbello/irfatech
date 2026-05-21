<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-700/50 shadow-card'
      : 'bg-transparent'"
  >
    <nav class="container-max">
      <div class="flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <div class="w-8 h-8 rounded-lg bg-electric-500 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
            <iconify-icon icon="lucide:zap" class="text-lg text-white"></iconify-icon>
          </div>
          <span class="text-xl font-bold text-white">
            IRFA<span class="text-electric-400">tech</span>
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-1">
          <!-- Services Mega Menu trigger -->
          <div class="relative" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
            <button
              class="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-electric-400 transition-colors font-medium rounded-lg hover:bg-navy-800/50"
              :class="{ 'text-electric-400': servicesOpen }"
            >
              Services
              <iconify-icon
                icon="lucide:chevron-down"
                class="text-sm transition-transform duration-200"
                :class="{ 'rotate-180': servicesOpen }"
              ></iconify-icon>
            </button>

            <!-- Mega Menu -->
            <div
              v-show="servicesOpen"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-navy-900 border border-navy-700/50 rounded-2xl shadow-card overflow-hidden"
            >
              <div class="p-2 grid grid-cols-2 gap-1">
                <NuxtLink
                  v-for="service in services"
                  :key="service.slug"
                  :to="`/services/${service.slug}`"
                  class="flex items-start gap-3 p-3 rounded-xl hover:bg-navy-800 transition-colors group"
                  @click="servicesOpen = false"
                >
                  <div class="w-8 h-8 rounded-lg bg-electric-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-500/20 transition-colors mt-0.5">
                    <iconify-icon :icon="service.icon" class="text-base text-electric-400"></iconify-icon>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-white group-hover:text-electric-400 transition-colors">{{ service.title }}</div>
                    <div class="text-xs text-slate-400 mt-0.5 leading-relaxed">{{ service.short }}</div>
                  </div>
                </NuxtLink>
              </div>
              <div class="px-4 py-3 bg-navy-800/50 border-t border-navy-700/30">
                <NuxtLink to="/services" class="text-xs text-electric-400 hover:text-electric-300 font-medium flex items-center gap-1">
                  View all services
                  <iconify-icon icon="lucide:arrow-right" class="text-sm"></iconify-icon>
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink
            v-for="item in mainNav"
            :key="item.href"
            :to="item.href"
            class="px-3 py-2 text-sm text-slate-300 hover:text-electric-400 transition-colors font-medium rounded-lg hover:bg-navy-800/50"
            :class="{ 'text-electric-400 bg-navy-800/50': isActive(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Desktop CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 text-sm font-semibold hover:bg-[#25D366]/20 transition-all duration-200"
          >
            <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
            WhatsApp
          </a>
          <NuxtLink to="/contact" class="btn-primary text-sm px-5 py-2.5">
            Get a Quote
          </NuxtLink>
        </div>

        <!-- Mobile burger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-navy-800 transition-colors"
        >
          <iconify-icon
            :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'"
            class="text-2xl transition-transform duration-200"
            :class="{ 'rotate-90': mobileOpen }"
          ></iconify-icon>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileOpen" class="lg:hidden bg-navy-900 border-t border-navy-700/50">
          <div class="px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto space-y-1">
            <!-- Services section -->
            <div>
              <button
                @click="mobileServicesOpen = !mobileServicesOpen"
                class="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-200 hover:text-electric-400 rounded-xl hover:bg-navy-800 transition-colors"
              >
                <span class="flex items-center gap-2">
                  <iconify-icon icon="lucide:layers" class="text-base text-electric-400"></iconify-icon>
                  Services
                </span>
                <iconify-icon
                  icon="lucide:chevron-down"
                  class="text-sm transition-transform duration-200"
                  :class="{ 'rotate-180': mobileServicesOpen }"
                ></iconify-icon>
              </button>
              <div v-if="mobileServicesOpen" class="ml-4 mt-1 space-y-0.5">
                <NuxtLink
                  v-for="service in services"
                  :key="service.slug"
                  :to="`/services/${service.slug}`"
                  @click="mobileOpen = false"
                  class="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-400 hover:text-electric-400 rounded-lg hover:bg-navy-800 transition-colors"
                >
                  <iconify-icon :icon="service.icon" class="text-sm text-electric-500"></iconify-icon>
                  {{ service.title }}
                </NuxtLink>
              </div>
            </div>

            <NuxtLink
              v-for="item in mainNav"
              :key="item.href"
              :to="item.href"
              @click="mobileOpen = false"
              class="flex items-center gap-2 px-3 py-3 text-sm font-semibold text-slate-200 hover:text-electric-400 rounded-xl hover:bg-navy-800 transition-colors"
              :class="{ 'text-electric-400 bg-navy-800': isActive(item.href) }"
            >
              <iconify-icon :icon="item.icon" class="text-base text-electric-500"></iconify-icon>
              {{ item.name }}
            </NuxtLink>

            <!-- Mobile CTAs -->
            <div class="pt-3 border-t border-navy-700/50 flex flex-col gap-2">
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-whatsapp justify-center text-sm"
                @click="mobileOpen = false"
              >
                <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
                Chat on WhatsApp
              </a>
              <NuxtLink to="/contact" class="btn-primary justify-center text-sm" @click="mobileOpen = false">
                Get a Quote
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { services } from '~/config/site'

const route = useRoute()
const { y: scrollY } = useWindowScroll()
const scrolled = computed(() => scrollY.value > 20)

const servicesOpen = ref(false)
const mobileOpen = ref(false)
const mobileServicesOpen = ref(false)

const mainNav = [
  { name: 'Industries', href: '/industries', icon: 'lucide:building' },
  { name: 'Portfolio', href: '/portfolio', icon: 'lucide:briefcase' },
  { name: 'Landflix', href: '/landflix', icon: 'lucide:home' },
  { name: 'Blog', href: '/blog', icon: 'lucide:book-open' },
  { name: 'About', href: '/about', icon: 'lucide:user' },
  { name: 'Contact', href: '/contact', icon: 'lucide:mail' },
]

const whatsappUrl = 'https://wa.me/923001234567?text=Hi%20IRFAtech%2C%20I%20need%20help%20with%20my%20business%20digitalization.'

const isActive = (href) => {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}

watch(() => route.path, () => {
  mobileOpen.value = false
  servicesOpen.value = false
})
</script>
