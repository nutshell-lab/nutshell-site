<script lang="ts" setup>
defineProps({
    width: { type: Number, default: 40 },
    height: { type: Number, default: 40 },
    color: { type: String, default: "#161616" },
})
</script>

<template>
	<div class="cursor-pointer">
		<svg :width="width" :height="height" :viewBox="`0 0 40 40`" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M30.4713 6L20 19.0468L9.52872 6H8L19.2356 20L8 34H9.52872L20 20.9532L30.4713 34H32L20.7644 20L32 6H30.4713Z" :fill="color" :stroke="color" stroke-width="0.5"/>
		</svg>
	</div>
</template>
