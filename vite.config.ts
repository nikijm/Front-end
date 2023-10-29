import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
     alias: [
      {
        find: /^~/, 
        replacement: '',
      },
      {
        find: '@', 
        replacement: path.resolve(__dirname, './src')
      }
    ],
  },
   server: {
      host:'0.0.0.0',
      port:80
  },
    css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
      },
    },
  },
})
