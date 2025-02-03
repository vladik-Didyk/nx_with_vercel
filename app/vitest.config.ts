import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// import {remixDevTools} from 'remix-development-tools/vite';

export default defineConfig({
  root: __dirname,
  plugins: [
    remix({
      presets: [vercelPreset()],
      appDirectory: "app",
    }),
    react(),
    nxViteTsPaths(),
    tsconfigPaths(),
    // remixDevTools()
  ].filter(Boolean),
  server: {
    open: true,
    port: 3000
  },
});