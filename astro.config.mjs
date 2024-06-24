import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({

  site: 'https://larutadelaquena.com',
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