<template>
  <div class="pt-16">

    <!-- Hero -->
    <section class="section-padding section-dark relative overflow-hidden min-h-[60vh] flex items-center">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="badge-accent mb-6">
              <iconify-icon icon="lucide:star" class="text-xs"></iconify-icon>
              IRFATECH Venture
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Landflix
              <span class="block text-gradient text-3xl md:text-4xl mt-2">Smart Real Estate Platform</span>
            </h1>
            <p class="text-slate-400 text-xl leading-relaxed mb-8">
              Built entirely by IRFATECH to prove what's possible. Landflix is a full property technology platform that transforms how real estate businesses operate — from listing to closing.
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%27d%20like%20to%20know%20more%20about%20Landflix."
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary px-7 py-3"
              >
                <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
                Ask About Landflix
              </a>
              <NuxtLink to="/contact" class="btn-ghost px-7 py-3">
                Get a Similar Platform
              </NuxtLink>
            </div>
          </div>

          <!-- Visual -->
          <div class="card-glass p-8 min-h-72 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-electric-500/5 to-accent-500/5"></div>
            <div class="text-center relative">
              <iconify-icon icon="lucide:home" class="text-8xl text-electric-400/20 mb-4"></iconify-icon>
              <div class="badge mx-auto">Screenshots Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <UiSectionHeader
          eyebrow="Platform Features"
          title="Everything a Real Estate Business Needs"
          subtitle="From property listings to lead management — Landflix handles the full customer journey."
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="card-glass p-6 flex flex-col gap-3 hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div class="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center">
              <iconify-icon :icon="feature.icon" class="text-xl text-electric-400"></iconify-icon>
            </div>
            <h3 class="text-base font-semibold text-white">{{ feature.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech + Story -->
    <section class="section-padding section-dark">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="badge mb-4">Built by IRFATECH</div>
            <h2 class="text-3xl font-bold text-white mb-5 leading-tight">
              Why We Built Landflix
            </h2>
            <p class="text-slate-400 leading-relaxed mb-4">
              We were tired of telling real estate clients what a platform "could" look like. So we built one ourselves — using the same technology stack we use for client projects.
            </p>
            <p class="text-slate-400 leading-relaxed mb-4">
              Landflix became our proof of concept: that IRFATECH can take a business problem and turn it into a polished, scalable digital product. From backend to frontend to mobile — done in-house.
            </p>
            <p class="text-slate-400 leading-relaxed">
              Need something similar for your industry? That's exactly the kind of project we love.
            </p>
          </div>

          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Technology Stack</h3>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="tech in techStack" :key="tech.name" class="card-glass p-4 flex items-center gap-3">
                <iconify-icon :icon="tech.icon" class="text-2xl text-electric-400 flex-shrink-0"></iconify-icon>
                <div>
                  <div class="text-sm font-medium text-white">{{ tech.name }}</div>
                  <div class="text-xs text-slate-500">{{ tech.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UiCTABanner
      title="Need a Similar Platform?"
      subtitle="We build custom real estate, marketplace, or business platforms. Let's scope yours."
      primary-label="Discuss Your Platform"
      secondary-label="WhatsApp Us"
    />

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Landflix — Smart Real Estate Platform by IRFATECH',
  description: 'Landflix is a full property technology platform built by IRFATECH. Smart listings, lead management, agent dashboards, and WhatsApp integration.',
  ogTitle: 'Landflix — Real Estate Platform by IRFATECH',
  ogDescription: 'A full property technology solution built entirely by IRFATECH. Proof of what we can build for your business.',
})

const features = [
  { icon: 'lucide:search', title: 'Smart Property Search', desc: 'Filter by location, price, type, and custom attributes with instant results.' },
  { icon: 'lucide:layout-dashboard', title: 'Agent Dashboard', desc: 'Each agent manages their listings, leads, and performance in a dedicated workspace.' },
  { icon: 'lucide:users', title: 'Lead Management', desc: 'Capture and track every inquiry with status, source, and follow-up reminders.' },
  { icon: 'lucide:message-circle', title: 'WhatsApp Integration', desc: 'Leads instantly notified via WhatsApp. Agents respond from their phones.' },
  { icon: 'lucide:bar-chart-2', title: 'Analytics Dashboard', desc: 'Track views, inquiries, agent performance, and listing conversions in real time.' },
  { icon: 'lucide:smartphone', title: 'Mobile Responsive', desc: 'Fully responsive for buyers and agents browsing on mobile devices.' },
]

const techStack = [
  { icon: 'lucide:layers', name: 'Laravel', role: 'Backend API' },
  { icon: 'lucide:triangle', name: 'Vue.js', role: 'Frontend' },
  { icon: 'lucide:database', name: 'MySQL', role: 'Database' },
  { icon: 'lucide:server', name: 'REST API', role: 'Integration' },
]
</script>
