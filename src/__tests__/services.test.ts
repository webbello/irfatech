import { describe, it, expect, vi } from 'vitest';

// `lib/services` imports `astro:content` for its data helpers and `lib/blog`
// for `getPublishedPosts`. The URL/WhatsApp helpers under test touch neither,
// so the same stubs blog-urls.test.ts uses let the module load here.
vi.mock('astro:content', () => ({
  getCollection: vi.fn(async () => []),
}));
vi.mock('@/lib/blog', () => ({
  getPublishedPosts: vi.fn(async () => []),
  getPostSlug: vi.fn((id: string) => id),
}));

// i18n disabled — single locale 'en', so every URL stays unprefixed. The
// multi-locale path is exercised in services-urls-i18n.test.ts.
vi.mock('@/config/i18n.config', () => ({
  default: {
    enabled: false,
    defaultLocale: 'en',
    locales: ['en'],
    localeNames: { en: 'English' },
    detectBrowserLocale: false,
  },
}));

import {
  getServiceSlug,
  getServiceUrl,
  getServicesBaseUrl,
  getSecondaryLocales,
  getWhatsAppNumber,
  buildWhatsAppUrl,
} from '@/lib/services';
import siteConfig from '@/config/site.config';

describe('service URL helpers (i18n disabled — default)', () => {
  it('strips the locale prefix from a service id to get its slug', () => {
    expect(getServiceSlug('en/erp-solutions')).toBe('erp-solutions');
    expect(getServiceSlug('pt/erp-solutions', 'pt')).toBe('erp-solutions');
    // No matching prefix → id returned unchanged.
    expect(getServiceSlug('erp-solutions', 'en')).toBe('erp-solutions');
  });

  it('builds an unprefixed service detail URL', () => {
    expect(getServiceUrl('en/erp-solutions')).toBe('/services/erp-solutions');
    // Even a non-default locale stays unprefixed while i18n is off.
    expect(getServiceUrl('pt/solucoes-erp', 'pt')).toBe('/services/solucoes-erp');
  });

  it('builds the services index base URL', () => {
    expect(getServicesBaseUrl()).toBe('/services');
    expect(getServicesBaseUrl('pt')).toBe('/services');
  });

  it('exposes no secondary locales when i18n is off', () => {
    expect(getSecondaryLocales()).toEqual([]);
  });
});

describe('service WhatsApp helpers', () => {
  it('resolves the site WhatsApp number, falling back to phone', () => {
    expect(getWhatsAppNumber()).toBe(siteConfig.contact?.whatsappNumber ?? siteConfig.phone);
  });

  it('builds a wa.me link with the number in digits and the message URL-encoded', () => {
    const url = buildWhatsAppUrl('Hi IRFAtech, I need an ERP solution for my business.');
    expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
    expect(url).toContain('Hi%20IRFAtech%2C%20I%20need%20an%20ERP%20solution%20for%20my%20business.');
  });
});
