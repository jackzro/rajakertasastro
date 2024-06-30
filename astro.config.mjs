import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import partytown from "@astrojs/partytown";
import basicSsl from "@vitejs/plugin-basic-ssl";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
      port: 3000,
    },
  },
  site: "https://rajakertas.id",
});
