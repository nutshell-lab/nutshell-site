<script lang="ts" setup>
defineProps({
	entries: { type: Array, required: true },
	class: {type: String, default: ""}
})
</script>
<template>
	<div v-for="entry in entries" :class="class" class="flex flex-col">
		<hr class="h-[2px]" />
		<nu-typography>{{ entry }}</nu-typography>
	</div>
</template>
