
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5175,
    strictPort: true,
    open: true,
  },
  build: {
    rollupOptions: {
      input: './index.html', // Ensure the entry point is correct
    },
  },
});
