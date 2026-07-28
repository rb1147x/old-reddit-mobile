import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from "fs";
import { execSync } from 'node:child_process';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

function getVersion() {
  const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
  const baseVersion = pkg.version;

  let hash = "";
  try {
    hash = execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    hash = "dev";
  }

  return `${baseVersion}-${hash}`;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: false,
    rolldownOptions: {
      input: "src/Main.ts",
      output: {
        entryFileNames: "rms.js",
        banner: () => {
          const version = getVersion();

          return `// ==UserScript==
          // @name         Reddit Mobile Test
          // @namespace    https://github.com/yourname
          // @version      ${version}
          // @description  Modifies reddit.com mobile UI
          // @match        https://www.reddit.com/*
          // @grant        none
          // @run-at       document-end
          // ==/UserScript==
          `;
        },
      },
    },
  },
})
