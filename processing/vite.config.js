import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mobileSimulatorPlugin from 'vite-plugin-mobile-simulator';
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(), mobileSimulatorPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
