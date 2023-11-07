<script lang="ts" setup>
const results = [
	"Chiffre d'affaire x3",
	"Absorption de 3x plus de volume de formation",
	"Suppression signigicative d'erreurs humaines",
	"Augmentation de la rapidité d'on-boarding collaborateur",
	"Satisfaction clients et apprenants",
	"Fidélisation des formateurs",
	"Légitimité auprès des acteurs publiques"
]

const other_projects = [
	{
		title: "Keyro",
		highlight: "10k",
		picture: "../_nuxt/assets/illustrations/prjct_actinuum.png",
		description:
			"Keyro est l'émergence d'un produit SAAS pour fournir aux organismes de formation un logiciel ERP+LMS pour digitaliser leur sessions de formations. Grâce à ses nombreuses foncitonnalités, son ergnomie et son expérience concentrée autour de la pédagogie, le plateforme accueille déjà plus de 10k apprenant tous les ans.",
		link: "#",
		slug: "keyro",
	},
	{
		title: "Atlas",
		highlight: "300k",
		picture: "../_nuxt/assets/illustrations/prjct_atlas.png",
		description:
			"L’évolution de la législation autour de la formation professionnelle a poussé Atlas à se doter d’une plateforme d’examens en ligne automatisée ayant déjà certifié 300 000 apprenants.",
		link: "#",
		slug: "atlas",
	},
	{
		title: "Constructys",
		highlight: "180",
		picture: "../_nuxt/assets/illustrations/prjct_constructys.png",
		description:
			"Pour préparer les JO 2024, il faut augmenter massivement la masse salariale de la branche BTP. Pour se faire Constructys nous fait mettre en place une solution de reconversion de métier à 180 métiers cibles.",
		link: "#",
		slug: "constructys",
	},
	{
		title: "Olecio",
		highlight: "500",
		picture: "../_nuxt/assets/illustrations/prjct_broker.png",
		description:
			"La plateforme Olecio permet à chacun de découvrir le métier de ses rêve en parcourant des milliers de contenus gratuits. En fonction du profil des visiteurs et de leur appétance pour certains domaines, des métiers puis des formations leurs sont suggérés tout au long de leur expérience de navigation.",
		link: "#",
		slug: "olecio",
	},
]
const project = {
	title: "Actinuum",
	highlight: "+2M€",
	picture: "_nuxt/assets/illustrations/prjct_actinuum.png",
	description:
		"Automatiser l’administratif de la formation professionnelle et le processus de formation spécifique aux innovations pédagogique d’Actinuum a permis de tripler leur chiffre d’affaire.",
	link: "#",
	short_description: "Automatiser l'administratif de la formation professionnelle",
	slug: "actinuum",
	external_url: "https://actinuum.com/",
}
</script>
<template>
	<div class="bg-chinese-black h-full">
		<nav class="w-full pointer-events-none fixed z-30">
			<nu-top-bar>
				<nu-logo symbol text :width="162" :colors="['cinnabar', 'alabaster', 'alabaster']" />
			</nu-top-bar>
		</nav>
		<div class="wrapper">
			<div class="pt-44 pb-12 h-screen bg-chinese-black text-alabaster flex flex-col gap-12">
				<div class="flex gap-14 overflow-hidden">
					<nu-typography type="hero-title">{{ project.title }}</nu-typography>
					<nu-typography type="hero-title-filled">{{ project.title }}</nu-typography>
					<nu-typography type="hero-title">{{ project.title }}</nu-typography>
				</div>
				<div class="flex flex-col md:flex-row justify-between h-full gap-6">
					<div class="px-6 w-full h-44 md:h-full">
						<div :class="`w-full bg-cover h-full bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					</div>
					<div class="md:w-1/3 h-full flex flex-col justify-between">
						<div class="px-6">
							<nu-typography type="title" class="text-alabaster font-normal"> {{ project.short_description }}
							</nu-typography>
						</div>
						<div class="px-6 grid grid-cols-2">
							<nu-typography type="caption">Transformation digitale</nu-typography>
							<nu-typography type="caption">Automatisation</nu-typography>
							<nu-typography type="caption">Plateforme</nu-typography>
							<nu-typography type="caption">Logiciel ERP</nu-typography>
							<nu-typography type="caption">Logiciel ERP</nu-typography>
							<nu-typography type="caption">Logiciel ERP</nu-typography>
							<nu-typography type="caption">Logiciel ERP</nu-typography>
							<nu-typography type="caption">Logiciel ERP</nu-typography>
							<nu-typography type="caption">Logiciel ERP</nu-typography>
							<nu-typography type="caption">Logiciel ERP</nu-typography>
						</div>
						<div class="w-full flex justify-center">
							<nu-button>
								<a target="_blank" :href="project.external_url" aria-label="Découvrez le site Actinnuum">
									Découvrir le site
								</a>
							</nu-button>
						</div>
					</div>
				</div>
			</div>
			<div class="px-6 md:px-28 py-24 flex flex-col gap-6 h-screen justify-center">
				<nu-typography type="title">Parce qu'Excel ne scale pas.</nu-typography>
				<div class="flex flex-col md:flex-row gap-6 h-full md:items-center">
					<div class="md:w-1/4">
						À ces débuts, l'organisme de formation Actinuum, comme beaucoup d'entreprise par ailleurs, utilise Excel
						comme
						outil principal pour planifier et suivre son activité.
						Planing des formations, entreprises clients, compétences et disponibilité des formateurs, suivi des envois
						administratifs, pilotage de l'activité et décompte des indicateurs pour le bilan pédagogique et financier.
					</div>
					<p class="md:w-1/4">
						Autant d'éléments où les erreurs humaines viennent se glisser exponentiellement avec la croissance du volume
						de
						formation. Actinuum, portée par ses dirigeant ambitieux détermine alors que faire développer son propre ERP
						sera
						rentabilisé en quelques années tout en augmentant significativement leur capacité à absorber du volume de
						sessions de formations.
					</p>
					<div class="h-full w-full flex justify-center items-center">
						<div :class="`w-full bg-contain h-full md:h-96 bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					</div>
				</div>

			</div>
			<div class="bg-chinese-black text-alabaster py-20 px-6 h-screen">
				<nu-typography class="text-onyx" type="caption">Gallerie de screenshots</nu-typography>
				<div class="pt-4 grid grid-cols-2 gap-2 justify-items-center h-full">
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
					<div :class="`bg-cover w-full h-full bg-no-repeat bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
				</div>
			</div>
		</div>
		<div class="px-6 pt-12 py-12">
			<nu-typography type="title">Centre de contrôle de la formation</nu-typography>
			<p class="my-6">
				Pour permettre à Actinuum <em>d'avoir la main mise sur son outil opérationnel</em>, Nutshell a mis en place un
				centre
				de contrôle permettant de <em>gérer l'ensemble de l'activité de formation.</em>
				Véritable ERP de la formation, la solution précise le programme de chaque formation, leurs modalités pédagogiques,
				les dates des sessions, le choix des intervenants internes ou externes. Il fournit les
				renseignements nécessaires aux futurs participants et leur indique les moyens de financement possibles.
				C'est ainsi qu'Actinuum peut <em>gérer l'ensemble de son catalogue de formations, de formateurs, de clients et de
					participants.</em>

			</p>
			<ul class="list-disc px-10">
				<li>Durant le cycle de vie de la session de formation, <em>plusieurs déclencheurs ont été paramétrés pour l’envoi
						des convocations, des conventions, etc.</em> Cette automatisation permet de se passer de l’action humaine.
				</li>
				<li> L’ERP prend en charge <em>l’automatisation complète des formalités administratives : génération de
						documents PDF et leur envoi par e-mail.</em></li>
				<li> Un centre d’actions à réaliser <em>permet aux administrateurs de ne rien oublier</em>. Il s’agit d’une
					véritable todo-list qui évite les erreurs.</li>
			</ul>
		</div>
		<div class="flex flex-col justify-center gap-6 py-12">
			<div class="px-6 pt-12">
				<div :class="`w-full bg-cover h-96 bg-[url('assets/illustrations/prjct_actinuum.png')]`" />
			</div>
			<div class="px-6 flex flex-col justify-center gap-12">
				<nu-typography type="title">Un espace d'apprentissage en ligne</nu-typography>
				<div class="flex flex-col md:flex-row items-center justify-center gap-12">
					<div class="md:w-2/3">
						<p class="py-6">
							Afin d'engager un maximum de qualité tout au long du processus de formation, nous avons conçu pour Actinuum
							un
							LMS (Learning Management System) integré avec son ERP qui permet aux participants et au formateurs de
							disposer
							d'un support pour toute la durée de la formation, qu'elle soit en présentielle ou bien à distance.
						</p>
						<p class="pb-6">
							Permettant de collecter du même coup un ensemble de donnhees propres à la session de formation, le LMS
							traque
							l'assiduité des utilisateurs et la qualité de la prestation effectuée par le formateur. L'humain est au
							coeur de
							cette collecte d'information grâce à des entretiens réguliers entre formateur et apprenant, des
							questionnaires
							de satisfaction et des groupes de discussion dans un chat intégré.
						</p>
					</div>
					<div>

						<ul class="list-disc px-10">
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
		<div
			class="px-6 bg-chinese-black text-alabaster flex flex-col py-12 gap-28 bg-right-bottom bg-no-repeat bg-contain md:bg-[url('assets/logo_nutshell_bottom_right_red_outline.svg')]">
			<nu-typography type="title">Résultats constatés</nu-typography>
			<div class="flex flex-col md:flex-row gap-28 md:px-28 justify-center">
				<div>
					<nu-lined-list :entries="results" class="gap-12" />
				</div>
				<div class="flex flex-col gap-6 md:w-1/4 ">
					<nu-typography type="title">Prêt à monter en puissance?</nu-typography>
					<nu-button>Commençons à parler</nu-button>
				</div>
			</div>
		</div>
		<div class="px-6 py-20">
			<nu-typography type="title">La recette pour digitaliser votre organisme de formation</nu-typography>
			<ul class="list-disc pt-6 px-10">
				<li>Auditer et revisiter l'ensemble de vos processus avec la méthodologie LEAN</li>
				<li>Identifier les freins et les goulots d'étranglement de votre activité de formation</li>
				<li>Déterminer la data critique et les moyens pour l'obtenir (sourcing clients, sourcing formateurs)</li>
				<li>Automatiser les tâches répétitives et à faible valeur ajoutée</li>
				<li>Tracker les indicateurs clés de votre activité</li>
			</ul>
		</div>
		<div class="px-6 pb-20 flex flex-col gap-6">
			<nu-typography type="title">10 ans d'expérience dans la formation
				professionelle</nu-typography>
			<p>
				Avec près d'une vingtaine de projets pour différents acteur de la formation professionnel : des organismes de
				formations, aux organes publiques en passant par les EdStartup, les équipes de Nutshell disposent d'un solide
				arsenal pour concevoir des solutions sur-mesures pour le secteur.
			</p>
		</div>
		<div class="md:pl-32 flex flex-col md:grid md:grid-cols-2 gap-[1px]">
			<nu-link :aria-label="`Découvrez le projet ${p.title}`" :href="`/projects/${p.slug}`"
				v-for="(p, i) in other_projects.slice(0, 4)">
				<nu-project-preview class="text-alabaster" :expand="true" :active_image="true" :line-break="i != 1"
					:title="p.title" :highlight="p.highlight" :picture="p.picture"
					:description="p.description"></nu-project-preview>
			</nu-link>
		</div>
		<nu-section-break class="container md:pl-28 place-self-center" variant="light">
			<nu-typography type="hero-title-dark">Commençons <br class="md:hidden" />à discuter.</nu-typography>
			<nu-button class="border-cinnabar text-cinnabar">Par chat</nu-button>
		</nu-section-break>
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
