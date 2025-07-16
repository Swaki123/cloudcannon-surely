import {z, defineCollection} from 'astro:content';

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    heroComponent: z.any(),
  }),
});

export const collections = {pages};