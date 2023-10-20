<script lang="ts" setup>
import NuLogo from '~/components/NuLogo.vue'
import NuButton from '~/components/NuButton.vue'
import NuHeroSection from '~/components/NuHeroSection.vue'
import NuSectionBreak from '~/components/NuSectionBreak.vue'
import NuSplash from '~/components/NuSplash.vue'
import NuProjectPreview from '~/components/NuProjectPreview.vue'
import NuFooter from '~/components/NuFooter.vue'
import NuTopBar from '~/components/NuTopBar.vue'
import NuArrow from '~/components/NuArrow.vue'
import NuSwipper from '~/components/NuSwipper.vue'
import NuTypography from '~/components/NuTypography.vue'
import NuLink from '~/components/NuLink.vue'

import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

const projects = [
	{
		title: 'Actinuum',
		highlight: '+2M€',
		picture: '',
		description: 'Automatiser l’administratif de la formation professionnelle et le processus de formation spécifique aux innovations pédagogique d’Actinuum a permis de tripler leur chiffre d’affaire.',
		link: "#",
	},
	{ 
		title: 'Brokers',
		highlight: '131Md€',
		picture: '',
		description: 'Les marchés financiers tradent chaque jours des centaines de milliards d’actifs. En analysant les chats de ses traders, notre solution prépare des trades pertinents en temps réel.',
		link: "#",
	},
	{
		title: 'Atlas',
		highlight: '300k',
		picture: '',
		description: 'L’évolution de la législation autour de la formation professionnelle a poussé Atlas à se doter d’une plateforme d’examens en ligne automatisée ayant déjà certifié 300 000 apprenants.',
		link: "#",
	},
	{
		title: 'Constructys',
		highlight: '180',
		picture: '',
		description: 'Pour préparer les JO 2024, il faut augmenter massivement la masse salariale de la branche BTP. Pour se faire Constructys nous fait mettre en place une solution de reconversion de métier à 180 métiers cibles.',
		link: "#",
	}
]

const services = [
	'Produits et SasS',
	'Dévelopement',
	'Design et ergonomie',
	'Data et Business Intelligence',
	'Innovation',
	'Branding et Strategy',
	'Analyse et Audit',
	'Analytics et SEO'
]

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')
const isDesktop = !isMobile.value

</script>


<template>
	<div class="bg-alabaster font-inter">
		<nav class="w-full fixed z-30">
			<nu-top-bar>
				<nu-logo :symbol="true" :text="true" :width="162" :colors="['cinnabar', 'alabaster', 'alabaster']" />
			</nu-top-bar>
		</nav>
		<div class="relative">
			<nu-splash class="bg-chinese-black">
				<nu-typography type="hero-title" class="text-center">
					Un studio de <br />développement<br />  sur-mesure à<br /> votre service
				</nu-typography>
			</nu-splash>
			<div class="absolute text-alabaster bottom-4 w-full columns-1 text-center">
				<nu-arrow />
			</div>
		</div>
		<div class="wrapper">
			<div class="container">
			<nu-hero-section
				title="Comprendre le métier et le valoriser avec la tech."
				cta="valorisons le votre"
				>
				<template #caption>
						<nu-typography type="caption">
							Un studio de <b class="font-bold">développement <br v-if="isMobile"/>sur-mesure</b> à votre service.
						</nu-typography>
				</template>
				<template #title>
					<div class="max-w-[700px]">
						<nu-typography type="title">
							Comprendre le métier et le valoriser avec la tech.
						</nu-typography>
					</div>
				</template>
				<template #text>
					<div class="max-w-[486px]">
						<nu-typography>
							Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment  pertinentes.
						</nu-typography>
					</div>
				</template>
			</nu-hero-section>
			</div>

			<div class="bg-chinese-black text-alabaster">
				<nu-typography type="title" class="py-16">Ils ont crée<br/>de la valeur.</nu-typography>
				<div class="flex flex-col gap-6">
					<nu-link :aria-label="`Découvrez le projet ${p.title}`" :href="p.link" v-for="(p, i) in projects.slice(0, 4)" >
						<nu-project-preview :line-break="i != 1" :title="p.title" :highlight="p.highlight" :picture="p.picture" :description="p.description"></nu-project-preview>
					</nu-link>
				</div>
				<nu-link aria-label="Découvrez nos autres projets" href="#">
					<div class="my-8 flex items-center gap-4 justify-center">
						<nu-typography type="text-link" class="">Découvrez nos autres projets</nu-typography>
						<nu-arrow :right="true" />
					</div>
				</nu-link>
			</div>

			<nu-section-break>
				<nu-typography type="title">Apprenez-nous <br v-if="isDesktop" />votre métier</nu-typography>
				<nu-button>Créons de la valeur</nu-button>
			</nu-section-break>

			<div class="py-20 bg-chinese-black text-alabaster">
				<div class="h-full flex flex-col justify-between py-20 gap-16">
					<nu-typography type="title" class="container max-w-[776px]">Si vous en avez besoin, on peut sûrement vous le fabriquer.</nu-typography>
					<nu-swipper />
				</div>
				<div class="w-full container flex flex-col gap-12 pb-32">
					<hr />
					<nu-typography type="title" class="py-10">Lorem ipsum dolor</nu-typography>
					<div v-for="service in services" class="flex flex-col">
						<hr />
						<nu-typography>{{service}}</nu-typography>
					</div>
				</div>
			</div>

			<nu-section-break variant="light">
				<nu-typography type="hero-title-dark">Commençons <br v-if="isDesktop" />à discuter.</nu-typography>
				<nu-button class="border-cinnabar text-cinnabar">Par chat</nu-button>
			</nu-section-break>
		</div>

		<footer class="bg-chinese-black text-alabaster flex flex-col justify-center items-center px-8 py-12 ">
			<div class="py-20 md:w-full max-w-5xl">
				<div class="flex flex-col md:grid md:grid-rows-4 md:grid-flow-col gap-6 items-center md:items-start">
					<nu-logo class="row-span-4 pb-6" :width="56"/>
					<div><nu-link href="#" aria-label="Découvrez tous nos projets">Projets</nu-link></div>
					<div><nu-link href="#" aria-label="Parcourez nos études de cas">Études de cas</nu-link></div>
					<div><nu-link href="#" aria-label="Accédez à nos ressources">Ressources</nu-link></div>
					<div><nu-link href="#" aria-label="Apprenez-en plus sur notre société">À propos</nu-link></div>
					<div><nu-link href="#" aria-label="Suivez-nous sur LinkedIn">LinkedIn</nu-link></div>
				</div>
			</div>
			<div class="text-xs text-onyx w-full columns-1 text-center">
				<nu-typography type="mention">© {{new Date().getFullYear()}} Nutshell Lab </nu-typography>
				<span v-if="isDesktop"> - </span>
				<br v-else />
				<nu-typography type="mention">Tous droits réservés - <nu-link href="#" aria-label="Accédez aux mentions légales">Mentions légales</nu-link></nu-typography>
			</div>
		</footer>
	</div>
</template>

<style>
.nu-stroke-title {
	-webkit-text-stroke: 2px #edebe8;
	text-stroke: 2px #edebe8;
	font-size: 40px;
	line-height: 50px;
	font-weight: 900;
	text-transform: uppercase;
	font-family: 'Silka'
}

.wrapper > * {
	padding: 24px;
}
</style>
