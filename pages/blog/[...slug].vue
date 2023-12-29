<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy'
import Error from '/error.vue'

const url = useRequestURL()
</script>

<template>
    <div id="article" class="bg-alabaster font-inter">
        <ContentDoc>
            <template #not-found>
                <Error />
            </template>
            <template #default="{ doc }">
                <div class="bg-chinese-black pt-24 relative">
                    <div class="h-[64vh] overflow-hidden container @sm:px-layout">
                        <!-- <div class="absolute h-full w-full z-10 hidden @sm:block">
                            <div class="container px-layout h-full">
                                <div class="box h-full w-full relative" />
                            </div>
                        </div> -->
                        <div class="hidden @lg:block absolute top-48 -left-4">
                            <nu-link label="Aller à la liste des articles" to="/blog">
                                <nu-button color="alabaster">
                                    <div class="ml-64 my-2 text-left leading-[18px]">Aller à la liste<br />des articles</div>
                                </nu-button>
                            </nu-link>
                        </div>
                        <ClientOnly>
                            <Parallaxy :speed="70" axis="y" class="h-full">
                                <div :style="`--image-url: url(${doc.image.src})`" :class="`w-full h-[100vh] bg-center bg-cover bg-[image:var(--image-url)]`" />
                            </Parallaxy>
                        </ClientOnly>
                    </div>
                </div>
                <article class="container px-layout">
                    <div class="@md:py-24 py-12 border-chinese-black @sm:border-r flex flex-col @md:gap-16 gap-10 relative">
                        <h1 class="@sm:pr-layout" data-aos="slide-up">
                            <nu-typography type="hero-title-filled">{{ doc.title }}</nu-typography>
                        </h1>
                        <div class="relative pb-6 flex justify-between @sm:pr-layout gap-6">
                            <div class="flex gap-6 items-center">
                                <div><nu-typography type="caption" class="text-chinese-black !font-bold">{{ doc.created_at }}</nu-typography></div>
                                <div class="bg-cinnabar h-[6px] w-[6px]" />
                                <div><nu-typography type="cta-text" class="text-cinnabar !font-bold">{{ doc.category }}</nu-typography></div>
                            </div>
                            <nu-share :url="url" class="hidden @sm:flex" />
                            <div class="absolute bottom-0 right-0">
                                <div class="absolute h-[1px] bg-chinese-black w-screen right-0 bottom-0" />
                            </div>
                        </div>
                        <div class="relative content @sm:pr-layout flex flex-col gap-12 mb-20">
                            <ContentRenderer :value="doc" />
                            <div class="flex flex-col gap-6">
                                <nu-share :url="url" />
                                <div class="italic border-t pt-4 @lg:mr-0 mr-layout">
                                    <nu-typography type="cta-text">Rédigé avec soin par Nutshell</nu-typography>
                                    <div>Pour un lecteur attentif !</div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute right-0 bottom-0 flex flex-col gap-10 items-end @sm:mr-0 -mr-layout">
                            <nu-link label="Revenir en haut de la page" to="#article" class="mr-6"> 
                                <div class="flex items-center gap-4 hover:gap-6 transition-all duration-500 justify-center vertical-text rotate-180">
                                    <nu-typography type="cta-text">Haut de page</nu-typography>
                                    <nu-arrow bottom />
                                </div>
                            </nu-link>
                            <div class="flex gap-12 items-end">
                                <nu-link label="Aller à la liste des articles" to="/blog" class="mb-6"> 
                                    <div class="flex items-center gap-4 hover:gap-6 transition-all duration-500 justify-center">
                                        <nu-arrow left />
                                        <nu-typography type="cta-text">Aller à la liste des articles</nu-typography>
                                    </div>
                                </nu-link>
                                <div class="bg-cinnabar p-4 @lg:w-[160px] @md:w-[120px] w-[80px] @lg:h-[160px]  @md:h-[120px] h-[80px]">
                                    <img src="~/assets/logo_nutshell_white_full.webp" class="hover:rotate-180 transition-all duration-500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <section class="py-32 bg-chinese-black text-alabaster flex flex-col">
                    <div class="container px-layout flex flex-col gap-10">
                        <div data-aos="slide-up">
                            <nu-typography type="hero-title-filled" class="normal-case max-w-[776px]">Explorer d'avantage</nu-typography>
                        </div>
                        <div>
                            <ContentQuery v-slot="{ data }" path="/blog/" :limit="4" :where="{ category: doc.category, _path: { $ne: doc._path } }" :sort="{ created_at: -1 }" :without="['body']">
                                <template v-if="data && Array.isArray(data)">
                                    <nu-swiper :items="data" v-slot="{ item, index }">
                                        <nu-link :label="`Lire l'article ${item.title}`" :to="item._path">
                                            <nu-tile
                                                :title="item.title"
                                                :subtitle="`${item.created_at} ${item.category}`"
                                                :picture="item.image.src"
                                                :id="`Article 00${index + 1}`"
                                            />
                                        </nu-link>
                                    </nu-swiper>
                                </template>
                            </ContentQuery>
                        </div>
                    </div>
                </section>

                <section class="overflow-hidden relative">
                    <nu-section-break class="container px-layout place-self-center text-stroke-chinese-black" variant="light" watermark>
                        <nu-typography type="headline">Échangeons <br />des idées.</nu-typography>
                        <nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
                            <nu-button class="mt-4">Nous contacter</nu-button>
                        </nu-link>
                    </nu-section-break>
                </section>
            </template>
        </ContentDoc>
    </div>
</template>

<style scoped>
.content {
    @apply w-full @sm:max-w-[640px] @md:max-w-[872px] mx-auto
}

/* .box::before {
    @apply h-full bg-chinese-black absolute right-[100%];
    content: '';
    width: 50vw;
}
.box::after {
    @apply h-full bg-chinese-black absolute left-[100%];
    content: '';
    width: 50vw;
} */

.content {
    @apply text-onyx leading-7;
}

.content :deep(p) {
    @apply mb-6;
}

.content :deep(h2) {
    @apply text-chinese-black font-black font-silka text-3xl @md:text-4xl mt-20 mb-6;
}

.content :deep(h3) {
    @apply text-chinese-black font-black font-silka text-xl @md:text-2xl mt-12 mb-6;
}

.content :deep(ul) {
    @apply pl-8 list-disc mb-6
}

.content :deep(p a) {
    @apply text-cinnabar underline underline-offset-2
}

.content :deep(p:has(img)) {
    @apply my-20 -mx-layout
}


</style>