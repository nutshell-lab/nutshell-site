<script lang="ts" setup>
	import {computed} from 'vue'
	import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'
	/*
	typography | size (mobile) | size (desktop) | font | extra
	-----------|---------------|----------------|------|------
	Hero Title | 40 | 80 | Silka Black | outlined uppercase
	title | 32 | 48 | Silka Black |
	regular | 16 | 16 | Inter Regular
	text-link | 16 | 16 | Inter Regular
	CTA text | 14 | 14 | Inter Regular
	caption | 14 | 14 | Inter Regular | uppercase
	mention | 12 | 12 | Inter Light
	*/
	const breakpoints = useBreakpoints(breakpointsTailwind)
	const props = defineProps({
		type: {type: String, default: "regular"},
		class: {type: String, default: ""}
	})

	const makeClass = (c) => `${props.class} ${c}`
</script>

<template>
	<h2 v-if="type == 'hero-title'" :class="makeClass('text-hero-title-light md:text-[80px] md:leading-[76px] text-[40px]')"><slot /></h2>
	<h2 v-if="type == 'hero-title-dark'" :class="makeClass('text-hero-title-dark md:text-[80px] md:leading-[76px] text-[40px]')"><slot /></h2>
	<h3 v-if="type == 'title'" :class="makeClass('font-black font-silka text-4xl md:text-5xl')"><slot /></h3>
	<span v-if="type == 'regular'" :class="makeClass('font-inter font-normal')"><slot /></span>
	<span v-if="type == 'text-link'" :class="makeClass('font-inter uppercase font-normal')"><slot /></span>
	<span v-if="type == 'cta-text'" :class="makeClass('text-sm uppercase font-inter font-normal')"><slot /></span>
	<span v-if="type == 'caption'" :class="makeClass('text-sm font-inter font-normal')"><slot /></span>
	<span v-if="type == 'mention'" :class="makeClass('text-xs font-inter font-light')"><slot /></span>
</template>

<style>
.text-hero-title-light {
	-webkit-text-stroke: 1.5px #edebe8;
	text-stroke: 1.5px #edebe8;
	font-weight: 900;
	text-transform: uppercase;
	font-family: 'Silka';
	color: transparent;
}

.text-hero-title-dark {
	-webkit-text-stroke: 1.5px #161616;
	text-stroke: 1.5px #161616;
	font-weight: 900;
	text-transform: uppercase;
	font-family: 'Silka';
	color: transparent;
}
</style>
