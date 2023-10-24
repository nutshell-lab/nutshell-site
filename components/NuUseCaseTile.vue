<script lang="ts" setup>
	import NuArrow from "./NuArrow.vue"

	defineProps({
		picture: String,
		title: String,
		subtitle: String,
		id: String,
	})
</script>
<template>
	<div class="border border-alabaster w-full h-[380px] max-w-[375px] flex flex-col justify-between">
		<div :style="{'--image-url': `url(${picture})`}" class="bg-raisin-black h-full bg-[image:var(--image-url)]" />
		<div class="flex gap-9 py-8">
			<div :style="{writingMode: 'vertical-rl'}" class="rotate-180 font-inter font-bold text-cinnabar h-40 text-center px-2 uppercase">{{id}}</div>
			<div class="flex flex-col gap-4">
				<div>{{subtitle}}</div>
				<h5 class="text-xl font-semibold font-inter">{{title}}</h5>
			</div>
			<nu-arrow :top-right="true" class="w-6 absolute bottom-8 right-8">x</nu-arrow>
		</div>
	</div>
</template>
