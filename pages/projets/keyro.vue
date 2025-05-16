<script lang="ts" setup>

const results = [
	"Automatisation de 90% du processus de gestion des formations",
	"Optimisation de la gestion des parties prenantes",
	"Amélioration de la gestion des sources de financement",
	"Génération automatique de documents PDF",
	"Prise en charge de la visioconférence et 12 autres modalités d’apprentissage",
	"Gestion simplifiée des factures et déclarations",
	"Efficacité accrue dans la gestion des sessions"
]

const keywords = [
	'ERP',
	'LMS intégré',
	'Formation professionnelle',
	'Gestion des sources de financement',
	'Automatisation de documents',
	'Emargement électronique',
	'Visioconférence',
	'Gestion des parties prenantes',
	'Déclaration obligatoire',
	'Gestion des sessions'
]

const testimonials = [
	{
		name: "Alice Dupont",
		role: "Responsable Formation, Entreprise X",
		feedback: "Keyro a révolutionné notre gestion des formations, réduisant les tâches manuelles à 10% et augmentant notre productivité de 200%."
	},
	{
		name: "Marc Lefebvre",
		role: "Directeur Pédagogique, Institut Y",
		feedback: "Grâce à l'automatisation des processus administratifs, nous avons économisé des centaines d'heures tout en améliorant l'expérience des apprenants."
	}
]
</script>

<template>
	<div class="h-full bg-alabaster">
		<!-- Section Introduction -->
		<section
			class="pt-32 pb-32 bg-chinese-black text-alabaster text-stroke-alabaster flex flex-col @md:gap-20 gap-12 relative">
			<nu-striped-word word="keyro" />
			<div class="container px-layout flex gap-16 overflow-visible">
				<div class="flex-shrink w-[680px] gap-16 flex flex-col justify-between">
					<h1>
						<nu-typography type="title" class="text-alabaster font-normal">
							Une plateforme tout-en-un pour la gestion des formations professionnelles
						</nu-typography>
					</h1>
					<nu-lined-list :entries="keywords" class="!gap-10" />
					<div class="w-full flex justify-start">
						<nu-link target="_blank" to="https://keyro.fr/" label="Découvrez le site Keyro">
							<nu-button color="alabaster">
								Découvrir le site
							</nu-button>
						</nu-link>
					</div>
				</div>
				<div class="flex-1 overflow-visible relative hidden @sm:block">
					<div class="absolute w-[1200px] h-full bg-cinnabar">
						<div
							:class="`w-full h-full bg-cover bg-right bg-[url('/illustrations/prjct_keyro/header.webp')] mix-blend-multiply`" />
					</div>
				</div>
			</div>
		</section>

		<!-- Section Objectifs -->
		<section class="container px-layout py-20 flex flex-col gap-12 @md:py-40 justify-center">
			<h2 data-aos="slide-up">
				<nu-typography type="title">Optimiser la gestion des formations professionnelles</nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-12 h-full items-center">
				<div class="flex flex-col @lg:flex-row gap-12 flex-1">
					<p class="@lg:w-1/2">
						Keyro permet aux administrateurs de gérer efficacement un large éventail de sessions de formation. Cette
						plateforme améliore la gestion des parties prenantes et des sources de financement, avec des modèles qui
						accélèrent la création de sessions.
					</p>
					<p class="@lg:w-1/2">
						En plus de la gestion administrative, Keyro intègre un LMS qui suit l'assiduité des participants, tout en
						leur offrant une expérience de formation ergonomique, qu'il s'agisse de sessions en présentiel ou en
						visioconférence.
					</p>
				</div>
				<div class="w-full h-[300px] @2xl:w-[500px]">
					<div
						:class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('/illustrations/prjct_keyro/dashboard.webp')]`" />
				</div>
			</div>
		</section>

		<!-- Section Fonctionnalités -->
		<section class="container py-8 px-layout">
			<h2 data-aos="slide-up">
				<nu-typography type="title" class="py-6">Automatisation intelligente des processus
					administratifs</nu-typography>
			</h2>
			<div class="py-10 flex flex-col @lg:flex-row gap-12 leading-7">
				<p class="@lg:w-1/2">
					Keyro gère automatiquement la génération de documents PDF, l'émargement électronique, et facilite la gestion
					des factures ainsi que la déclaration obligatoire du bilan pédagogique et financier.
				</p>
				<div class="@lg:w-1/2">
					<ul class="pl-4 list-disc">
						<li>Création rapide de sessions de formation via des modèles</li>
						<li>Gestion des parties prenantes : clients, stagiaires, formateurs</li>
						<li>Suivi des sources de financement (CPF, OPCO)</li>
						<li>Prise en charge de la visioconférence et autres modalités</li>
					</ul>
				</div>
			</div>

			<div class="w-full h-[300px]">
				<div
					:class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('/illustrations/prjct_keyro/responsive.webp')]`" />
			</div>

		</section>

		<section class="container py-20 px-layout bg-light-gray">
			<div class="flex flex-col gap-12">
				<h2 data-aos="slide-up">
					<nu-typography type="title">Génération automatique de documents à partir de modèles Word
						modifiables</nu-typography>
				</h2>
				<div class="flex flex-col @lg:flex-row gap-12">
					<p class="leading-7">
						Avec les solutions Nutshell, la création de documents administratifs devient simple et rapide. Keyro peut
						générer
						automatiquement des documents comme des contrats, des devis, ou des certificats à partir de modèles
						compatibles Word. Ces modèles sont modifiables facilement par des administrateurs non développeurs, sans
						avoir besoin de compétences techniques.
					</p>
				</div>

				<div class="flex flex-col @lg:flex-row gap-12">
					<ul class="pl-4 list-disc @lg:w-1/2">
						<li>Compatible avec Microsoft Word et d'autres éditeurs de texte</li>
						<li>Variables contextuelles intégrées automatiquement (ex: nom, date, informations spécifiques)</li>
						<li>Facilité de modification par un administrateur non développeur</li>
						<li>Gain de temps significatif avec la génération automatique des documents</li>
					</ul>
					<div class="@lg:w-1/2">
						<p class="leading-7">
							Les utilisateurs peuvent ainsi configurer leurs propres modèles pour répondre à des besoins spécifiques,
							tout en profitant de l'automatisation des tâches répétitives. Cela permet une grande flexibilité dans la
							gestion documentaire, tout en réduisant les erreurs humaines.
						</p>
					</div>
				</div>

				<div class="flex justify-center mt-8">
					<nu-link label="Contactez-nous pour en savoir plus" to="?contact">
						<nu-button>
							Parlez à un expert
						</nu-button>
					</nu-link>
				</div>
			</div>
		</section>


		<!-- Section Résultats -->
		<section class="bg-chinese-black text-alabaster text-stroke-alabaster py-32 mt-12">
			<div class="container px-layout flex flex-col @xl:flex-row gap-28 justify-between mb-32">
				<div class="flex flex-col gap-12">
					<h2 data-aos="slide-up">
						<nu-typography type="title">Résultats constatés</nu-typography>
					</h2>
					<div>
						<nu-lined-list :entries="results" class="gap-12" />
					</div>
				</div>
				<div class="flex-shrink max-w-[300px] flex flex-col gap-12">
					<nu-typography type="title">Prêt à automatiser vos processus ?</nu-typography>
					<nu-link label="Ouvrir le formulaire de contact" to="?contact">
						<nu-button color="alabaster" class="mt-4">
							Commençons à parler
						</nu-button>
					</nu-link>
				</div>
			</div>
		</section>

		<!-- Section Graphiques de Performance -->
		<section class="container py-20 px-layout bg-light-gray">
			<div class="flex flex-col gap-12">
				<h2 data-aos="slide-up">
					<nu-typography type="title">Suivi de l'activité et génération automatique du Bilan Pédagogique et
						Financier</nu-typography>
				</h2>
				<div class="flex flex-col @lg:flex-row gap-12">
					<p class="@lg:w-1/2 leading-7">
						Le tableau de bord de Keyro offre une vue d'ensemble complète de toutes les activités de formation. Il
						permet de suivre en temps réel des indicateurs clés tels que le nombre de sessions organisées, le taux de
						participation, la satisfaction des apprenants, ainsi que les données financières associées aux formations.
					</p>
					<p class="@lg:w-1/2 leading-7">
						En plus de faciliter la gestion quotidienne, ce tableau de bord est conçu pour automatiser la génération du
						<strong>Bilan Pédagogique et Financier (BPF)</strong>. Toutes les données collectées au cours de l'année
						sont compilées et organisées automatiquement dans un format conforme aux exigences réglementaires, réduisant
						ainsi les erreurs et simplifiant les démarches administratives.
					</p>
				</div>

				<div class="flex flex-col @lg:flex-row gap-12">
					<ul class="pl-4 list-disc @lg:w-1/2">
						<li>Suivi des indicateurs en temps réel : nombre de sessions, taux de participation, satisfaction</li>
						<li>Compilation automatique des données financières</li>
						<li>Génération du BPF conforme aux normes réglementaires</li>
						<li>Réduction des erreurs humaines et gain de temps significatif</li>
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
						<DataQuery v-slot="{ data }" resource="projets" :where="(p) => ['actinuum', 'atlas', 'constructys', 'olecio'].includes(p.id)">
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

	</div>
</template>
