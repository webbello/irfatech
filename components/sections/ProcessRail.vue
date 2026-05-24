<template>
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

      <div class="relative">
        <div class="hidden lg:block absolute top-[22px] left-[60px] right-[60px] h-px bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700"></div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
          <div
            v-for="(step, i) in processSteps"
            :key="i"
            class="flex lg:flex-col items-start gap-4 group"
          >
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
</template>

<script setup>
const processSteps = [
  { icon: 'lucide:search',       title: 'Discovery & Audit',   desc: 'We map your exact business flow, finding double-entries and bottlenecks.' },
  { icon: 'lucide:layers',       title: 'System Blueprint',    desc: 'Design a unified model integrating Odoo ERP, CRM, and communication links.' },
  { icon: 'lucide:code-2',       title: 'Custom Build',        desc: 'Configure data fields and API pathways with weekly feedback iterations.' },
  { icon: 'lucide:rocket',       title: 'Deploy & Migrate',    desc: 'Go live with zero downtime. We import historical data and train your staff.' },
  { icon: 'lucide:shield-check', title: 'Support & Scale',     desc: 'Ongoing security checks, system updates, and strategic feature additions.' },
]
</script>
