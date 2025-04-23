<script lang="ts" setup>
	import { VPdfViewer, type ToolbarOptions } from "@vue-pdf-viewer/viewer";
	import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

	const props = defineProps<Partial<ToolbarOptions>>();
</script>
<template>
	<VPdfViewer
		src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
		:worker-url="pdfWorker"
		v-bind="props" />
</template>

<style scoped>
	.pdf-viewer-wrapper {
		width: 1028px;
		height: 700px;
		margin: 0 auto;
	}

	.pdf-viewer-wrapper-mobile {
		width: 768px;
		height: 700px;
		margin: 0 auto;
	}
</style>
