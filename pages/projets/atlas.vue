<script lang="ts" setup>

const results = [
	"Automatisation complète des processus d'évaluation et de certification",
	"Réduction du temps nécessaire à la gestion des certifications",
	"Plateforme sécurisée et conforme aux normes",
	"Suivi en temps réel des résultats d’évaluation",
	"Système anti-triche avancé pour la surveillance des candidats"
]

const keywords = [
	'Certifications professionnelles',
	'Système d’évaluation en ligne',
	'Automatisation des processus',
	'Surveillance anti-triche',
	'Gestion des certifications',
	'Tableaux de bord et statistiques',
	'Sécurité et conformité'
]

const testimonials = [
	{
		name: "Julie Lemarchand",
		role: "Directrice des Certifications",
		feedback: "Atlas a simplifié notre gestion des certifications en ligne, tout en assurant une surveillance stricte et des résultats précis."
	},
	{
		name: "Pierre Moreau",
		role: "Responsable Qualité",
		feedback: "Grâce à Atlas, nous avons pu automatiser 100% de notre processus d’évaluation, ce qui a considérablement réduit les erreurs humaines."
	}
]
</script>

<template>
	<div class="h-full bg-alabaster">
		<!-- Section Introduction -->
		<section
			class="pt-32 pb-32 bg-chinese-black text-alabaster text-stroke-alabaster flex flex-col @md:gap-20 gap-12 relative">
			<nu-striped-word word="atlas" />
			<div class="container px-layout flex gap-16 overflow-visible">
				<div class="flex-shrink w-[680px] gap-16 flex flex-col justify-between">
					<h1>
						<nu-typography type="title" class="text-alabaster font-normal">
							Une plateforme sécurisée pour la gestion des certifications professionnelles
						</nu-typography>
					</h1>
					<nu-lined-list :entries="keywords" class="!gap-10" />
					<div class="w-full flex justify-start">
						<nu-link target="_blank" to="https://c-certif.fr/" label="Découvrez le site C-Certif">
							<nu-button color="alabaster">
								Découvrir le site
							</nu-button>
						</nu-link>
					</div>
				</div>
				<div class="flex-1 overflow-visible relative hidden @sm:block">
					<div class="absolute w-[1200px] h-full bg-cinnabar">
						<div
							:class="`w-full h-full bg-cover bg-right bg-[url('~/assets/illustrations/prjct_atlas/header.webp')] mix-blend-multiply`" />
					</div>
				</div>
			</div>
		</section>

		<!-- Section Objectifs -->
		<section class="container px-layout py-20 flex flex-col gap-12 @md:py-40 justify-center">
			<h2 data-aos="slide-up">
				<nu-typography type="title">Automatiser et sécuriser les évaluations professionnelles</nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-12 h-full items-center">
				<div class="flex flex-col @lg:flex-row gap-12 flex-1">
					<p class="@lg:w-1/2">
						C-Certif propose une solution en ligne complète pour l'évaluation des compétences et la certification. La
						plateforme permet de gérer l'intégralité du processus de certification, de l'inscription des candidats à la
						délivrance des certificats.
					</p>
					<p class="@lg:w-1/2">
						Le système d'évaluation est entièrement automatisé, avec des fonctionnalités avancées telles que la
						surveillance anti-triche, le suivi des résultats en temps réel et la génération automatique des certificats
						en cas de réussite.
					</p>
				</div>
				<div class="w-full h-[300px] @2xl:w-[500px] bg-cinnabar">
					<div
						:class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_atlas/exam.webp')] mix-blend-multiply`" />
				</div>
			</div>
		</section>

		<!-- Section Fonctionnalités -->
		<section class="container py-8 px-layout">
			<h2 data-aos="slide-up">
				<nu-typography type="title" class="py-6">Système avancé d’évaluation et de surveillance</nu-typography>
			</h2>
			<div class="py-10 flex flex-col @lg:flex-row gap-12 leading-7">
				<p class="@lg:w-1/2">
					La plateforme C-Certif développée pour Atlas est équipée d'un système anti-triche performant qui surveille le comportement des
					candidats durant les épreuves, alertant les modérateurs en cas de suspicion. Elle assure également une gestion
					fluide des évaluations avec des tableaux de bord personnalisés et une automatisation complète du processus.
				</p>
				<div class="@lg:w-1/2">
					<ul class="pl-4 list-disc">
						<li>Surveillance en temps réel des candidats</li>
						<li>Automatisation des évaluations et des certifications</li>
						<li>Gestion des certificats et suivi des résultats</li>
						<li>Tableaux de bord personnalisés pour un suivi précis</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="bg-gradient-to-b from-chinese-black from-80% to-alabaster to-80% text-alabaster">
			<div class="px-layout container flex flex-col gap-12 py-20 leading-7">
				<h2 data-aos="slide-up">
					<nu-typography type="title">10 ans d'expérience<br />dans la formation
						professionnelle</nu-typography>
				</h2>
				<p>
					Avec près d'une vingtaine de projets pour différents acteur de la formation professionnel : des organismes de
					formations, aux organes publiques en passant par les EdStartup, les équipes de Nutshell disposent d'un solide
					arsenal pour concevoir des solutions sur-mesures pour le secteur.
				</p>
				<div class="flex flex-col items-end gap-8">
					<div class="@lg:pl-32 flex flex-col @lg:grid @lg:grid-cols-2 gap-6">
						<DataQuery v-slot="{ data }" resource="projets" :where="(p) => ['actinuum', 'keyro', 'constructys', 'olecio'].includes(p.id)">
							<nu-link :label="`Découvrez le projet ${p.title}`" :to="p.path" :disabled="p.disabled"
								v-for="(p, i) in data">
								<nu-project-preview :class="{ '@lg:mt-8': i === 0, '@lg:-mt-8': i === 3 }" :title="p.title" :highlight="p.highlight"
									:picture="p.picture" :description="p.description" :disabled="p.disabled" data-aos="slide-up"></nu-project-preview>
							</nu-link>
						</DataQuery>
					</div>
					<nu-link label="Découvrez nos autres projets" to="/projets">
						<div class="flex text-cinnabar items-center gap-4 justify-center transition-all duration-300 hover:gap-6">
							<nu-typography type="cta-text" class="">Voir tous les projets</nu-typography>
							<nu-arrow right />
						</div>
					</nu-link>
				</div>
			</div>
		</section>


		<section class="container py-20 px-layout bg-light-gray">
			<div class="flex flex-col gap-12">
				<h2 data-aos="slide-up">
					<nu-typography type="title">Soumission automatique des dossiers de financement aux OPCO</nu-typography>
				</h2>
				<div class="flex flex-col @lg:flex-row gap-12">
					<p class="@lg:w-1/2 leading-7">
						Avec C-Certif, la gestion des dossiers de financement pour les formations est entièrement automatisée. Une fois
						qu'une formation est planifiée et validée, la plateforme génère automatiquement les dossiers de demande de
						financement auprès des OPCO (Opérateurs de Compétences) concernés.
					</p>
					<p class="@lg:w-1/2 leading-7">
						La soumission des dossiers est réalisée en temps réel, en fonction des critères définis pour chaque OPCO.
						Les documents requis, tels que les devis, programmes de formation, et informations sur les participants,
						sont intégrés automatiquement aux demandes, garantissant une conformité totale et accélérant le processus de
						financement.
					</p>
				</div>

				<div class="flex flex-col @lg:flex-row gap-12">
					<ul class="pl-4 list-disc @lg:w-1/2">
						<li>Génération automatique des documents requis pour les demandes OPCO</li>
						<li>Soumission en temps réel des dossiers aux OPCO concernés</li>
						<li>Suivi du statut des demandes de financement via le tableau de bord</li>
						<li>Conformité avec les critères spécifiques de chaque OPCO</li>
					</ul>
					<div class="@lg:w-1/2">
						<p class="leading-7">
							Grâce à cette fonctionnalité, les responsables de formation n'ont plus besoin de gérer manuellement les
							soumissions de dossiers. Tout est automatisé, depuis la création des documents jusqu'à l'envoi aux OPCO.
							Le tableau de bord C-Certif permet également de suivre en temps réel le statut des demandes, offrant une vue
							d'ensemble claire sur les financements en attente ou approuvés.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Section Résultats -->
		<section class="bg-chinese-black text-alabaster text-stroke-alabaster py-32 mt-12">
			<div class="container px-layout flex flex-col @xl:flex-row gap-28 justify-between mb-32">
				<div class="flex flex-col gap-12">
					<h2 data-aos="slide-up">
						<nu-typography type="title">Résultats obtenus</nu-typography>
					</h2>
					<div>
						<nu-lined-list :entries="results" class="gap-12" />
					</div>
				</div>
				<div class="flex-shrink max-w-[300px] flex flex-col gap-12">
					<nu-typography type="title">Prêt à sécuriser vos évaluations ?</nu-typography>
					<nu-link label="Ouvrir le formulaire de contact" to="?contact">
						<nu-button color="alabaster" class="mt-4">
							Commençons à parler
						</nu-button>
					</nu-link>
				</div>
			</div>
		</section>
	</div>
</template>
