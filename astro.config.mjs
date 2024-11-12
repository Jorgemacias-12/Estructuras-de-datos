import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import { config } from 'dotenv';

config();

export default defineConfig({
  site: 'https://jorgemacias12.github.io/',
  base: `${process.env.PUBLIC_BASE_URL || ''}`,
  integrations: [react(), mdx(), sitemap(), tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
