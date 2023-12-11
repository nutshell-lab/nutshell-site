<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy';

import prjct_actinuum from '~/assets/illustrations/prjct_actinuum.webp'
import prjct_broker from '~/assets/illustrations/prjct_broker.webp'
import prjct_atlas from '~/assets/illustrations/prjct_atlas.webp'
import prjct_constructys from '~/assets/illustrations/prjct_constructys.webp'

import logo_nutshell from '~/assets/logo_nutshell.png'

useSeoMeta({
  title: 'Actinuum - Automatiser la formation professionnelle par Nutshell',
  ogTitle: 'Actinuum - Automatiser la formation professionnelle par Nutshell',
  description: 'Découvrez comment Nutshell a analysé les processus métier d\'un organisme de formation pour développer un logiciel type ERP sur mesure',
  ogDescription: 'Découvrez comment Nutshell a analysé les processus métier d\'un organisme de formation pour développer un logiciel type ERP sur mesure',
  ogImage: logo_nutshell,
})

const results = [
	"Chiffre d'affaire x3",
	"Absorption de 3x plus de volume de formation",
	"Suppression significative d'erreurs humaines",
	"Augmentation de la rapidité d'on-boarding collaborateur",
	"Satisfaction clients et apprenants",
	"Fidélisation des formateurs",
	"Légitimité auprès des acteurs publiques",
]

const other_projects = [
	{
		title: "Keyro",
		highlight: "10k",
        picture: `url('${prjct_actinuum}')`,
		description:
			"Keyro est l'émergence d'un produit SAAS pour fournir aux organismes de formation un logiciel ERP+LMS pour digitaliser leur sessions de formations. La plateforme accueille déjà plus de 10k apprenant tous les ans.",
		link: "#",
		slug: "keyro",
		disabled: true
	},
	{
		title: "Atlas",
		highlight: "1000+",
        picture: `url('${prjct_atlas}')`,
		description:
			"L’évolution de la législation autour de la formation professionnelle a poussé Atlas à se doter d’une plateforme d’examens en ligne automatisée ayant déjà certifié plus de 1000 apprenants.",
		link: "#",
		slug: "atlas",
		disabled: true
	},
	{
		title: "Constructys",
		highlight: "180",
        picture: `url('${prjct_constructys}')`,
		description:
			"Pour préparer les JO 2024, il faut augmenter massivement la masse salariale de la branche BTP. Pour se faire Constructys nous fait mettre en place une solution de reconversion de métier à 180 métiers cibles.",
		link: "#",
		slug: "constructys",
		disabled: true
	},
	{
		title: "Olecio",
		highlight: "500",
        picture: `url('${prjct_broker}')`,
		description:
			"La plateforme Olecio permet à chacun de découvrir le métier de ses rêve en parcourant des milliers de contenus gratuits. En fonction du profil des visiteurs, des métiers puis des formations leurs sont suggérés tout au long de leur expérience de navigation.",
		link: "#",
		slug: "olecio",
		disabled: true
	},
]
const project = {
	title: "Actinuum",
	highlight: "+2M€",
	description:
		"Automatiser l’administratif de la formation professionnelle et le processus de formation spécifique aux innovations pédagogique d’Actinuum a permis de tripler leur chiffre d’affaire.",
	link: "#",
	short_description: "Automatiser l'administratif de la formation professionnelle",
	slug: "actinuum",
	external_url: "https://actinuum.com/",
}

const keywords = [
	'Logiciel ERP',
	'Qualopi',
	'Digitalisation',
	'Plateforme',
	'Analyse d\'assiduité',
	'CRM',
	'BPF automatique',
	'Visioconférences',
	'LMS intégré',
	'Sur-mesure',
]
</script>

<template>
	<div class="h-full bg-alabaster">
		<div class="pt-32 pb-32 bg-chinese-black text-alabaster flex flex-col @md:gap-20 gap-12 relative">
			<ClientOnly>
				<template #fallback>
        <!-- this will be rendered on server side -->
        <div class="flex gap-14 relative left-[-267px]">
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
					</div>
      </template>
				<Parallaxy :speed="300" axis="x">
					<div class="flex gap-14">
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
					</div>
				</Parallaxy>
			</ClientOnly>
			<div class="container px-layout flex gap-16 overflow-visible">
				<div class="flex-shrink w-[680px] gap-16 flex flex-col justify-between">
					<h1>
						<nu-typography type="title" class="text-alabaster font-normal">
							{{ project.short_description }}
						</nu-typography>
					</h1>
					<nu-lined-list :entries="keywords" class="!gap-10" />
					<div class="w-full flex justify-start">
						<nu-link target="_blank" :to="project.external_url" label="Découvrez le site Actinnuum">
							<nu-button color="alabaster">
								Découvrir le site
							</nu-button>
						</nu-link>
					</div>
				</div>
				<div class="flex-1 overflow-visible relative hidden @sm:block">
					<div class="absolute w-[1200px] h-full bg-cinnabar">
						<div :class="`w-full h-full bg-cover bg-right bg-[url('~/assets/illustrations/prjct_actinuum/header.webp')] mix-blend-multiply`" />
					</div>
				</div>
			</div>
		</div>
		<div class="container px-layout py-20 flex flex-col gap-12 @md:py-40 justify-center">
			<h2 data-aos="slide-up">
				<nu-typography type="title">Parce qu'Excel ne scale pas.</nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-12 h-full items-center">
				<div class="flex flex-col @lg:flex-row gap-12 flex-1">
					<p class="@lg:w-1/2">
						À ces débuts, l'organisme de formation Actinuum, comme beaucoup d'entreprise par ailleurs, utilise Excel
						comme outil principal pour planifier et suivre son activité.
						Planing des formations, entreprises clients, compétences et disponibilité des formateurs, suivi des envois
						administratifs, pilotage de l'activité et décompte des indicateurs pour le bilan pédagogique et financier.
					</p>
					<p class="@lg:w-1/2">
						Autant d'éléments où les erreurs humaines viennent se glisser exponentiellement avec la croissance du volume
						de formation. Actinuum, portée par ses dirigeant ambitieux détermine alors que faire développer son propre ERP
						sera rentabilisé en quelques années tout en augmentant significativement leur capacité à absorber du volume de
						sessions de formations.
					</p>
				</div>
				<div class="w-full h-[300px] @2xl:w-[500px]">
					<div :class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_actinuum/board.webp')]`" />
				</div>
			</div>

		</div>
		<div class="container py-8 px-layout">
			<h2 data-aos="slide-up">
				<nu-typography type="title" class="py-6">Un centre de contrôle de la formation</nu-typography>
			</h2>
			<div class="py-10 flex flex-col @lg:flex-row gap-12 leading-7">
				<p class="@lg:w-1/2">
					Pour permettre à Actinuum <strong>d'avoir la main mise sur son outil opérationnel</strong>, Nutshell a mis
					en place un centre
					de contrôle permettant de <strong>gérer l'ensemble de l'activité de formation.</strong>
					Véritable ERP de la formation, la solution précise le programme de chaque formation, leurs modalités
					pédagogiques, les dates des sessions, le choix des intervenants internes ou externes. Il fournit les
					renseignements nécessaires aux futurs participants et leur indique les moyens de financement possibles.
					C'est ainsi qu'Actinuum peut <strong>gérer l'ensemble de son catalogue</strong> de formations, de
					formateurs, de
					clients et de participants.

				</p>
				<div class="@lg:w-1/2">
					<ul class="pl-4 list-disc">
						<li>Durant le cycle de vie de la session de formation, plusieurs déclencheurs ont été paramétrés pour
							l’envoi
							des convocations, des conventions, etc. Cette automatisation permet de se passer de l’action
							humaine.
						</li>
						<li> L’ERP prend en charge l’automatisation complète des formalités administratives : génération de
							documents PDF et leur envoi par e-mail.</li>
						<li> Un centre d’actions à réaliser permet aux administrateurs de ne rien oublier. Il s’agit d’une
							véritable todo-list qui évite les erreurs.</li>
					</ul>
				</div>
			</div>
		</div>
		<div :class="`container w-full h-[400px] lg:my-20 my-12 overflow-hidden`">
			<ClientOnly>
				<Parallaxy :speed="100" axis="y">
					<div class="w-screen h-[700px] bg-onyx bg-center bg-cover bg-[url('~/assets/illustrations/prjct_actinuum/group.webp')]" />
				</Parallaxy>
			</ClientOnly>
		</div>
		<div class="container px-layout py-12 lg:pb-32 mb-20">
			<div class="flex flex-col justify-center gap-12">
				<h2 data-aos="slide-up">
					<nu-typography type="title">Un espace d'apprentissage en ligne</nu-typography>
				</h2>
				<div class="flex flex-col @xl:flex-row items-center justify-center gap-12 leading-7">
					<div class="@xl:w-1/2 flex flex-col gap-6">
						<p>
							Afin d'engager un <strong>maximum de qualité</strong> tout au long du processus de formation, nous avons
							conçu pour Actinuum
							un LMS (Learning Management System) integré avec son ERP qui permet aux participants et au formateurs de
							disposer d'un <strong>support</strong> pour toute la durée de la formation, qu'elle soit en présentielle ou
							bien à distance.
						</p>
						<p>
							Permettant de collecter du même coup un ensemble de <strong>données propres à la session</strong> de
							formation, le LMS traque <strong>l'assiduité des utilisateurs</strong> et la qualité de la prestation
							effectuée par le formateur. L'humain est au coeur de cette collecte d'information grâce à des entretiens
							réguliers entre formateur et apprenant, des <strong>questionnaires de satisfaction</strong> et des groupes
							de discussion dans un chat intégré.
						</p>
					</div>
					<div class="@xl:w-1/2">
						<ul class="pl-4 list-disc">
							<li>Comprend 16 modalités d’apprentissages différentes : micro-learning, certification, exercices en ligne,
								évaluation ou autre module SCORM.</li>
							<li>Un espace de formation ergonomique pour suivre les cours de manière simple et intuitive</li>
							<li>Le formateur a accès à un espace de suivi. Il apprend qui a participé à la formation, a été assidu et a
								obtenu sa certification</li>
							<li>Une solution accessible depuis une application web. Les apprenants peuvent s’y connecter depuis
								n’importe où via leur navigateur à tout moment.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-chinese-black text-alabaster py-32 mt-12">
			<div class="container px-layout flex flex-col @xl:flex-row gap-28 justify-between mb-32">
				<div class="flex flex-col gap-12">
					<h2 data-aos="slide-up">
						<nu-typography type="title">Résultats constatés</nu-typography>
					</h2>
					<div>
						<nu-lined-list :entries="results" class="gap-12" />
					</div>
				</div>
				<div class="flex-1 flex flex-col gap-12">
					<nu-typography type="title">Prêt à monter en puissance?</nu-typography>
					<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
						<nu-button color="alabaster">
							Commençons à parler
						</nu-button>
					</nu-link>
				</div>
			</div>
			<ClientOnly>
				<Parallaxy :speed="300" axis="x">
					<div class="flex gap-14">
						<nu-typography type="hero-title" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled" >{{ project.title }}</nu-typography>
						<nu-typography type="hero-title">{{ project.title }}</nu-typography>
						<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
					</div>
				</Parallaxy>
			</ClientOnly>
		</div>
		<div class="px-layout container lg:py-40 py-20 flex flex-col gap-12">
			<h2 data-aos="slide-up">
				<nu-typography type="title">La recette pour digitaliser votre organisme de formation</nu-typography>
			</h2>
			<div class="flex flex-col @lg:flex-row gap-12 items-center leading-7">
				<div class="w-full h-[250px] @2xl:w-[500px]">
					<div :class="`w-full bg-cover h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_actinuum/notes.webp')]`" />
				</div>
				<ul class="pl-4 list-disc">
					<li>Auditer et revisiter l'ensemble de vos processus avec la méthodologie LEAN</li>
					<li>Identifier les freins et les goulots d'étranglement de votre activité de formation</li>
					<li>Déterminer la data critique et les moyens pour l'obtenir (sourcing clients, sourcing formateurs)</li>
					<li>Automatiser les tâches répétitives et à faible valeur ajoutée</li>
					<li>Tracker les indicateurs clés de votre activité</li>
				</ul>
			</div>
		</div>
		<div class="bg-chinese-black text-alabaster">
			<div class="px-layout container flex flex-col gap-12 py-20 leading-7">
				<h2 data-aos="slide-up">
					<nu-typography type="title">10 ans d'expérience<br />dans la formation
						professionelle</nu-typography>
				</h2>
				<p>
					Avec près d'une vingtaine de projets pour différents acteur de la formation professionnel : des organismes de
					formations, aux organes publiques en passant par les EdStartup, les équipes de Nutshell disposent d'un solide
					arsenal pour concevoir des solutions sur-mesures pour le secteur.
				</p>
				<div class="flex flex-col items-end gap-8">
					<div class="@lg:pl-32 flex flex-col @lg:grid @lg:grid-cols-2 gap-6">
						<nu-link :label="`Découvrez le projet ${p.title}`" :to="`/work/${p.slug}`" :disabled="p.disabled"
							v-for="(p, i) in other_projects.slice(0, 4)">
							<nu-project-preview :class="{ '@lg:mt-8': i === 0, '@lg:-mt-8': i === 3 }" :line-break="i != 1" :title="p.title" :highlight="p.highlight"
								:picture="p.picture" :description="p.description" :disabled="p.disabled" data-aos="slide-up"></nu-project-preview>
						</nu-link>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-hidden relative">
			<nu-section-break class="container px-layout place-self-center" variant="light">
				<nu-typography type="hero-title-dark">Commençons <br />à discuter.</nu-typography>
				<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
					<nu-button>Par email</nu-button>
				</nu-link>
				<nu-watermark class="hidden @2xl:block"/>
			</nu-section-break>
		</div>
	</div>
</template>

