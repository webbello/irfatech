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
    <!-- FAQ -->
    <section class="section-padding section-dark">
      <div class="container-max max-w-3xl mx-auto">
        <UiSectionHeader eyebrow="FAQ" title="WhatsApp Automation Questions" />
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.q" class="card-glass p-6">
            <h3 class="text-base font-semibold text-white mb-2">{{ faq.q }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Related Reading -->
    <section class="section-padding section-mid">
      <div class="container-max max-w-3xl mx-auto">
        <div class="flex items-center gap-2 mb-6">
          <iconify-icon icon="lucide:book-open" class="text-electric-400 text-base"></iconify-icon>
          <span class="text-sm font-semibold text-electric-400 uppercase tracking-wide">From the Blog</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NuxtLink to="/blog/whatsapp-business-automation-guide" class="card-glass p-5 group hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="text-xs text-electric-400 mb-2 uppercase tracking-wide">WhatsApp Guide</div>
            <h3 class="text-sm font-semibold text-white group-hover:text-electric-300 transition-colors leading-snug">Complete Guide to WhatsApp Business Automation for SMBs</h3>
            <div class="flex items-center gap-1 mt-3 text-xs text-slate-500 group-hover:text-electric-400 transition-colors">
              <span>Read article</span>
              <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform"></iconify-icon>
            </div>
          </NuxtLink>
          <NuxtLink to="/blog/best-crm-for-small-businesses" class="card-glass p-5 group hover:border-electric-500/30 hover:-translate-y-1 transition-all duration-300">
            <div class="text-xs text-electric-400 mb-2 uppercase tracking-wide">CRM</div>
            <h3 class="text-sm font-semibold text-white group-hover:text-electric-300 transition-colors leading-snug">Best CRM Solutions for Small Businesses in 2025</h3>
            <div class="flex items-center gap-1 mt-3 text-xs text-slate-500 group-hover:text-electric-400 transition-colors">
              <span>Read article</span>
              <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform"></iconify-icon>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- Social Share strip -->
    <section class="py-8 section-mid border-t border-navy-700/30">
      <div class="container-max flex flex-wrap items-center gap-3">
        <span class="text-sm text-slate-500 shrink-0">Share this page:</span>
        <SocialShare title="WhatsApp Business Automation | IRFATECH" description="Automate customer conversations — auto-replies, order updates, and lead follow-ups." />
      </div>
    </section>


    <UiCTABanner title="WhatsApp Is Where Your Customers Are" subtitle="Let us build automation that converts conversations into customers — automatically." primary-label="Get WhatsApp Automation" :whatsapp-url="whatsappUrl" />
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'WhatsApp Business Automation | IRFATECH',
  description: 'IRFATECH builds WhatsApp Business API automation for lead response, order updates, payment reminders, and customer follow-up.',
  ogTitle: 'WhatsApp Business Automation | IRFATECH',
  ogDescription: 'Automate customer conversations at scale — auto-replies, order updates, lead follow-ups via WhatsApp Business API.',
  ogUrl: 'https://irfatech.in/services/whatsapp-automation',
  ogImage: 'https://irfatech.in/images/og/og-whatsapp.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'WhatsApp Business Automation — IRFATECH',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://irfatech.in/images/og/og-whatsapp.png',
  twitterImageAlt: 'WhatsApp Business Automation | IRFATECH',
})
useHead({ link: [{ rel: 'canonical', href: 'https://irfatech.in/services/whatsapp-automation' }] })
const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%20need%20WhatsApp%20automation%20for%20my%20business.'

const faqs = [
  { q: 'What is WhatsApp Business API and how is it different from the regular WhatsApp Business app?', a: 'The WhatsApp Business App is for manual use by one person. The WhatsApp Business API connects WhatsApp to your business systems — allowing automation, bulk messaging, chatbots, and integration with your CRM or ERP. It handles high volumes without any manual effort.' },
  { q: 'Is WhatsApp automation legal in India?', a: 'Yes, fully legal. WhatsApp Business API is an official Meta product. All messages follow WhatsApp\'s business messaging policy. Promotional broadcasts require user opt-in — IRFATECH sets this up correctly from the start.' },
  { q: 'Can I send bulk promotional messages via WhatsApp?', a: 'Yes, to customers who have opted in. WhatsApp allows template-based broadcast messages to opted-in contacts. These are ideal for offers, reminders, and updates. Unsolicited spam is not allowed and can result in account suspension.' },
  { q: 'How long does setup take?', a: 'WhatsApp Business API approval from Meta takes 1–3 days. Building and connecting the automation to your existing systems takes another 1–3 weeks depending on complexity.' },
  { q: 'Do you handle the WhatsApp Business API application process?', a: 'Yes. We manage the entire Meta Business Verification and API application process on your behalf, so you do not need to deal with the technical setup.' },
]

// AEO: FAQPage schema — matches FAQ section visible on this page
useFaqSchema(faqs)

useHowToSchema({
  name: 'How to set up WhatsApp Business automation with IRFATECH',
  description: 'The process for getting WhatsApp Business API automation running for your business.',
  steps: [
    { name: 'Meta Business Verification', text: 'We handle your WhatsApp Business API application and Meta Business account verification on your behalf.' },
    { name: 'Automation Design', text: 'We map out the message flows — auto-replies, order updates, reminders — based on your business operations.' },
    { name: 'Build & Integration', text: 'We connect the WhatsApp API to your CRM, ERP, or order system, and build the message templates and chatbot logic.' },
    { name: 'Testing & Go-Live', text: 'We test every flow end-to-end, train your team to monitor conversations, then go live.' },
  ],
})

const automations = [
  { icon: 'lucide:zap', title: 'Instant Lead Response', desc: 'Automatically reply to new inquiries within seconds, collect details, and log to your CRM.' },
  { icon: 'lucide:package', title: 'Order Confirmations', desc: 'Customers receive automatic WhatsApp updates when orders are placed, processed, and delivered.' },
  { icon: 'lucide:bell', title: 'Payment Reminders', desc: 'Scheduled payment reminders reduce outstanding invoices without any manual follow-up.' },
  { icon: 'lucide:calendar', title: 'Appointment Reminders', desc: 'Reduce no-shows with automatic confirmation and reminder messages.' },
  { icon: 'lucide:star', title: 'Feedback Collection', desc: 'Post-sale automated messages that collect reviews and satisfaction scores.' },
  { icon: 'lucide:users', title: 'Team Handoff', desc: 'Smart routing that escalates complex conversations to the right team member.' },
]
</script>
