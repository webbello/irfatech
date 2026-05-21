import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title:       z.string(),
        description: z.string().optional(),
        date:        z.string().optional(),
        category:    z.string().optional(),
        tags:        z.array(z.string()).optional(),
        author:      z.string().optional(),
        readTime:    z.string().optional(),
        featured:    z.boolean().optional(),
        image:       z.string().optional(),
      }),
    }),
  },
})
