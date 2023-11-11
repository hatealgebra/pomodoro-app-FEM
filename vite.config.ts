import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import linaria from '@linaria/vite';
import postcssPresetEnv from 'postcss-preset-env';
import postcssCustomMedia from 'postcss-custom-media';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ devTarget: 'es2020' }), linaria()],
  css: {
    postcss: {
      plugins: [postcssPresetEnv, postcssCustomMedia],
    },
  },
});
