import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from "path";


export default defineConfig({
  server:{
    port:3000,
    open:true
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath:'./src/mock',
      localEnabled: true
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
})