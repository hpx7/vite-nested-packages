import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    link: ["../"],
  },
  alias: { vue: "vue/dist/vue.esm.js" },
  clearScreen: false,
});
