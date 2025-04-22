import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // 👈 Añadido para despliegue

export default defineConfig({
  adapter: vercel(), // 👈 Lo único realmente necesario para Vercel
  integrations: [react()],
  vite: {
    plugins: [require('@tailwindcss/vite')()],
  },
});
