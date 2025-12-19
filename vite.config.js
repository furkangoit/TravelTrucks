import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // SPA fallback - serve index.html for all routes
    // This fixes 404 errors when refreshing on client-side routes
    historyApiFallback: true,
  },
  preview: {
    // Also apply for production preview
    historyApiFallback: true,
  }
})
