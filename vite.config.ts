import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://stylink-ecommerce.github.io/Stylink-Ecommerce-React',
});
