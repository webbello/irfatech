import { describe, it, expect } from 'vitest';
import { toWhatsAppDigits, buildWhatsAppMessage, buildWhatsAppUrl } from '@/lib/contact-channel';

describe('toWhatsAppDigits', () => {
  it('strips spaces, dashes, and the leading +', () => {
    expect(toWhatsAppDigits('+91 88648 12200')).toBe('918864812200');
  });

  it('strips parentheses too', () => {
    expect(toWhatsAppDigits('+1 (415) 555-0100')).toBe('14155550100');
  });
});

describe('buildWhatsAppMessage', () => {
  it('includes name, email, and message', () => {
    const message = buildWhatsAppMessage({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Interested in an ERP setup.',
    });
    expect(message).toContain('Jane Doe');
    expect(message).toContain('jane@example.com');
    expect(message).toContain('Interested in an ERP setup.');
  });

  it('omits subject and service lines when not provided', () => {
    const message = buildWhatsAppMessage({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello',
    });
    expect(message).not.toContain('Subject:');
    expect(message).not.toContain('Service:');
  });

  it('resolves a known service value to its friendly label', () => {
    const message = buildWhatsAppMessage({
      name: 'Jane Doe',
      email: 'jane@example.com',
      service: 'automation',
      message: 'Hello',
    });
    expect(message).toContain('Service: Automation & AI');
  });

  it('falls back to the raw value for an unknown service', () => {
    const message = buildWhatsAppMessage({
      name: 'Jane Doe',
      email: 'jane@example.com',
      service: 'something-custom',
      message: 'Hello',
    });
    expect(message).toContain('Service: something-custom');
  });
});

describe('buildWhatsAppUrl', () => {
  it('builds a wa.me link with the number stripped and the message URL-encoded', () => {
    const url = buildWhatsAppUrl('+91 88648 12200', {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello there',
    });
    expect(url.startsWith('https://wa.me/918864812200?text=')).toBe(true);
    expect(url).toContain(encodeURIComponent('Hello there'));
  });
});
