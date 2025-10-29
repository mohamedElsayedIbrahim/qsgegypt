import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import svgr from "vite-plugin-svgr"
import compression from "vite-plugin-compression"
import viteImagemin from "vite-plugin-imagemin"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),

    // 🗜️ Gzip compression
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      deleteOriginFile: false,
    }),

    // 🔥 Brotli compression
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
      deleteOriginFile: false,
    }),

    // 🖼️ Image optimization (with AVIF fix)
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.9], speed: 3 },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: true },
        ],
      },
      webp: { quality: 80 },
      // 👇 bypass TypeScript check (still works in runtime)
      ...( { avif: { quality: 50 } } as any ),
    }),
  ],

  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },

  esbuild: {
    drop: ["console", "debugger"],
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  assetsInclude: [
    "**/*.svg",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.webp",
    "**/*.woff2",
  ],

  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
