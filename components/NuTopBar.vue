<script lang="ts" setup>
import BurgerIcon from "./BurgerIcon.vue"
</script>

<template>
	<div class="w-full pointer-events-none md:w-56 md:bg-opacity-0 text-alabaster grid grid-cols-2 md:grid-cols-1 md:h-screen px-6 py-5">
		<slot></slot>

		<div class="justify-self-end md:justify-self-start">
			<slot name="actions">
				<burger-icon class="md:text-cinnabar"></burger-icon>
			</slot>
		</div>
	</div>
</template>
