<template>
  <div class="pt-16">
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink to="/services" class="text-sm text-slate-500 hover:text-electric-400 transition-colors">Services</NuxtLink>
            <span class="text-slate-600">/</span>
            <span class="badge">WhatsApp Automation</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Automate WhatsApp.<br /><span class="text-gradient">Never Miss a Lead Again.</span>
          </h1>
          <p class="text-slate-400 text-xl leading-relaxed mb-8">Use the WhatsApp Business API to automatically respond to leads, send order updates, collect payments, and follow up — without manual effort.</p>
          <div class="flex flex-wrap gap-4">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp px-7 py-3">
              <iconify-icon icon="lucide:message-circle" class="text-base"></iconify-icon>
              Discuss WhatsApp Automation
            </a>
            <NuxtLink to="/contact" class="btn-ghost px-7 py-3">Get a Quote</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <div v-for="item in automations" :key="item.title" class="card-glass p-6 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
              <iconify-icon :icon="item.icon" class="text-xl text-[#25D366]"></iconify-icon>
            </div>
            <div>
              <h3 class="text-base font-semibold text-white mb-1.5">{{ item.title }}</h3>
              <p class="text-sm text-slate-400 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <UiCTABanner title="WhatsApp Is Where Your Customers Are" subtitle="Let us build automation that converts conversations into customers — automatically." primary-label="Get WhatsApp Automation" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({ title: 'WhatsApp Business Automation | IRFAtech', description: 'IRFAtech builds WhatsApp Business API automation for lead response, order updates, payment reminders, and customer follow-up.' })
const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFAtech%2C%20I%20need%20WhatsApp%20automation%20for%20my%20business.'
const automations = [
  { icon: 'lucide:zap', title: 'Instant Lead Response', desc: 'Automatically reply to new inquiries within seconds, collect details, and log to your CRM.' },
  { icon: 'lucide:package', title: 'Order Confirmations', desc: 'Customers receive automatic WhatsApp updates when orders are placed, processed, and delivered.' },
  { icon: 'lucide:bell', title: 'Payment Reminders', desc: 'Scheduled payment reminders reduce outstanding invoices without any manual follow-up.' },
  { icon: 'lucide:calendar', title: 'Appointment Reminders', desc: 'Reduce no-shows with automatic confirmation and reminder messages.' },
  { icon: 'lucide:star', title: 'Feedback Collection', desc: 'Post-sale automated messages that collect reviews and satisfaction scores.' },
  { icon: 'lucide:users', title: 'Team Handoff', desc: 'Smart routing that escalates complex conversations to the right team member.' },
]
</script>
