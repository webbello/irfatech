<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-700/40 shadow-card'
      : 'bg-transparent border-b border-transparent'"
  >
    <div class="container-max px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 group flex-shrink-0">
          <div class="w-8 h-8 rounded-lg bg-electric-500 flex items-center justify-center group-hover:bg-electric-600 transition-colors duration-200">
            <iconify-icon icon="lucide:zap" class="text-white text-sm"></iconify-icon>
          </div>
          <span class="font-display font-bold text-white text-lg tracking-tight">IRFAtech</span>
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-1">

          <!-- Services dropdown -->
          <div class="relative" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
            <button
              class="px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-navy-800/50 transition-all duration-150 flex items-center gap-1"
              :class="{ 'text-white !bg-navy-800/50': servicesOpen }"
            >
              Services
              <iconify-icon
                icon="lucide:chevron-down"
                class="text-xs transition-transform duration-200"
                :class="{ 'rotate-180': servicesOpen }"
              ></iconify-icon>
            </button>

            <Transition
              enter-active-class="transition-all duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1.5"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1.5"
            >
              <div
                v-if="servicesOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-navy-900/98 backdrop-blur-md border border-navy-700/60 rounded-xl overflow-hidden"
                style="box-shadow: 0 16px 40px rgba(2,11,24,0.7)"
              >
                <div class="p-1.5">
                  <NuxtLink
                    v-for="s in topServices"
                    :key="s.slug"
                    :to="`/services/${s.slug}`"
                    class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-all duration-150 group/item"
                    @click="servicesOpen = false"
                  >
                    <div class="w-7 h-7 rounded-md bg-electric-500/10 border border-electric-500/15 flex items-center justify-center flex-shrink-0">
                      <iconify-icon :icon="s.icon" class="text-xs text-electric-400"></iconify-icon>
                    </div>
                    <span class="text-sm font-medium leading-tight">{{ s.title }}</span>
                    <iconify-icon icon="lucide:arrow-right" class="text-xs text-navy-600 group-hover/item:text-slate-400 ml-auto transition-colors duration-150"></iconify-icon>
                  </NuxtLink>
                </div>
                <div class="border-t border-navy-700/40 p-1.5">
                  <NuxtLink
                    to="/services"
                    class="flex items-center justify-between px-3 py-2 rounded-lg text-electric-400 hover:bg-electric-500/10 text-sm font-medium transition-all duration-150"
                    @click="servicesOpen = false"
                  >
                    View all 8 services
                    <iconify-icon icon="lucide:arrow-right" class="text-xs"></iconify-icon>
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/portfolio" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-navy-800/50 transition-all duration-150">Work</NuxtLink>
          <NuxtLink to="/blog"      class="px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-navy-800/50 transition-all duration-150">Blog</NuxtLink>
          <NuxtLink to="/about"     class="px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-navy-800/50 transition-all duration-150">About</NuxtLink>
        </div>

        <!-- Desktop CTAs -->
        <div class="hidden lg:flex items-center gap-4">
          <a
            :href="`tel:${siteConfig.contact.phone}`"
            class="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            <iconify-icon icon="lucide:phone" class="text-xs text-electric-500"></iconify-icon>
            {{ siteConfig.contact.phone }}
          </a>
          <NuxtLink to="/contact" class="btn-primary text-sm px-4 py-2">
            Book a Call
          </NuxtLink>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-navy-800/60 transition-all duration-150"
          @click="mobileOpen = !mobileOpen"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        >
          <iconify-icon :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'" class="text-lg"></iconify-icon>
        </button>
      </nav>
    </div>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-navy-950/98 backdrop-blur-lg border-b border-navy-700/50 px-4 pt-2 pb-6"
      >
        <div class="flex flex-col gap-1">
          <!-- Services accordion -->
          <button
            class="flex items-center justify-between w-full px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-800/60 transition-all duration-150"
            @click="mobileServicesOpen = !mobileServicesOpen"
          >
            Services
            <iconify-icon
              icon="lucide:chevron-down"
              class="text-xs transition-transform duration-200"
              :class="{ 'rotate-180': mobileServicesOpen }"
            ></iconify-icon>
          </button>

          <div v-if="mobileServicesOpen" class="ml-3 mb-1 flex flex-col gap-0.5">
            <NuxtLink
              v-for="s in topServices"
              :key="s.slug"
              :to="`/services/${s.slug}`"
              class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-navy-800/60 transition-all duration-150"
              @click="mobileOpen = false"
            >
              <iconify-icon :icon="s.icon" class="text-xs text-electric-400"></iconify-icon>
              {{ s.title }}
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="flex items-center gap-1.5 px-3 py-2 text-sm text-electric-400 font-medium"
              @click="mobileOpen = false"
            >
              View all services
              <iconify-icon icon="lucide:arrow-right" class="text-xs"></iconify-icon>
            </NuxtLink>
          </div>

          <NuxtLink to="/portfolio" class="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-800/60 transition-all duration-150" @click="mobileOpen = false">Work</NuxtLink>
          <NuxtLink to="/blog"      class="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-800/60 transition-all duration-150" @click="mobileOpen = false">Blog</NuxtLink>
          <NuxtLink to="/about"     class="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-800/60 transition-all duration-150" @click="mobileOpen = false">About</NuxtLink>
          <NuxtLink to="/contact"   class="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-800/60 transition-all duration-150" @click="mobileOpen = false">Contact</NuxtLink>

          <div class="mt-4 pt-4 border-t border-navy-700/50 flex flex-col gap-3">
            <a :href="waConsultation" target="_blank" rel="noopener noreferrer" class="btn-whatsapp justify-center">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Talk on WhatsApp
            </a>
            <NuxtLink to="/contact" class="btn-primary justify-center" @click="mobileOpen = false">
              Book a Consultation
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { services, siteConfig } from '~/config/site'
import { useWhatsApp } from '~/composables/useWhatsApp'

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 24)

const mobileOpen = ref(false)
const mobileServicesOpen = ref(false)
const servicesOpen = ref(false)

const topServices = computed(() =>
  services.filter(s => ['erp', 'whatsapp-automation', 'crm', 'ai-automation'].includes(s.slug))
)

const waConsultation = useWhatsApp('Hi IRFAtech, I would like to book a free consultation.')

const route = useRoute()
watch(() => route.path, () => {
  mobileOpen.value = false
  mobileServicesOpen.value = false
})
</script>

