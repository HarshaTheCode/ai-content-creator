import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      proxy: {
        '/api': {
          // 🎯 Use the loaded environment variable
          target: env.PROXY_URL,
          changeOrigin: true,
          // ... other options
        },
      },
    },
    plugins: [react(), tailwindcss()],
  }
})
