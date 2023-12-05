<script lang="ts" setup>
/*
		Embed an a tag but force you to define aria-label
		for accessibility and SEO purpose
	*/
defineProps({
    href: { type: String, required: true },
	hover: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false }
})
</script>

<template>
	<slot v-if="disabled"/>
	<span v-else class="link" :class="{ 'hover': hover }">
		<span class="link__inner relative">
			<a class="relative z-10" :href="href"><slot /></a>
		</span>
	</span>
</template>

<style>
.link.hover .link__inner::before {
	@apply bg-cinnabar w-[0%] absolute left-[-10%] transition-all ease-in-out z-10 duration-500 h-[45%] bottom-[1%];
	transform: rotate(-2deg);
	content: '';
}

.link:hover .link__inner::before {
	@apply w-[120%]
}

</style>
