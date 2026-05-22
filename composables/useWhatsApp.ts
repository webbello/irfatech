/**
 * Centralised WhatsApp URL builder.
 * All WA links in the app should use this so the phone number is
 * changed in exactly one place.
 */

const WHATSAPP_NUMBER = '918864812200' // IN: 91 + 88 6481 2200

export function useWhatsApp(message?: string) {
  const defaultMsg = 'Hi IRFATECH, I need help with my business digitalization.'
  const encoded = encodeURIComponent(message || defaultMsg)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

/** Pre-built URLs for each service page CTA */
export const whatsappLinks = {
  general: useWhatsApp(),
  websites: useWhatsApp('Hi IRFATECH, I need a professional business website.'),
  erp: useWhatsApp('Hi IRFATECH, I need an ERP solution for my business.'),
  crm: useWhatsApp('Hi IRFATECH, I need a CRM system for my business.'),
  aiAutomation: useWhatsApp('Hi IRFATECH, I need AI automation for my business.'),
  customSoftware: useWhatsApp('Hi IRFATECH, I need custom software development.'),
  whatsappAutomation: useWhatsApp('Hi IRFATECH, I need WhatsApp automation for my business.'),
  mobileApps: useWhatsApp('Hi IRFATECH, I need a mobile app for my business.'),
  maintenance: useWhatsApp('Hi IRFATECH, I need maintenance and support services.'),
  landflix: useWhatsApp('Hi IRFATECH, I want to learn more about Landflix.'),
  consultation: useWhatsApp('Hi IRFATECH, I would like to book a free consultation.'),
  blog: useWhatsApp('Hi IRFATECH, I just read your blog and want to learn more.'),
}
