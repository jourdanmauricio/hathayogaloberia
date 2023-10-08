import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // astroOGImage({
    //   config: {
    //     path: '/hathayogaloberia/posts', // change this value to the folder where your posts are
    //     // NOTE: index.md file will not get proccesed, so please avoid it
    //   },
    // }),
  ],
  site: 'https://jourdanmauricio.github.io',
  base: '/hathayogaloberia',
});
