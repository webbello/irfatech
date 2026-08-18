import { describe, it, expect } from 'vitest';
import { localeForTimezone } from '@/lib/geo-locale';

describe('localeForTimezone', () => {
  it('maps Timor-Leste\'s time zone to Tetum', () => {
    expect(localeForTimezone('Asia/Dili')).toBe('tet');
  });

  it('returns undefined for other time zones', () => {
    expect(localeForTimezone('Asia/Jakarta')).toBeUndefined();
    expect(localeForTimezone('Europe/Lisbon')).toBeUndefined();
    expect(localeForTimezone('America/New_York')).toBeUndefined();
  });

  it('returns undefined when no time zone is given', () => {
    expect(localeForTimezone(undefined)).toBeUndefined();
  });
});
