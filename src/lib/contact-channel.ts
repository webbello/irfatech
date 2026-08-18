/**
 * The contact form's active delivery channel, and the pure logic behind the
 * WhatsApp one. Kept separate from ContactForm.astro and api/contact.ts so
 * each channel is a self-contained, independently testable unit — adding a
 * third channel later means writing one more file like this, not editing
 * the other two.
 */

export type ContactChannel = 'email' | 'whatsapp';

export interface ContactFields {
  name: string;
  email: string;
  subject?: string;
  service?: string;
  message: string;
}

// Mirrors the map in api/contact.ts (kept separate on purpose — the two
// channels don't share code, so a change to one can't silently affect the
// other's message formatting).
const SERVICE_LABELS: Record<string, string> = {
  'business-systems': 'ERP, CRM & Business Systems',
  automation: 'Automation & AI',
  presence: 'Website, App & Support',
  other: 'Not sure yet / Something else',
};

/** Strips everything but digits — what a wa.me link needs, no "+", spaces, or dashes. */
export function toWhatsAppDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

/** The plain-text message pre-filled into the visitor's WhatsApp compose box. */
export function buildWhatsAppMessage(fields: ContactFields): string {
  const from = fields.email
    ? `New enquiry from ${fields.name} (${fields.email})`
    : `New enquiry from ${fields.name}`;
  const lines = [
    from,
    fields.subject ? `Subject: ${fields.subject}` : undefined,
    fields.service ? `Service: ${SERVICE_LABELS[fields.service] ?? fields.service}` : undefined,
    '',
    fields.message,
  ].filter((line): line is string => line !== undefined);

  return lines.join('\n');
}

/** Full wa.me URL — `number` in any format (spaces/dashes/"+" are stripped). */
export function buildWhatsAppUrl(number: string, fields: ContactFields): string {
  const text = buildWhatsAppMessage(fields);
  return `https://wa.me/${toWhatsAppDigits(number)}?text=${encodeURIComponent(text)}`;
}
