<script lang="ts" setup>
</script>

<template>
	<div class="h-screen bg-chinese-black flex flex-col items-center justify-center">
		<div class="flex items-center gap-4">
			<slot>
				<nu-logo />
				<div class="text-5xl md:text-8xl font-silka font-bold text-alabaster">nutshell</div>
			</slot>
		</div>
	</div>
</template>
