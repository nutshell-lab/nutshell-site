<script lang="ts" setup>
import NuLogo from '~/components/NuLogo.vue'
</script>

<template>
	<div class="bg-chinese-black text-alabaster flex flex-col justify-center items-center px-8 py-12">
		<div class="py-20">
			<div class="flex flex-col gap-6 items-center">
				<nu-logo class="pb-6" :width="56"/>
				<div><a href="#" aria-label="Découvrez tous nos projets">Projets</a></div>
				<div><a href="#" aria-label="Parcourez nos études de cas">Études de cas</a></div>
				<div><a href="#" aria-label="Accédez à nos ressources">Ressources</a></div>
				<div><a href="#" aria-label="Apprenez-en plus sur notre société">À propos</a></div>
				<div><a href="#" aria-label="Suivez-nous sur LinkedIn">LinkedIn</a></div>
			</div>
		</div>
		<div class="text-xs text-onyx w-full columns-1 text-center">
			<div>© {{new Date().getFullYear()}} Nutshell Lab</div>
			<div>Tous droits réservés - <a href="#" aria-label="Accédez aux mentions légales">Mentions légales</a></div>
		</div>
	</div>
</template>
