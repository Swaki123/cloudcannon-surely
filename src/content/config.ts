import {z, defineCollection} from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    content_blocks: z.array(z.record(z.any())),
  }),
});

export const collections = {pages};