import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Astro 7 cambio el default a 'jsx', que elimina el whitespace entre
  // elementos inline (estilo React) en lugar de respetar las reglas de HTML.
  // Mantenemos el comportamiento de v6 para no alterar el espaciado renderizado.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});