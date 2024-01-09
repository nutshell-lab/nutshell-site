<script lang="ts" setup>
defineProps({
    width: { type: Number, default: 40 },
    height: { type: Number, default: 40 },
    color: { type: String, default: "#E0492B" },
})
</script>

<template>
	<div class="cursor-pointer">
		<svg role="img" aria-label="icon open menu" :width="width" :height="height" :viewBox="`0 0 40 40`" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 11.6667H31.6667V10H0V11.6667Z" :fill="color"/>
			<path d="M31.6667 30.9997H0V29.333H31.6667V30.9997Z" :fill="color"/>
			<path d="M8.33325 21.3332V19.6665H39.9999V21.3332H8.33325Z" :fill="color"/>
		</svg>
	</div>
</template>
