import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// The openagentui runtime is written against react hook imports but runs on
// @openagentui/tap; aliasing react to the standalone shim resolves it with
// no React installed.
export default defineConfig({
  plugins: [vue(), tailwindcss()],
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
