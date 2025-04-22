<script setup lang="ts">
	const { data } = await useFetch<{ licenseKey: string }>(
		"/api/vpv-license-key"
	);

	const licenseKey = computed(() => data.value?.licenseKey);
</script>
<template>
	<div :style="{ textAlign: 'center' }">
		<ClientOnly>
			<h1>VPV Starter Toolkit: Nuxt + Composition API + TypeScript</h1>
			<br />
			<h2>Default Toolbar</h2>
			<div class="pdf-viewer-wrapper">
				<PdfViewer />
			</div>
			<h2>Without Toolbar</h2>
			<div class="pdf-viewer-wrapper no-toolbar">
				<PdfViewer :toolbar-options="false" />
			</div>
			<h2>Mobile</h2>
			<div class="pdf-viewer-wrapper-mobile">
				<PdfViewer />
			</div>
		</ClientOnly>
		<AppPdfViewer
			title="Shared Component"
			:license-key="licenseKey"
			src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
	</div>
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

	.no-toolbar :deep(.vpv-variables) {
		--vpv-toolbar-size: 0px;
	}
</style>
