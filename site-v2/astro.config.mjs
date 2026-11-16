import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({site:"https://drlucascarazza.com.br",output:"static",trailingSlash:"always",integrations:[sitemap()]});
