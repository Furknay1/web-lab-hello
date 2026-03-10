import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // [cite: 1494]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // [cite: 1505]
  ],
})