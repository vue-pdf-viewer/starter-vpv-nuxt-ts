<script lang="ts" setup>
	import { VPdfViewer, VPVBaseProps } from "@vue-pdf-viewer/viewer";
	import VPdfAnnotationPlugin from "@vue-pdf-viewer/annotation";

	const props = defineProps({
		...VPVBaseProps,
		title: String,
		annotatedEnabled: {
			type: Boolean,
			default: false,
			required: false,
		},
	});
	const viewerRef = ref<InstanceType<typeof VPdfViewer> | null>(null);
	const vpvProps = computed(() => {
		const { annotatedEnabled, title, ...baseProps } = props;
		if (annotatedEnabled) {
			baseProps.plugins = [VPdfAnnotationPlugin()];
		}
		return baseProps;
	});

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
				v-bind="vpvProps"
				ref="viewerRef" />
		</div>
	</div>
</template>
