// vite.config.ts
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import viteImagemin from "vite-plugin-imagemin";

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
        blog: resolve(__dirname, "blog.html"),
        about: resolve(__dirname, "about.html"),

        // пример второй страницы:
        // admin: resolve(__dirname, 'admin/index.html'),
      },
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 70,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
});
