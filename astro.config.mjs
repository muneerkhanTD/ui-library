// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), icon(), react()],
  adapter: netlify(),
});