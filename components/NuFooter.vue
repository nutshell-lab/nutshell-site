<script lang="ts" setup>
import NuLink from "~/components/NuLink.vue"
import NuLogo from "~/components/NuLogo.vue"
</script>

<template>
	<footer class="bg-chinese-black text-alabaster flex flex-col justify-center items-center px-8 py-12">
		<div class="py-20">
			<div class="flex flex-col gap-6 items-center">
				<nu-logo class="pb-6" :width="56"/>
				<div><nu-link href="#" aria-label="Découvrez tous nos projets">Projets</nu-link></div>
				<div><nu-link href="#" aria-label="Parcourez nos études de cas">Études de cas</nu-link></div>
				<div><nu-link href="#" aria-label="Accédez à nos ressources">Ressources</nu-link></div>
				<div><nu-link href="#" aria-label="Apprenez-en plus sur notre société">À propos</nu-link></div>
				<div><nu-link href="#" aria-label="Suivez-nous sur LinkedIn">LinkedIn</nu-link></div>
			</div>
		</div>
		<div class="text-xs text-onyx w-full columns-1 text-center">
			<div><nu-typography type="mention">© {{new Date().getFullYear()}} Nutshell Lab</nu-typography></div>
			<div><nu-typography type="mention">Tous droits réservés - <nu-link href="#" aria-label="Accédez aux mentions légales">Mentions légales</nu-link></nu-typography></div>
		</div>
	</footer>
</template>
