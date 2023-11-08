<script lang="ts" setup>
import BurgerIcon from "./BurgerIcon.vue"
</script>

<template>
	<nav class="w-full md:w-16 fixed z-30">
		<div class="w-full md:w-16 text-alabaster grid grid-cols-2 md:grid-cols-1 md:h-screen px-6 py-5">
			<slot>
				<nu-link aria-label="Retourner sur la homepage" href="/">
					<nu-logo symbol text :width="162" :colors="['cinnabar', 'alabaster', 'alabaster']" />
				</nu-link>
			</slot>

			<div class="justify-self-end md:justify-self-start">
				<slot name="actions">
					<burger-icon class="md:text-cinnabar"></burger-icon>
				</slot>
			</div>
		</div>
	</nav>
</template>
