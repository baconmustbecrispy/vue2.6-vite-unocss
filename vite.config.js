import { createVuePlugin } from 'vite-plugin-vue2';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';
import Unocss from '@unocss/vite';
import { presetIcons, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  extensions: ['.js', '.vue', '.json', '.scss'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  base: '/',
  plugins: [
    createVuePlugin(),
    Unocss({
      presets: [presetUno(), presetIcons({})],
      transformers: [transformerDirectives()],
    }),
    splitVendorChunkPlugin(),
  ],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
        },
      },
    },
  },
});
