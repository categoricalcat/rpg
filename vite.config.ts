import { defineConfig } from "vite";
import cert from "./cert";

export default defineConfig({
  root: "client",
  logLevel: "info",
  server: {
    port: 6789,
    host: "0.0.0.0",
    strictPort: true,
    https: cert,
  },
  build: {
    polyfillModulePreload: false,
    target: "esnext",
    manifest: true,
    sourcemap: true,
    cssTarget: "esnext",
    outDir: "../docs",
    emptyOutDir: true,
    assetsDir: "./",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return id;
        },
      },
    },
  },
});
