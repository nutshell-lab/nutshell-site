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
	<div class="bg-chinese-black border border-alabaster w-full h-96 px-6 py-10 flex flex-col justify-between">
		<div class="font-bold text-2xl">
			{{title}}
		</div>
		<div>
			<p>{{description}}</p>
		</div>
		<div class="flex justify-between items-center">
			<div><nu-arrow :top-right="true" /></div>
			<div class="font-black text-5xl">{{highlight}}</div>
		</div>
	</div>
</template>
