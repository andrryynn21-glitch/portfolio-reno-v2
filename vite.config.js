import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const siteUrl =
    mode === "github"
      ? "https://andrryynn21-glitch.github.io/portfolio-reno-v2/"
      : "https://renoandrian.vercel.app/";

  // Generate deployment-specific SEO files from the same canonical URL.
  const seoAssets = {
    "robots.txt": `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
    "sitemap.xml": `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}</loc></url></urlset>\n`,
  };

  return {
    base: mode === "github" ? "/portfolio-reno-v2/" : "/",
    plugins: [
      react(),
      {
        name: "portfolio-seo",
        transformIndexHtml: {
          order: "pre",
          handler: (html) => html.replaceAll("%SITE_URL%", siteUrl),
        },
        generateBundle() {
          for (const [fileName, source] of Object.entries(seoAssets)) {
            this.emitFile({ type: "asset", fileName, source });
          }
        },
        configureServer(server) {
          server.middlewares.use((request, response, next) => {
            const fileName = request.url?.split("?")[0].split("/").pop();
            if (!Object.hasOwn(seoAssets, fileName)) return next();
            response.setHeader(
              "Content-Type",
              fileName.endsWith("xml") ? "application/xml" : "text/plain",
            );
            response.end(seoAssets[fileName]);
          });
        },
      },
      process.env.ANALYZE === "true" &&
        visualizer({
          open: false,
          filename: "dist/stats.html",
          gzipSize: true,
          brotliSize: true,
        }),
    ],
  };
});
