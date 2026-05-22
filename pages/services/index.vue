<template>
  <div class="pt-16">
    <!-- Hero -->
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative text-center max-w-3xl mx-auto">
        <div class="badge mb-6">
          <iconify-icon icon="lucide:layers" class="text-xs"></iconify-icon>
          Our Services
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Everything You Need to<br />
          <span class="text-gradient">Digitize Your Business</span>
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          From a professional website to a complete business automation system — we build, integrate, and support it all.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <UiServiceCard v-for="service in services" :key="service.slug" :service="service" />
        </div>
      </div>
    </section>

    <!-- Why Bundle -->
    <section class="section-padding section-dark">
      <div class="container-max">
        <div class="card-glass p-10 max-w-3xl mx-auto text-center">
          <iconify-icon icon="lucide:package" class="text-5xl text-electric-400 mb-5"></iconify-icon>
          <h2 class="text-2xl font-bold text-white mb-4">Need More Than One Service?</h2>
          <p class="text-slate-400 leading-relaxed mb-6">
            Most businesses need a combination of solutions that work together. We design integrated systems where your website, CRM, ERP, and automation all talk to each other. No siloed software.
          </p>
          <NuxtLink to="/contact" class="btn-primary px-8 py-3">
            Discuss Your Requirements
            <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
          </NuxtLink>
        </div>
      </div>
    </section>

    <UiCTABanner />
  </div>
</template>

<script setup>
import { services } from '~/config/site'

useSeoMeta({
  title: 'Services — Websites, ERP, CRM, AI Automation | IRFATECH',
  description: 'IRFATECH offers business websites, ERP solutions, CRM systems, AI automation, custom software, WhatsApp automation, mobile apps, and maintenance services.',
  ogTitle: 'IRFATECH Services — Full-Stack Business Digitalization',
  ogDescription: 'Websites, ERP, CRM, AI automation, custom software, and more. Built for growing SMBs.',
})
</script>
