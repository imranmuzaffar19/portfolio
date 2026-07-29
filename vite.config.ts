import { defineConfig } from 'vite'
import react from '@vitejs@plugin-react' // or whatever vite plugin you are using

export default defineConfig({
  plugins: [react()],
  base: './', // <-- ADD THIS LINE
})
