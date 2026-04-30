import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    titleFr: z.string().optional(),
    descriptionFr: z.string().optional(),
    titlePtPt: z.string().optional(),
    descriptionPtPt: z.string().optional(),
    category: z.enum(['announcement', 'specialist-series', 'meta-essay']),
    date: z.coerce.date(),
    readTime: z.number().int().positive(),
    author: z.string().default('Greg Stoos'),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
