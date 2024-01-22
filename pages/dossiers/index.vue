<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy'

definePageMeta({
  theme: 'light',
})
</script>

<template>
    <div>
        <section class="bg-alabaster">
            <div class="px-layout container pt-44 pb-24">
                <h1 data-aos="slide-up">
                    <nu-typography type="hero-title-filled">Si vous en avez besoin, on peut sûrement vous le
                    fabriquer.</nu-typography>
                </h1>
            </div>
        </section>
        <section id="cases" class="@lg:py-32 py-20 @lg:bg-gradient-to-b bg-chinese-black from-alabaster from-[240px] to-chinese-black to-[240px] text-alabaster flex flex-col">
            <div class="px-layout flex @lg:flex-row flex-col @lg:gap-24 gap-8 relative items-stretch">
                <div class="left flex flex-col justify-end @lg:w-[400px] pr-24 pb-10 relative">
                    <h2 data-aos="slide-up" class="@lg:text-right relative z-20">
                        <nu-typography type="title" class="font-normal">Découvrez tous nos <strong>dossiers</strong></nu-typography>
                    </h2>
                </div>
                <div class="flex-1 flex flex-col @lg:max-w-[calc(100%-496px)]">
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
                </div>
            </div>
        </section>
        <section id="articles" class="px-layout relative overflow-hidden">
            <div class="@2xl:ml-[400px] @lg:border-l @lg:pl-24 @md:py-32 py-20 flex flex-col gap-6">
                <ClientOnly>
                    <Parallaxy :speed="200" axis="y">
                        <div class="vertical-text rotate-180"><nu-typography type="hero-title" class="text-stroke-silver !text-[380px] absolute bottom-0 -right-[372px] whitespace-pre">articles articles articles articles</nu-typography></div>
                    </Parallaxy>
                </ClientOnly>        
                <div class="flex flex-col gap-20">
                    <h2 data-aos="slide-up" class="relative z-20">
                        <nu-typography type="title" class="font-normal">Ou parcourez<br />nos <strong>derniers articles</strong></nu-typography>
                    </h2>
                    <ContentQuery v-slot="{ data }" path="/blog/" :sort="{ created_at: -1 }" :without="['body']">
                        <template v-if="data && Array.isArray(data)">
                            <div v-for="(item, index) in data" data-aos="slide-up">
                                <nu-link :label="`Lire l'article ${item.title}`" :to="item._path">
                                    <article class="tile flex @xl:flex-row flex-col @xl:gap-12 items-center">
                                        <div class="picture__wrapper w-full @xl:w-[fit-content] relative">
                                            <div role="img" :alt="item.image?.alt" :style="{'--image-url': `url('${item.image?.src || '/blog/default.webp'}')`}" class="w-full h-[300px] @xl:aspect-video bg-center bg-cover picture bg-raisin-black relative bg-[image:var(--image-url)] overflow-hidden">
                                                <div class="picture__inner bg-cinnabar" />
                                            </div>
                                        </div>
                                        <div class="flex-1 flex gap-12 py-8">
                                            <div class="flex flex-col gap-4 pr-6 w-full justify-center">
                                                <div class="flex gap-6 items-center">
                                                    <div><nu-typography type="caption" class="!font-bold">{{ item.created_at }}</nu-typography></div>
                                                    <div class="bg-onyx h-[6px] w-[6px]" />
                                                    <div><nu-typography type="cta-text" class="!font-bold">{{ item.category }}</nu-typography></div>
                                                </div>
                                                <nu-typography type="subtitle">{{item.title}}</nu-typography>
                                                <div>{{ item.short_description }}</div>
                                                <div class="text-cinnabar link flex items-center gap-4 transition-all duration-500">
                                                    <nu-typography type="cta-text">Lire l'article</nu-typography>
                                                    <nu-arrow right />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-onyx h-[1px] w-[45%] absolute right-0 -bottom-0" />
                                    </article>
                                </nu-link>
                            </div>
                        </template>
                    </ContentQuery>
                </div>
                <div class="text-center pt-32">
                    <nu-typography type="subtitle" class="font-normal">
                        C'est tout pour le moment<br />
                        (<strong>revenez plus tard</strong>)
                    </nu-typography>
                </div>
            </div>
        </section>

        <section class="bg-silver relative overflow-hidden">
            <nu-section-break class="small-container px-layout place-self-center text-stroke-chinese-black" variant="light" watermark>
                <nu-typography type="headline">Commençons <br />à discuter.</nu-typography>
                <nu-link label="Ouvrir le formulaire de contact" to="?contact">
                    <nu-button class="mt-4">
                        Nous contacter
                    </nu-button>
                </nu-link>
            </nu-section-break>
        </section>
    </div>
</template>

<style scoped>

.left::before {
    @apply hidden @lg:block absolute bg-gradient-to-b from-alabaster from-[112px] to-chinese-black to-[112px] z-10 h-full w-[50vw] right-0 top-0;
    content: '';
}

.left::after {
    @apply hidden @lg:block absolute bg-gradient-to-b from-chinese-black from-[178px] to-alabaster to-[178px] z-10 h-[calc(100%+64px)] w-[1px] right-0 bottom-0;
    content: '';
}

.picture__inner {
	@apply w-[130%] h-[130%] left-[-140%] top-[-15%] absolute transition z-10 ease-in-out duration-500 mix-blend-multiply;
	transform: rotate(5deg);
}
.tile:hover .picture__inner {
	transform: translate3d(100%, 0px, 0px) rotate(5deg);
}

.picture__wrapper::after {
    @apply h-full w-full absolute border top-[8px] left-[8px];
    content: ''
}

.picture::before {
    @apply h-full w-full absolute border-silver top-[5px];
    content: ''
}

.tile:hover .link {
	@apply gap-6
}

</style>