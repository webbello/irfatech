import { describe, it, expect, vi } from 'vitest';

// Exercise the nav config's locale resolution with i18n turned ON and two
// locales. The default locale stays at the site root; the secondary locale is
// prefixed and labels are translated via the dictionary. Guards the localized
// header/footer nav and logo wired up for #438.
vi.mock('@/config/i18n.config', () => ({
  default: {
    enabled: true,
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeNames: { en: 'English', id: 'Bahasa Indonesia' },
    detectBrowserLocale: false,
  },
}));

import { getNavItems, getLogoHref, resolveNavItem, type NavItem } from '@/config/nav.config';

describe('nav config — locale resolution (en default, id secondary)', () => {
  it('keeps default-locale hrefs at the site root', () => {
    const items = getNavItems('en');
    expect(items.find((i) => i.label === 'Blog')?.href).toBe('/blog');
    expect(items.find((i) => i.label === 'About')?.href).toBe('/about');
  });

  it('prefixes secondary-locale hrefs with the locale', () => {
    const items = getNavItems('id');
    expect(items.map((i) => i.href)).toEqual([
      '/id',
      '/id/services',
      '/id/solutions',
      '/id/projects',
      '/id/blog',
      '/id/about',
      '/id/contact',
    ]);
  });

  it('translates labels via the dictionary (labelKey)', () => {
    const id = getNavItems('id');
    // id.json: nav.items.about = "Tentang", nav.items.services = "Layanan"
    expect(id.find((i) => i.href === '/id/about')?.label).toBe('Tentang');
    expect(id.find((i) => i.href === '/id/services')?.label).toBe('Layanan');
  });

  it('points the logo at the locale home', () => {
    expect(getLogoHref('en')).toBe('/');
    expect(getLogoHref('id')).toBe('/id');
  });

  it('never locale-prefixes external, mailto/tel, or anchor hrefs', () => {
    expect(
      resolveNavItem(
        { label: 'GitHub', href: 'https://github.com/x', order: 1, external: true },
        'id'
      ).href
    ).toBe('https://github.com/x');
    expect(resolveNavItem({ label: 'Top', href: '#top', order: 1 }, 'id').href).toBe('#top');
    expect(resolveNavItem({ label: 'Mail', href: 'mailto:a@b.com', order: 1 }, 'id').href).toBe(
      'mailto:a@b.com'
    );
  });

  it('applies a per-locale override (label + path), still locale-prefixed', () => {
    const item: NavItem = {
      label: 'Contact',
      href: '/contact',
      order: 1,
      locales: { id: { label: 'Hubungi Kami', href: '/hubungi' } },
    };
    expect(resolveNavItem(item, 'id')).toEqual({
      label: 'Hubungi Kami',
      href: '/id/hubungi',
      external: undefined,
    });
    // The default locale is unaffected by an id-only override.
    expect(resolveNavItem(item, 'en')).toEqual({
      label: 'Contact',
      href: '/contact',
      external: undefined,
    });
  });

  it('falls back to the literal label when no labelKey is set', () => {
    expect(resolveNavItem({ label: 'Docs', href: '/docs', order: 1 }, 'id').label).toBe('Docs');
  });
});
