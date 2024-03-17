import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src', 'popup/popup.html'),
        background: resolve(__dirname, 'src', 'background/background.ts'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, './dist/assets/background.js'),
          dest: resolve(__dirname, './dist')
        },
        {
          src: resolve(__dirname, './dist/src/popup/popup.html'),
          dest: resolve(__dirname, './dist')
        }
      ]
    })
  ]
});
