<template>
  <section class="relative min-h-[92dvh] flex items-center bg-navy-950 overflow-hidden transition-colors duration-300">
    <HeroBackgroundBoxes />
    <div class="absolute inset-0 bg-hero-premium-glow pointer-events-none transition-all duration-300"></div>
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent"></div>

    <div class="container-max px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-12 lg:gap-8 items-center">

        <div class="text-left">
          <div class="badge mb-6 hero-enter" style="animation-delay:0ms">
            <iconify-icon icon="lucide:shield-check" class="text-xs text-electric-500"></iconify-icon>
            Founder-Led Systems & Business Automation
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.05] tracking-tight mb-6 hero-enter" style="animation-delay:80ms">
            We Build Smart Software That<br />
            <span class="text-gradient"> Helps You Scale.</span>
          </h1>

          <p class="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl mb-9 hero-enter" style="animation-delay:160ms">
            We design and implement Odoo ERP systems, custom CRMs, AI workflows, and software solutions that help SMBs operate leaner, automate manual tasks, and scale with absolute operational intelligence.
          </p>

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

        <div class="hero-enter flex justify-center items-center w-full lg:pl-6" style="animation-delay:200ms">
          <HeroAnimation />
        </div>

      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none"></div>
  </section>
</template>

<script setup>
const waGeneral = useWhatsApp()
</script>

<style scoped>
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
