import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

dotenv.config();

const target = ['chrome100'];

export default defineConfig(() => ({
  plugins: [
    visualizer({
      template: 'treemap', // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'analice.html',
    }),
    react(),
    tsconfigPaths({
      root: path.resolve(__dirname),
    }),
  ],
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env['NODE_ENV']),
      CONTAINER: JSON.stringify(process.env['CONTAINER']),
    },
  },
  server: {
    port: 6789,
    host: '0.0.0.0',
  },
  build: {
    target,
    modulePreload: false,
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: './',
  },
}));
