import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'EasyCard',
      formats: ['es', 'cjs'],
      fileName: (fmt, name) =>
        fmt === 'es' ? `es/${name}.js` : `lib/${name}.js`
    },
    rollupOptions: { external: ['vue', 'naive-ui'] },
    outDir: 'dist'          // ← 关键：统一 dist 根
  }
})