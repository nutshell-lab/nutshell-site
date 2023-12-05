<script lang="ts" setup>
import NuLink from "~/components/NuLink.vue"
import NuLogo from "~/components/NuLogo.vue"
</script>

<template>
	<footer class="bg-chinese-black text-alabaster flex flex-col justify-center items-center px-8 py-16 gap-20 @md:bg-[url('assets/logo_nutshell_bottom_right_red_outline.svg')] bg-no-repeat bg-right-bottom">
		<div class="@md:w-full max-w-5xl">
			<div class="flex flex-col @md:grid @md:grid-cols-3 gap-6 @md:gap-0 items-center @md:items-start">
				<nu-logo symbol class="row-span-4 pb-6" :width="56" />
				<div class="flex flex-col gap-6 items-center @md:items-start">
					<nu-link href="/#projects" aria-label="Découvrez tous nos projets">Projets</nu-link>
					<nu-link href="/#use-cases" aria-label="Parcourez nos études de cas">Études de cas</nu-link>
					<!-- <nu-link href="#" aria-label="Accédez à nos ressources">Ressources</nu-link> -->
					<nu-link href="#" aria-label="Apprenez-en plus sur notre société">À propos</nu-link>
				</div>
				<nu-link href="#" aria-label="Suivez-nous sur LinkedIn">LinkedIn</nu-link>
			</div>
		</div>
		<div class="text-xs w-full text-center">
			<nu-typography type="mention">© {{ new Date().getFullYear() }} Nutshell Lab </nu-typography>
			<span class="hidden @md:inline"> - </span>
			<br class="block @md:hidden" />
			<nu-typography type="mention">Tous droits réservés - <nu-link href="/mentions-legales"
					aria-label="Accédez aux mentions légales">Mentions légales</nu-link></nu-typography>
		</div>
	</footer>
</template>
