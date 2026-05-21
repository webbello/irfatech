/**
 * Plausible Analytics — privacy-first, no cookie banner required.
 * Replace 'irfatech.com' with your actual domain when going live.
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
    script.setAttribute('data-domain', 'irfatech.com')
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)
  }
})
