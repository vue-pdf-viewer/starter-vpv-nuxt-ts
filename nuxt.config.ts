// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		vpvLicenseKey: process.env.NUXT_VPV_LICENSE_KEY || "",
	},
	debug: true,
	build: {
		transpile: [
			(ctx) => (ctx.isServer ? "pdfjs-dist" : false),
			(ctx) => (ctx.isServer ? "@vue-pdf-viewer/viewer" : false),
		],
	},
	vite: {
		optimizeDeps: {
			include: ["pdfjs-dist"],
			exclude: ["@vue-pdf-viewer/viewer"],
		},
	},
	compatibilityDate: "2024-08-08",
});
