import * as esbuild from 'esbuild'
import { readFileSync, writeFileSync } from 'fs'
import { readFile } from 'fs/promises';

/* const removePhaserImportPlugin = {
  name: 'remove-phaser-import',
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      //let source = await require('fs').promises.readFile(args.path, 'utf8');
      //let source = readFileSync(args.path, 'utf-8');
      let source = await readFile(args.path, 'utf-8');
      
      // Remove or replace the import statement for Phaser
      source = source.replace(/import Phaser from ['"]phaser['"];?/g, '');

      // If you need to replace usages with `window.Phaser`:
      source = source.replace(/\bPhaser\b/g, 'Phaser');

      return {
        contents: source,
        loader: 'ts',
      };
    });
  },
}; */

await esbuild.build({
  entryPoints: ['src/Main.ts'],
  bundle: true,
  minify: true,
  //outfile: '../backend/static/app.js',
  outfile: 'index.js',
  external: [],
  // platform: 'node',
  platform: 'browser',
  // iife only used in browser platform
  format: 'iife',
  logLevel: 'debug',
  plugins: [],
})


/* let f = readFileSync('game.js', 'utf-8');

f = f.replace('var import_phaser = __toESM(__require("phaser"));', '');
// must use regex to replace all lines
f = f.replace(/import_phaser\.default/g, 'Phaser');

writeFileSync('game.js', f); */

// to minify

/* await esbuild.build({
  entryPoints: ['game.js'],
  minify: true,
  bundle: false,
  allowOverwrite: true,
  logLevel: 'info',
  outfile: 'game.js'
}) */