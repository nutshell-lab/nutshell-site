<script lang="ts" setup>
/*
	typography | size (mobile) | size (desktop) | font | extra
	-----------|---------------|----------------|------|------
	Hero Title | 40 | 80 | Silka Black | outlined uppercase
	title | 32 | 48 | Silka Black |
	subtitle | 24 | 40 | Silka Black |
	large | 18 | 21 | Inter Regular
	regular | 16 | 16 | Inter Regular
	text-link | 16 | 16 | Inter Regular
	CTA text | 14 | 14 | Inter Regular
	caption | 14 | 14 | Inter Regular | uppercase
	mention | 12 | 12 | Inter Light
	*/
const props = defineProps({
	type: { type: String, default: "regular" },
	class: { type: String, default: "" },
})

const makeClass = (c: string) => `${props.class} ${c}`
</script>

<template>
	<span v-if="type == 'gigantic'"
		:class="makeClass('text-gigantic @md:text-[120px]')">
		<slot />
	</span>
	<span v-if="type == 'hero-title'"
		:class="makeClass('text-hero-title-light @md:text-[80px] @md:leading-[76px] text-[40px]')">
		<slot />
	</span>
	<span v-if="type == 'hero-title-filled'"
		:class="makeClass('text-hero-title-light filled @md:text-[80px] @md:leading-[76px] text-[40px]')">
		<slot />
	</span>
	<span v-if="type == 'hero-title-dark'"
		:class="makeClass('text-hero-title-dark @md:text-[80px] @md:leading-[76px] text-[40px]')">
		<slot />
	</span>
	<span v-if="type == 'hero-title-dark-filled'"
		:class="makeClass('text-hero-title-dark filled @md:text-[80px] @md:leading-[76px] text-[40px]')">
		<slot />
	</span>
	<span v-if="type == 'hero-title-primary'"
		:class="makeClass('text-hero-title-primary @md:text-[80px] @md:leading-[76px] text-[40px]')">
		<slot />
	</span>
	<span v-if="type == 'hero-title-primary-filled'"
		:class="makeClass('text-hero-title-primary filled @md:text-[80px] @md:leading-[76px] text-[40px]')">
		<slot />
	</span>
	<span v-if="type == 'title'" :class="makeClass('font-black font-silka text-4xl @md:text-5xl')">
		<slot />
	</span>
	<span v-if="type == 'subtitle'" :class="makeClass('font-black font-silka text-2xl @md:text-3xl')">
		<slot />
	</span>
	<span v-if="type == 'large'" :class="makeClass('font-inter text-lg leading-[21px]')">
		<slot />
	</span>
	<span v-if="type == 'regular'" :class="makeClass('font-inter font-normal leading-7')">
		<slot />
	</span>
	<span v-if="type == 'text-link'" :class="makeClass('font-inter uppercase font-normal')">
		<slot />
	</span>
	<span v-if="type == 'cta-text'" :class="makeClass('text-sm uppercase font-inter font-normal')">
		<slot />
	</span>
	<span v-if="type == 'caption'" :class="makeClass('text-sm font-inter font-normal')">
		<slot />
	</span>
	<span v-if="type == 'mention'" :class="makeClass('text-xs font-inter font-light')">
		<slot />
	</span>
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

.text-hero-title-light.filled {
	-webkit-text-stroke: unset;
	text-stroke: unset;
	color: #edebe8;
}

.text-hero-title-dark {
	-webkit-text-stroke: 1.5px #161616;
	text-stroke: 1.5px #161616;
	font-weight: 900;
	text-transform: uppercase;
	font-family: 'Silka';
	color: transparent;
}

.text-hero-title-dark.filled {
	-webkit-text-stroke: unset;
	text-stroke: unset;
	color: #161616;
}

.text-hero-title-primary {
	-webkit-text-stroke: 1.5px #E0492B;
	text-stroke: 1.5px #E0492B;
	font-weight: 900;
	text-transform: uppercase;
	font-family: 'Silka';
	color: transparent;
}

.text-hero-title-primary.filled {
	-webkit-text-stroke: unset;
	text-stroke: unset;
	color: #E0492B;
}


</style>
