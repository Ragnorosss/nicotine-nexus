import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
          input: {
            main: './index.html',
            error: './error.html',
            // ...
            // List all files you want in your build
          }
        }
      }
})