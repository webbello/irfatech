import { describe, it, expect, vi } from 'vitest';

// Exercise the service URL helpers with i18n turned ON and two locales. The
// default locale stays at the site root; the secondary locale is prefixed —
// the same contract the service detail and index routes are built on.
vi.mock('astro:content', () => ({
  getCollection: vi.fn(async () => []),
}));
vi.mock('@/lib/blog', () => ({
  getPublishedPosts: vi.fn(async () => []),
  getPostSlug: vi.fn((id: string) => id),
}));

vi.mock('@/config/i18n.config', () => ({
  default: {
    enabled: true,
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeNames: { en: 'English', nl: 'Nederlands' },
    detectBrowserLocale: false,
  },
}));

import { getServiceUrl, getServicesBaseUrl, getSecondaryLocales } from '@/lib/services';

describe('service URL helpers (i18n enabled — en default, nl secondary)', () => {
  it('keeps default-locale service URLs at the site root', () => {
    expect(getServiceUrl('en/erp-solutions')).toBe('/services/erp-solutions');
    expect(getServiceUrl('en/erp-solutions', 'en')).toBe('/services/erp-solutions');
  });

  it('prefixes secondary-locale service URLs with the locale', () => {
    expect(getServiceUrl('nl/erp-oplossingen', 'nl')).toBe('/nl/services/erp-oplossingen');
  });

  it('prefixes the services index base URL for the secondary locale only', () => {
    expect(getServicesBaseUrl()).toBe('/services');
    expect(getServicesBaseUrl('en')).toBe('/services');
    expect(getServicesBaseUrl('nl')).toBe('/nl/services');
  });

  it('lists the non-default locales as needing prefixed routes', () => {
    expect(getSecondaryLocales()).toEqual(['nl']);
  });
});
