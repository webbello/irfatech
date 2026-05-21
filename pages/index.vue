<template>
  <div class="pt-16">

    <!-- S1: Hero -->
    <section class="relative min-h-screen flex items-center section-dark overflow-hidden">
      <!-- Background mesh -->
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <!-- Grid overlay -->
      <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px); background-size: 60px 60px;"></div>

      <div class="container-max section-padding relative w-full">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Eyebrow -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-medium mb-8 animate-fade-in">
            <span class="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse-slow"></span>
            Integrated Resources For Automation
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Digital Infrastructure<br />
            for <span class="text-gradient">Growing Businesses</span>
          </h1>

          <!-- Sub -->
          <p class="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
            Websites, ERP systems, CRM, AI automation, and custom software — designed to help modern businesses operate smarter and scale faster.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">
              <iconify-icon icon="lucide:calendar" class="text-lg"></iconify-icon>
              Book Free Consultation
            </NuxtLink>
            <NuxtLink to="/services" class="btn-ghost px-8 py-4 text-base">
              <iconify-icon icon="lucide:layers" class="text-lg"></iconify-icon>
              View Services
            </NuxtLink>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-8 py-4 text-base">
              <iconify-icon icon="lucide:message-circle" class="text-lg"></iconify-icon>
              WhatsApp Us
            </a>
          </div>

          <!-- Trust badges -->
          <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div v-for="badge in trustBadges" :key="badge.label" class="flex flex-col items-center gap-1">
              <span class="text-2xl sm:text-3xl font-bold text-electric-400">{{ badge.value }}</span>
              <span class="text-xs text-slate-500 uppercase tracking-wider">{{ badge.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none"></div>
    </section>

    <!-- S2: Services Grid -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <UiSectionHeader
          eyebrow="What We Build"
          eyebrow-icon="lucide:layers"
          title="Everything Your Business Needs to Go Digital"
          subtitle="From your first website to a fully automated business system — we build it all, founder-to-founder."
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UiServiceCard v-for="service in services" :key="service.slug" :service="service" />
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/services" class="btn-ghost px-8 py-3">
            See all service details
            <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- S3: Why IRFAtech -->
    <section class="section-padding section-dark">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: heading -->
          <div>
            <div class="badge mb-4">
              <iconify-icon icon="lucide:shield-check" class="text-xs"></iconify-icon>
              Why IRFAtech
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              We Understand Business,<br />
              <span class="text-gradient">Not Just Code</span>
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed mb-8">
              Most agencies deliver software. We deliver business outcomes. After 15+ years of building systems for real businesses, we know what actually works — and what doesn't.
            </p>
            <NuxtLink to="/about" class="btn-ghost px-6 py-3">
              Meet the founder
              <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
            </NuxtLink>
          </div>
          <!-- Right: differentiators -->
          <div class="space-y-4">
            <div
              v-for="diff in differentiators"
              :key="diff.title"
              class="card-glass p-5 flex items-start gap-4 hover:border-electric-500/30 transition-all duration-300"
            >
              <div class="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center flex-shrink-0">
                <iconify-icon :icon="diff.icon" class="text-xl text-electric-400"></iconify-icon>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-white mb-1">{{ diff.title }}</h3>
                <p class="text-sm text-slate-400 leading-relaxed">{{ diff.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- S4: Industries -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <UiSectionHeader
          eyebrow="Industries We Serve"
          eyebrow-icon="lucide:building"
          title="Built for the Businesses That Power Your City"
          subtitle="Real solutions for real industries — not generic software that needs months of customization."
        />
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          <UiIndustryCard v-for="industry in industries" :key="industry.label" :industry="industry" />
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/industries" class="btn-ghost px-8 py-3">
            Explore by industry
            <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- S5: Landflix Showcase -->
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none opacity-50"></div>
      <div class="container-max relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="badge-accent mb-4">
              <iconify-icon icon="lucide:star" class="text-xs"></iconify-icon>
              Our Venture
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Landflix — Smart Real Estate<br />
              <span class="text-gradient">Platform by IRFAtech</span>
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed mb-6">
              We didn't just build software for clients — we built our own real estate platform to prove what's possible. Landflix is a full property technology solution built entirely in-house.
            </p>
            <ul class="space-y-3 mb-8">
              <li v-for="feat in landflixFeatures" :key="feat" class="flex items-center gap-3 text-sm text-slate-300">
                <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-base flex-shrink-0"></iconify-icon>
                {{ feat }}
              </li>
            </ul>
            <NuxtLink to="/landflix" class="btn-primary px-7 py-3">
              Explore Landflix
              <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
            </NuxtLink>
          </div>
          <!-- Visual placeholder -->
          <div class="card-glass p-8 flex items-center justify-center min-h-64 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-electric-500/5 to-accent-500/5"></div>
            <div class="text-center relative">
              <iconify-icon icon="lucide:home" class="text-7xl text-electric-400/30 mb-4"></iconify-icon>
              <div class="text-sm text-slate-500">Landflix Screenshots</div>
              <div class="text-xs text-slate-600 mt-1">Coming soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- S6: Process -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <UiSectionHeader
              eyebrow="How We Work"
              eyebrow-icon="lucide:workflow"
              title="Simple Process, Serious Results"
              subtitle="From your first message to a live system — we keep it transparent, fast, and founder-approved."
              :centered="false"
            />
          </div>
          <div>
            <UiProcessStep
              v-for="(step, i) in processSteps"
              :key="step.title"
              :step="i + 1"
              :icon="step.icon"
              :title="step.title"
              :description="step.description"
              :is-last="i === processSteps.length - 1"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- S7: Testimonials -->
    <section class="section-padding section-dark">
      <div class="container-max">
        <UiSectionHeader
          eyebrow="Client Stories"
          eyebrow-icon="lucide:quote"
          title="Businesses That Trusted IRFAtech"
          subtitle="Real words from real clients who digitized their operations with us."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UiTestimonialCard v-for="t in testimonials" :key="t.name" :testimonial="t" />
        </div>
      </div>
    </section>

    <!-- S8: CTA Banner -->
    <UiCTABanner />

  </div>
</template>

<script setup>
import { services, industries } from '~/config/site'

useSeoMeta({
  title: 'IRFAtech — Digital Infrastructure for Growing Businesses',
  description: 'IRFAtech helps businesses automate, organize, and grow digitally. Websites, ERP, CRM, AI automation, and custom software for SMBs.',
  ogTitle: 'IRFAtech — Digital Infrastructure for Growing Businesses',
  ogDescription: 'Websites, ERP, CRM, AI automation, and custom software for growing businesses.',
  ogImage: 'https://irfatech.com/images/og-image.jpg',
  ogUrl: 'https://irfatech.com',
  twitterCard: 'summary_large_image',
})

const whatsappUrl = 'https://wa.me/923001234567?text=Hi%20IRFAtech%2C%20I%20need%20help%20with%20my%20business%20digitalization.'

const trustBadges = [
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Businesses Served' },
  { value: '8', label: 'Service Areas' },
  { value: '24/7', label: 'Support' },
]

const differentiators = [
  {
    icon: 'lucide:user-check',
    title: 'Founder-Led, Every Project',
    desc: 'You deal directly with the founder, not a junior account manager. Your project gets senior attention from day one.',
  },
  {
    icon: 'lucide:settings-2',
    title: 'Custom-Built, Not Off-the-Shelf',
    desc: 'Every system is built for your specific operations. No bloated generic software that never quite fits.',
  },
  {
    icon: 'lucide:bot',
    title: 'Automation-First Mindset',
    desc: 'We look for every opportunity to eliminate manual work and let your systems do the heavy lifting.',
  },
  {
    icon: 'lucide:banknote',
    title: 'SMB-Friendly Pricing',
    desc: 'Enterprise-grade quality at prices that make sense for growing businesses, not Fortune 500 budgets.',
  },
  {
    icon: 'lucide:handshake',
    title: 'Long-Term Partnership',
    desc: "We don't disappear after launch. We support, maintain, and grow with your business as it scales.",
  },
]

const landflixFeatures = [
  'Smart property search and filtering',
  'Agent and listing management dashboard',
  'Inquiry and lead capture system',
  'Analytics and performance tracking',
  'WhatsApp integration for instant leads',
]

const processSteps = [
  {
    icon: 'lucide:search',
    title: 'Discover',
    description: 'We start with a free consultation to understand your business, operations, and goals before any proposal.',
  },
  {
    icon: 'lucide:pencil-ruler',
    title: 'Design',
    description: 'We design the solution architecture and present a clear roadmap, timeline, and cost — no surprises.',
  },
  {
    icon: 'lucide:code-2',
    title: 'Build',
    description: 'Development with regular check-ins. You see progress every week and give feedback before it goes live.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Support',
    description: 'After launch, we provide onboarding, training, and ongoing support so your team actually uses what we built.',
  },
]

const testimonials = [
  {
    quote: 'IRFAtech transformed how we manage our property listings. The platform they built saved us hours every day.',
    name: 'Ahmed Farooq',
    role: 'Director',
    company: 'Prime Realty',
  },
  {
    quote: 'The ERP system completely replaced our manual billing and inventory. We can see everything in one place now.',
    name: 'Sara Khan',
    role: 'Owner',
    company: 'Metro Distribution',
  },
  {
    quote: 'WhatsApp automation doubled our response rate to leads. Our sales team finally has time to focus on closing.',
    name: 'Usman Malik',
    role: 'GM Sales',
    company: 'BuildRight Clinic Group',
  },
]
</script>
