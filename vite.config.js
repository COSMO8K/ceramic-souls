// vite.config.ts
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        // по умолчанию это не нужно, но если страниц несколько — указываем явно
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "catalog.html"),
        // пример второй страницы:
        // admin: resolve(__dirname, 'admin/index.html'),
      },
    },
  },
});
