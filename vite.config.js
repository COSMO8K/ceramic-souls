import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // теперь @ указывает на папку src
    },
  },
});
