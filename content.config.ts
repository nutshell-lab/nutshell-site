import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        image: z.object({
          url: z.string(),
          width: z.number(),
          height: z.string(),
          alt: z.string()
        }),
        short_description: z.string(),
        category: z.string(),
        featured: z.boolean(),
        created_at: z.date(),
        published_at: z.date()
      })
    })
  }
})