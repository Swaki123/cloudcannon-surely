import {z, defineCollection} from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    blocks: z.any(), // Add this line
  }),
});

export const collections = {pages};