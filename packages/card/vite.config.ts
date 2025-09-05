import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'EasyCard',
      formats: ['es', 'cjs'],
      fileName: fmt => (fmt === 'es' ? 'es/index.js' : 'lib/index.js')
    },
    rollupOptions: {
      external: ['vue', 'naive-ui']
    }
  }
})