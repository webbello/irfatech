<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200 group"
  >
    <!-- Pulse ring -->
    <span class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    <iconify-icon icon="lucide:message-circle" class="text-3xl text-white relative z-10"></iconify-icon>

    <!-- Tooltip -->
    <span class="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-navy-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-navy-700/50 shadow-card pointer-events-none">
      Chat with us
    </span>
  </a>
</template>

<script setup>
const whatsappUrl = 'https://wa.me/923001234567?text=Hi%20IRFAtech%2C%20I%20need%20help%20with%20my%20business%20digitalization.'
</script>
