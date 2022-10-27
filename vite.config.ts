import path from 'path';
import { defineConfig } from 'vite';

import pkg from './package.json';

const allDeps = Object.keys({
  ...pkg.dependencies,
  ...pkg.devDependencies,
});

const target = ['chrome100'];

export default defineConfig(() => ({
  root: 'client',
  logLevel: 'info',
  esbuild: {
    target,
  },
  optimizeDeps: {
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
    ],
  },
  server: {
    port: 6789,
    host: '0.0.0.0',
    strictPort: true,
  },
  build: {
    target,
    modulePreload: {
      polyfill: false,
    },
    manifest: true,
    sourcemap: true,
    outDir: '../docs',
    emptyOutDir: true,
    assetsDir: './',
    rollupOptions: {
      output: {
        manualChunks(id) {
          return allDeps.find((dep) => id.includes(dep));
        },
      },
    },
  },
}));
