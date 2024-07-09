import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://rajakertas.id",
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
  ],
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ["broken-npm-package"],
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
