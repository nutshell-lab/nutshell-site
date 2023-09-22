<script lang="ts" setup>
import NuLogo from '~/components/NuLogo.vue'
</script>

<template>
	<div class="bg-chinese-black text-alabaster flex flex-col justify-center items-center px-8 py-4">
		<nu-logo class="py-20" :width="150"/>
			<div class="flex flex-col gap-8">
				<div class="w-full">
					<div>Projets</div>
					<div>Études de cas</div>
					<div>Ressources</div>
					<div>À propos</div>
				</div>
				<div class="w-full">
					<div>LinkedIn</div>
				</div>
				<div class="w-full">
					<div>Mentions légales</div>
				</div>
			</div>
			<div class="text-xs text-onyx w-full columns-1 pt-20">
				<div>c {{new Date().getFullYear()}} Nutshell Lab</div>
				<div>Tous droits réservés</div>
			</div>
	</div>
</template>
