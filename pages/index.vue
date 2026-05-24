<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <SectionsHeroSection />
    <!-- Interactive Image Accordion -->
    <LandingAccordion />
    <!-- Capability Marquee Sections -->
    <SectionsCapabilityMarquee />
    <!-- Services Bento Grid -->
    <SectionsServicesBento />
    <!-- Stats Counter -->
    <SectionsStatsCounter />
    <!-- Landflix Showcase -->
    <SectionsLandflixShowcase />
    <!-- Process Rail -->
    <SectionsProcessRail />
    <!-- Testimonials Scroll -->
    <SectionsTestimonialsScroll />
    <!-- CTA Banner -->
    <SectionsCtaBanner />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'IRFATECH — Custom Software, ERP & Business Automation',
  description: 'IRFATECH builds Odoo ERP, CRMs, WhatsApp automation, and custom software for businesses in Kolkata, Siliguri, and across West Bengal. Scale operational efficiency.',
  ogTitle: 'IRFATECH — Digital Infrastructure for Growing Businesses',
  ogDescription: 'Odoo ERP, Custom CRMs, AI workflows, and software solutions for SMBs. Schedule a free consultation today.',
  ogUrl: 'https://irfatech.in',
})

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
