import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://larutadelaquena.com',
  prefetch: {
    prefetchAll: true
  },
  integrations: [partytown()],
});