import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Shift',
        short_name: 'Shift',
        description: 'WebAssembly runtime for Python, Lua, Ruby and etc.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'PWA/icon-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: "any"
          },
          {
            src: 'PWA/icon-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 32 * 1024 ** 2, // 32 MB or set to something else
        globPatterns: ['**/*.{wasm,data}'],
      }
    }),
  ],
  base: '/shift/'
})
