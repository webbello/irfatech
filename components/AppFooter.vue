<template>
  <footer class="bg-navy-900 border-t border-navy-700/50">
    <!-- Main Footer -->
    <div class="container-max section-padding-sm px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-electric-500 flex items-center justify-center shadow-glow-sm">
              <iconify-icon icon="lucide:zap" class="text-lg text-white"></iconify-icon>
            </div>
            <span class="text-xl font-bold text-white">
              IRFA<span class="text-electric-400">tech</span>
            </span>
          </NuxtLink>
          <p class="text-slate-400 text-sm leading-relaxed mb-5">
            Helping businesses automate, organize, and grow digitally. Founder-led. Built for SMBs.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700/50 flex items-center justify-center text-slate-400 hover:text-electric-400 hover:border-electric-500/30 transition-all duration-200"
            >
              <iconify-icon :icon="social.icon" class="text-base"></iconify-icon>
            </a>
          </div>
        </div>

        <!-- Services Column -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
          <ul class="space-y-2.5">
            <li v-for="service in services" :key="service.slug">
              <NuxtLink
                :to="`/services/${service.slug}`"
                class="text-sm text-slate-400 hover:text-electric-400 transition-colors flex items-center gap-1.5 group"
              >
                <iconify-icon icon="lucide:arrow-right" class="text-xs opacity-0 group-hover:opacity-100 transition-opacity -ml-1"></iconify-icon>
                {{ service.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
          <ul class="space-y-2.5">
            <li v-for="link in companyLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm text-slate-400 hover:text-electric-400 transition-colors flex items-center gap-1.5 group"
              >
                <iconify-icon icon="lucide:arrow-right" class="text-xs opacity-0 group-hover:opacity-100 transition-opacity -ml-1"></iconify-icon>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h3>
          <ul class="space-y-3">
            <li>
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-start gap-3 text-sm text-slate-400 hover:text-[#25D366] transition-colors group"
              >
                <iconify-icon icon="lucide:message-circle" class="text-base text-[#25D366] mt-0.5 flex-shrink-0"></iconify-icon>
                <span>Chat on WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@irfatech.com"
                class="flex items-start gap-3 text-sm text-slate-400 hover:text-electric-400 transition-colors"
              >
                <iconify-icon icon="lucide:mail" class="text-base text-electric-500 mt-0.5 flex-shrink-0"></iconify-icon>
                <span>hello@irfatech.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+923001234567"
                class="flex items-start gap-3 text-sm text-slate-400 hover:text-electric-400 transition-colors"
              >
                <iconify-icon icon="lucide:phone" class="text-base text-electric-500 mt-0.5 flex-shrink-0"></iconify-icon>
                <span>+92 300 123 4567</span>
              </a>
            </li>
          </ul>

          <!-- CTA -->
          <div class="mt-6">
            <NuxtLink to="/contact" class="btn-primary text-sm px-5 py-2.5 w-full justify-center">
              Book Free Consultation
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-navy-700/50">
      <div class="container-max px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-slate-500">
          &copy; {{ year }} IRFAtech — Integrated Resources For Automation. All rights reserved.
        </p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/privacy" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { services } from '~/config/site'

const year = new Date().getFullYear()

const whatsappUrl = 'https://wa.me/923001234567?text=Hi%20IRFAtech%2C%20I%20need%20help%20with%20my%20business%20digitalization.'

const socials = [
  { label: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://linkedin.com/company/irfatech' },
  { label: 'Facebook', icon: 'lucide:facebook', href: 'https://facebook.com/irfatech' },
  { label: 'Instagram', icon: 'lucide:instagram', href: 'https://instagram.com/irfatech' },
]

const companyLinks = [
  { name: 'About IRFAtech', href: '/about' },
  { name: 'Our Portfolio', href: '/portfolio' },
  { name: 'Industries', href: '/industries' },
  { name: 'Landflix', href: '/landflix' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
]
</script>
