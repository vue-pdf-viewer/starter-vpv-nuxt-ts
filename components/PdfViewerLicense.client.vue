<script setup lang="ts">
	import { useLicense } from "@vue-pdf-viewer/viewer";
	const props = defineProps<{
		licenseKey?: string;
	}>();
	onBeforeMount(() => {
		if (props.licenseKey) {
			// useLicense(props.licenseKey);
		}
	});
</script>
<template><slot /></template>
