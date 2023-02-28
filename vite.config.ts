import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/weather': {
        target: 'https://api.weather.yandex.ru/v2/forecast/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weather/, ''),
        headers: {
          'X-Yandex-API-Key': '20558c85-9266-4fb8-9057-b2dfe1455d8d'
        }
      }
    }
  }
})
