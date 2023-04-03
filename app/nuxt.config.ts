// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE,
      apiBaseDefault: process.env.NUXT_API_BASE_DEFAULT,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "CENTRAL-LAB AGRO | SCIENTIFIC INSTRUMENT BOOKING SYSTEM | FACULTY OF AGRO-INDUSTRY, KASETSART UNIVERSITY",
      meta: [
        {
          name: "description",
          content:
            "ระบบจองเครื่องมือวิทยาศาสตร์ คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/ku_logo.jpg" }],
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image-edge",
    "nuxt-icon",
    "nuxt-og-image",
    "@sidebase/nuxt-pdf",
    "@dargmuesli/nuxt-cookie-control",
  ],
  plugins: [
    { src: "~/plugins/sweetalert2" },
    { src: "~/plugins/mosha-vue-toastify" },
    { src: "~/plugins/vuepagination" },
  ],
  css: ["~/assets/css/main.css", "~/assets/css/custom.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
