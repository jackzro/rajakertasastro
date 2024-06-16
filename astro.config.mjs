import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
    simpleStackForm(),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  experimental: {
    actions: true,
  },
});
