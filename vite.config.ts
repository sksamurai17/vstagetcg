import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Brings in vite-ssg's module augmentation for `ssgOptions` on UserConfig.
import type {} from 'vite-ssg'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://sksamurai17.github.io/vstagetcg/, not the domain root.
  // Set in dev too, so local and production resolve URLs identically.
  base: '/vstagetcg/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Consumed by `vite-ssg build`. Every card is registered as a static route
  // in src/router, so there is no includedRoutes hook to maintain here.
  ssgOptions: {
    formatting: 'minify',
    dirStyle: 'nested',
    beastiesOptions: {
      // Asset URLs are written as /vstagetcg/assets/... but the files sit in
      // dist/assets/. Without this, beasties silently fails to resolve them
      // and inlines no critical CSS at all.
      publicPath: '/vstagetcg/',
    },
  },
})
