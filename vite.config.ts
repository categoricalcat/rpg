import path from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

import slugify from 'slugify';

const target = ['chrome100'];

export default defineConfig(() => ({
  plugins: [preact()],
  root: 'client',
  logLevel: 'info',
  esbuild: {
    target,
  },
  optimizeDeps: {
    disabled: false,
    force: true,
    esbuildOptions: {
      target,
    },
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env['NODE_ENV']),
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './') },
      { find: 'react', replacement: 'preact/compat' },
      {
        find: 'react-dom/test-utils',
        replacement: 'preact/test-utils',
      },
      { find: 'react-dom', replacement: 'preact/compat' },
      {
        find: 'react/jsx-runtime',
        replacement: 'preact/jsx-runtime',
      },
    ],
  },
  server: {
    port: 6789,
    host: '0.0.0.0',
    strictPort: true,
  },
  build: {
    target,
    modulePreload: false,
    manifest: true,
    sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: './',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          return slugify(
            id.split('/').pop()?.split('.').shift() ??
              'vendor.js',
          ).toLowerCase();
        },
      },
    },
  },
}));
