<script lang="ts" setup>
/*
	typography | size (mobile) | size (desktop) | font | extra
	-----------|---------------|----------------|------|------
	Hero Title | 40 | 80 | Silka Black | outlined uppercase
	title | 32 | 48 | Silka Black |
	subtitle | 24 | 40 | Inter Black |
	large | 18 | 21 | Inter Regular
	regular | 16 | 16 | Inter Regular
	text-link | 16 | 16 | Inter Regular
	CTA text | 14 | 14 | Inter Regular
	caption | 14 | 14 | Inter Regular | uppercase
	mention | 12 | 12 | Inter Light
	*/
const props = defineProps({
	type: { type: String, default: "regular" },
})
</script>

<template>
	<span v-if="type == 'hero-title'" class="uppercase font-silka font-black @md:text-stroke-[1.5px] text-stroke-[1px] text-transparent @xl:text-[110px] @xl:leading-[100px] @md:text-[90px] @md:leading-[80px] @sm:text-[70px] @sm:leading-[60px] text-[40px] leading-[40px]">
		<slot />
	</span>
	<span v-else-if="type == 'hero-title-filled'" class="uppercase font-silka font-black @xl:text-[110px] @xl:leading-[100px] @md:text-[90px] @md:leading-[80px] @sm:text-[70px] @sm:leading-[60px] text-[40px] leading-[40px]">
		<slot />
	</span>
	<span v-else-if="type == 'headline'" class="uppercase font-silka font-black @md:text-stroke-[1.5px] text-stroke-[1px] text-transparent  @md:text-[80px] @md:leading-[70px] @sm:text-[60px] @sm:leading-[50px] text-[40px] leading-[40px]">
		<slot />
	</span>
	<span v-else-if="type == 'headline-filled'" class="uppercase font-silka font-black @md:text-[80px] @md:leading-[70px] @sm:text-[60px] @sm:leading-[50px] text-[40px] leading-[40px]">
		<slot />
	</span>
	<span v-else-if="type == 'title'" class="font-black font-silka text-4xl @md:text-5xl">
		<slot />
	</span>
	<span v-else-if="type == 'subtitle'" class="font-bold font-inter text-2xl @md:text-3xl">
		<slot />
	</span>
	<span v-else-if="type == 'important'" class="font-medium font-inter text-lg @md:text-xl leading-[21px]">
		<slot />
	</span>
	<span v-else-if="type == 'large'" class="font-inter text-lg leading-[21px]">
		<slot />
	</span>
	<span v-else-if="type == 'text-link'" class="font-inter uppercase font-normal">
		<slot />
	</span>
	<span v-else-if="type == 'cta-text'" class="text-sm uppercase font-inter font-bold">
		<slot />
	</span>
	<span v-else-if="type == 'caption'" class="text-sm font-inter font-normal">
		<slot />
	</span>
	<span v-else-if="type == 'mention'" class="text-xs font-inter font-light'">
		<slot />
	</span>
	<span v-else class="font-inter font-normal leading-7">
		<slot />
	</span>
</template>