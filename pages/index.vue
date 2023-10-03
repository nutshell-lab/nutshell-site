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
		<div class="relative">
			<nu-splash class="bg-chinese-black" />
				<div class="absolute text-alabaster bottom-4 w-full columns-1 text-center">
					<nu-caption class="mx-auto py-4">
						Un studio de <b class="font-bold">développement sur-mesure</b> à votre service.
					</nu-caption>
					<img src="arrow.svg" class="mx-auto animate-bounce"/>
				</div>
		</div>
		<div class="mx-4">
			<nu-hero-section
				title="Comprendre le métier et le valoriser avec la tech."
				cta="valorisons le votre"
				>
				<template #caption>
					Un studio de <b class="font-bold">développement sur-mesure</b> à votre service.
				</template>
				<template #text>
					Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment  pertinentes.
				</template>
			</nu-hero-section>

			<nu-section-break>Ils ont crée de la valeur.</nu-section-break>

			<nu-project-preview v-for="(p, i) in projects.slice(0, 2)" :line-break="i != 1" :title="p.title" :highlight="p.highlight" :picture="p.picture" :description="p.description"></nu-project-preview>

			<nu-section-break>
			<div class="flex flex-col gap-28">
				<span class="">Apprenez-nous votre métier</span>
				<nu-button>Créons de la valeur</nu-button>
			</div>
			</nu-section-break>

			<nu-project-preview v-for="(p, i) in projects.slice(2, 4)" :line-break="i != 1" :title="p.title" :highlight="p.highlight" :picture="p.picture" :description="p.description"></nu-project-preview>

			<nu-section-break>
			<div class="flex flex-col gap-28">
				<span class="">Découvez nos autres projets.</span>
				<nu-button>On adore en parler</nu-button>
			</div>
			</nu-section-break>

			<div class="py-20">
				<div class="h-full flex flex-col justify-between py-20">
					<nu-title class="px-10 pb-40">Si vous en avez besoin, on peut sûrement vous le fabriquer.</nu-title>
					<div class="bg-onyx w-full h-80" />
				</div>
				<div class="w-full flex flex-col gap-12">
					<div v-for="service in services" class="flex flex-col">
						<hr />
						<div>{{service}}</div>
					</div>
				</div>
			</div>

		</div>
		<nu-section-break class="bg-chinese-black text-alabaster" :breaks="['top']">
			<div class="flex flex-col gap-28">
				<span class="">Commençons à discuter.</span>
				<nu-button>Par chat</nu-button>
			</div>
		</nu-section-break>
		<nu-footer />
	</div>
</template>
