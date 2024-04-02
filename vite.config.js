import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Specify output directory
  },
  base: '/', // Specify base URL if deploying to a subpath
});
