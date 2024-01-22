<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy';

import logo_designrush from '~/assets/partners/logo_designrush.svg'
import logo_miosotisstudio from '~/assets/partners/logo_miosotisstudio.svg'

const partners = [
	{
		name: 'Miosotis Studio',
		picture: logo_miosotisstudio,
		link: 'https://miosotisstudio.com/'
	},
	{
		name: 'DesignRush',
		picture: logo_designrush,
		link: 'https://www.designrush.com/agency/profile/nutshell-lab'
	}
]

const services = [
    "Produits et SaaS",
    "Développement",
    "Design et ergonomie",
    "Data et Business Intelligence",
    "Innovation",
    "Branding et Strategy",
    "Analyse et Audit",
    "Analytics et SEO",
]

</script>

<template>
	<div class="bg-alabaster font-inter">
		<section id="agency" class="relative">
			<nu-splash class="bg-chinese-black text-stroke-alabaster">
				<h1 class="text-center">
					<nu-typography type="hero-title">
						Un studio de <br />développement<br /> sur-mesure à<br /> votre service
					</nu-typography>
				</h1>
			</nu-splash>
			<div class="absolute text-alabaster bottom-8 w-full columns-1 text-center">
				<nu-arrow class="animate-bounce" />
			</div>
		</section>
		<div class="flex flex-col">
			<section class="small-container px-layout">
				<nu-hero-section cta="valorisons le votre">
					<template #title>
						<h2 class="max-w-[700px]" data-aos="slide-up">
							<nu-typography type="title">
								Comprendre le métier et le valoriser avec la tech.
							</nu-typography>
						</h2>
					</template>
					<template #text>
						<div class="max-w-[486px]">
							<nu-typography>
								Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment pertinentes.
							</nu-typography>
						</div>
					</template>
				</nu-hero-section>
			</section>

			<section id="projects" class="bg-gradient-to-b from-chinese-black from-85% to-alabaster to-85% text-alabaster">
				<div class="small-container px-layout pt-16 flex flex-col gap-16">
					<h2 data-aos="slide-up">
						<nu-typography type="title" class="self-start">Ils ont créé<br />de la valeur.</nu-typography>
					</h2>
					<div class="flex flex-col items-end gap-8">
						<div class="flex flex-col @lg:grid @lg:grid-cols-2 gap-6">
							<DataQuery v-slot="{ data }" resource="projets" :where="(p) => ['actinuum', 'brokers', 'atlas', 'constructys'].includes(p.id)">
								<nu-link :label="`Découvrez le projet ${p.title}`" :to="p.path" :disabled="p.disabled"
									v-for="(p, i) in data.slice(0, 4)">
									<nu-project-preview :class="{ '@lg:mt-8': i === 0, '@lg:-mt-8': i === 3 }" :title="p.title" :highlight="p.highlight"
										:picture="p.picture" :description="p.description" :disabled="p.disabled" data-aos="slide-up"></nu-project-preview>
								</nu-link>
							</DataQuery>
						</div>
						<nu-link label="Découvrez nos autres projets" to="/projets">
							<div class="flex text-cinnabar items-center gap-4 justify-center transition-all duration-300 hover:gap-6">
								<nu-typography type="cta-text" class="">Découvrez nos autres projets</nu-typography>
								<nu-arrow right />
							</div>
						</nu-link>
					</div>
				</div>
			</section>

			<section>
				<nu-section-break class="small-container px-layout self-center overflow-hidden relative">
					<h2 data-aos="slide-up">
						<nu-typography type="title">Apprenez-nous <br />votre métier</nu-typography>
					</h2>
					<nu-link label="Ouvrir le formulaire de contact" to="?contact">
						<nu-button class="mt-4">
							Créons de la valeur
						</nu-button>
					</nu-link>
				</nu-section-break>
			</section>

			<section id="cases" class="py-20 bg-chinese-black text-alabaster flex flex-col">
				<div class="small-container px-layout self-center flex flex-col justify-between pt-16 gap-16 relative">
					<h2 data-aos="slide-up">
						<nu-typography type="title" class="max-w-[776px]">Si vous en avez besoin, on peut sûrement vous le
						fabriquer.</nu-typography>
					</h2>
					<DataQuery v-slot="{ data }" resource="dossiers">
						<nu-swiper :items="data" v-slot="{ item }">
							<nu-link :label="`Découvrez le cas ${item.title}`" :to="item.path" :disabled="item.disabled">
								<nu-tile
									:title="item.title"
									:category="item.category"
									:picture="item.picture"
									:caption="item.caption"
									:disabled="item.disabled"
								/>
							</nu-link>
						</nu-swiper>
					</DataQuery>
					<div class="relative">
						<div class="absolute h-[1px] bg-alabaster w-screen left-0 bottom-0">
							<ClientOnly>
								<Parallaxy :speed="800" axis="x" direction="opposite">
									<div class="bg-cinnabar h-[1px] w-[30px] z-20 relative"/>
								</Parallaxy>
							</ClientOnly>
						</div>
					</div>
				</div>
				<div id="services" class="small-container px-layout w-full flex flex-col gap-12 py-20">
					<div class="flex flex-col gap-12">
						<div data-aos="slide-up">
							<nu-typography type="title" class="py-10">Nos services</nu-typography>
						</div>
						<nu-lined-list :entries="services" />
					</div>
				</div>
			</section>

			<section id="partners" class="py-16 bg-onyx text-alabaster">
				<div class="px-layout small-container flex gap-12 flex-col @md:flex-row justify-between @md:items-center">
					<h2 data-aos="slide-up">
						<nu-typography type="subtitle">Nos<br />partenaires.</nu-typography>
					</h2>
					<div class="flex gap-8 justify-center">
						<div v-for="(partner, index) in partners" :key="index">
							<nu-link :to="partner.link" :label="`Aller sur le site de notre partenaire ${partner.name}`" target="_blank">
								<img :src="partner.picture" height="100%" width="100%" class="h-[30px] w-full" :alt="`Logo ${partner.name}`" :title="`Logo ${partner.name}`" loading="lazy"/>
							</nu-link>
						</div>
					</div>
				</div>
			</section>

			<section class="bg-silver relative overflow-hidden">
				<nu-section-break class="small-container px-layout place-self-center text-stroke-chinese-black" variant="light">
					<nu-typography type="headline">Commençons <br />à discuter.</nu-typography>
					<nu-link label="Ouvrir le formulaire de contact" to="?contact">
						<nu-button class="mt-4">
							Nous contacter
						</nu-button>
					</nu-link>
				</nu-section-break>
			</section>
		</div>
	</div>
</template>
