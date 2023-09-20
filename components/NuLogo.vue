<script lang="ts" setup>
	defineProps({
		color: {type: String, default: 'cinnabar'}
	})
</script>

<template>
	<div :class="`bg-${color} w-20 h-20 md:w-40 md:h-40`" />
</template>
