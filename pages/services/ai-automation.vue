<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">AI & Workflow Automation</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Let AI Handle<br /><span class="text-gradient">the Repetitive Work</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">AI chatbots, document automation, and smart workflows — built for real-world business operations, not just demos.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss AI for My Business
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Book Consultation</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="item in automations" :key="item.title" class="card-glass p-6 flex flex-col gap-3 hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center">
              <iconify-icon :icon="item.icon" class="text-xl text-electric-400"></iconify-icon>
            </div>
            <h3 class="text-base font-semibold text-white">{{ item.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <UiCTABanner title="What Can AI Automate for Your Business?" subtitle="Book a free consultation — we will identify the highest-ROI automation opportunities in your operations." primary-label="Get AI Consultation" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({ title: 'AI & Workflow Automation | IRFAtech', description: 'IRFAtech builds AI chatbots, document automation, and intelligent business workflows for SMBs.' })
const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFAtech%2C%20I%20need%20AI%20automation%20for%20my%20business.'
const automations = [
  { icon: 'lucide:bot', title: 'AI Chat Assistants', desc: 'Custom AI chatbots that handle customer inquiries, qualify leads, and book appointments around the clock.' },
  { icon: 'lucide:file-text', title: 'Document Automation', desc: 'Automatically generate quotes, invoices, contracts, and reports from your existing data.' },
  { icon: 'lucide:workflow', title: 'Smart Workflows', desc: 'Multi-step automation that triggers actions across your systems when business events occur.' },
  { icon: 'lucide:mail', title: 'Message Automation', desc: 'Intelligent sequences that send the right message at the right time based on customer behavior.' },
  { icon: 'lucide:bar-chart-2', title: 'Data Processing', desc: 'Automatically extract, clean, and process data from multiple sources into clean reports.' },
  { icon: 'lucide:brain', title: 'AI-Powered Insights', desc: 'Use AI to analyze your business data and surface patterns, risks, and opportunities.' },
]
</script>
