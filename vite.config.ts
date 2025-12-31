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
      strategies: 'generateSW',
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
        enabled: false,
      },
      workbox: {
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 32 * 1024 ** 2,
        globPatterns: ['**/*.{html,js,css}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.endsWith('.wasm') || url.pathname.endsWith('.data'),
            handler: "CacheFirst",
            options: {
              cacheName: 'xplanc-cdn-cache',
              cacheableResponse: {
                statuses: [0, 200], // 允许 opaque 响应被缓存（status 0）
              },
            },
          },
        ]
      },
    }),
  ],
  base: '/shift/'
})
