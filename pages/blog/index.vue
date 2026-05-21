<template>
  <div class="pt-16">

    <!-- Hero -->
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative text-center max-w-2xl mx-auto">
        <div class="badge mb-6">
          <iconify-icon icon="lucide:book-open" class="text-xs"></iconify-icon>
          Blog & Insights
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Business Tech,<br />
          <span class="text-gradient">Explained Simply</span>
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          Practical guides on automation, ERP, CRM, and digital growth — written for business owners, not developers.
        </p>
      </div>
    </section>

    <!-- Filter + Posts -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <!-- Category filter -->
        <div class="flex flex-wrap gap-2 justify-center mb-10">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            :class="activeCategory === cat
              ? 'bg-electric-500 text-white shadow-glow-sm'
              : 'bg-navy-800 text-slate-400 hover:text-white border border-navy-700'"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Search -->
        <div class="max-w-md mx-auto mb-10 relative">
          <iconify-icon icon="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-base"></iconify-icon>
          <input v-model="search" type="text" placeholder="Search articles..." class="input-field pl-11" />
        </div>

        <!-- Posts grid -->
        <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard v-for="post in filteredPosts" :key="post.path" :post="post" :featured="post.featured" />
        </div>

        <div v-else class="text-center py-20">
          <iconify-icon icon="lucide:book-open" class="text-5xl text-navy-700 mb-4"></iconify-icon>
          <p class="text-slate-500 mb-2">No articles found</p>
          <button @click="search = ''; activeCategory = 'All'" class="text-sm text-electric-400 hover:text-electric-300">Clear filters</button>
        </div>
      </div>
    </section>

    <!-- WhatsApp subscribe nudge -->
    <section class="section-padding-sm section-dark border-t border-navy-700/50">
      <div class="container-max text-center max-w-xl mx-auto">
        <iconify-icon icon="lucide:bell" class="text-3xl text-electric-400 mb-3"></iconify-icon>
        <h2 class="text-xl font-bold text-white mb-2">Get Business Tech Tips</h2>
        <p class="text-slate-400 text-sm mb-5">Practical insights on automation, ERP, and digitalization — straight to your WhatsApp.</p>
        <a href="https://wa.me/918864812200?text=Hi%20IRFAtech%2C%20please%20add%20me%20to%20your%20business%20tips%20list."
          target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3 inline-flex">
          <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
          Subscribe via WhatsApp
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Blog — Business Tech Insights | IRFAtech',
  description: 'Practical guides on business automation, ERP, CRM, WhatsApp automation, and digital transformation for SMB owners.',
  ogTitle: 'IRFAtech Blog — Business Tech for Growing Companies',
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const search = ref('')
const activeCategory = ref('All')

const categories = computed(() => {
  const cats = posts.value?.map(p => p.category).filter(Boolean) ?? []
  return ['All', ...new Set(cats)]
})

const filteredPosts = computed(() => {
  return (posts.value ?? []).filter(post => {
    const matchCat = activeCategory.value === 'All' || post.category === activeCategory.value
    const matchSearch = !search.value || post.title?.toLowerCase().includes(search.value.toLowerCase())
    return matchCat && matchSearch
  })
})
</script>
