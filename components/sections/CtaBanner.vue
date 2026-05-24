<template>
  <UiCTABanner
    title="Ready to automate your operations?"
    subtitle="Book a free 30-minute consultation. We'll listen to your workflows, map out your highest-ROI automation opportunities, and give you an honest roadmap — no obligation."
    primary-label="Book Free Consultation"
    primary-href="/contact"
    secondary-label="WhatsApp Us"
    :whatsapp-url="waConsultation"
  />
</template>

<script setup>
const waConsultation = useWhatsApp('Hi IRFATECH, I want to schedule a free systems consultation for my business.')
</script>
