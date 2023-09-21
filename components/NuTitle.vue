<script lang="ts" setup>
defineProps<{
  color: { type: String; default: "chinese-black" }
}>()
</script>

<template>
	<div :class="`text-${color} font-black uppercase font-silka text-4xl`">
		<slot />
  </div>
</template>
