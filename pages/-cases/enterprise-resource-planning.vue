<script lang="ts" setup>
import logo_nutshell from '~/assets/logo_nutshell.png'
import prjct_actinuum from '~/assets/illustrations/prjct_actinuum.webp'

const route = useRoute()
useSeoMeta({
  title: 'Utiliser un ERP en entreprise - Nutshell',
  ogTitle: 'Utiliser un ERP en entreprise - Nutshell',
  description: 'Votre ERP d’entreprise est-il efficace ? Vérifiez-le ! Découvrez les bénéfices et les possibilités de ce progiciel ainsi que le concept d’ERP sur-mesure.',
  ogDescription: 'Votre ERP d’entreprise est-il efficace ? Vérifiez-le ! Découvrez les bénéfices et les possibilités de ce progiciel ainsi que le concept d’ERP sur-mesure.',
  ogImage: logo_nutshell,
  ogUrl: 'https://nutshell-lab.com' + route.path,
  ogType: 'website'
})

const use_case = {
	title: "Un ERP sur-mesure est-il un choix judicieux pour votre entreprise ?",
    subtitle: "ERP",
    case: "case_001",
	slug: "entreprise-resource-planning",
}

const project = {
    title: "Actinuum",
    highlight: "+2M€",
    picture: `url('${prjct_actinuum}')`,
    description:
        "Automatiser l’administratif de la formation professionnelle et le processus de formation spécifique aux innovations pédagogique d’Actinuum a permis de tripler leur chiffre d’affaire.",
    slug: "actinuum",
}
</script>

<template>
	<div class="h-full bg-alabaster relative">
        <div class="pt-32 pb-32 bg-chinese-black text-alabaster flex flex-col @md:gap-20 gap-12 relative overflow-hidden">
            <div class="container px-l-layout flex gap-16 overflow-visible items-start">
                <div class="text-right relative">
                    <div>
                        <nu-typography type="regular" class="uppercase text-cinnabar">
                            étude de cas
                        </nu-typography>
                    </div>
                    <div>
                        <nu-typography type="subtitle" class="uppercase text-cinnabar">
                            <strong>erp</strong>
                        </nu-typography>
                    </div>
                    <div class="border border-t border-cinnabar w-screen absolute right-0 mt-4" />
                </div>
				<div class="flex-1 gap-16 flex flex-col justify-between">
					<h1>
						<nu-typography type="title" class="font-normal">
							Un ERP sur-mesure est-il un choix judicieux pour votre entreprise ?
						</nu-typography>
					</h1>
                    <div class="flex flex-col gap-6 max-w-[700px]">
                        <div>
                            <nu-typography>
                                L’ERP assure une interconnexion entre les différents départements et couvre tous les besoins de la société une fois déployé. Il faut s’assurer que la solution choisie soit pertinente pour couvrir tous vos besoins.
                            </nu-typography>
                        </div>
                        <div>
                            <nu-typography>
                                Si ce n’est pas le cas, le fonctionnement du système ne sera pas optimal. Pour que le progiciel réponde à vos exigences de manière précise, vous pouvez également opter pour un <strong>ERP sur-mesure</strong>. Celui-ci y répondra de façon exhaustive.  
                            </nu-typography>
                        </div>
                    </div>
					<div class="w-full flex justify-start">
						<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
							<nu-button color="alabaster">
								Je veux un ERP sur-mesure
							</nu-button>
						</nu-link>
					</div>
				</div>
                <div class="flex gap-14 vertical-text rotate-180">
                    <nu-typography type="hero-title">{{ use_case.case }}</nu-typography>
                </div>
			</div>
		</div>

        <div class="container px-layout py-20 flex flex-col gap-12 @md:py-40 justify-center">
			<h2 data-aos="slide-up">
				<nu-typography type="title">Quelle utilisation d’un ERP en entreprise ? </nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-12 h-full items-center">
				<div class="flex flex-col gap-6 flex-1">
					<p>
                        <nu-typography>
                            Vous utilisez peut-être déjà cet outil stratégique dans votre entreprise pour la gestion
                            de l’ensemble de vos activités quotidiennes ? L’ERP est un <strong>logiciel de gestion de
                            performance (EPM)</strong>. Il permet d’associer différentes applications en prenant en charge
                            plusieurs services de l’entreprise. Face aux flux de données très importants que génèrent
                            vos activités professionnelles, l’<strong>ERP</strong> est une solution idéale pour :
                        </nu-typography>
					</p>
                    <nu-typography>
                        <ul class="px-8 list-disc">
                            <li>Collecter l’ensemble des données en provenance de différentes sources sans commettre d’erreurs et réduire les risques d’oublis ; </li>
                            <li>Les stocker en toute sécurité dans un logiciel central ; </li>
                            <li>Les centraliser sur une base de données unique qui facilite leur consultation, leur utilisation et leur mise en relation. Selon leur rôle, les utilisateurs peuvent y accéder de manière autonome. Le personnel peut ainsi bénéficier d’une expérience de travail optimale. </li>
                            <li>Faciliter le suivi et l’analyse des données et aider à la prise de décision grâce à des reportings précis.  </li>
                        </ul>
                    </nu-typography>
				</div>
				<div class="w-full h-[370px] @2xl:w-[600px]">
					<div :class="`w-full bg-cover bg-center h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_actinuum/board.webp')]`" />
				</div>
			</div>
            <nu-typography>
                Les processus et les données sont connectés pour favoriser les échanges d’information et les analyser grâce à des indicateurs de performance. Ainsi, L’ERP est un véritable support dans la gestion de l’entreprise grâce au stockage des données de manière centralisée. Il constitue une aide appréciable dans la planification et la gestion de projet. La mise en place de workflows permet de définir une succession de tâches et de gérer leur réalisation de manière automatique.  
            </nu-typography>
		</div>

        <div class="pl-layout container relative pt-20">
            <div class="flex flex-row items-end relative">
                <div class="absolute top-[-30px]">
                    <nu-typography type="hero-title-dark">Un outil ultra connecté</nu-typography>
                </div>
                <div class="w-full h-[300px] @2xl:w-[500px]">
                    <div :class="`w-full bg-cover h-full bg-cinnabar bg-[url('~/assets/illustrations/prjct_actinuum/notes.webp')]`" />
                </div>
                <div class="bg-raisin-black text-alabaster px-24 py-20 flex-1 flex flex-col gap-6">
                    <p>
                        <nu-typography>
                            L’ERP est connecté aux éléments de votre système d’information et aux applications métiers courantes. L’outil informatique prend en compte des modules variés tels que le CRM, la finance, la production, les commandes, les fournisseurs ou les livraisons.   
                            Quelles sont les principales activités incluses dans <strong>les modules du logiciel ERP</strong> ?
                        </nu-typography>
                    </p>
                    <div>
                        <nu-typography>
                            <ul class="px-8 list-disc">
                                <li>
                                    Gestion financière, facturation et comptabilité ;
                                </li>
                                <li>
                                    Ressources humaines ; 
                                </li>
                                <li>
                                    Fonctions achat et vente de produits ; 
                                </li>
                                <li>
                                    Gestion des stocks et logistique ; 
                                </li>
                                <li>
                                    Gestion de la chaîne d’approvisionnement.
                                </li>
                            </ul>
                        </nu-typography>
                    </div>
                </div>
            </div>
            
        </div>
		<div class="bg-chinese-black text-alabaster py-40">
			<div class="container px-layout flex flex-col @xl:flex-row gap-28 justify-between">
				<div class="flex flex-col gap-12">
					<h2 data-aos="slide-up">
						<nu-typography type="title">Et même un processus spécifique</nu-typography>
					</h2>
                    <div>
                        Un <strong>ERP sur-mesure</strong> prend en compte toutes les spécificités d’une entreprise à travers sa complexité. Ainsi, Nutshell a élaboré un projet avec Actinuum à destination de la formation professionnelle. L’ERP de l’établissement administre les sessions de formation de A à Z. 90% du processus est effectué sans intervention humaine.  
                    </div>
					<nu-typography type="subtitle">Prêt à monter en puissance?</nu-typography>
					<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
						<nu-button color="alabaster">
							Commençons à parler
						</nu-button>
					</nu-link>
				</div>
				<div class="flex-1 flex flex-col gap-12">
                    <nu-link :label="`Découvrez le projet ${project.title}`" :to="`/work/${project.slug}`">
                        <nu-project-preview :title="project.title" :highlight="project.highlight"
                            :picture="project.picture" :description="project.description" data-aos="slide-up"></nu-project-preview>
                    </nu-link>
				</div>
			</div>
		</div>

		<div class="overflow-hidden relative">
			<nu-section-break class="container px-layout place-self-center" variant="light">
				<nu-typography type="hero-title-dark" class="text-cinnabar">Commençons <br />à discuter.</nu-typography>
				<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
					<nu-button class="mt-4">Par email</nu-button>
				</nu-link>
				<nu-watermark class="hidden @2xl:block"/>
			</nu-section-break>
		</div>
	</div>
</template>

