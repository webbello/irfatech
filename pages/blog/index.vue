<template>
  <div class="pt-16">
    <div class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="rounded-3xl bg-white/90 shadow-sm ring-1 ring-red-100/60 px-6 sm:px-10 py-10 md:py-12">
          <div class="text-center mb-12 md:mb-16">
            <p class="text-sm uppercase tracking-[0.25em] text-red-600 font-semibold mb-3">Stories</p>
            <h1
              class="text-4xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 bg-clip-text text-transparent"
            >
              Journey Blog
            </h1>
            <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stories, insights, and adventures from our record-breaking journeys
              around the world. Read about the challenges, triumphs, and unforgettable moments.
            </p>
          </div>

          <!-- Featured Posts -->
          <div v-if="featuredPosts.length > 0" class="mb-12">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h2 class="text-2xl font-bold text-slate-900">Featured Stories</h2>
              <div class="flex items-center gap-3">
                <span class="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Editor's picks
                </span>
                <span class="text-sm text-slate-500 hidden sm:inline">Swipe to explore →</span>
                <div class="hidden sm:flex items-center gap-2">
                  <button
                    type="button"
                    class="w-9 h-9 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition"
                    aria-label="Scroll featured stories left"
                    @click="scrollFeatured(-1)"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    class="w-9 h-9 rounded-full border border-amber-200 text-amber-700 hover:bg-amber-50 transition"
                    aria-label="Scroll featured stories right"
                    @click="scrollFeatured(1)"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
            <div
              ref="featuredRow"
              class="featured-row"
              @mouseenter="stopAutoScroll"
              @mouseleave="startAutoScroll"
              @focusin="stopAutoScroll"
              @focusout="startAutoScroll"
            >
              <BlogCard
                v-for="post in featuredPosts"
                :key="post._path"
                :post="post"
                :featured="true"
              />
            </div>
          </div>

          <!-- Latest Strip -->
          <div v-if="latestPosts.length > 0" class="mb-12">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h2 class="text-2xl font-bold text-slate-900">Latest</h2>
              <span class="text-sm text-slate-500">Fresh updates from the road</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NuxtLink
                v-for="post in latestPosts"
                :key="post._path"
                :to="post._path"
                class="group flex items-center gap-4 bg-white rounded-2xl p-4 ring-1 ring-red-100/60 hover:shadow-lg transition"
              >
                <div class="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    :src="post.image || fallbackImages[0]"
                    :alt="post.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div class="min-w-0">
                  <p class="text-xs text-amber-700 font-semibold mb-1">{{ post.category || 'Story' }}</p>
                  <h3 class="text-sm font-semibold text-slate-900 line-clamp-2">{{ post.title }}</h3>
                  <p class="text-xs text-slate-500 mt-1">{{ formatDate(post.date) }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-5 py-2 rounded-full transition-all duration-200 text-sm font-semibold"
              :class="selectedCategory === category
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                : 'bg-white text-slate-700 ring-1 ring-red-100 hover:bg-red-50'"
            >
              {{ category }}
            </button>
          </div>

          <!-- All Posts -->
          <div class="mb-14">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h2 class="text-2xl font-bold text-slate-900">All Stories</h2>
              <div class="text-sm text-slate-500">
                Showing {{ filteredPosts.length }} story<span v-if="filteredPosts.length !== 1">ies</span>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                v-for="post in filteredPosts"
                :key="post._path"
                :post="post"
              />
            </div>
          </div>

          <!-- Newsletter Signup -->
          <div class="bg-gradient-to-br from-red-50 via-amber-50 to-white rounded-2xl p-8 text-center ring-1 ring-red-100/60">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Stay Updated</h3>
            <p class="text-slate-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest stories and updates
              from our ongoing adventures and speaking engagements.
            </p>

            <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto flex gap-3">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                required
                class="flex-1 px-4 py-2 border border-red-200 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
              <button
                type="submit"
                :disabled="subscribing"
                class="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                {{ subscribing ? 'Subscribing...' : 'Subscribe' }}
              </button>
            </form>

            <div
              v-if="subscribed"
              class="mt-4 p-3 bg-emerald-50 text-emerald-700 rounded-lg"
            >
              Thank you for subscribing! You'll receive our latest updates.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-row {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 1fr);
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 0.75rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
}

.featured-row :deep(a) {
  scroll-snap-align: start;
}

@media (min-width: 768px) {
  .featured-row {
    grid-auto-columns: minmax(320px, 1fr);
  }
}
</style>

<script setup>
useSeoMeta({
  title: 'Blog - Saloo & Neena Chowdhury Journey Stories',
  description: 'Read inspiring stories and adventures from Saloo & Neena Chowdhury\'s record-breaking circumnavigation journeys around the world.',
  ogTitle: 'Blog - Saloo & Neena Chowdhury Journey Stories'
})

// Fetch blog posts
const posts = await queryContent('/blog').sort({ date: -1 }).find().catch(() => [])

const selectedCategory = ref('All')
const email = ref('')
const subscribing = ref(false)
const subscribed = ref(false)
const featuredRow = ref(null)
const fallbackImages = [
  '/images/journey/Saloo-Journey10.jpg',
  '/images/journey/Saloo-Journey11.jpg',
  '/images/journey/Saloo-Journey12.jpg'
]

// Get featured posts
const featuredPosts = computed(() => {
  return (posts || []).filter(post => post.featured)
})

const latestPosts = computed(() => {
  return (posts || []).slice(0, 3)
})

// Get all categories
const categories = computed(() => {
  const allCategories = ['All', ...new Set((posts || []).map(post => post.category).filter(Boolean))]
  return allCategories
})

// Filter posts by category
const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return posts || []
  }
  return (posts || []).filter(post => post.category === selectedCategory.value)
})

const scrollFeatured = (direction) => {
  if (!featuredRow.value) return
  const cardWidth = featuredRow.value.querySelector('a')?.clientWidth || 320
  featuredRow.value.scrollBy({ left: cardWidth * direction, behavior: 'smooth' })
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

let autoScrollInterval
const startAutoScroll = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches
  if (autoScrollInterval || prefersReducedMotion || !isDesktop || featuredPosts.value.length <= 2) return
  autoScrollInterval = setInterval(() => scrollFeatured(1), 4000)
}

const stopAutoScroll = () => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
  autoScrollInterval = null
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})

// Newsletter subscription
const subscribeNewsletter = async () => {
  subscribing.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    subscribed.value = true
    email.value = ''
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      subscribed.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Newsletter subscription error:', error)
  } finally {
    subscribing.value = false
  }
}
</script>
