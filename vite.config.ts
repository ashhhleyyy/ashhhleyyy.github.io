import { defineConfig, Plugin,  } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [
    preact(),
  ],
  esbuild: {
    jsxInject: 'import { h, Fragment } from "preact";',
  },
  resolve: {
    alias: {
      react: 'preact/compat',
    }
  },
});

// Bad typings go brr
(config as any).ssr = {
  noExternal: true,
}

export default config;
