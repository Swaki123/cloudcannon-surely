import {z, defineCollection} from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    heroComponent: z.any(),
    imageCardComponent: z.any(),
  }),
});

export const collections = {pages};