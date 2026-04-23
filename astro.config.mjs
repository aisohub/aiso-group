// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://aiso-group.com',
  trailingSlash: 'always',
  output: 'static',
  // Built-in Astro i18n. EN is default and lives at root (no /en/ prefix);
  // FR and pt-PT live under /fr/ and /pt-pt/. Pattern mirrors aiso-hub.
  i18n: {
    locales: ['en', 'pt-pt', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        // Keys match the URL path segment; values are BCP-47 tags for hreflang.
        locales: {
          en: 'en',
          'pt-pt': 'pt-PT',
          fr: 'fr',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto',
  },
});
