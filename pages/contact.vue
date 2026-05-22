<template>
  <div class="pt-16">

    <!-- Hero -->
    <section class="section-padding section-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-hero-mesh pointer-events-none"></div>
      <div class="container-max relative text-center max-w-2xl mx-auto">
        <div class="badge mb-6">
          <iconify-icon icon="lucide:mail" class="text-xs"></iconify-icon>
          Get In Touch
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Let's Talk About<br />
          <span class="text-gradient">Your Business</span>
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          Free consultation. No pressure. We'll listen, understand your operations, and tell you honestly what makes sense for your business.
        </p>
      </div>
    </section>

    <!-- Contact Options + Form -->
    <section class="section-padding section-mid">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <!-- Left: Contact Methods -->
          <div class="space-y-5">
            <h2 class="text-2xl font-bold text-white mb-6">Choose How to Reach Us</h2>

            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
              class="flex items-start gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all duration-200 group">
              <div class="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="lucide:message-circle" class="text-2xl text-[#25D366]"></iconify-icon>
              </div>
              <div class="flex-1">
                <div class="font-semibold text-white mb-1 group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</div>
                <div class="text-sm text-slate-400">Fastest response — usually within minutes during business hours.</div>
                <div class="text-xs text-[#25D366] mt-2 font-medium">Open WhatsApp →</div>
              </div>
            </a>

            <a href="mailto:irfatechgroup@gmail.com"
              class="flex items-start gap-4 p-5 rounded-2xl card-glass hover:border-electric-500/30 transition-all duration-200 group">
              <div class="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="lucide:mail" class="text-2xl text-electric-400"></iconify-icon>
              </div>
              <div>
                <div class="font-semibold text-white mb-1 group-hover:text-electric-400 transition-colors">Email Us</div>
                <div class="text-sm text-slate-400">irfatechgroup@gmail.com</div>
                <div class="text-xs text-slate-500 mt-2">We respond within 24 hours on business days.</div>
              </div>
            </a>

            <a href="tel:+918864812200"
              class="flex items-start gap-4 p-5 rounded-2xl card-glass hover:border-electric-500/30 transition-all duration-200 group">
              <div class="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="lucide:phone" class="text-2xl text-electric-400"></iconify-icon>
              </div>
              <div>
                <div class="font-semibold text-white mb-1 group-hover:text-electric-400 transition-colors">Call Us</div>
                <div class="text-sm text-slate-400">+91 88 6481 2200</div>
                <div class="text-xs text-slate-500 mt-2">Mon–Sat, 9 AM – 7 PM IST</div>
              </div>
            </a>

            <div class="card-glass p-5">
              <h3 class="text-sm font-semibold text-white mb-3">What happens after you reach out?</h3>
              <ul class="space-y-2.5">
                <li v-for="step in nextSteps" :key="step" class="flex items-start gap-2.5 text-sm text-slate-400">
                  <iconify-icon icon="lucide:check-circle-2" class="text-electric-400 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                  {{ step }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Right: Inquiry Form -->
          <div class="card-glass p-8">
            <h2 class="text-2xl font-bold text-white mb-2">Send an Inquiry</h2>
            <p class="text-slate-400 text-sm mb-6">Fill this in and we'll get back to you with a proper response — not a template.</p>

            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-400 mb-1.5">Your Name *</label>
                  <input v-model="form.name" type="text" name="name" required placeholder="Ahmad Khan" class="input-field" />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-400 mb-1.5">Business Name</label>
                  <input v-model="form.business" type="text" name="business" placeholder="Your Company" class="input-field" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1.5">Email Address *</label>
                <input v-model="form.email" type="email" name="email" required placeholder="you@yourbusiness.com" class="input-field" />
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1.5">Phone / WhatsApp</label>
                <input v-model="form.phone" type="tel" name="phone" placeholder="+92 300 000 0000" class="input-field" />
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1.5">Service Needed</label>
                <select v-model="form.service" name="service" class="input-field">
                  <option value="" disabled>Select a service...</option>
                  <option v-for="service in services" :key="service.slug" :value="service.title">{{ service.title }}</option>
                  <option value="Not sure yet">Not sure yet — need advice</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1.5">Tell Us About Your Business *</label>
                <textarea v-model="form.message" name="message" required rows="4"
                  placeholder="Briefly describe your business and what you're looking to solve..."
                  class="input-field resize-none"></textarea>
              </div>

              <button type="submit" :disabled="submitting"
                class="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                <iconify-icon v-if="submitting" icon="lucide:loader-2" class="text-base animate-spin"></iconify-icon>
                <iconify-icon v-else icon="lucide:send" class="text-base"></iconify-icon>
                {{ submitting ? 'Sending...' : 'Send Inquiry' }}
              </button>

              <p v-if="submitted" class="text-sm text-electric-400 text-center flex items-center justify-center gap-2">
                <iconify-icon icon="lucide:check-circle-2"></iconify-icon>
                Message sent! We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { services } from '~/config/site'

useSeoMeta({
  title: 'Contact IRFATECH — Free Business Consultation',
  description: 'Book a free consultation with IRFATECH. WhatsApp, email, phone, or inquiry form — we respond fast and honestly.',
  ogTitle: 'Contact IRFATECH — Book a Free Consultation',
  ogUrl: 'https://irfatech.in/contact',
})

useLocalBusinessSchema()
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
])

const whatsappUrl = 'https://wa.me/918864812200?text=Hi%20IRFATECH%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.'

const form = ref({ name: '', business: '', email: '', phone: '', service: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const submitForm = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1200))
  submitted.value = true
  submitting.value = false
  form.value = { name: '', business: '', email: '', phone: '', service: '', message: '' }
}

const nextSteps = [
  'We read your inquiry within a few hours',
  'We reach out to schedule a free 30-minute call',
  'We listen to your operations — no sales pitch',
  'You get an honest recommendation, not a generic quote',
]
</script>
