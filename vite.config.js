import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // repository name here
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-404-html',
          writeBundle() {
            const distPath = path.resolve(__dirname, 'dist');
            fs.copyFileSync(path.resolve(__dirname, '404.html'), `${distPath}/404.html`);
          },
        },
      ],
    },
  },
  // server: {
  //   host: '0.0.0.0', // Allow access from other devices
  // }
});
