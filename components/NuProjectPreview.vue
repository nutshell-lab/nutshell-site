<script lang="ts" setup>
	export interface Props {
		title: string
		highlight: string
		picture: string
		description: string
		lineBreak: bool
	}

	const props = withDefaults(defineProps<Props>(), {
		lineBreak: true
	})
</script>

<template>
	<div>
		<div class="bg-onyx w-full h-80 my-4" />
		<div class="my-4 uppercase font-bold text-3xl flex justify-between">
			<div class="uppercase">{{title}}</div>
			<div>{{highlight}}</div>
		</div>
		<p>{{description}}</p>
		<hr v-if="lineBreak" class="mb-4 mt-24" />
		<div v-else class="mb-4 mt-24" />
	</div>
</template>
