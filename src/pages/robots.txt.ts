import type { APIRoute } from 'astro';
import { SITE_URL_FALLBACK } from '@/config/site-url';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString() || SITE_URL_FALLBACK;

  const robotsTxt = `
User-agent: *
Allow: /

# Block API routes
Disallow: /api/

# AI/LLM crawlers — explicitly named rather than left to the wildcard rule
# above, since some respect a named rule over "*" and being explicit is the
# clearer signal either way: this site wants to be read and cited by them.
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# Plain-Markdown map of this site for language models — see https://llmstxt.org
# LLM map: ${siteUrl}llms.txt

Sitemap: ${siteUrl}sitemap-index.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
