import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ['**/*.riv'],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@stores': resolve(__dirname, 'src/stores'),
      '@services': resolve(__dirname, 'src/services'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@configs': resolve(__dirname, 'src/configs'),
    },
  }
})
