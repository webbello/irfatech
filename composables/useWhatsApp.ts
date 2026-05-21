/**
 * Centralised WhatsApp URL builder.
 * All WA links in the app should use this so the phone number is
 * changed in exactly one place.
 */

const WHATSAPP_NUMBER = '918864812200' // IN: 91 + 88 6481 2200

export function useWhatsApp(message?: string) {
  const defaultMsg = 'Hi IRFAtech, I need help with my business digitalization.'
  const encoded = encodeURIComponent(message || defaultMsg)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

/** Pre-built URLs for each service page CTA */
export const whatsappLinks = {
  general: useWhatsApp(),
  websites: useWhatsApp('Hi IRFAtech, I need a professional business website.'),
  erp: useWhatsApp('Hi IRFAtech, I need an ERP solution for my business.'),
  crm: useWhatsApp('Hi IRFAtech, I need a CRM system for my business.'),
  aiAutomation: useWhatsApp('Hi IRFAtech, I need AI automation for my business.'),
  customSoftware: useWhatsApp('Hi IRFAtech, I need custom software development.'),
  whatsappAutomation: useWhatsApp('Hi IRFAtech, I need WhatsApp automation for my business.'),
  mobileApps: useWhatsApp('Hi IRFAtech, I need a mobile app for my business.'),
  maintenance: useWhatsApp('Hi IRFAtech, I need maintenance and support services.'),
  landflix: useWhatsApp('Hi IRFAtech, I want to learn more about Landflix.'),
  consultation: useWhatsApp('Hi IRFAtech, I would like to book a free consultation.'),
  blog: useWhatsApp('Hi IRFAtech, I just read your blog and want to learn more.'),
}
