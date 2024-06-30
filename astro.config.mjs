import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import partytown from "@astrojs/partytown";

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
    server: {
      https: true,
    },
  },
  site: "https://rajakertas.id",
});
