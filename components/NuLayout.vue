<script lang="ts" setup>
const open = ref(false)
const route = useRoute()

const theme = computed(() => route.meta.theme || 'dark')
</script>

<template>
	<div class="relative bg-alabaster overflow-hidden">
		<div class="z-40 fixed right-8 top-6 sm:left-8 sm:top-[calc(50vh-20px)] sm:hover:left-10 transition-all lg:bg-transparent h-[40px] w-[40px] ease-in-out duration-500">
			<button v-if="open" @click="open = !open" aria-label="Cacher le menu">
				<icon-close/>
			</button>
			<button v-else @click="open = !open" aria-label="Afficher le menu">
				<icon-burger/>
			</button>
		</div>
		<div :class="{ 'ml-[517px] mr-16 py-16': open }" class="transition-all ease-in-out duration-500 z-30">
			<nu-breadcrumbs class="absolute top-5 z-0"/>
			<div class="bg-alabaster left-0 top-0 fixed w-screen sm:w-[517px] sm:px-32 px-8 h-screen py-6 flex flex-col justify-between" :class="{ 'block': open, 'hidden': !open }">
				<div />
				<nav class="flex flex-col items-center jusitfy-center gap-6">
					<nu-link to="/" label="Découvrez tous nos projets" hover @click="open = false">
						<nu-typography type="title" class="text-center">
							L'agence
						</nu-typography>
					</nu-link>
					<nu-link to="/projets" label="Découvrez tous nos projets" hover @click="open = false">
						<nu-typography type="title" class="text-center">
							Projets
						</nu-typography>
					</nu-link>
					<nu-link to="/dossiers" label="Parcourez nos dossiers" hover @click="open = false">
						<nu-typography type="title" class="text-center">
							Dossiers
						</nu-typography>
					</nu-link>
					<DevOnly>
						<nu-link to="/faq" label="Parcourez notre FAQ" hover @click="open = false">
							<nu-typography type="title" class="text-center">
								FAQ
							</nu-typography>
						</nu-link>
					</DevOnly>
				</nav>
				<nu-link label="Ouvrir le formulaire de contact" to="?contact">
					<nu-button class="w-full mt-auto">
						Contactez-nous
					</nu-button>
				</nu-link>
			</div>
    		<header>
				<nu-link label="Retourner sur la homepage" to="/" class="absolute z-20 left-[76px] top-[24px]">
					<nu-logo text :width="130" :colors="['cinnabar', open || theme === 'light' ? 'chinese-black' : 'alabaster', open ? 'chinese-black' : 'alabaster']"/>
				</nu-link>
				<nu-link label="Retourner sur la homepage" to="/" class="fixed z-20 left-8 top-6">
					<nu-logo symbol :width="38" :colors="['cinnabar']" />
				</nu-link>
			</header>
			<div class="@container relative overflow-hidden">
				<div :class="{ 'lg:hidden sm:bg-onyx block': open, 'hidden': !open }" class="h-full w-full bg-alabaster absolute top-0 left-0 z-40" />
				<main class="bg-alabaster">
					<slot />
				</main>
				<footer class="bg-chinese-black text-alabaster flex flex-col justify-center items-center py-16 relative">
					<div class="text-cinnabar absolute @md:left-[-240px] @md:top-[-160px] left-[-60px] top-[-40px]">
						<svg class="@md:h-[700px] h-[200px] @md:w-[700px] w-[200px]" viewBox="0 0 2000 2000">
							<path fill="currentColor" class="cls-1" d="M1169.27,209.8l-84.74,46.37c-51.71,28.31-82,81.12-79.09,137.81l21.39,414.29L580.35,532.09,411.81,624.35,992.69,978.91,1199,866Z"/>
							<path fill="currentColor" class="cls-1" d="M1641,1393.57l-474.12-230.66,456-222.09,18-8.8,0-185L1134.47,997.29c-65.42,32.34-106,96-106,166.17l0,112.72L1641,1578.65Z"/>
							<path fill="currentColor" class="cls-1" d="M319.66,1227.44c-30.67,20.17-47.67,53.35-45.48,88.77s23.15,66.49,56.08,83.11l17.91,9,436.2-290.71-7.75,506.8,171.8,86.64,5.86-656.82L744,948.24Z"/>
						</svg>
					</div>
					<div class="px-layout container">
						<div class="flex flex-col text-right">
							<div>© 2018 - {{ new Date().getFullYear() }} Nutshell Lab</div>
							<div>Tous droits réservés</div>
							<div class="underline underline-offset-2">
								<nu-link to="/mentions-legales" label="Accédez aux mentions légales">Mentions légales</nu-link>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
		<nu-contact-form />
	</div>
</template>
