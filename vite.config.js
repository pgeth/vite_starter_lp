import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html',
        career: 'career.html',
        management: 'management.html'
      }
    }
  },
  css: {
      preprocessorOptions: {
          scss: {
            api: 'modern',
            silenceDeprecations: ['mixed-decls'],
          },
      },
  },
});
