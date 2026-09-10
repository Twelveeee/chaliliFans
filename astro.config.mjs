import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://chalilifans.12dev.us",
  output: "static",
  // Accept existing navigation/bookmarks with or without a trailing slash.
  // Canonical URLs and the directory-format sitemap still use trailing slashes.
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return /^\/(zh|en|ja)\//.test(pathname);
      }
    })
  ]
});
