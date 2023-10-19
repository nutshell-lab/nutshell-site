<script lang="ts" setup>
defineProps<{
  color: { type: String; default: "chinese-black" },
	uppercase: {type: Boolean; default: false}
}>()
</script>

<template>
	<div :class="`text-${color} font-black ${uppercase ? 'uppercase' : ''} font-black font-silka text-4xl`">
		<slot />
  </div>
</template>
