<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy';

import prjct_actinuum from '~/assets/illustrations/prjct_actinuum.webp'
import prjct_broker from '~/assets/illustrations/prjct_broker.webp'
import prjct_atlas from '~/assets/illustrations/prjct_atlas.webp'
import prjct_constructys from '~/assets/illustrations/prjct_constructys.webp'

import use_case_erp from '~/assets/illustrations/use_case_erp.webp'
import use_case_crm from '~/assets/illustrations/use_case_crm.webp'
import use_case_analytics from '~/assets/illustrations/use_case_analytics.webp'
import use_case_strategy from '~/assets/illustrations/use_case_strategy.webp'

import logo_nutshell from '~/assets/logo_nutshell.png'

const route = useRoute()
useSeoMeta({
  title: 'Nutshell - Agence digitale sur-mesure',
  ogTitle: 'Nutshell - Agence digitale sur-mesure',
  description: 'Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment pertinentes. ERP, CRM, logiciel Saas, si vous en avez besoin, on peut sûrement vous le fabriquer.',
  ogDescription: 'Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment pertinentes. ERP, CRM, logiciel Saas, si vous en avez besoin, on peut sûrement vous le fabriquer.',
  ogImage: logo_nutshell,
  ogUrl: 'https://nutshell-lab.com' + route.path,
  ogType: 'website'
})

const projects = [
    {
        title: "Actinuum",
        highlight: "+2M€",
        picture: `url('${prjct_actinuum}')`,
        description:
            "Automatiser l’administratif de la formation professionnelle et le processus de formation spécifique aux innovations pédagogique d’Actinuum a permis de tripler leur chiffre d’affaire.",
        slug: "actinuum",
    },
    {
        title: "Brokers",
        highlight: "131Md€",
        picture: `url('${prjct_broker}')`,
        description:
            "Les marchés financiers tradent chaque jours des centaines de milliards d’actifs. En analysant les chats de ses traders, notre solution prépare des trades pertinents en temps réel.",
        slug: "brokers",
		disabled: true,
    },
    {
        title: "Atlas",
        highlight: "1000+",
        picture: `url('${prjct_atlas}')`,
        description:
            "L’évolution de la législation autour de la formation professionnelle a poussé Atlas à se doter d’une plateforme d’examens en ligne automatisée ayant déjà certifié plus de 1000 apprenants.",
        slug: "atlas",
		disabled: true,
    },
    {
        title: "Constructys",
        highlight: "180",
        picture: `url('${prjct_constructys}')`,
        description:
            "Pour préparer les JO 2024, il faut augmenter massivement la masse salariale de la branche BTP. Pour se faire Constructys nous fait mettre en place une solution de reconversion de métier à 180 métiers cibles.",
        slug: "constructys",
		disabled: true,
    },
]

const use_cases = [
    {
        title: "Un ERP sur-mesure est-il un choix judicieux pour votre entreprise ?",
        subtitle: "ERP",
        picture: `url('${use_case_erp}')`,
        id: "use case 001",
		slug: "enterprise-resource-planning",
		disabled: true,
    },
    {
        title: "Un CRM personnalisé vous permet de proposer le meilleur à vos clients.",
        subtitle: "CRM",
        picture: `url('${use_case_crm}')`,
        id: "use case 002",
		slug: "crm",
		disabled: true,
    },
    {
        title: "Tracker le progrès avec des sondes pensées pour votre métier.",
        subtitle: "ANALYTICS",
        picture: `url('${use_case_analytics}')`,
        id: "use case 003",
		slug: "analytics",
		disabled: true,
    },
    {
        title: "Introduction au marché du projet informatique.",
        subtitle: "STRATÉGIE",
        picture: `url('${use_case_strategy}')`,
        id: "use case 004",
		slug: "strategy",
		disabled: true,
    },
]

const services = [
    "Produits et SasS",
    "Développement",
    "Design et ergonomie",
    "Data et Business Intelligence",
    "Innovation",
    "Branding et Strategy",
    "Analyse et Audit",
    "Analytics et SEO",
]

</script>

<template>
	<div class="bg-alabaster font-inter">
		<section id="agency" class="relative">
			<nu-splash class="bg-chinese-black">
				<h1 class="text-center">
					<nu-typography type="hero-title">
						Un studio de <br />développement<br /> sur-mesure à<br /> votre service
					</nu-typography>
				</h1>
			</nu-splash>
			<div class="absolute text-alabaster bottom-8 w-full columns-1 text-center">
				<nu-arrow class="animate-bounce" />
			</div>
		</section>
		<div class="flex flex-col">
			<section class="container px-layout">
				<nu-hero-section cta="valorisons le votre">
					<template #title>
						<h2 class="max-w-[700px]" data-aos="slide-up">
							<nu-typography type="title">
								Comprendre le métier et le valoriser avec la tech.
							</nu-typography>
						</h2>
					</template>
					<template #text>
						<div class="max-w-[486px]">
							<nu-typography>
								Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment pertinentes.
							</nu-typography>
						</div>
					</template>
				</nu-hero-section>
			</section>

			<section id="projects" class="bg-chinese-black text-alabaster">
				<div class="container px-layout py-16 flex flex-col gap-16">
					<h2 data-aos="slide-up">
						<nu-typography type="title" class="self-start">Ils ont créé<br />de la valeur.</nu-typography>
					</h2>
					<div class="flex flex-col items-end gap-8">
						<div class="flex flex-col @lg:grid @lg:grid-cols-2 gap-6">
							<nu-link :label="`Découvrez le projet ${p.title}`" :to="`/work/${p.slug}`" :disabled="p.disabled"
								v-for="(p, i) in projects.slice(0, 4)">
								<nu-project-preview :class="{ '@lg:mt-8': i === 0, '@lg:-mt-8': i === 3 }" :line-break="i != 1" :title="p.title" :highlight="p.highlight"
									:picture="p.picture" :description="p.description" :disabled="p.disabled" data-aos="slide-up"></nu-project-preview>
							</nu-link>
						</div>
						<!-- <nu-link label="Découvrez nos autres projets" to="#"> -->
							<div class="flex items-center gap-4 justify-center">
								<nu-typography type="text-link" class="">Découvrez (Bientôt) nos autres projets</nu-typography>
								<nu-arrow :right="true" />
							</div>
						<!-- </nu-link> -->
					</div>
				</div>
			</section>

			<section>
				<nu-section-break class="container px-layout self-center overflow-hidden relative">
					<h2 data-aos="slide-up">
						<nu-typography type="title">Apprenez-nous <br />votre métier</nu-typography>
					</h2>
					<nu-link label="Envoyez-nous un mail" to="mailto:hello@nutshell-lab.com">
						<nu-button class="mt-4">Créons de la valeur</nu-button>
					</nu-link>
				</nu-section-break>
			</section>

			<section id="cases" class="py-20 bg-chinese-black text-alabaster flex flex-col">
				<div class="container px-layout self-center flex flex-col justify-between pt-16 gap-16 relative">
					<h2 data-aos="slide-up">
						<nu-typography type="title" class="max-w-[776px]">Si vous en avez besoin, on peut sûrement vous le
						fabriquer.</nu-typography>
					</h2>
					<nu-swipper :items="use_cases" class="" />
					<div class="relative">
						<div class="absolute h-[1px] bg-alabaster w-screen left-0 bottom-0">
							<ClientOnly>
								<Parallaxy :speed="800" axis="x" direction="opposite">
									<div class="bg-cinnabar h-[1px] w-[30px] z-20 relative"/>
								</Parallaxy>
							</ClientOnly>
						</div>
					</div>
				</div>
				<div id="services" class="container px-layout w-full flex flex-col gap-12 py-20">
					<div class="flex flex-col gap-12">
						<div data-aos="slide-up">
							<nu-typography type="title" class="py-10">Nos services</nu-typography>
						</div>
						<nu-lined-list :entries="services" />
					</div>
				</div>
			</section>

			<section>
				<nu-section-break class="container px-layout place-self-center" variant="light">
					<nu-typography type="hero-title-dark">Commençons <br />à discuter.</nu-typography>
					<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
						<nu-button class="mt-4">Par email</nu-button>
					</nu-link>
				</nu-section-break>
			</section>
		</div>
	</div>
</template>
