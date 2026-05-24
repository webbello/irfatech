<template>
  <div class="pt-16">

    <!-- ─── 1. HERO SECTION ────────────────────────────────────────────────── -->
    <section class="relative min-h-[92dvh] flex items-center bg-navy-950 bg-hero-premium overflow-hidden transition-colors duration-300">
      <!-- Ambient light effect -->
      <div class="absolute inset-0 bg-hero-premium-glow pointer-events-none transition-all duration-300"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent"></div>

      <div class="container-max px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-12 lg:gap-8 items-center">

          <!-- Left Column: Copy & CTAs -->
          <div class="text-left">
            <!-- Eyebrow Badge -->
            <div class="badge mb-6 hero-enter" style="animation-delay:0ms">
              <iconify-icon icon="lucide:shield-check" class="text-xs text-electric-500"></iconify-icon>
              Founder-Led Systems & Business Automation
            </div>

            <!-- Premium Headline -->
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.05] tracking-tight mb-6 hero-enter" style="animation-delay:80ms">
              We Build Smart Software That<br />

              <span class="text-gradient"> Helps You Scale.</span>
            </h1>

            <!-- High-Contrast Body Copy -->
            <p class="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl mb-9 hero-enter" style="animation-delay:160ms">
              We design and implement Odoo ERP systems, custom CRMs, AI workflows, and software solutions that help SMBs operate leaner, automate manual tasks, and scale with absolute operational intelligence.
            </p>

            <!-- Redesigned CTA Group -->
            <div class="flex flex-wrap gap-4 mb-10 hero-enter" style="animation-delay:240ms">
              <NuxtLink to="/contact" class="btn-primary px-7 py-3.5 text-base shadow-glow flex items-center gap-2 cursor-pointer">
                <iconify-icon icon="lucide:calendar" class="text-lg"></iconify-icon>
                Schedule Free Consultation
              </NuxtLink>
              <a :href="waGeneral" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3.5 text-base flex items-center gap-2 cursor-pointer">
                <iconify-icon icon="lucide:message-circle" class="text-lg"></iconify-icon>
                Chat on WhatsApp
              </a>
            </div>

            <!-- Credibility Strip -->
            <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 font-medium hero-enter" style="animation-delay:320ms">
              <span class="flex items-center gap-2">
                <iconify-icon icon="lucide:check-circle" class="text-electric-500 text-sm"></iconify-icon>
                15+ Years Systems Experience
              </span>
              <span class="flex items-center gap-2">
                <iconify-icon icon="lucide:check-circle" class="text-electric-500 text-sm"></iconify-icon>
                50+ Businesses Digitized
              </span>
              <span class="flex items-center gap-2">
                <iconify-icon icon="lucide:check-circle" class="text-electric-500 text-sm"></iconify-icon>
                West Bengal & India Coverage
              </span>
            </div>
          </div>

          <!-- Right Column: Connected Node Animation -->
          <div class="hero-enter flex justify-center items-center w-full lg:pl-6" style="animation-delay:200ms">
            <HeroAnimation />
          </div>

        </div>
      </div>

      <!-- Vignette bottom fade -->
      <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none"></div>
    </section>

    <!-- ─── 2. CAPABILITY MARQUEE ─────────────────────────────────────────── -->
    <div class="relative overflow-hidden border-y border-navy-700/30 bg-navy-900/40 py-4 transition-colors duration-300">
      <div class="flex animate-marquee whitespace-nowrap">
        <span v-for="n in 2" :key="n" class="flex items-center gap-0">
          <span
            v-for="cap in capabilities"
            :key="`${n}-${cap}`"
            class="inline-flex items-center gap-3 px-6 text-sm font-semibold text-slate-400 uppercase tracking-widest"
          >
            {{ cap }}
            <span class="text-electric-500 text-xs">•</span>
          </span>
        </span>
      </div>
      <!-- Edge gradients for smooth fading edge effect -->
      <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-950 to-transparent pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-950 to-transparent pointer-events-none"></div>
    </div>

    <!-- ─── 3. SERVICES BENTO GRID ────────────────────────────────────────── -->
    <section class="section-padding section-mid reveal-up transition-colors duration-300" ref="servicesRef">
      <div class="container-max">
        <!-- Section Header -->
        <div class="mb-12 max-w-2xl">
          <div class="badge mb-4">
            <iconify-icon icon="lucide:layers" class="text-xs"></iconify-icon>
            Capabilities
          </div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Eight solutions built for<br />
            your operational growth.
          </h2>
          <p class="text-slate-400 text-lg leading-relaxed">
            From connected Odoo ERP systems to WhatsApp automation — each service is engineered to eliminate manual friction, reduce cost, and build durable business value.
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-5">

          <!-- ERP Solution (Hero Tile) -->
          <NuxtLink
            to="/services/erp-solutions"
            class="sm:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden bg-navy-800/50 border border-navy-700/50 rounded-2xl p-8 flex flex-col hover:border-electric-500/40 hover:bg-navy-800/80 hover:shadow-glow transition-all duration-300"
          >
            <div class="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-electric-500/5 group-hover:bg-electric-500/10 transition-colors duration-500 blur-3xl"></div>
            <div class="relative flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between mb-8">
                  <div class="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
                    <iconify-icon icon="lucide:layout-dashboard" class="text-2xl text-electric-500"></iconify-icon>
                  </div>
                  <span class="badge">Flagship Core Solution</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-electric-500 transition-colors duration-200">ERP Solutions (Odoo)</h3>
                <p class="text-slate-400 text-base leading-relaxed mb-6 max-w-md">
                  Stop managing operations in siloed spreadsheets. We customize and implement Odoo ERP to connect your inventory, billing, purchase orders, accounting, and multi-branch operations.
                </p>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span v-for="tag in ['Inventory', 'Automated Invoicing', 'Purchases', 'Accounting', 'Consolidated Analytics']" :key="tag"
                    class="px-3 py-1 rounded-full bg-navy-700/50 text-slate-400 text-xs font-medium border border-navy-700/30">{{ tag }}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 text-sm text-electric-500 font-semibold group-hover:gap-3 transition-all duration-200">
                Explore ERP Solutions
                <iconify-icon icon="lucide:arrow-right" class="text-base group-hover:translate-x-1 transition-transform duration-200"></iconify-icon>
              </div>
            </div>
          </NuxtLink>

          <!-- WhatsApp Automation -->
          <NuxtLink to="/services/whatsapp-automation"
            class="group bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 hover:bg-navy-800/70 hover:shadow-glow transition-all duration-300">
            <div>
              <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20">
                <iconify-icon icon="lucide:message-circle" class="text-xl text-emerald-400"></iconify-icon>
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200">WhatsApp Automation</h3>
              <p class="text-sm text-slate-400 leading-relaxed">Connect your business workflows straight to WhatsApp Business API. Automate confirmations, invoices, and alerts.</p>
            </div>
            <div class="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-electric-500 transition-colors duration-200">
              WhatsApp Integration <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
            </div>
          </NuxtLink>

          <!-- AI & Workflow Automation -->
          <NuxtLink to="/services/ai-workflows"
            class="group bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 flex flex-col justify-between hover:border-accent-500/30 hover:bg-navy-800/70 hover:shadow-glow transition-all duration-300">
            <div>
              <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-accent-500/10 border border-accent-500/20">
                <iconify-icon icon="lucide:bot" class="text-xl text-accent-400"></iconify-icon>
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200">AI Workflows</h3>
              <p class="text-sm text-slate-400 leading-relaxed">Intelligent automation that takes repetitive data processes, document parsing, and email routing off your hands.</p>
            </div>
            <div class="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-electric-500 transition-colors duration-200">
              AI Automations <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
            </div>
          </NuxtLink>

          <!-- CRM & Sales Automation (Wide Tile) -->
          <NuxtLink to="/services/crm-automation"
            class="sm:col-span-2 group bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 hover:border-electric-500/30 hover:bg-navy-800/70 hover:shadow-glow transition-all duration-300">
            <div class="flex flex-col sm:flex-row items-start gap-5">
              <div class="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <iconify-icon icon="lucide:users" class="text-xl text-electric-500"></iconify-icon>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200">CRM & Sales Automation</h3>
                <p class="text-sm text-slate-400 leading-relaxed mb-4 max-w-xl">
                  Keep your pipeline clean and clear. Log leads from your website and WhatsApp automatically, track follow-ups, and measure team closing ratios from a single system.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in ['Lead Pipeline', 'WhatsApp Sync', 'Deal Analytics']" :key="tag"
                    class="px-2.5 py-0.5 rounded-full bg-navy-700/50 text-slate-400 text-xs border border-navy-700/20">{{ tag }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Dynamic Bottom Services -->
          <NuxtLink
            v-for="s in bottomServices"
            :key="s.slug"
            :to="`/services/${s.slug}`"
            class="group bg-navy-800/35 border border-navy-700/30 rounded-2xl p-6 flex flex-col justify-between hover:border-electric-500/30 hover:bg-navy-800/60 hover:shadow-glow transition-all duration-300"
          >
            <div>
              <div class="w-9 h-9 rounded-xl bg-navy-700/60 border border-navy-600/30 flex items-center justify-center mb-5 flex-shrink-0">
                <iconify-icon :icon="s.icon" class="text-lg text-slate-400 group-hover:text-electric-500 transition-colors duration-200"></iconify-icon>
              </div>
              <h3 class="text-base font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200 leading-snug">{{ s.title }}</h3>
              <p class="text-xs text-slate-400 leading-relaxed">{{ s.short }}</p>
            </div>
            <div class="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-electric-500 transition-colors duration-200">
              Details <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform duration-200"></iconify-icon>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── 4. STATS SLAB (Count-up) ──────────────────────────────────────── -->
    <section class="section-padding-sm section-dark border-y border-navy-700/30 transition-colors duration-300" ref="statsRef">
      <div class="container-max">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-700/20 rounded-2xl overflow-hidden border border-navy-700/30">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="bg-navy-950 px-8 py-8 flex flex-col transition-colors duration-300"
            :class="i < 3 ? 'lg:border-r border-navy-700/30' : ''"
          >
            <div class="text-5xl lg:text-6xl font-display font-black text-white tabular-nums leading-none mb-3">
              {{ displayValues[i].display }}{{ stat.suffix }}
            </div>
            <div class="text-sm font-bold text-slate-300 mb-1">{{ stat.label }}</div>
            <div class="text-xs text-slate-500">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 5. LANDFLIX SHOWCASE ──────────────────────────────────────────── -->
    <section class="section-padding section-mid transition-colors duration-300 reveal-up">
      <div class="container-max">
        <div class="card-glass border border-navy-700/60 p-8 sm:p-12 relative overflow-hidden rounded-3xl">
          <div class="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-electric-500/5 blur-3xl"></div>
          
          <div class="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-10 items-center">
            
            <!-- Left Info Block -->
            <div class="space-y-6">
              <div class="badge-accent">
                <iconify-icon icon="lucide:star" class="text-xs text-amber-500"></iconify-icon>
                IRFATECH Featured Venture
              </div>
              <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Landflix — Proof of Custom Systems Capability
              </h2>
              <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
                Rather than just talking about database capabilities and dashboards, we built **Landflix** — an in-house property portal and agency CRM framework. It handles dynamic catalog searching, automated WhatsApp notifications for inquiries, and detailed agent lead pipelines.
              </p>
              
              <ul class="space-y-3">
                <li class="flex items-start gap-2.5 text-sm text-slate-300">
                  <iconify-icon icon="lucide:check-circle-2" class="text-electric-500 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Dynamic search filters & map coordinates built in-house.</span>
                </li>
                <li class="flex items-start gap-2.5 text-sm text-slate-300">
                  <iconify-icon icon="lucide:check-circle-2" class="text-electric-500 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>WhatsApp Business API routes inquiries to agents instantly.</span>
                </li>
                <li class="flex items-start gap-2.5 text-sm text-slate-300">
                  <iconify-icon icon="lucide:check-circle-2" class="text-electric-500 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Performance monitoring showing listing views & closes.</span>
                </li>
              </ul>
              
              <div class="flex flex-wrap gap-4 pt-4">
                <NuxtLink to="/landflix" class="btn-primary px-6 py-3 text-sm">
                  View Landflix Venture
                </NuxtLink>
                <NuxtLink to="/contact" class="btn-ghost px-6 py-3 text-sm">
                  Get a Similar Platform
                </NuxtLink>
              </div>
            </div>

            <!-- Right Image Mockup -->
            <div class="relative w-full rounded-2xl overflow-hidden border border-navy-700/60 bg-navy-950 p-1">
              <NuxtImg
                src="/images/landflix-showcase.png"
                alt="Landflix Real Estate Platform Mockup"
                class="w-full h-auto rounded-xl shadow-glow opacity-90 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                width="600"
                height="380"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6. PROCESS RAIL ───────────────────────────────────────────────── -->
    <section class="section-padding section-dark transition-colors duration-300 reveal-up">
      <div class="container-max">
        <div class="mb-16 max-w-xl">
          <div class="badge mb-4">
            <iconify-icon icon="lucide:route" class="text-xs"></iconify-icon>
            Our Methodology
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Discovery to running system
          </h2>
          <p class="text-slate-400 mt-2">
            No endless meetings or account managers. We utilize direct, founder-led consulting to deliver clear systems in weeks.
          </p>
        </div>

        <!-- Horizontal steps -->
        <div class="relative">
          <!-- Connector line -->
          <div class="hidden lg:block absolute top-[22px] left-[60px] right-[60px] h-px bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700"></div>

          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            <div
              v-for="(step, i) in processSteps"
              :key="i"
              class="flex lg:flex-col items-start gap-4 group"
            >
              <!-- Number circle -->
              <div class="w-11 h-11 rounded-full bg-navy-800 border border-navy-700 group-hover:border-electric-500/40 group-hover:bg-navy-800/80 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300">
                <iconify-icon :icon="step.icon" class="text-sm text-slate-400 group-hover:text-electric-500 transition-colors duration-300"></iconify-icon>
              </div>
              <div>
                <div class="text-xs text-slate-500 font-mono mb-1">STEP 0{{ i + 1 }}</div>
                <h4 class="text-base font-bold text-white mb-2 group-hover:text-electric-500 transition-colors duration-200">{{ step.title }}</h4>
                <p class="text-sm text-slate-400 leading-relaxed lg:max-w-[190px]">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 7. TESTIMONIALS ───────────────────────────────────────────────── -->
    <section class="section-padding section-mid transition-colors duration-300 reveal-up">
      <div class="container-max">
        <div class="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div class="badge mb-4">
              <iconify-icon icon="lucide:star" class="text-xs"></iconify-icon>
              Client Results
            </div>
            <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              What businesses say<br />
              after going live
            </h2>
          </div>
          <NuxtLink to="/portfolio" class="btn-ghost text-sm px-5 py-2.5 flex-shrink-0 cursor-pointer">
            View All Case Studies
            <iconify-icon icon="lucide:arrow-right" class="text-xs"></iconify-icon>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 flex flex-col justify-between hover:border-electric-500/30 transition-all duration-300"
            :class="i === 1 ? 'lg:mt-8' : ''"
          >
            <div>
              <div class="flex gap-0.5 mb-4">
                <iconify-icon v-for="n in 5" :key="n" icon="lucide:star" class="text-amber-500" style="font-size:14px"></iconify-icon>
              </div>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8">"{{ t.quote }}"</p>
            </div>
            <div class="flex items-center gap-3.5 pt-5 border-t border-navy-700/40">
              <div class="w-10 h-10 rounded-full bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
                <span class="text-sm font-bold text-electric-500">{{ t.initial }}</span>
              </div>
              <div>
                <div class="text-sm font-bold text-white">{{ t.author }}</div>
                <div class="text-xs text-slate-500">{{ t.role }} · {{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 8. LEAD CTA BANNER ─────────────────────────────────────────────── -->
    <UiCTABanner
      title="Ready to automate your operations?"
      subtitle="Book a free 30-minute consultation. We'll listen to your workflows, map out your highest-ROI automation opportunities, and give you an honest roadmap — no obligation."
      primary-label="Book Free Consultation"
      primary-href="/contact"
      secondary-label="WhatsApp Us"
      :whatsapp-url="waConsultation"
    />

  </div>
</template>

<script setup>
import { services } from '~/config/site'
import { useWhatsApp } from '~/composables/useWhatsApp'

useSeoMeta({
  title: 'IRFATECH — Custom Software, ERP & Business Automation',
  description: 'IRFATECH builds Odoo ERP, CRMs, WhatsApp automation, and custom software for businesses in Kolkata, Siliguri, and across West Bengal. Scale operational efficiency.',
  ogTitle: 'IRFATECH — Digital Infrastructure for Growing Businesses',
  ogDescription: 'Odoo ERP, Custom CRMs, AI workflows, and software solutions for SMBs. Schedule a free consultation today.',
  ogUrl: 'https://irfatech.in',
})

// WhatsApp link builders
const waGeneral = useWhatsApp()
const waConsultation = useWhatsApp('Hi IRFATECH, I want to schedule a free systems consultation for my business.')

// Filter service categories matching the new renamed slugs
const heroServices = computed(() =>
  services.filter(s => ['erp-solutions', 'crm-automation', 'whatsapp-automation', 'ai-workflows'].includes(s.slug))
)

const bottomServices = computed(() =>
  services.filter(s => ['custom-software', 'websites', 'mobile-apps', 'maintenance'].includes(s.slug))
)

// Marquee sliding tags
const capabilities = [
  'Odoo ERP Implementations', 'WhatsApp CRM Automations', 'AI Business Workflows',
  'Custom Database Portals', 'Sales Invoicing Systems', 'Professional Platforms',
  'iOS & Android Mobile Operations', 'Multi-Branch Inventory Sync', 'Digital Transformations'
]

// Animated dashboard count-ups
const stats = [
  { value: 15, suffix: '+', label: 'Years System Expertise', sub: 'Consulting since 2009' },
  { value: 50, suffix: '+', label: 'Businesses Automated', sub: 'Kolkata, Siliguri & Indiawide' },
  { value: 7,  suffix: '',  label: 'Industries Served',      sub: 'Retail to Distribution' },
  { value: 8,  suffix: '',  label: 'Enterprise Services',    sub: 'Full stack architecture' },
]
const displayValues = reactive(stats.map(s => ({ ...s, display: 0 })))
const statsRef = ref(null)
const statsAnimated = ref(false)

function animateCount(index, target, duration = 1400) {
  const start = Date.now()
  const tick = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // cubic ease-out
    displayValues[index].display = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

const { stop: stopStats } = useIntersectionObserver(statsRef, ([entry]) => {
  if (entry.isIntersecting && !statsAnimated.value) {
    statsAnimated.value = true
    stats.forEach((s, i) => animateCount(i, s.value, 1200 + i * 120))
  }
}, { threshold: 0.25 })

// Structured workflow methodology
const processSteps = [
  { icon: 'lucide:search',       title: 'Discovery & Audit',   desc: 'We map your exact business flow, finding double-entries and bottlenecks.' },
  { icon: 'lucide:layers',       title: 'System Blueprint',    desc: 'Design a unified model integrating Odoo ERP, CRM, and communication links.' },
  { icon: 'lucide:code-2',       title: 'Custom Build',        desc: 'Configure data fields and API pathways with weekly feedback iterations.' },
  { icon: 'lucide:rocket',       title: 'Deploy & Migrate',    desc: 'Go live with zero downtime. We import historical data and train your staff.' },
  { icon: 'lucide:shield-check', title: 'Support & Scale',     desc: 'Ongoing security checks, system updates, and strategic feature additions.' },
]

// Customer Quotes
const testimonials = [
  {
    quote: 'IRFATECH restructured how we coordinate property listings and follow up on buyers. The custom platform they built cut customer wait times in half, and our closing rates have never been better.',
    author: 'Ravi Sharma',
    role: 'Managing Director',
    company: 'PropEdge Realty',
    initial: 'R',
  },
  {
    quote: 'Managing three warehouses on spreadsheets was a nightmare. IRFATECH integrated our multi-branch inventory into a solid ERP system. Billing reconciliation now takes minutes instead of two full days.',
    author: 'Amjad Khan',
    role: 'Principal Partner',
    company: 'KM Distributors',
    initial: 'A',
  },
  {
    quote: 'Their WhatsApp integration handles patient notifications and scheduling automatically. Our clinical desk is much quieter now, and booking no-shows dropped by over seventy percent.',
    author: 'Dr. Priya Nair',
    role: 'Clinical Director',
    company: 'Nair Family Clinic',
    initial: 'P',
  },
]

// Reveal animations on client load
onMounted(() => {
  if (!import.meta.client) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -45px 0px' })

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* Stagger entry animations on first mount */
.hero-enter {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
