
import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';

export default defineConfig({
  integrations: [bookshop()]
});
