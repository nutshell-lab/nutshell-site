<script lang="ts" setup>

const results = [
	"Plateforme accueillant des dizaines de milliers d'utilisateurs",
	"Système de notification personnalisé basé sur le comportement utilisateur",
	"Expérience utilisateur engageante via des contenus distracto-pédagogiques",
	"Profilage automatique des utilisateurs pour personnaliser les parcours",
	"Accès à des milliers de formations et offres d'emploi"
]

const keywords = [
	'Plateforme d’orientation professionnelle',
	'Contenus distracto-pédagogiques',
	'Système de profilage',
	'Notifications personnalisées',
	'Offres d’emploi et formations',
	'Expérience utilisateur intuitive',
	'Analyse comportementale'
]

const testimonials = [
	{
		name: "Paul Martin",
		role: "Utilisateur satisfait",
		feedback: "Grâce à Olecio, j'ai pu découvrir des formations qui correspondaient parfaitement à mes centres d'intérêt, et trouver un emploi rapidement."
	},
	{
		name: "Claire Dubois",
		role: "Responsable RH",
		feedback: "Olecio nous a permis de cibler les bons candidats en fonction de leurs centres d'intérêt et de leurs compétences. C'est un outil indispensable pour l'avenir du recrutement."
	}
]
</script>

<template>
	<div class="h-full bg-alabaster">
		<!-- Section Introduction -->
		<section
			class="pt-32 pb-32 bg-chinese-black text-alabaster text-stroke-alabaster flex flex-col @md:gap-20 gap-12 relative">
			<nu-striped-word word="olecio" />
			<div class="container px-layout flex gap-16 overflow-visible">
				<div class="flex-shrink w-[680px] gap-16 flex flex-col justify-between">
					<h1>
						<nu-typography type="title" class="text-alabaster font-normal">
							Faciliter l'orientation professionnelle avec une plateforme personnalisée
						</nu-typography>
					</h1>
					<nu-lined-list :entries="keywords" class="!gap-10" />
					<div class="w-full flex justify-start">
						<nu-link target="_blank" to="https://olecio.fr/" label="Découvrez le site Olecio">
							<nu-button color="alabaster">
								Découvrir le site
							</nu-button>
						</nu-link>
					</div>
				</div>
				<div class="flex-1 overflow-visible relative hidden @sm:block">
					<div class="absolute w-[1200px] h-full bg-cinnabar">
						<div
							:class="`w-full h-full bg-cover bg-right bg-[url('~/assets/illustrations/prjct_olecio/header.webp')] mix-blend-multiply`" />
					</div>
				</div>
			</div>
		</section>

		<!-- Section Objectifs -->
		<section class="container px-layout py-20 flex flex-col gap-12 @md:py-40 justify-center">
			<h2 data-aos="slide-up">
				<nu-typography type="title">Aider les utilisateurs à trouver leur vocation</nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-12 h-full items-center">
				<div class="flex flex-col @lg:flex-row gap-12 flex-1">
					<p class="@lg:w-1/2">
						Olecio propose une approche innovante pour l'orientation professionnelle. Grâce à un système de profilage
						qui analyse les centres d'intérêt des utilisateurs, la plateforme recommande des formations et des offres
						d'emploi adaptées.
					</p>
					<p class="@lg:w-1/2">
						Ce parcours interactif, basé sur des contenus distracto-pédagogiques, permet aux utilisateurs de découvrir
						de nouvelles opportunités professionnelles tout en s'amusant.
					</p>
				</div>
				<div class="w-full h-[500px] @2xl:w-[500px]">
					<div
						:class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_olecio/app.webp')] mix-blend-multiply`" />
				</div>
			</div>
		</section>

		<!-- Section Fonctionnalités -->
		<section class="container py-8 px-layout">
			<h2 data-aos="slide-up">
				<nu-typography type="title" class="py-6">Système de notification et profilage personnalisé</nu-typography>
			</h2>
			<div class="py-10 flex flex-col @lg:flex-row gap-12 leading-7">
				<p class="@lg:w-1/2">
					Olecio utilise un système de notification avancé qui envoie des alertes personnalisées aux utilisateurs en
					fonction de leur comportement sur la plateforme. Ce système leur permet de découvrir des formations et des
					offres d'emploi pertinentes en temps réel.
				</p>
				<div class="@lg:w-1/2">
					<ul class="pl-4 list-disc">
						<li>Analyse des centres d'intérêt des utilisateurs</li>
						<li>Recommandation personnalisée de formations et d'offres d'emploi</li>
						<li>Notifications en temps réel basées sur les préférences utilisateurs</li>
						<li>Contenus distracto-pédagogiques pour une meilleure immersion</li>
					</ul>
				</div>
			</div>
			<div class="w-full h-[500px] @2xl:w-[500px]">
				<div
					:class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_olecio/admin.webp')] mix-blend-multiply`" />
			</div>
		</section>
		<section class="container py-20 px-layout bg-light-gray">
			<div class="flex flex-col gap-12">
				<h2 data-aos="slide-up">
					<nu-typography type="title">Recherche full-text pour explorer des milliers de contenus</nu-typography>
				</h2>
				<div class="flex flex-col @lg:flex-row gap-12">
					<p class="@lg:w-1/2 leading-7">
						Afin de faciliter la navigation parmi les dizaines de milliers de contenus disponibles sur la plateforme
						Olecio, Nutshell a mis en place un puissant système de recherche full-text. Cette fonctionnalité
						permet aux utilisateurs de trouver rapidement et efficacement des formations, articles, vidéos, et autres
						ressources en fonction de mots-clés ou de phrases spécifiques.
					</p>
					<p class="@lg:w-1/2 leading-7">
						La recherche full-text analyse non seulement les titres et descriptions, mais également le contenu intégral
						de chaque ressource, garantissant ainsi une recherche plus précise et complète. Cela permet à chaque
						utilisateur de découvrir du contenu pertinent en fonction de ses besoins, tout en simplifiant l'accès aux
						informations sur la plateforme.
					</p>
				</div>

				<div class="flex flex-col @lg:flex-row gap-12">
					<ul class="pl-4 list-disc @lg:w-1/2">
						<li>Navigation rapide à travers des dizaines de milliers de contenus</li>
						<li>Recherche sur l'intégralité du texte, y compris les titres, descriptions et contenus</li>
						<li>Résultats pertinents en fonction des mots-clés et des besoins des utilisateurs</li>
						<li>Optimisation pour une expérience utilisateur fluide et intuitive</li>
					</ul>
					<div class="@lg:w-1/2">
						<p class="leading-7">
							Cette fonctionnalité de recherche full-text s'adapte parfaitement aux volumes importants de contenus
							disponibles sur Olecio, garantissant une accessibilité améliorée et une expérience utilisateur optimisée.
							Grâce à ce moteur de recherche avancé, les utilisateurs peuvent naviguer avec fluidité et précision parmi
							les contenus qui les intéressent.
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
					<nu-typography type="title">Prêt à explorer de nouvelles opportunités ?</nu-typography>
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
