import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Option 1: For the modern compiler API
        api: 'modern-compiler', 
        silenceDeprecations: ['import', 'global-builtin', 'mixed-decls'],
        
        // Option 2: For older versions/compatibility
        quietDeps: true,
      },
    },
  },
})
