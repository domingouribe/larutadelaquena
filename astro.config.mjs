import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({

  prefetch: {
    prefetchAll: true
  },
  // ..
  integrations: [
    partytown({
      config: {
        // opciones van aquí
      },
    }),
  ]
});