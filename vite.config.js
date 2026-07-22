import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  base: mode === "github" ? "/portfolio-reno-v2/" : "/",

  plugins: [
    react(),
    visualizer({
      open: false,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
}));
