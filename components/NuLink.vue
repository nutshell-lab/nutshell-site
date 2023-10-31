<script lang="ts" setup>
/*
		Embed an a tag but force you to define aria-label
		for accessibility and SEO purpose
	*/
defineProps({
    ariaLabel: { type: String, required: true },
    href: { type: String, required: true },
})
</script>

<template>
	<a :aria-label="ariaLabel" :href="href"><slot /></a>
</template>
