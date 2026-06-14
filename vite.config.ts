import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    rolldownOptions: {
      input: "src/Main.ts",
      output: {
        entryFileNames: "rms.js",
        banner: `// ==UserScript==
          // @name         Reddit Mobile Test
          // @namespace    https://github.com/yourname
          // @version      0.0.2
          // @description  Modifies old.reddit.com mobile UI
          // @match        https://old.reddit.com/*
          // @grant        none
          // ==/UserScript==
          `,
      },
    },
  },
});