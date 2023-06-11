import { defineConfig } from 'vite'
import million from 'million/compiler';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),million.vite()],
  base: ''
  
})

