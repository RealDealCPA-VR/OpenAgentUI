import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

// The openagentui runtime is written against react hook imports but runs on
// @openagentui/tap; aliasing react to the standalone shim resolves it with
// no React installed.
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: /^react\/compiler-runtime$/,
        replacement: "@openagentui/tap/standalone-shim/compiler-runtime",
      },
      { find: /^react$/, replacement: "@openagentui/tap/standalone-shim" },
    ],
  },
});
