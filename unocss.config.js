import { defineConfig, presetUno, presetIcons } from 'unocss';
import { presetExtra } from 'unocss-preset-extra';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetUno(),
    presetExtra(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [transformerDirectives()],
});
