<script lang="ts" setup>
definePageMeta({
  theme: 'light',
})

enum GridTile {
    'large',
    'fit',
    'small_b',
    'small_t'
}
const grid = computed<GridTile[]>(() => [
    GridTile.large, GridTile.fit, GridTile.small_b,
    GridTile.small_t, GridTile.large, GridTile.fit
])
</script>

<template>
    <div class="bg-alabaster">
        <section class="px-layout small-container pt-60 pb-40">
            <div class="@md:pr-24 text-right flex flex-col items-end gap-12 relative">
                <h1 data-aos="slide-up">
                    <nu-typography type="hero-title-filled">Une sélection de quelques projets</nu-typography>
                </h1>
                <div class="text-onyx max-w-[400px]">
                    Avec un historique de plusieurs dizaines de projets nous ne pouvons pas tous les exposer.  Nous avons donc opté pour une brève compilation.
                </div>
                <div class="absolute right-0 w-[1px] h-screen bg-chinese-black hidden @md:block" />
            </div>
        </section>

        <section class="relative">
            <div class="h-[40%] w-full bg-silver absolute top-[300px]" />
            <div class="container px-layout pb-32">
                <div class="grid @xl:grid-cols-4 @md:grid-cols-3 grid-cols-2 gap-4 @lg:gap-10">
                    <DataQuery v-slot="{ data }" resource="projets">
                        <template v-for="(p, i) in data">
                            <div
                                v-if="grid[i] === GridTile.large"
                                class="w-full aspect-square col-span-2 relative overflow-hidden tile"
                                data-aos="slide-up"
                                :data-aos-delay="50 * i"
                                :class="{ 'disabled': p.disabled }"
                            >
                                <div class="tile__bg absolute h-full w-full">
                                    <div :style="{'--image-url': `url('${p.picture}')`}" class="w-full h-full bg-cover bg-[image:var(--image-url)]" />
                                </div>
                                <nu-link :label="`Découvrez le projet ${p.title}`" :to="p.path" :disabled="p.disabled">
                                    <div class="tile__content @lg:p-12 p-8 w-full h-full flex flex-col relative z-10 text-alabaster justify-between">
                                        <div class="ml-auto">
                                            <nu-typography type="hero-title-filled" >{{ p.highlight }}</nu-typography>
                                        </div>
                                        <div class="flex flex-col gap-12">
                                            <div>
                                                <nu-typography type="title" class="font-normal">{{ p.title }}</nu-typography>
                                            </div>
                                            <div class="@md:block hidden">
                                                {{ p.description }}
                                            </div>
                                        </div>
                                    </div>
                                </nu-link>
                            </div>
                            <div
                                v-else-if="grid[i] === GridTile.fit"
                                class="bg-onyx w-full h-full @md:aspect-[1/2] col-span-2 @md:col-span-1 relative overflow-hidden tile"
                                data-aos="slide-up"
                                :data-aos-delay="50 * i"
                                :class="{ 'disabled': p.disabled }"
                            >
                                <div class="tile__bg absolute h-full w-full">
                                    <div :style="{'--image-url': `url('${p.picture}')`}" class="w-full h-full bg-cover bg-center bg-[image:var(--image-url)]" />
                                </div>
                                <nu-link :label="`Découvrez le projet ${p.title}`" :to="p.path" :disabled="p.disabled">
                                    <div class="tile__content @lg:p-12 p-8 w-full h-full flex flex-col relative z-10 text-alabaster justify-between">
                                        <div class="ml-auto">
                                            <nu-typography type="headline-filled" >{{ p.highlight }}</nu-typography>
                                        </div>
                                        <div class="flex flex-col">
                                            <div>
                                                <nu-typography type="title" class="font-normal">{{ p.title }}</nu-typography>
                                            </div>
                                            <!-- <div class="description max-h-[0px] overflow-hidden">
                                                <div class="pt-12">
                                                    {{ p.description }}
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </nu-link>
                            </div>
                            <div
                                v-else
                                class="bg-onyx w-full aspect-square tile overflow-hidden"
                                data-aos="slide-up"
                                :data-aos-delay="50 * i"
                                :class="{ 'disabled': p.disabled, 'mt-auto': grid[i] === GridTile.small_b, 'mb-auto': grid[i] === GridTile.small_t }"
                            >
                                <div class="tile__bg absolute h-full w-full">
                                    <div :style="{'--image-url': `url('${p.picture}')`}" class="w-full h-full bg-cover bg-center bg-[image:var(--image-url)]" />
                                </div>
                                <nu-link :label="`Découvrez le projet ${p.title}`" :to="p.path" :disabled="p.disabled">
                                    <div class="tile__content @lg:p-12 p-6 w-full h-full flex flex-col relative z-10 text-alabaster justify-between">
                                        <div>
                                            <nu-typography type="subtitle" class="font-normal">{{ p.title }}</nu-typography>
                                        </div>
                                        <div class="ml-auto hidden @md:block">
                                            <nu-typography type="title" >{{ p.highlight }}</nu-typography>
                                        </div>
                                    </div>
                                </nu-link>
                            </div>
                        </template>
                    </DataQuery>
                </div>
            </div>
        </section>

        <section class="bg-silver">
            <nu-section-break class="small-container px-layout place-self-center text-stroke-chinese-black" variant="light">
                <nu-typography type="headline">Et si le prochain<br />était le votre ? </nu-typography>
                <nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
                    <nu-button class="mt-4">Nous contacter</nu-button>
                </nu-link>
            </nu-section-break>
        </section>
    </div>
</template>

<style scoped>
.tile::before {
	@apply bg-gradient-to-r from-cinnabar from-50% to-onyx to-50% w-[350%] h-[350%] left-[-210%] top-[-50%] absolute transition z-10 ease-in-out duration-500 mix-blend-multiply;
	transform: rotate(5deg);
	content: '';
}
.tile:hover:not(.disabled)::before{
	transform: translate3d(35%, 0px, 0px) rotate(5deg);
}

.tile__bg {
    @apply transition-all duration-500 ease-in-out;
}

.tile:hover .tile__bg {
	@apply scale-110
}

.tile .tile__content .description {
	@apply transition-[max-height] duration-500 ease-in-out
}

.tile:hover .tile__content .description {
	@apply max-h-[900px]
}

</style>