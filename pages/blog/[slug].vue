<template>
  <div class="pt-16">
    <div v-if="post">
      <!-- Post Header -->
      <section class="section-padding section-dark relative overflow-hidden">
        <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
        <div class="container-max relative max-w-3xl mx-auto">
          <div class="flex items-center gap-2 mb-6">
            <NuxtLink to="/blog" class="text-sm text-slate-400 hover:text-electric-400 transition-colors flex items-center gap-1">
              <iconify-icon icon="lucide:arrow-left" class="text-xs"></iconify-icon>
              Back to Blog
            </NuxtLink>
            <span class="text-slate-600">/</span>
            <span v-if="post.category" class="badge">{{ post.category }}</span>
          </div>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {{ post.title }}
          </h1>

          <p v-if="post.description" class="text-slate-400 text-lg leading-relaxed mb-6">
            {{ post.description }}
          </p>

          <div class="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span class="flex items-center gap-1.5">
              <iconify-icon icon="lucide:calendar" class="text-xs"></iconify-icon>
              {{ formatDate(post.date) }}
            </span>
            <span class="flex items-center gap-1.5">
              <iconify-icon icon="lucide:clock" class="text-xs"></iconify-icon>
              {{ post.readTime || '5' }} min read
            </span>
            <span v-if="post.author" class="flex items-center gap-1.5">
              <iconify-icon icon="lucide:user" class="text-xs"></iconify-icon>
              {{ post.author }}
            </span>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="section-padding section-mid">
        <div class="container-max">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            <!-- Article body -->
            <article class="lg:col-span-3">
              <div class="prose prose-invert prose-slate max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-slate-400
                prose-strong:text-white
                prose-a:text-electric-400 prose-a:no-underline hover:prose-a:text-electric-300
                prose-code:text-electric-300 prose-code:bg-navy-800 prose-code:px-1 prose-code:rounded
                prose-blockquote:border-electric-500 prose-blockquote:text-slate-400">
                <ContentRenderer :value="post" />
              </div>

              <!-- Tags -->
              <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-10 pt-6 border-t border-navy-700/50">
                <span v-for="tag in post.tags" :key="tag" class="badge-accent">
                  #{{ tag }}
                </span>
              </div>

              <!-- Share -->
              <div class="mt-8 pt-6 border-t border-navy-700/50">
                <p class="text-sm text-slate-500 mb-3">Share this article</p>
                <SocialShare :title="post.title" />
              </div>
            </article>

            <!-- Sidebar -->
            <aside class="lg:col-span-1 space-y-6">
              <!-- Inline CTA -->
              <div class="card-glass p-5 sticky top-24">
                <div class="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center mb-3">
                  <iconify-icon icon="lucide:zap" class="text-xl text-electric-400"></iconify-icon>
                </div>
                <h3 class="text-sm font-semibold text-white mb-2">Ready to automate your business?</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  IRFAtech builds the systems you read about — for real businesses, at SMB-friendly prices.
                </p>
                <NuxtLink to="/contact" class="btn-primary text-xs px-4 py-2.5 w-full justify-center">
                  Book Free Consultation
                </NuxtLink>
                <a
                  href="https://wa.me/923001234567?text=Hi%20IRFAtech%2C%20I%20just%20read%20your%20blog%20and%20want%20to%20learn%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-whatsapp text-xs px-4 py-2.5 w-full justify-center mt-2"
                >
                  <iconify-icon icon="lucide:message-circle" class="text-sm"></iconify-icon>
                  WhatsApp Us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Related posts placeholder -->
      <UiCTABanner
        title="Found This Useful?"
        subtitle="We write practical guides every week. Subscribe via WhatsApp to never miss one."
        primary-label="Explore All Articles"
        primary-href="/blog"
        secondary-label="Subscribe on WhatsApp"
      />
    </div>

    <!-- 404 state -->
    <div v-else class="section-padding section-dark text-center">
      <iconify-icon icon="lucide:file-x" class="text-6xl text-navy-700 mb-4"></iconify-icon>
      <h1 class="text-2xl font-bold text-white mb-2">Article Not Found</h1>
      <p class="text-slate-400 mb-6">This article doesn't exist or has been moved.</p>
      <NuxtLink to="/blog" class="btn-primary px-6 py-3">← Back to Blog</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = String(route.params.slug)
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)

if (post.value) {
  useSeoMeta({
    title: `${post.value.title} | IRFAtech Blog`,
    description: post.value.description,
    ogTitle: post.value.title,
    ogDescription: post.value.description,
    ogImage: post.value.image || 'https://irfatech.com/images/og-image.jpg',
    ogType: 'article',
    ogUrl: `https://irfatech.com/blog/${route.params.slug}`,
    twitterCard: 'summary_large_image',
  })

  useArticleSchema({
    title: post.value.title,
    description: post.value.description,
    slug,
    date: post.value.date,
    image: post.value.image,
    author: post.value.author,
  })

  useBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.value.title, url: `/blog/${slug}` },
  ])
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}
</script>
