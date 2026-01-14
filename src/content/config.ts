import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date().optional(),
    description: z.string().optional(),
  }),
});

const components = defineCollection({
  schema: z.object({
    // support both `title` and `name` because MDX files vary
    title: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    // allow either a Date or string for created/updated fields
    pubDate: z.union([z.string(), z.date()]).optional(),
    createdAt: z.union([z.string(), z.date()]).optional(),
  }),
});

export const collections = { docs, components };
