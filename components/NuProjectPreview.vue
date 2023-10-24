<script lang="ts" setup>
	defineProps({
		title: String,
		highlight: String,
		picture: String,
		description: String,
		lineBreak: {type: Boolean, default: true}
	})
</script>

<template>
	<div :style="{'--image-url': `url(${picture})`}" :class="`tile relative bg-chinese-black border border-alabaster max-w-[375px] h-[376px] px-6 py-10 flex flex-col hover:bg-[image:var(--image-url)]`">
		<div class="z-10 h-full flex flex-col justify-between">
			<div class="flex flex-col gap-4">
				<div class="font-bold text-2xl">
					{{ title }}
				</div>
				<div>
					<p>{{ description }}</p>
				</div>
			</div>
			<div class="flex justify-between items-center">
				<div class="px-2"><nu-arrow :top-right="true" /></div>
				<div class="font-black text-5xl">{{highlight}}</div>
			</div>
		</div>
	</div>
</template>
