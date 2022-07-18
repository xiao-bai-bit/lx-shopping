import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from "path";


export default defineConfig({
  server:{
    port:3000,
    open:true
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
})