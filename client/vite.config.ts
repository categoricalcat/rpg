import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

import slugify from 'slugify';

dotenv.config();

const target = ['chrome100'];

export default defineConfig(() => ({
  plugins: [
    react(),
    tsconfigPaths({
      root: path.resolve(__dirname),
    }),
  ],
  root: 'src',
  logLevel: 'info',
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env['NODE_ENV']),
      CONTAINER: JSON.stringify(process.env['CONTAINER']),
    },
  },
  server: {
    port: 6789,
    host: '0.0.0.0',
    strictPort: true,
  },
  build: {
    target,
    modulePreload: false,
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: './',
  },
}));
