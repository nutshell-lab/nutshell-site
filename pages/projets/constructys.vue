<script lang="ts" setup>

const results = [
	"Augmentation du nombre de travailleurs qualifiés pour les Jeux Olympiques 2024",
	"Facilitation des passerelles entre métiers du BTP",
	"Plateforme utilisée par des milliers de professionnels du BTP",
	"Automatisation du processus de mise en relation avec les formations pertinentes",
	"Évaluation des compétences des utilisateurs pour les orienter vers les métiers adéquats"
]

const keywords = [
	'Métiers du BTP',
	'Passerelles professionnelles',
	'Formation continue',
	'Jeux Olympiques 2024',
	'Orientation professionnelle',
	'Plateforme intuitive',
	'Évaluation des compétences'
]

const testimonials = [
	{
		name: "Jean-Pierre Lefèvre",
		role: "Responsable RH, Entreprise de BTP",
		feedback: "Constructys a considérablement simplifié notre recherche de travailleurs qualifiés pour les grands projets. La plateforme nous permet de recruter plus efficacement tout en facilitant la montée en compétences."
	},
	{
		name: "Marie Duchêne",
		role: "Maçonne qualifiée",
		feedback: "Grâce à Constructys, j'ai découvert une passerelle vers un nouveau métier, et maintenant, je me prépare pour les Jeux Olympiques 2024 avec les compétences requises."
	}
]
</script>

<template>
	<div class="h-full bg-alabaster">
		<!-- Section Introduction -->
		<section
			class="pt-32 pb-32 bg-chinese-black text-alabaster text-stroke-alabaster flex flex-col @md:gap-20 gap-12 relative">
			<nu-striped-word word="constructys" />
			<div class="container px-layout flex gap-16 overflow-visible">
				<div class="flex-shrink w-[680px] gap-16 flex flex-col justify-between">
					<h1>
						<nu-typography type="title" class="text-alabaster font-normal">
							Simplifiez l'accès aux métiers du BTP avec des passerelles professionnelles
						</nu-typography>
					</h1>
					<nu-lined-list :entries="keywords" class="!gap-10" />
					<div class="w-full flex justify-start">
						<nu-link target="_blank" to="https://constructys.fr/" label="Découvrez le site Constructys">
							<nu-button color="alabaster">
								Découvrir le site
							</nu-button>
						</nu-link>
					</div>
				</div>
				<div class="flex-1 overflow-visible relative hidden @sm:block">
					<div class="absolute w-[1200px] h-full bg-cinnabar">
						<div
							:class="`w-full h-full bg-cover bg-right bg-[url('/illustrations/prjct_constructys/header.webp')] mix-blend-multiply`" />
					</div>
				</div>
			</div>
		</section>

		<!-- Section Objectifs -->
		<section class="container px-layout py-20 flex flex-col gap-12 @md:py-40 justify-center">
			<h2 data-aos="slide-up">
				<nu-typography type="title">Préparer les métiers du BTP pour les Jeux Olympiques 2024</nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-12 h-full items-center">
				<div class="flex flex-col @lg:flex-row gap-12 flex-1">
					<p class="@lg:w-1/2">
						Constructys est une plateforme conçue pour aider les professionnels du BTP à monter en compétences et à
						découvrir des passerelles professionnelles. Elle facilite la mise en relation des travailleurs avec des
						formations adaptées pour répondre aux besoins des grands projets comme les Jeux Olympiques 2024.
					</p>
					<p class="@lg:w-1/2">
						Les utilisateurs peuvent évaluer leurs compétences actuelles, découvrir des métiers connexes, et suivre des
						formations pour développer les nouvelles compétences requises. La plateforme permet également aux
						entreprises de trouver facilement les profils qualifiés.
					</p>
				</div>
				<div class="w-full h-[300px] @2xl:w-[500px] bg-cinnabar">
					<div
						:class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('/illustrations/prjct_constructys/olympics.webp')] mix-blend-multiply`" />
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
						<DataQuery v-slot="{ data }" resource="projets"
							:where="(p) => ['actinuum', 'keyro', 'atlas', 'olecio'].includes(p.id)">
							<nu-link :label="`Découvrez le projet ${p.title}`" :to="p.path" :disabled="p.disabled"
								v-for="(p, i) in data">
								<nu-project-preview :class="{ '@lg:mt-8': i === 0, '@lg:-mt-8': i === 3 }" :title="p.title"
									:highlight="p.highlight" :picture="p.picture" :description="p.description" :disabled="p.disabled"
									data-aos="slide-up"></nu-project-preview>
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



		<!-- Section Fonctionnalités -->
		<section class="container py-8 px-layout">
			<h2 data-aos="slide-up">
				<nu-typography type="title" class="py-6">Découverte des passerelles professionnelles et évaluation des
					compétences</nu-typography>
			</h2>
			<div class="py-10 flex flex-col @lg:flex-row gap-12 leading-7">
				<p class="@lg:w-1/2">
					Constructys permet aux professionnels du BTP de découvrir des passerelles entre différents métiers en fonction
					de leurs compétences existantes. Un questionnaire d'évaluation aide les utilisateurs à mieux comprendre leurs
					points forts et à identifier les compétences à développer pour accéder à de nouveaux métiers.
				</p>
				<div class="@lg:w-1/2">
					<ul class="pl-4 list-disc">
						<li>Évaluation des compétences actuelles des utilisateurs</li>
						<li>Passerelles entre métiers avec des recommandations de formation</li>
						<li>Suivi des progrès et accès à des milliers de formations</li>
						<li>Mise en relation avec des entreprises pour des opportunités professionnelles</li>
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
					<nu-typography type="title">Prêt à monter en compétences ?</nu-typography>
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
