// https://nuxt.com/docs/api/configuration/nuxt-config
import { $app } from "./utils";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      title: "Precision Fertilizers. Proven Results.",
      titleTemplate: `%s - ${$app.name}`,
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#ffffff" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content: $app.desc,
        },
        { name: "og:locale", content: "en_US" },
        { name: "og:type", content: "website" },
        {
          name: "og:title",
          content: $app.name,
        },
        {
          name: "og:description",
          content: $app.desc,
        },
        {
          name: "og:site_name",
          content: $app.name,
        },
        { name: "og:url", content: `https://${$app.domain}` },
      ],
      link: [
        { rel: "image/x-icon", href: "/favicon.ico" },
        { rel: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        {
          rel: "stylesheet",
          href: "https://xtremnet.vercel.app/fonts/fontawesome/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Teko:wght@300..700&display=swap",
        },
      ],
    },
  },
  components: [{ path: "~/components", pathPrefix: false, global: true }],
});
