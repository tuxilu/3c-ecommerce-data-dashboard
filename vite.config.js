import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Vite 配置：别名 / 端口 / 代理
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      // 预留 /api 代理配置，后续若接后端可直接使用
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
