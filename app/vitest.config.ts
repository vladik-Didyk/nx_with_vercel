import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {remixDevTools} from 'remix-development-tools';

export default defineConfig({
  plugins: [tsconfigPaths(), nxViteTsPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    poolOptions:{
      threads: {
        singleThread: true,
      },
    },
    include: ['**/*.test.ts'],
  },
});

