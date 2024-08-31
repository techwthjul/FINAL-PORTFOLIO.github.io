import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FINAL-PORTFOLIO.github.io/', // Replace this with your repository name
});