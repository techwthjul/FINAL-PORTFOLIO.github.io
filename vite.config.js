import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FINAL-PORTFOLIO.github.io/', // Ensure this matches the repo name exactly
});