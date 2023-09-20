<script lang="ts" setup>
const props = defineProps<{
	color: {type: String, default: 'chinese-black'},
}>()
</script>

<template>
	<div :class="`text-${color} font-inter text-xs`">
		<slot />
  </div>
</template>

