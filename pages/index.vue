<script lang="ts" setup>
import NuLogo from '~/components/NuLogo.vue'
import NuButton from '~/components/NuButton.vue'
import NuTitle from '~/components/NuTitle.vue'
import NuCaption from '~/components/NuCaption.vue'
import NuHeroSection from '~/components/NuHeroSection.vue'
import NuSectionBreak from '~/components/NuSectionBreak.vue'
import NuSplash from '~/components/NuSplash.vue'
import NuProjectPreview from '~/components/NuProjectPreview.vue'
import NuFooter from '~/components/NuFooter.vue'
import NuTopBar from '~/components/NuTopBar.vue'
import NuArrow from '~/components/NuArrow.vue'
import NuSwipper from '~/components/NuSwipper.vue'

const projects = [
	{
		title: 'Actinuum',
		highlight: '+2M€',
		picture: '',
		description: 'Automatiser l’administratif de la formation professionnelle et le processus de formation spécifique aux innovations pédagogique d’Actinuum a permis de tripler leur chiffre d’affaire.'
	},
	{ 
		title: 'Brokers',
		highlight: '131Md€',
		picture: '',
		description: 'Les marchés financiers tradent chaque jours des centaines de milliards d’actifs. En analysant les chats de ses traders, notre solution prépare des trades pertinents en temps réel.'
	},
	{
		title: 'Atlas',
		highlight: '300k',
		picture: '',
		description: 'L’évolution de la législation autour de la formation professionnelle a poussé Atlas à se doter d’une plateforme d’examens en ligne automatisée ayant déjà certifié 300 000 apprenants.'
	},
	{
		title: 'Constructys',
		highlight: '180',
		picture: '',
		description: 'Pour préparer les JO 2024, il faut augmenter massivement la masse salariale de la branche BTP. Pour se faire Constructys nous fait mettre en place une solution de reconversion de métier à 180 métiers cibles.'
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

</script>


<template>
	<div class="">
		<nav class="w-full fixed z-30">
			<nu-top-bar>
				<nu-logo :symbol="true" :text="true" :width="162" :colors="['cinnabar', 'alabaster', 'alabaster']" />
			</nu-top-bar>
		</nav>
		<div class="relative">
			<nu-splash class="bg-chinese-black">
				<div class="text-center nu-stroke-title font-black uppercase">
					Un studio de développement sur-mesure à votre service.
				</div>
			</nu-splash>
			<div class="absolute text-alabaster bottom-4 w-full columns-1 text-center">
				<nu-arrow />
			</div>
		</div>
		<div class="wrapper">
			<nu-hero-section
				title="Comprendre le métier et le valoriser avec la tech."
				cta="valorisons le votre"
				>
				<template #caption>
					<div class="w-2/3 text-sm">
						Un studio de <b class="font-black">développement sur-mesure</b> à votre service.
					</div>
				</template>
				<template #text>
					Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment  pertinentes.
				</template>
			</nu-hero-section>

			<div class="bg-chinese-black text-alabaster">
				<nu-title class="py-16">Ils ont crée<br/>de la valeur.</nu-title>
				<div class="flex flex-col gap-6">
					<nu-project-preview v-for="(p, i) in projects.slice(0, 4)" :line-break="i != 1" :title="p.title" :highlight="p.highlight" :picture="p.picture" :description="p.description"></nu-project-preview>
				</div>
				<div class="uppercase my-8 flex items-center gap-4 font-normal justify-center">Découvrez nos autres projets<nu-arrow :right="true" /></div>
			</div>

			<nu-section-break>
				<nu-title>Apprenez-nous votre métier</nu-title>
				<nu-button>Créons de la valeur</nu-button>
			</nu-section-break>

			<div class="py-20 bg-chinese-black text-alabaster">
				<div class="h-full flex flex-col justify-between py-20 gap-16">
					<nu-title>Si vous en avez besoin, on peut sûrement vous le fabriquer.</nu-title>
					<nu-swipper />
				</div>
				<div class="w-full flex flex-col gap-12 pb-32">
					<hr />
					<nu-title class="py-10">Lorem ipsum dolor</nu-title>
					<div v-for="service in services" class="flex flex-col">
						<hr />
						<div>{{service}}</div>
					</div>
				</div>
			</div>

			<nu-section-break variant="light">
				<span class="">Commençons à discuter.</span>
				<nu-button class="border-cinnabar text-cinnabar">Par chat</nu-button>
			</nu-section-break>
		</div>
		<nu-footer />
	</div>
</template>

<style>
.nu-stroke-title {
	-webkit-text-stroke: 2px #edebe8;
	text-stroke: 2px #edebe8;
	font-size: 40px;
	line-height: 50px;
}

.wrapper > * {
	padding: 24px;
}
</style>
