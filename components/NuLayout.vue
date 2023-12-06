<script lang="ts" setup>
import BurgerIcon from "./BurgerIcon.vue"

const open = ref(false)
</script>

<template>
	<div class="relative bg-alabaster">
		<div :class="{ 'left-0': open, '-left-[517px]': !open }" class="transition-all z-40 bg-alabaster fixed w-auto max-w-[calc(100vw-100px)] lg:w-[517px] lg:px-32 md:px-24 px-16 h-screen py-12 flex flex-col justify-between">
			<nu-logo symbol text :width="162" :colors="['cinnabar', 'chinese-black', 'chinese-black']" />
			<nav class="flex flex-col items-center jusitfy-center gap-6">
				<nu-link to="/#agency" label="Découvrez tous nos projets" hover>
					<nu-typography type="title" class="text-center">
						L'agence
					</nu-typography>
				</nu-link>
				<nu-link to="/#projects" label="Découvrez tous nos projets" hover>
					<nu-typography type="title" class="text-center">
						Projets
					</nu-typography>
				</nu-link>
				<nu-link to="/#use-cases" label="Parcourez nos études de cas" hover>
					<nu-typography type="title" class="text-center">
						Études de cas
					</nu-typography>
				</nu-link>
				<nu-link to="/#services" label="Trouvez votre service" hover>
					<nu-typography type="title" class="text-center">
						Services
					</nu-typography>
				</nu-link>
				<!-- <nu-link to="#" label="Accédez à nos ressources">Ressources</nu-link> -->
			</nav>
			<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
				<nu-button class="border-chinese-black text-chinese-black w-full mt-auto">
					Contactez-nous
				</nu-button>
			</nu-link>
		</div>
		<div class="z-40 fixed right-10 top-6 md:left-8 md:top-[calc(50vh-20px)] md:hover:left-10 transition-all lg:bg-transparent h-[40px] w-[40px]">
			<button v-if="open" @click="open = !open" aria-label="Cacher le menu" :class="{ 'text-alabaster mt-6 md:mt-0 md:text-chinese-black': open }">
				<close-icon color="currentColor" />
			</button>
			<button v-else @click="open = !open" aria-label="Afficher le menu">
				<burger-icon/>
			</button>
		</div>
		<div :class="{ 'lg:pl-[517px] pr-8 lg:pr-16 py-8 lg:py-16': open }" class="transition-all">
    		<nu-header />
			<div class="transition-all" :class="{ 'block lg:hidden max-w-[200px] ml-auto h-[calc(100vh-4rem)] bg-onyx': open, 'w-[400px]': !open }" />
			<div class="@container relative overflow-hidden" :class="{ 'lg:block hidden': open }">
				<slot />
    			<nu-footer />
			</div>
		</div>
	</div>
</template>
