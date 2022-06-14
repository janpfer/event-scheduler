import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/tailwind.css"],
  buildModules: ["@nuxtjs/strapi"],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
  },
});
