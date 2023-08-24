import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manually chunk the CSS files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Put CSS files from node_modules in a separate chunk
            return 'vendor';
          } else if (id.endsWith('.css')) {
            // Customize how CSS files are chunked based on your needs
            // For example, you can have separate chunks for different sections
            // of your application's styles
            return 'styles';
          }
        },
      },
    },
  },
});
