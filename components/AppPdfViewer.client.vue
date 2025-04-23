<script lang="ts" setup>
	import { VPdfViewer, VPVBaseProps } from "@vue-pdf-viewer/viewer";

	const props = defineProps({
		...VPVBaseProps,
		title: String,
	});
	const viewerRef = ref<InstanceType<typeof VPdfViewer> | null>(null);

	watch(viewerRef, (newVal) => {
		if (newVal) {
			console.log("These are VPV instance properties", Object.keys(newVal));
		}
	});
</script>
<template>
	<div>
		<h2>
			{{ props.title }}
		</h2>
		<div
			:style="{
				width: '100%',
				maxWidth: '1028px',
				height: '700px',
				margin: '0 auto',
			}">
			<VPdfViewer
				v-bind="$props"
				ref="viewerRef" />
		</div>
	</div>
</template>
