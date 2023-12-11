<script lang="ts" setup>
const nuxtApp = useNuxtApp()

const open = ref(false)
</script>

<template>
	<div class="relative bg-alabaster">
		<div class="z-40 fixed right-8 top-6 sm:left-8 sm:top-[calc(50vh-20px)] sm:hover:left-10 transition-all lg:bg-transparent h-[40px] w-[40px] ease-in-out duration-500">
			<button v-if="open" @click="open = !open" aria-label="Cacher le menu">
				<close-icon/>
			</button>
			<button v-else @click="open = !open" aria-label="Afficher le menu">
				<burger-icon/>
			</button>
		</div>
		<div :class="{ 'ml-[517px] mr-16 py-16': open }" class="transition-all ease-in-out duration-500 z-30">
			<div class="bg-alabaster left-0 top-0 fixed w-screen sm:w-[517px] sm:px-32 px-8 h-screen py-6 flex flex-col justify-between" :class="{ 'block': open, 'hidden': !open }">
				<div />
				<nav class="flex flex-col items-center jusitfy-center gap-6">
					<nu-link to="/#agency" label="Découvrez tous nos projets" hover @click="open = false">
						<nu-typography type="title" class="text-center">
							L'agence
						</nu-typography>
					</nu-link>
					<nu-link to="/#projects" label="Découvrez tous nos projets" hover @click="open = false">
						<nu-typography type="title" class="text-center">
							Projets
						</nu-typography>
					</nu-link>
					<nu-link to="/#cases" label="Parcourez nos études de cas" hover @click="open = false">
						<nu-typography type="title" class="text-center">
							Études de cas
						</nu-typography>
					</nu-link>
					<nu-link to="/#services" label="Trouvez votre service" hover @click="open = false">
						<nu-typography type="title" class="text-center">
							Services
						</nu-typography>
					</nu-link>
				</nav>
				<nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
					<nu-button class="w-full mt-auto">
						Contactez-nous
					</nu-button>
				</nu-link>
			</div>
    		<header>
				<nu-link label="Retourner sur la homepage" to="/#agency" class="absolute z-20 left-[76px] top-[24px]">
					<nu-logo text :width="130" :colors="['cinnabar', open ? 'chinese-black' : 'alabaster', open ? 'chinese-black' : 'alabaster']"/>
				</nu-link>
				<nu-link label="Retourner sur la homepage" to="/#agency" class="fixed z-20 left-8 top-6">
					<nu-logo symbol :width="38" :colors="['cinnabar']" />
				</nu-link>
			</header>
			<div class="@container relative overflow-hidden">
				<div :class="{ 'lg:hidden sm:bg-onyx block': open, 'hidden': !open }" class="h-full w-full bg-alabaster absolute top-0 left-0 z-40" />
				<main>
					<slot />
				</main>
    			<nu-footer />
			</div>
		</div>
	</div>
</template>
