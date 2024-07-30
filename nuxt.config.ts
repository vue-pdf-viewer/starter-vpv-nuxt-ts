// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    vpvLicenseKey: ''
  },
  build: {
    transpile: [
      (ctx) => ctx.isServer ? 'pdfjs-dist': false, 
      (ctx) => ctx.isServer ? '@vue-pdf-viewer/viewer': false
    ]
  }
})