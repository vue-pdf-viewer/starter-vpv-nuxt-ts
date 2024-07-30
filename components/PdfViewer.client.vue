<script lang="ts" setup>
  import { VPdfViewer, useLicense, type ToolbarOptions } from '@vue-pdf-viewer/viewer';
  import pdfWorker from 'pdfjs-dist/build/pdf.worker?url';

  const props = defineProps<Partial<ToolbarOptions>>()

  const { data } = await useFetch<{ licenseKey: string }>("/api/vpv-license-key");
  const licenseKey = computed(() => data.value?.licenseKey);
  if (import.meta.client) {
    useLicense({ licenseKey });
  }
</script>
<template>
  <VPdfViewer src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
    :worker-url="pdfWorker" :toolbar-options="props.toolbarOptions" />
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
