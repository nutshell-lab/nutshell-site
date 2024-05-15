<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>

<template>
	<div class="h-full bg-alabaster relative leading-7">
		<section class="py-40 bg-chinese-black text-alabaster flex flex-col @md:gap-20 gap-12 relative overflow-hidden">
			<div><nu-typography type="hero-title"
					class="text-stroke-raisin-black !text-[300px] absolute top-[200px] whitespace-pre">case_002</nu-typography>
			</div>
			<div class="small-container px-layout flex gap-32 overflow-visible items-start">
				<div class="flex-1 gap-32 flex flex-col justify-between relative">
					<h1 class="max-w-[85%]">
						<nu-typography type="title" class="font-normal">
							Quelle est <strong>la meilleure solution</strong> pour générer des documents ?
						</nu-typography>
					</h1>
					<div class="flex flex-col gap-6 max-w-[700px]">
						<p>
							En théorie, la génération de documents automatique vous permet d'être plus rapide dans vos opérations
							tout en assurant la cohérence : pas d'erreur humaine et un design toujours identique.</p>
						<p>En pratique, des difficultés sont fréquemment rencontrées et vienne nettement freiner le potentiel
							du système. Dans cet article, nous passerons en revues ces problématiques et
							nous verrons comment les dépasser.
						</p>
					</div>
				</div>
				<div class="flex gap-14 vertical-text rotate-180 absolute @lg:relative right-4">
					<nu-typography type="headline" class="text-stroke-alabaster">case_002</nu-typography>
				</div>
			</div>
		</section>

		<section class="container px-layout">
			<div class="italic @md:px-layout text-center !leading-[45px]">
				<div class="@md:py-48 py-32">
					<nu-typography type="subtitle" class="font-normal">Ne plus gaspiller du temps dans les tâches
						administratives...</nu-typography>
				</div>
			</div>
		</section>

		<section class="px-layout container pb-32 flex flex-col gap-24 @md:pb-64 justify-center">
			<h2>
				<nu-typography type="title">Le fonctionnement de la génération automatique</nu-typography>
			</h2>
			<div class="flex flex-col @2xl:flex-row gap-16 h-full ">
				<div class="flex flex-col gap-6 flex-1">
					<p>
						La génération de documents se découpe en 2 parties : la partie statique et la partie dynamique.</p>

					<ul class="px-8 list-disc">
						<li>La partie statique est un <strong>modèle de document</strong>, c'est le corps du document dans lequel
							viendra être injectée la partie dynamique.</li>
						<li>La partie dynamique se compose <strong>d'un ensemble de données</strong> qui viennent du système
							d'information (base de données, fichiers excels, mails, etc.).</li>
					</ul>
					<p>En utilisant le modèle de document et l'ensemble de données, le générateur va produire un ou plusieurs
						documents en injectant les informations au bon endroit dans le modèle.
					</p>
				</div>
			</div>

		</section>

		<section class="px-layout container">
			<div class="flex flex-col gap-6 @lg:border-r relative">
				<div class="h-[10px] w-[10px] bg-cinnabar absolute right-0 top-0" />
				<h2 data-aos="slide-up">
					<nu-typography type="title">
						Quelles sont les limitations de cette approche ?
					</nu-typography>
				</h2>
				<div class="flex gap-32">
					<div class="flex flex-col gap-40 @md:gap-32 max-w-[960px] w-full pt-20 pb-48">
						<div class="flex @xl:gap-40 gap-32 items-center text-stroke-chinese-black relative">
							<div class="@md:vertical-text @md:rotate-180 @md:relative absolute @md:top-0 -top-16 right-0">
								<nu-typography type="hero-title" class="@md:!text-[300px] !text-[100px]">0</nu-typography>
								<nu-typography type="hero-title-filled" class="@md:!text-[300px] !text-[100px]">1</nu-typography>
							</div>
							<div class="flex flex-col gap-4">
								<h3 data-aos="slide-up">
									<nu-typography type="subtitle">
										La rigidité du modèle
									</nu-typography>
								</h3>
								<p>
									La plupart des générateurs automatiques fonctionne à partir d'un modèle qui est <b>codé par un
									développeur</b>. Chaque besoin de modification du modèle entraîne <b>beaucoup d'inertie</b> car il faut que le
									développeur le modifie manuellement (alors que le besoin vient d'un autre service).
								</p>
								<p> <b>Notre solution : </b> nous utilisons des modèles au format Microsoft Word (.docx) ce qui permet à
									n'importe quel acteur de modifier le modèle de document en toute autonomie sans passer par un
									développeur.</p>
							</div>
						</div>
						<div class="flex @xl:gap-40 gap-32 items-center text-stroke-chinese-black relative">
							<div class="@md:vertical-text @md:rotate-180 @md:relative absolute @md:top-0 -top-16 right-0">
								<nu-typography type="hero-title" class="@md:!text-[300px] !text-[100px]">0</nu-typography>
								<nu-typography type="hero-title-filled" class="@md:!text-[300px] !text-[100px]">2</nu-typography>
							</div>
							<div class="flex flex-col gap-4">
								<h3 data-aos="slide-up">
									<nu-typography type="subtitle">
										L'accès aux données
									</nu-typography>
								</h3>
								<p>
									Les systèmes de génération proposés par les outils du marché ne disposent que des <b>données qui sont
									disponibles sur leur plateforme</b> et n'ont pas accès aux données de votre système d'information ;
									<b>limitant du même coup les possibilités</b> de génération automatique.
								</p>
								<p> <b>Notre solution : </b> nous branchons un connecteur directement dans votre systèmes d'information,
									il permet d'utiliser toutes les données pertinentes pour générer des documents et ainsi étendre vos
									capacités d'automatisation.</p>
							</div>
						</div>
						<div class="flex @xl:gap-40 gap-32 items-center text-stroke-chinese-black relative">
							<div class="@md:vertical-text @md:rotate-180 @md:relative absolute @md:top-0 -top-16 right-0">
								<nu-typography type="hero-title" class="@md:!text-[300px] !text-[100px]">0</nu-typography>
								<nu-typography type="hero-title-filled" class="@md:!text-[300px] !text-[100px]">3</nu-typography>
							</div>
							<div class="flex flex-col gap-4">
								<h3 data-aos="slide-up">
									<nu-typography type="subtitle">
										Automatiser la génération
									</nu-typography>
								</h3>
								<p>
									Pour être vraiment efficace, il est important que la génération soit automatique ; or, il est fréquent
									que des <b>actions utilisateurs soient requises</b> pour la déclencher (importer un fichier CSV par exmple).
									De la même manière, il faut ensuite télécharger le document <b>avant de pouvoir en faire quelque chose</b>
									(dépôt administratif, envoi par email, etc.).
								</p>
								<p> <b>Notre solution : </b> grâce à notre connecteur, nous pouvons déclencher la génération de document
									suite à un changement d'état dans votre système (ajout d'un client, création d'un projet, date
									atteinte, etc.).</p> De la même manière, notre connecteur récupère directement le fichier ainsi crée
								et peut intéragir avec le reste de votre système d'information pour faire parvenir le document à
								l'acteur concerné (via email, API, courrier papier, etc.)
							</div>
						</div>
					</div>
					<div class="flex-1 overflow-visible relative hidden @lg:block">
						<div class="absolute w-[800px] h-full top-24">
							<ClientOnly>
								<Parallaxy :speed="100" axis="y" class="w-full h-full">
									<div
										:class="`w-full h-full bg-cover bg-center bg-[url('~/assets/illustrations/use_case_erp/view.webp')]`" />
								</Parallaxy>
							</ClientOnly>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-chinese-black text-alabaster @md:py-44 py-24">
			<div class="px-layout container @2xl:max-container flex @2xl:flex-row flex-col gap-24">
				<div class="@2xl:text-right min-w-[300px]">
					<nu-typography type="subtitle" class="font-normal">Mise en place d'une génération pérenne et
						robuste</nu-typography>
				</div>
				<div class="flex flex-col @xl:flex-row gap-24">
					<div class="flex flex-col gap-4">
						<p>
							La solution proposée par Nutshell Lab : mettre à votre disposition notre technologie de génération
							flexible pour complètement automatiser.
						</p>
						<ul class="px-8 list-disc">
							<li>
								Nos modèles de documents utilisent le format Microsoft Word (.docx), permettant à n'importe quel acteur
								de faire évoluer le modèle conformément aux besoins métiers dans un interface qu'il maîtrise.
							</li>
							<li>
								Nous déployons un connecteur dans votre système d'information pour utiliser n'importe quelle donnée à
								votre disposition (base de données, fichier excels, emails entrants, etc.)
							</li>
							<li>
								Une automatisation complète est possible grâce au connecteur qui peut réagir à des événements survenant
								dans vos systèmes (nouvelles entrées dans la base de données, date spécifique, etc.) et agir sur le
								document ainsi produit (envoi au client par mail, dépot sur un serveur, envoi par API, envoi par
								courrier, etc.)
							</li>
						</ul>
					</div>
					<div class="flex flex-col gap-4">
						<p>
							Avec autant de possibilités, il est possible de ne plus gaspiller le temps de vos collaborateurs dans les
							tâches administratives !
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="overflow-hidden relative">
			<nu-section-break class="container px-layout place-self-center text-stroke-chinese-black" variant="light">
				<nu-typography type="headline" class="text-cinnabar">Automatisons <br />ensemble.</nu-typography>
				<nu-link label="Ouvrir le formulaire de contact" to="?contact">
					<nu-button class="mt-4">
						Parlons-en
					</nu-button>
				</nu-link>
				<nu-watermark class="hidden @2xl:block" />
			</nu-section-break>
		</section>
	</div>
</template>
