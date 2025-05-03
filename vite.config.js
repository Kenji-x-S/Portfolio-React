import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', // Ensures styles are accessible as styles.container
      generateScopedName: '[name]__[local]__[hash:base64:5]', // Unique class names in production
    },
  },
  build: {
    outDir: 'dist', // Explicitly set output directory (default, but good to confirm)
    assetsDir: 'assets', // Ensure assets (e.g., images) are correctly bundled
  },
});