<script lang="ts" setup>

const results = [
	"Déploiement de solutions SaaS personnalisées pour divers secteurs",
	"Intégration fluide avec les systèmes existants",
	"Support international avec conformité aux régulations locales",
	"Amélioration des performances grâce à une architecture cloud évolutive",
	"Sécurisation des données avec des mesures de sécurité de premier ordre"
]

const keywords = [
	'Solutions SaaS personnalisées',
	'Architecture cloud évolutive',
	'Intégration avec systèmes existants',
	'Sécurisation des données',
	'Conformité internationale',
	'Support 24/7',
	'Optimisation des performances'
]

const testimonials = [
	{
		name: "Lucien Morel",
		role: "Directeur Technique, Entreprise X",
		feedback: "Grâce à Rigular, nous avons pu déployer une solution SaaS évolutive, qui s'intègre parfaitement à notre infrastructure existante tout en respectant les régulations locales."
	},
	{
		name: "Isabelle Petit",
		role: "Responsable IT, Multinationale Y",
		feedback: "L'équipe de Rigular a su développer une solution cloud sur-mesure, augmentant considérablement notre efficacité et assurant une sécurité optimale pour nos données."
	}
]
</script>

<template>
	<div class="h-full bg-alabaster">
		<!-- Section Introduction -->
		<section
			class="pt-32 pb-32 bg-chinese-black text-alabaster text-stroke-alabaster flex flex-col @md:gap-20 gap-12 relative">
			<nu-striped-word word="rigular" />
			<div class="container px-layout flex gap-16 overflow-visible">
				<div class="flex-shrink w-[680px] gap-16 flex flex-col justify-between">
					<h1>
						<nu-typography type="title" class="text-alabaster font-normal">
							Solutions SaaS sur mesure pour une transformation digitale réussie
						</nu-typography>
					</h1>
					<nu-lined-list :entries="keywords" class="!gap-10" />
					<div class="w-full flex justify-start">
						<nu-link target="_blank" to="https://rigular.com/" label="Découvrez le site Rigular">
							<nu-button color="alabaster">
								Découvrir le site
							</nu-button>
						</nu-link>
					</div>
				</div>
				<div class="flex-1 overflow-visible relative hidden @sm:block">
					<div class="absolute w-[1200px] h-full">
						<div
							:class="`w-full h-full bg-cover bg-right bg-[url('~/assets/illustrations/prjct_rigular/header.webp')]`" />
					</div>
				</div>
			</div>
		</section>

		<!-- Section Objectifs -->
		<section class="container px-layout py-20 flex flex-col gap-12 @md:py-40 justify-center">
			<h2 data-aos="slide-up">
				<nu-typography type="title">Fournir des solutions SaaS personnalisées et sécurisées</nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-12 h-full items-center">
				<div class="flex flex-col @lg:flex-row gap-12 flex-1">
					<p class="@lg:w-1/2">
						Rigular propose des solutions SaaS sur mesure, conçues pour répondre aux besoins spécifiques de chaque
						client. Grâce à une architecture cloud évolutive, nos solutions s’intègrent facilement aux systèmes
						existants, garantissant une fluidité opérationnelle.
					</p>
					<p class="@lg:w-1/2">
						Nos solutions incluent des mesures de sécurité de premier ordre, assurant la protection des données et le
						respect des régulations locales et internationales. Avec un support disponible 24/7, Rigular accompagne les
						entreprises dans leur transformation digitale.
					</p>
				</div>
				<div class="w-full h-[400px] @2xl:w-[500px] bg-cinnabar">
					<div
						:class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_rigular/energy.webp')] mix-blend-multiply`" />
				</div>
			</div>
		</section>
		<section class="container py-20 px-layout bg-light-gray">
			<div class="flex flex-col gap-12">
				<h2 data-aos="slide-up">
					<nu-typography type="title">Une expertise multi-domaine au service de l'innovation</nu-typography>
				</h2>
				<div class="flex flex-col @lg:flex-row gap-12">
					<p class="@lg:w-1/2 leading-7">
						Rigular se distingue par son expertise multi-domaine, opérant avec succès dans plusieurs secteurs clés tels
						que les marchés financiers, le transport et la logistique ou encore l'énergie. Cette diversité permet à Rigular d’apporter des
						solutions sur mesure adaptées aux besoins spécifiques de chaque industrie, tout en exploitant les meilleures
						pratiques et technologies issues de secteurs variés.
					</p>
					<p class="@lg:w-1/2 leading-7">
						Qu'il s'agisse de gérer des flux financiers complexes, d'optimiser la logistique dans le secteur du
						transport, ou de garantir une gestion efficace des infrastructures énergétiques, Rigular met à profit son
						expertise pour relever les défis de chaque domaine avec des solutions technologiques robustes et évolutives.
					</p>
				</div>

				<div class="flex flex-col @lg:flex-row gap-12">
					<ul class="pl-4 list-disc @lg:w-1/2">
						<li>Solutions technologiques pour le secteur financier : gestion des flux, automatisation des processus,
							conformité réglementaire</li>
						<li>Optimisation des chaînes logistiques et gestion des transports : suivi en temps réel, efficacité
							opérationnelle</li>
						<li>Gestion des infrastructures énergétiques : optimisation de l'approvisionnement et réduction des coûts
							énergétiques</li>
						<li>Intégration de systèmes évolutifs et sécurisés pour répondre aux besoins de chaque domaine</li>
					</ul>
					<div class="@lg:w-1/2">
						<p class="leading-7">
							La capacité de Rigular à travailler dans différents secteurs repose sur une approche adaptable et
							flexible, permettant de personnaliser chaque solution en fonction des besoins uniques de chaque industrie.
							Cette expertise multi-domaine renforce la position de Rigular en tant que partenaire technologique de
							confiance pour les entreprises cherchant à innover dans un monde en constante évolution.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Section Fonctionnalités -->
		<section class="container py-8 px-layout">
			<h2 data-aos="slide-up">
				<nu-typography type="title" class="py-6">Intégration fluide et sécurité des données</nu-typography>
			</h2>
			<div class="py-10 flex flex-col @lg:flex-row gap-12 leading-7">
				<p class="@lg:w-1/2">
					Rigular s'assure que chaque solution SaaS déployée s'intègre parfaitement avec les systèmes existants de ses
					clients. Notre architecture cloud garantit des performances optimales et une évolutivité pour répondre aux
					besoins futurs. Nos solutions sont également conformes aux plus hautes normes de sécurité, avec un cryptage de
					bout en bout et des audits de sécurité réguliers.
				</p>
				<div class="@lg:w-1/2">
					<ul class="pl-4 list-disc">
						<li>Intégration fluide avec les systèmes existants</li>
						<li>Architecture cloud évolutive et performante</li>
						<li>Conformité avec les régulations locales et internationales</li>
						<li>Sécurité des données assurée par des mesures de pointe</li>
						<li>Support technique disponible 24/7</li>
					</ul>
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
					<nu-typography type="title">Prêt à déployer une solution sur-mesure ?</nu-typography>
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
