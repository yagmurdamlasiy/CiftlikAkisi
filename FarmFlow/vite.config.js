import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  build: {
    assetsDir: '', // Dosyaları bir klasöre koyma, direkt index.html'in yanına çıkar deriz
  },
  plugins: [react()],
})