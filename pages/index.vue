<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

const projects = [
	{
		title: "Actinuum",
		highlight: "+2M€",
		picture: "_nuxt/assets/illustrations/prjct_actinuum.png",
		description:
			"Automatiser l’administratif de la formation professionnelle et le processus de formation spécifique aux innovations pédagogique d’Actinuum a permis de tripler leur chiffre d’affaire.",
		link: "#",
		slug: "actinuum",
	},
	{
		title: "Brokers",
		highlight: "131Md€",
		picture: "_nuxt/assets/illustrations/prjct_broker.png",
		description:
			"Les marchés financiers tradent chaque jours des centaines de milliards d’actifs. En analysant les chats de ses traders, notre solution prépare des trades pertinents en temps réel.",
		link: "#",
		slug: "brokers",
	},
	{
		title: "Atlas",
		highlight: "300k",
		picture: "_nuxt/assets/illustrations/prjct_atlas.png",
		description:
			"L’évolution de la législation autour de la formation professionnelle a poussé Atlas à se doter d’une plateforme d’examens en ligne automatisée ayant déjà certifié 300 000 apprenants.",
		link: "#",
		slug: "atlas",
	},
	{
		title: "Constructys",
		highlight: "180",
		picture: "_nuxt/assets/illustrations/prjct_constructys.png",
		description:
			"Pour préparer les JO 2024, il faut augmenter massivement la masse salariale de la branche BTP. Pour se faire Constructys nous fait mettre en place une solution de reconversion de métier à 180 métiers cibles.",
		link: "#",
		slug: "constructys",
	},
]

const use_cases = [
	{
		title: "Un ERP sur-mesure est-il iunchoix judicieux pour votre entreprise ?",
		subtitle: "ERP",
		picture: "_nuxt/assets/illustrations/use_case_erp.png",
		id: "use case 001",
	},
	{
		title: "Un CRM personnalisé vous permet de proposer la meilleure expérience à vos clients.",
		subtitle: "CRM",
		picture: "_nuxt/assets/illustrations/use_case_crm.png",
		id: "use case 002",
	},
	{
		title: "Tracker le progrès avec des sondes pensées pour votre métier.",
		subtitle: "ANALYTICS",
		picture: "_nuxt/assets/illustrations/use_case_analytics.png",
		id: "use case 003",
	},
	{
		title: "Introduction au marché du projet informatique.",
		subtitle: "STRATÉGIE",
		picture: "_nuxt/assets/illustrations/use_case_strategy.png",
		id: "use case 004",
	},
]

const services = [
	"Produits et SasS",
	"Dévelopement",
	"Design et ergonomie",
	"Data et Business Intelligence",
	"Innovation",
	"Branding et Strategy",
	"Analyse et Audit",
	"Analytics et SEO",
]

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller("md")
const isDesktop = !isMobile.value
</script>

<template>
	<div class="bg-alabaster font-inter">
		<nav class="w-full pointer-events-none fixed z-30">
			<nu-top-bar>
				<nu-logo symbol text :width="162" :colors="['cinnabar', 'alabaster', 'alabaster']" />
			</nu-top-bar>
		</nav>
		<div class="relative">
			<nu-splash class="bg-chinese-black">
				<nu-typography type="hero-title" class="text-center">
					Un studio de <br />développement<br /> sur-mesure à<br /> votre service
				</nu-typography>
			</nu-splash>
			<div class="absolute text-alabaster bottom-4 w-full columns-1 text-center">
				<nu-arrow class="animate-bounce" />
			</div>
		</div>
		<div class="wrapper flex flex-col">
			<div class="container md:pl-28 self-center ">
				<nu-hero-section title="Comprendre le métier et le valoriser avec la tech." cta="valorisons le votre">
					<template #caption>
						<nu-typography type="caption">
							Un studio de <b class="font-bold">développement <br v-if="isMobile" />sur-mesure</b> à votre service.
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
								Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment pertinentes.
							</nu-typography>
						</div>
					</template>
				</nu-hero-section>
			</div>

			<div class="px-6 bg-chinese-black text-alabaster flex flex-col">
				<div class="container lg:pl-28 self-center flex flex-col items-center md:items-end">
					<nu-typography type="title" class="py-16 self-start">Ils ont crée<br />de la valeur.</nu-typography>
					<div class="flex flex-col items-end md:pr-10">
						<div class="lg:pl-32 flex flex-col md:grid md:grid-cols-2 gap-6">
							<nu-link :aria-label="`Découvrez le projet ${p.title}`" :href="`/work/${p.slug}`"
								v-for="(p, i) in projects.slice(0, 4)">
								<nu-project-preview class="" :line-break="i != 1" :title="p.title" :highlight="p.highlight"
									:picture="p.picture" :description="p.description"></nu-project-preview>
							</nu-link>
						</div>
						<nu-link aria-label="Découvrez nos autres projets" href="#">
							<div class="my-8 flex items-center gap-4 justify-center">
								<nu-typography type="text-link" class="">Découvrez nos autres projets</nu-typography>
								<nu-arrow :right="true" />
							</div>
						</nu-link>
					</div>
				</div>
			</div>

			<nu-section-break class="container md:pl-28 px-6 self-center">
				<nu-typography type="title">Apprenez-nous <br class="md:hidden" />votre métier</nu-typography>
				<nu-button>Créons de la valeur</nu-button>
			</nu-section-break>

			<div class="py-20 bg-chinese-black text-alabaster flex flex-col">
				<div class="container md:pl-28 px-6 h-[700px] self-center flex flex-col justify-between py-20 gap-16">
					<nu-typography type="title" class="max-w-[776px]">Si vous en avez besoin, on peut sûrement vous le
						fabriquer.</nu-typography>
					<nu-swipper :items="use_cases" class="" />
				</div>
				<div class="container md:items-center px-6 self-center w-full flex flex-col gap-12 pb-32">
					<div class="flex flex-col gap-12 md:max-w-[364px]">
						<nu-typography type="title" class="py-10">Lorem ipsum dolor</nu-typography>
						<nu-lined-list :entries="services" />
					</div>
				</div>
			</div>

			<nu-section-break class="container md:pl-28 place-self-center" variant="light">
				<nu-typography type="hero-title-dark">Commençons <br class="md:hidden" />à discuter.</nu-typography>
				<nu-button class="border-cinnabar text-cinnabar">Par chat</nu-button>
			</nu-section-break>
		</div>

		<footer
			class="bg-chinese-black text-alabaster flex flex-col justify-center items-center px-8 py-12 md:bg-[url('assets/logo_nutshell_bottom_right_red_outline.svg')] bg-no-repeat bg-right-bottom">
			<div class="py-20 md:w-full max-w-5xl">
				<div class="flex flex-col md:grid md:grid-rows-4 md:grid-flow-col gap-6 items-center md:items-start">
					<nu-logo symbol class="row-span-4 pb-6" :width="56" />
					<div><nu-link href="#" aria-label="Découvrez tous nos projets">Projets</nu-link></div>
					<div><nu-link href="#" aria-label="Parcourez nos études de cas">Études de cas</nu-link></div>
					<div><nu-link href="#" aria-label="Accédez à nos ressources">Ressources</nu-link></div>
					<div><nu-link href="#" aria-label="Apprenez-en plus sur notre société">À propos</nu-link></div>
					<div><nu-link href="#" aria-label="Suivez-nous sur LinkedIn">LinkedIn</nu-link></div>
				</div>
			</div>
			<div class="text-xs text-onyx w-full columns-1 text-center">
				<nu-typography type="mention">© {{ new Date().getFullYear() }} Nutshell Lab </nu-typography>
				<span class="md:hidden"> - </span>
				<br class="hidden md:block" />
				<nu-typography type="mention">Tous droits réservés - <nu-link href="#"
						aria-label="Accédez aux mentions légales">Mentions légales</nu-link></nu-typography>
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

.wrapper>* {}
</style>
