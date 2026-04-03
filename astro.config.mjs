import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://gonzalogramagia.github.io",
  base: "/project-algorithms",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  integrations: [tailwind(), sitemap(), icon()],
});
