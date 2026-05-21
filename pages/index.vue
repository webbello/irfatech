<template>
  <div class="pt-16">

    <!-- ─── 1. HERO ──────────────────────────────────────────────────────── -->
    <section class="relative min-h-[100dvh] flex items-center bg-navy-950 bg-hero-premium overflow-hidden">
      <!-- Top vignette -->
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent"></div>

      <div class="container-max px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div class="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-12 lg:gap-16 items-center">

          <!-- Left: text column -->
          <div>
            <!-- Eyebrow -->
            <div class="badge mb-7 hero-enter" style="animation-delay:0ms">
              <iconify-icon icon="lucide:zap" class="text-xs"></iconify-icon>
              Integrated Resources For Automation
            </div>

            <!-- H1 — no gradient, sharp white -->
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white leading-[1.05] tracking-tight mb-6 hero-enter" style="animation-delay:80ms">
              Digital Infrastructure<br />
              for Growing<br />
              <span class="text-electric-400">Businesses.</span>
            </h1>

            <p class="text-slate-400 text-lg leading-relaxed max-w-xl mb-9 hero-enter" style="animation-delay:160ms">
              We build ERP systems, AI automation, CRM, and custom software so Indian SMBs can operate leaner, move faster, and scale with confidence.
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-3 mb-10 hero-enter" style="animation-delay:240ms">
              <NuxtLink to="/contact" class="btn-primary px-6 py-3">
                <iconify-icon icon="lucide:calendar" class="text-base"></iconify-icon>
                Book a Free Consultation
              </NuxtLink>
              <a :href="waGeneral" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-6 py-3">
                <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
                Talk on WhatsApp
              </a>
            </div>

            <!-- Proof strip -->
            <div class="flex flex-wrap gap-5 text-sm text-slate-500 hero-enter" style="animation-delay:320ms">
              <span class="flex items-center gap-1.5">
                <iconify-icon icon="lucide:check-circle" class="text-electric-500/70 text-xs"></iconify-icon>
                15+ Years Experience
              </span>
              <span class="flex items-center gap-1.5">
                <iconify-icon icon="lucide:check-circle" class="text-electric-500/70 text-xs"></iconify-icon>
                50+ Businesses Served
              </span>
              <span class="flex items-center gap-1.5">
                <iconify-icon icon="lucide:check-circle" class="text-electric-500/70 text-xs"></iconify-icon>
                7 Industries Across India
              </span>
            </div>
          </div>

          <!-- Right: bento cluster (lg+ only) -->
          <div class="hidden lg:grid grid-cols-2 gap-3 hero-enter" style="animation-delay:200ms">

            <!-- Tile 1: services preview (wide) -->
            <div class="col-span-2 bg-navy-900/70 border border-navy-700/50 rounded-2xl p-5 backdrop-blur-sm">
              <div class="text-xs text-slate-600 uppercase tracking-widest font-medium mb-4">Your digital stack</div>
              <div class="grid grid-cols-2 gap-2.5">
                <div
                  v-for="s in heroServices"
                  :key="s.slug"
                  class="flex items-center gap-2.5 bg-navy-800/60 border border-navy-700/40 rounded-xl px-3 py-2.5"
                >
                  <div class="w-6 h-6 rounded-md bg-electric-500/10 flex items-center justify-center flex-shrink-0">
                    <iconify-icon :icon="s.icon" class="text-xs text-electric-400"></iconify-icon>
                  </div>
                  <span class="text-xs font-medium text-slate-300 leading-tight">{{ s.title }}</span>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-navy-700/40 flex items-center justify-between">
                <span class="text-xs text-slate-600">8 services available</span>
                <NuxtLink to="/services" class="text-xs text-electric-400 hover:text-electric-300 flex items-center gap-1 transition-colors">
                  Explore all <iconify-icon icon="lucide:arrow-right" class="text-xs"></iconify-icon>
                </NuxtLink>
              </div>
            </div>

            <!-- Tile 2: Years expertise -->
            <div class="bg-navy-900/70 border border-navy-700/50 rounded-2xl p-5 backdrop-blur-sm">
              <div class="text-4xl font-display font-bold text-white tabular-nums mb-1">15+</div>
              <div class="text-sm text-slate-300 font-medium mb-1">Years of expertise</div>
              <div class="text-xs text-slate-600 mb-4">Founded 2009</div>
              <div class="relative h-1 bg-navy-700 rounded-full overflow-hidden">
                <div class="absolute inset-y-0 left-0 bg-electric-500 rounded-full" style="width: 88%; transition: width 2s ease-out;"></div>
              </div>
              <div class="flex justify-between text-xs text-slate-700 mt-1.5">
                <span>2009</span><span>2025</span>
              </div>
            </div>

            <!-- Tile 3: Industries -->
            <div class="bg-navy-900/70 border border-navy-700/50 rounded-2xl p-5 backdrop-blur-sm">
              <div class="flex items-center gap-1.5 mb-4">
                <div class="w-1.5 h-1.5 rounded-full bg-electric-400 animate-status"></div>
                <span class="text-xs text-slate-500">Active engagements</span>
              </div>
              <div class="text-4xl font-display font-bold text-white tabular-nums mb-1">7</div>
              <div class="text-sm text-slate-300 font-medium mb-3">Industries</div>
              <div class="space-y-1">
                <div v-for="ind in ['Real Estate', 'Retail', 'Healthcare']" :key="ind" class="flex items-center gap-1.5 text-xs text-slate-500">
                  <div class="w-1 h-1 rounded-full bg-navy-600 flex-shrink-0"></div>
                  {{ ind }}
                </div>
                <div class="text-xs text-slate-600">+ 4 more</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom gradient fade -->
      <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none"></div>
    </section>

    <!-- ─── 2. CAPABILITY MARQUEE ─────────────────────────────────────────── -->
    <div class="relative overflow-hidden border-y border-navy-700/30 bg-navy-900/40 py-4">
      <div class="flex animate-marquee whitespace-nowrap">
        <span v-for="n in 2" :key="n" class="flex items-center gap-0">
          <span
            v-for="cap in capabilities"
            :key="`${n}-${cap}`"
            class="inline-flex items-center gap-3 px-5 text-sm font-medium text-slate-500 uppercase tracking-widest"
          >
            {{ cap }}
            <span class="text-electric-600 text-xs">·</span>
          </span>
        </span>
      </div>
      <!-- Edge fades -->
      <div class="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-950 to-transparent pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-950 to-transparent pointer-events-none"></div>
    </div>

    <!-- ─── 3. SERVICES BENTO ─────────────────────────────────────────────── -->
    <section class="section-padding section-mid reveal-up" ref="servicesRef">
      <div class="container-max">
        <!-- Header -->
        <div class="mb-10">
          <div class="badge mb-4">
            <iconify-icon icon="lucide:layers" class="text-xs"></iconify-icon>
            What we build
          </div>
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Eight ways to modernise<br class="hidden md:block" /> your operations
          </h2>
          <p class="text-slate-400 max-w-lg">
            From ERP to AI automation — each service is designed to remove manual work and give your business a durable operational edge.
          </p>
        </div>

        <!-- Bento grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">

          <!-- ERP — hero tile: col-span-2, row-span-2 -->
          <NuxtLink
            to="/services/erp"
            class="sm:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden bg-navy-800/60 border border-navy-700/50 rounded-2xl p-7 flex flex-col hover:border-electric-500/25 transition-all duration-300"
          >
            <div class="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-electric-500/5 group-hover:bg-electric-500/8 transition-colors duration-500 blur-3xl"></div>
            <div class="relative flex-1 flex flex-col">
              <div class="flex items-start justify-between mb-6">
                <div class="w-11 h-11 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
                  <iconify-icon icon="lucide:layout-dashboard" class="text-lg text-electric-400"></iconify-icon>
                </div>
                <span class="text-xs text-electric-600 font-mono uppercase tracking-widest">Flagship</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2.5 group-hover:text-electric-400 transition-colors duration-200">ERP Solutions</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
                Odoo-based enterprise resource planning — inventory, billing, CRM, accounting, and operations in one connected system.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in ['Inventory', 'Billing', 'Accounting', 'Operations']" :key="tag"
                  class="px-2.5 py-1 rounded-full bg-navy-700/50 text-slate-400 text-xs">{{ tag }}</span>
              </div>
              <div class="mt-auto flex items-center gap-1.5 text-sm text-electric-400 font-medium group-hover:gap-2.5 transition-all duration-200">
                Explore ERP
                <iconify-icon icon="lucide:arrow-right" class="text-sm group-hover:translate-x-1 transition-transform duration-200"></iconify-icon>
              </div>
            </div>
          </NuxtLink>

          <!-- WhatsApp Automation -->
          <NuxtLink to="/services/whatsapp-automation"
            class="group bg-navy-800/40 border border-navy-700/30 rounded-xl p-5 flex flex-col hover:border-emerald-500/25 hover:bg-navy-800/60 transition-all duration-300">
            <div class="w-9 h-9 rounded-lg mb-4 flex items-center justify-center flex-shrink-0"
              style="background:rgba(37,211,102,0.08);border:1px solid rgba(37,211,102,0.18)">
              <iconify-icon icon="lucide:message-circle" class="text-base" style="color:#25D366"></iconify-icon>
            </div>
            <h3 class="text-sm font-semibold text-white mb-1.5 group-hover:text-electric-400 transition-colors duration-200">WhatsApp Automation</h3>
            <p class="text-xs text-slate-500 leading-relaxed flex-1">Automate customer conversations, order updates, and follow-ups at scale.</p>
            <div class="mt-3 flex items-center gap-1 text-xs text-slate-500 group-hover:text-electric-400 transition-colors duration-200 font-medium">
              Learn more <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
            </div>
          </NuxtLink>

          <!-- AI Automation -->
          <NuxtLink to="/services/ai-automation"
            class="group bg-navy-800/40 border border-navy-700/30 rounded-xl p-5 flex flex-col hover:border-accent-500/25 hover:bg-navy-800/60 transition-all duration-300">
            <div class="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/18 mb-4 flex items-center justify-center flex-shrink-0">
              <iconify-icon icon="lucide:bot" class="text-base text-accent-400"></iconify-icon>
            </div>
            <h3 class="text-sm font-semibold text-white mb-1.5 group-hover:text-electric-400 transition-colors duration-200">AI & Workflow Automation</h3>
            <p class="text-xs text-slate-500 leading-relaxed flex-1">Intelligent automation that replaces repetitive manual tasks with smart processes.</p>
            <div class="mt-3 flex items-center gap-1 text-xs text-slate-500 group-hover:text-electric-400 transition-colors duration-200 font-medium">
              Learn more <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
            </div>
          </NuxtLink>

          <!-- CRM — wide tile -->
          <NuxtLink to="/services/crm"
            class="sm:col-span-2 group bg-navy-800/40 border border-navy-700/30 rounded-xl p-5 hover:border-electric-500/20 hover:bg-navy-800/55 transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-lg bg-electric-500/10 border border-electric-500/18 flex items-center justify-center flex-shrink-0 mt-0.5">
                <iconify-icon icon="lucide:users" class="text-base text-electric-400"></iconify-icon>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-white mb-1.5 group-hover:text-electric-400 transition-colors duration-200">CRM & Sales Automation</h3>
                <p class="text-xs text-slate-500 leading-relaxed mb-3 max-w-sm">Track leads, automate follow-ups, and close more deals without losing any customer in the pipeline.</p>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tag in ['Lead tracking', 'Auto follow-up', 'Analytics']" :key="tag"
                    class="px-2 py-0.5 rounded-full bg-navy-700/50 text-slate-500 text-xs">{{ tag }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Bottom 4: Custom, Websites, Mobile, Maintenance -->
          <NuxtLink
            v-for="s in bottomServices"
            :key="s.slug"
            :to="`/services/${s.slug}`"
            class="group bg-navy-800/35 border border-navy-700/25 rounded-xl p-5 flex flex-col hover:border-electric-500/18 hover:bg-navy-800/55 transition-all duration-300"
          >
            <div class="w-8 h-8 rounded-lg bg-navy-700/60 border border-navy-600/30 flex items-center justify-center mb-3.5 flex-shrink-0">
              <iconify-icon :icon="s.icon" class="text-xs text-slate-400 group-hover:text-electric-400 transition-colors duration-200"></iconify-icon>
            </div>
            <h3 class="text-sm font-semibold text-white mb-1.5 group-hover:text-electric-400 transition-colors duration-200 leading-snug">{{ s.title }}</h3>
            <p class="text-xs text-slate-600 leading-relaxed flex-1">{{ s.short }}</p>
            <div class="mt-3 flex items-center gap-1 text-xs text-navy-600 group-hover:text-electric-400 transition-colors duration-200 font-medium">
              Learn more <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── 4. STATS SLAB ─────────────────────────────────────────────────── -->
    <section class="section-padding-sm section-dark border-y border-navy-700/30" ref="statsRef">
      <div class="container-max">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-700/20 rounded-2xl overflow-hidden">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="bg-navy-950 px-8 py-8 flex flex-col"
            :class="i < 3 ? 'lg:border-r border-navy-700/30' : ''"
          >
            <div class="text-5xl lg:text-6xl font-display font-bold text-white tabular-nums leading-none mb-2">
              {{ displayValues[i].display }}{{ stat.suffix }}
            </div>
            <div class="text-sm font-semibold text-slate-300 mb-1">{{ stat.label }}</div>
            <div class="text-xs text-slate-600">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 5. PROCESS RAIL ───────────────────────────────────────────────── -->
    <section class="section-padding section-mid reveal-up">
      <div class="container-max">
        <div class="mb-12 max-w-xl">
          <div class="badge mb-4">
            <iconify-icon icon="lucide:route" class="text-xs"></iconify-icon>
            How we work
          </div>
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            From first call to running system
          </h2>
        </div>

        <!-- Steps: horizontal on lg, vertical on mobile -->
        <div class="relative">
          <!-- Connector line — desktop -->
          <div class="hidden lg:block absolute top-[22px] left-[60px] right-[60px] h-px bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700"></div>

          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            <div
              v-for="(step, i) in processSteps"
              :key="i"
              class="flex lg:flex-col items-start lg:items-start gap-4 lg:gap-4 group"
            >
              <!-- Icon circle -->
              <div class="w-11 h-11 rounded-full bg-navy-800 border border-navy-700 group-hover:border-electric-500/40 group-hover:bg-navy-800/80 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300">
                <iconify-icon :icon="step.icon" class="text-sm text-slate-400 group-hover:text-electric-400 transition-colors duration-300"></iconify-icon>
              </div>
              <!-- Text -->
              <div>
                <div class="text-xs text-slate-700 font-mono mb-1">0{{ i + 1 }}</div>
                <h4 class="text-sm font-semibold text-white mb-1.5 group-hover:text-electric-400 transition-colors duration-200">{{ step.title }}</h4>
                <p class="text-xs text-slate-500 leading-relaxed lg:max-w-[160px]">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6. TESTIMONIALS ───────────────────────────────────────────────── -->
    <section class="section-padding section-dark reveal-up">
      <div class="container-max">
        <div class="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div class="badge mb-4">
              <iconify-icon icon="lucide:star" class="text-xs"></iconify-icon>
              Client outcomes
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              What businesses say<br class="hidden sm:block" /> after going live
            </h2>
          </div>
          <NuxtLink to="/portfolio" class="btn-ghost text-sm px-4 py-2 flex-shrink-0">
            View case studies
            <iconify-icon icon="lucide:arrow-right" class="text-xs"></iconify-icon>
          </NuxtLink>
        </div>

        <!-- Offset testimonial grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="bg-navy-900/60 border border-navy-700/40 rounded-2xl p-6 flex flex-col"
            :class="i === 1 ? 'lg:mt-8' : ''"
          >
            <!-- Stars -->
            <div class="flex gap-0.5 mb-4">
              <iconify-icon v-for="n in 5" :key="n" icon="lucide:star" class="text-amber-400" style="font-size:13px"></iconify-icon>
            </div>
            <!-- Quote -->
            <p class="text-slate-300 text-sm leading-relaxed mb-6 flex-1">"{{ t.quote }}"</p>
            <!-- Author -->
            <div class="flex items-center gap-3 pt-4 border-t border-navy-700/40">
              <div class="w-9 h-9 rounded-full bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
                <span class="text-xs font-bold text-electric-400">{{ t.initial }}</span>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">{{ t.author }}</div>
                <div class="text-xs text-slate-600">{{ t.role }} · {{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 7. CTA BANNER ─────────────────────────────────────────────────── -->
    <UiCTABanner
      title="Ready to automate your business?"
      subtitle="Book a free 30-minute consultation. We'll map your operations, identify what to automate first, and give you an honest roadmap — no obligation."
      primary-label="Schedule Free Call"
      primary-href="/contact"
      secondary-label="WhatsApp Us Now"
      :whatsapp-url="waConsultation"
    />

  </div>
</template>

<script setup>
import { services, siteConfig } from '~/config/site'
import { useWhatsApp } from '~/composables/useWhatsApp'

useSeoMeta({
  title: 'IRFAtech — Digital Infrastructure for Growing Businesses',
  description: 'IRFAtech builds ERP systems, CRM, AI workflows, WhatsApp automation, and custom software for Indian SMBs. Automate operations and grow with confidence.',
  ogTitle: 'IRFAtech — Digital Infrastructure for Growing Businesses',
  ogDescription: 'ERP, CRM, AI automation & custom software for Indian SMBs. Book a free consultation.',
  ogUrl: 'https://irfatech.in',
})

// WhatsApp links
const waGeneral = useWhatsApp()
const waConsultation = useWhatsApp('Hi IRFAtech, I would like to book a free consultation about automating my business.')

// Hero bento: top 4 services
const heroServices = computed(() =>
  services.filter(s => ['erp', 'crm', 'whatsapp-automation', 'ai-automation'].includes(s.slug))
)

// Bottom 4 bento tiles
const bottomServices = computed(() =>
  services.filter(s => ['custom-software', 'websites', 'mobile-apps', 'maintenance'].includes(s.slug))
)

// Marquee capabilities
const capabilities = [
  'ERP Systems', 'WhatsApp Automation', 'AI Workflows',
  'CRM & Sales', 'Custom Software', 'Business Websites',
  'Mobile Apps', 'Odoo Implementation', 'Digital Transformation',
]

// Stats with count-up animation
const stats = [
  { value: 15, suffix: '+', label: 'Years of Expertise',      sub: 'Founded in 2009' },
  { value: 50, suffix: '+', label: 'Businesses Automated',    sub: 'Across India' },
  { value: 7,  suffix: '',  label: 'Industries Served',       sub: 'Retail to Healthcare' },
  { value: 8,  suffix: '',  label: 'Core Services',           sub: 'End-to-end digital stack' },
]
const displayValues = reactive(stats.map(s => ({ ...s, display: 0 })))
const statsRef = ref(null)
const statsAnimated = ref(false)

function animateCount(index, target, duration = 1400) {
  const start = Date.now()
  const tick = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
    displayValues[index].display = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

const { stop: stopStats } = useIntersectionObserver(statsRef, ([entry]) => {
  if (entry.isIntersecting && !statsAnimated.value) {
    statsAnimated.value = true
    stats.forEach((s, i) => animateCount(i, s.value, 1200 + i * 100))
  }
}, { threshold: 0.25 })

// Process steps
const processSteps = [
  { icon: 'lucide:search',       title: 'Discovery',    desc: 'Map your operations, identify bottlenecks, and define the right digital strategy.' },
  { icon: 'lucide:layers',       title: 'Architecture', desc: 'Design a scalable system built around your actual business workflows.' },
  { icon: 'lucide:code-2',       title: 'Build',        desc: 'Develop and configure your solution with regular feedback and transparent milestones.' },
  { icon: 'lucide:rocket',       title: 'Deploy',       desc: 'Go live with full training, data migration, and zero-downtime cutover.' },
  { icon: 'lucide:shield-check', title: 'Support',      desc: 'Ongoing maintenance, updates, and strategic guidance as your business scales.' },
]

// Testimonials
const testimonials = [
  {
    quote: 'IRFAtech redesigned how we manage property leads and client follow-ups. The CRM they built cut our response time in half and we closed significantly more deals within the first quarter.',
    author: 'Ravi Sharma',
    role: 'Director',
    company: 'PropEdge Realty',
    initial: 'R',
  },
  {
    quote: 'Our distribution operations ran on spreadsheets for years. After IRFAtech implemented Odoo ERP, billing errors dropped and our team saves 20+ hours a week on manual entry alone.',
    author: 'Amjad Khan',
    role: 'Managing Partner',
    company: 'KM Distributors',
    initial: 'A',
  },
  {
    quote: 'WhatsApp automation handles appointment reminders and patient confirmations automatically. Our clinic staff can focus on care, not phones. Best technology investment we made.',
    author: 'Dr. Priya Nair',
    role: 'Clinic Director',
    company: 'Nair Family Clinic',
    initial: 'P',
  },
]

// Scroll reveal — runs on client
onMounted(() => {
  if (!import.meta.client) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el))
})
</script>
