import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import slugify from 'slugify';

const target = ['chrome100'];

export default defineConfig(() => ({
  plugins: [
    react({
      fastRefresh: true,
    }),
  ],
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
      {
        find: 'assert',
        replacement: path.resolve(
          __dirname,
          'node_modules/assert',
        ),
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
    commonjsOptions: {
      transformMixedEsModules: true,
      include: ['node_modules'],
    },
    manifest: true,
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
