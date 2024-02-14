import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://jorgemacias12.github.io/',
  base: isProduction ? 'Estructuras-de-datos' : '/',
  integrations: [react(), mdx(), sitemap(), tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
