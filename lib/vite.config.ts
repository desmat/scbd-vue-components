// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Your library entry point
      name: 'MyVueLibrary', // The global variable name in UMD builds
      fileName: (format) => `my-vue-library.${format}.js`,
      formats: ['es', 'umd'], // Output formats
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue'], // Externalize Vue
      output: {
        globals: {
          vue: 'Vue', // Global variable name for Vue in UMD builds
        },
      },
    },
    sourcemap: true
  },
});