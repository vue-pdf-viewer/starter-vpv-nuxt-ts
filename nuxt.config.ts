// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  runtimeConfig: {
    vpvLicenseKey: ''
  },
  build: {
    transpile: [(ctx) => ctx.isServer ? 'pdfjs-dist': false, (ctx) => ctx.isServer ? '@vpv/viewer': false]
  }
})