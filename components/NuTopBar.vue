<script lang="ts" setup>
	import BurgerIcon from "./BurgerIcon.vue"
</script>

<template>
	<div class="bg-chinese-black text-alabaster flex justify-between px-6 py-5">
		<slot></slot>

		<div class="">
			<slot name="actions">
				<burger-icon></burger-icon>
			</slot>
		</div>
	</div>
</template>
