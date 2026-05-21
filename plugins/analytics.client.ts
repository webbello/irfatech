/**
 * Plausible Analytics — privacy-first, no cookie banner required.
 * Domain is set to 'irfatech.in' — update if the domain changes.
 *
 * To switch to Google Analytics 4 instead, replace this plugin with:
 *   https://nuxt.com/modules/gtag  (npm install nuxt-gtag)
 *
 * Plausible is loaded only on the client and only in production.
 */
export default defineNuxtPlugin(() => {
  if (import.meta.env.PROD) {
    const script = document.createElement('script')
    script.defer = true
    script.setAttribute('data-domain', 'irfatech.in')
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)
  }
})
