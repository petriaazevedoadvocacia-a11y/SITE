import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

/**
 * Config para deploy estático (SPA) no Vercel.
 * Substitui o preset @lovable.dev/vite-tanstack-config (que era Cloudflare-only).
 * O modo SPA gera dist/client/index.html servível pelo Vercel direto.
 */
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          enabled: true,
          outputPath: "/index.html",
          autoSubfolderIndex: true,
          crawlLinks: false,
          retryCount: 0,
        },
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
  server: { port: 8080 },
});
