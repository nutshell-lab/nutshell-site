<script lang="ts" setup>
import NuArrow from "./NuArrow.vue"

defineProps({
    picture: String,
    title: String,
    category: String,
    disabled: Boolean,
    caption: String,
})
</script>

<template>
	<article class="tile border border-alabaster @sm:w-[375px] w-full max-w-full h-[380px] flex flex-col justify-between">
		<div :style="{'--image-url': `url('${picture}')`}" class="bg-cover picture bg-raisin-black relative overflow-hidden h-full bg-[image:var(--image-url)]">
			<div class="picture__inner" :class="{ 'bg-cinnabar': !disabled, 'bg-onyx': disabled }"/>
		</div>
		<div class="flex gap-6 py-8">
			<div class="vertical-text rotate-180 font-inter font-bold text-cinnabar h-40 text-center px-2 uppercase">{{caption}}</div>
			<div class="flex flex-col gap-4 pr-6">
				<div>{{category}}</div>
				<header class="text-xl font-semibold font-inter">{{title}}</header>
			</div>
			<nu-arrow top-right class="w-6 absolute bottom-8 right-8" :class="{ 'hidden': disabled }" />
			<div class="h-[10px] w-[10px] bg-cinnabar absolute left-[1px] bottom-[1px]"/>
		</div>
	</article>
</template>

<style scoped>
.picture__inner {
	@apply w-[130%] h-[130%] left-[-140%] top-[-15%] absolute transition z-10 ease-in-out duration-500 mix-blend-multiply;
	transform: rotate(5deg);
}
.tile:hover .picture__inner {
	transform: translate3d(100%, 0px, 0px) rotate(5deg);
}

</style>
