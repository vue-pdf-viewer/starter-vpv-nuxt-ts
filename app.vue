<script lang="ts" setup>
  import { VPdfViewer, useLicense, type ToolbarOptions } from '@vpv/viewer';

  const toolbarOptions: Partial<ToolbarOptions> | false = false
  const { data } = await useFetch<{ licenseKey: string }>("/api/vpv-license-key");
  const licenseKey = computed(() => data.value?.licenseKey);
  if (import.meta.client) {
    useLicense({ licenseKey });
  }
</script>
<template>
  <div :style="{ textAlign: 'center' }">
    <ClientOnly>
      <h1>VPV Starter Toolkit: Vue + Composition API + TypeScript</h1>
      <br />
      <h2>Default Toolbar</h2>
      <div class="pdf-viewer-wrapper">
        <VPdfViewer
          src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
      </div>
      <h2>Without Toolbar</h2>
      <div class="pdf-viewer-wrapper">
        <VPdfViewer
          src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
          :toolbar-options="toolbarOptions" />
      </div>
      <h2>Mobile</h2>
      <div class="pdf-viewer-wrapper-mobile">
        <VPdfViewer
          src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
      </div>
    </ClientOnly>
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
</style>
