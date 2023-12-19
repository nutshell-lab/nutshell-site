<script lang="ts" setup>
defineProps({
	entries: { type: Array, required: true },
})
</script>
<template>
	<div class="flex flex-col @md:grid @md:grid-cols-2 gap-x-12 gap-y-16">
		<div v-for="(entry, index) in entries" class="h-8">
			<hr class="h-[2px] mb-1" />
			<nu-typography type="large">{{ entry }}</nu-typography>
		</div>
	</div>
</template>
