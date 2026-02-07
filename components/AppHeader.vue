<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20">
    <nav class="container-max">
      <div class="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <iconify-icon icon="lucide:globe" class="text-xl sm:text-2xl text-amber-600"></iconify-icon>
          <!-- Logo -->
            
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="relative px-2 lg:px-3 py-2 text-sm lg:text-base text-slate-400 hover:text-amber-600 transition-all duration-200 font-medium"
            :class="{ 
              'text-amber-600': isActiveRoute(item.href),
              'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-600 after:transform after:scale-x-100': isActiveRoute(item.href),
              'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-600 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200': !isActiveRoute(item.href)
            }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        
        <button 
          @click="toggleMobile"
          class="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
          :class="{ 'bg-slate-800': mobileOpen }"
        >
          <iconify-icon 
            :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'" 
            class="text-xl sm:text-2xl transition-transform duration-200"
            :class="{ 'rotate-90': mobileOpen }"
          ></iconify-icon>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="mobileOpen"
        class="md:hidden bg-slate-800 border-t border-slate-700 backdrop-blur-md"
      >
        <div class="px-4 py-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="mobileOpen = false"
            class="flex items-center py-3 px-3 text-base font-medium text-slate-300 hover:bg-slate-700 rounded-lg transition-all duration-200 my-1"
            :class="{ 
              'text-amber-400 bg-amber-500/10 border-l-4 border-amber-600': isActiveRoute(item.href)
            }"
          >
            <iconify-icon :icon="getMenuIcon(item.href)" class="mr-3 text-lg"></iconify-icon>
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute()
const mobileOpen = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Journeys', href: '/journeys' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

const isActiveRoute = (href) => {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}

const getMenuIcon = (href) => {
  const icons = {
    '/': 'lucide:home',
    '/about': 'lucide:users',
    '/timeline': 'lucide:clock',
    '/journeys': 'lucide:map',
    '/achievements': 'lucide:trophy',
    '/gallery': 'lucide:image',
    '/blog': 'lucide:book-open',
    '/contact': 'lucide:mail'
  }
  return icons[href] || 'lucide:circle'
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  mobileOpen.value = false
})
</script>
