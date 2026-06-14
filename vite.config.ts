import { defineConfig } from "vite";
import fs from "fs";
import { execSync } from "child_process";

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

export default defineConfig({
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
          // @description  Modifies old.reddit.com mobile UI
          // @match        https://old.reddit.com/*
          // @grant        none
          // ==/UserScript==
          `;
        },
      },
    },
  },
});