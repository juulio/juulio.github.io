import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-optional-chaining'],
      },
    }),
  ],
  build: {
    outDir: './docs',
    emptyOutDir: true, // also necessary
  },
})
