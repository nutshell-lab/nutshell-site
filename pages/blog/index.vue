<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy'

</script>

<template>
    <div class="bg-alabaster font-inter">
        <section id="agency" class="relative bg-chinese-black pt-24">
            <div><nu-typography type="hero-title" class="text-stroke-raisin-black !text-[300px] absolute top-[200px] whitespace-pre">En avant</nu-typography></div>
            <div class="absolute top-[650px] left-[5vw]">
                <ClientOnly>
                    <Parallaxy :speed="200" axis="x" direction="opposite">
                        <div><nu-typography type="hero-title" class="text-stroke-raisin-black !text-[300px] whitespace-pre">Featured</nu-typography></div>
                    </Parallaxy>
                </ClientOnly>
            </div>
            <div class="container @lg:px-layout w-full h-full relative">
                <div class="text-alabaster @md:py-20 py-12 h-full flex flex-col justify-center relative overflow-hidden">
                    <div class="px-layout">
                        <nu-typography type="hero-title-filled">En avant</nu-typography>
                    </div>
                    <ContentQuery v-slot="{ data }" path="/blog/" :where="{ featured: true }" :sort="{ created_at: -1 }" :without="['body']">
                        <template v-if="data && Array.isArray(data)">
                            <div class="@xl:-mt-4 mt-4 relative">
                                <div class="bg-alabaster h-screen w-[1px] absolute right-0 bottom-0 z-10 @md:block hidden" />
                                <div class="bg-alabaster h-[200vh] w-[1px] absolute left-0 top-0 z-10 @md:block hidden" />
                                <nu-swiper :items="data" v-slot="{ item, index }" :space-between="220" centered-slides>
                                    <nu-link :label="`Lire l'article ${item.title}`" :to="item._path">
                                        <article class="tile max-w-full @lg:w-[700px] @sm:w-[600px] w-screen flex flex-col justify-between">
                                            <div :style="{'--image-url': `url('${item.image.src}')`}" class="@md:border-x border-y border-alabaster h-[300px] @md:h-[400px] bg-center bg-cover picture bg-raisin-black relative overflow-hidden bg-[image:var(--image-url)]">
                                                <div class="picture__inner bg-cinnabar" />
                                            </div>
                                            <div class="flex gap-12 py-8">
                                                <nu-typography type="subtitle" class="vertical-text rotate-180 font-inter font-bold text-cinnabar h-40 text-right px-2 uppercase">{{ `00${index + 1}` }}</nu-typography>
                                                <div class="flex flex-col gap-4 pr-6">
                                                    <div class="flex gap-6 items-center">
                                                        <div><nu-typography type="caption" class="!font-bold">{{ item.created_at }}</nu-typography></div>
                                                        <div class="bg-cinnabar h-[6px] w-[6px]" />
                                                        <div><nu-typography type="cta-text" class="text-cinnabar !font-bold">{{ item.category }}</nu-typography></div>
                                                    </div>
                                                    <nu-typography type="subtitle" class="">{{item.title}}</nu-typography>
                                                </div>
                                                <div class="h-[10px] w-[10px] bg-cinnabar absolute left-[1px] bottom-[1px]"/>
                                            </div>
                                            <div class="bg-onyx h-[1px] w-[70%] absolute right-0 -bottom-0" />
                                        </article>
                                    </nu-link>
                                </nu-swiper>
                            </div>
                        </template>
                    </ContentQuery>
                </div>
            </div>
            <!-- <div class="absolute h-[110px] w-[40vw] bg-alabaster bottom-0 left-0" /> -->
		</section>
        <section class="container px-layout">
            <div class="@md:py-32 py-20 @lg:border-l flex flex-col gap-6">
                <div>
                    <nu-typography type="headline-filled">Nos articles</nu-typography>
                </div>
                <div class="flex @xl:px-layout flex-col gap-20">
                    <ContentQuery v-slot="{ data }" path="/blog/" :sort="{ created_at: -1 }" :without="['body']">
                        <template v-if="data && Array.isArray(data)">
                            <div v-for="(item, index) in data" data-aos="slide-up">
                                <nu-link :label="`Lire l'article ${item.title}`" :to="item._path">
                                    <article class="tile flex @lg:flex-row flex-col @lg:gap-12 items-center">
                                        <div :style="{'--image-url': `url('${item.image.src}')`}" class="border border-alabaster h-[240px] @lg:h-[280px] @sm:h-[320px] w-full @xl:w-[620px] bg-center bg-cover picture bg-raisin-black relative overflow-hidden bg-[image:var(--image-url)]">
                                            <div class="picture__inner bg-cinnabar" />
                                        </div>
                                        <div class="flex gap-12 py-8">
                                            <div class="flex flex-col gap-4 pr-6 w-full justify-center">
                                                <div class="flex gap-6 items-center">
                                                    <div><nu-typography type="caption" class="!font-bold">{{ item.created_at }}</nu-typography></div>
                                                    <div class="bg-onyx h-[6px] w-[6px]" />
                                                    <div><nu-typography type="cta-text" class="!font-bold">{{ item.category }}</nu-typography></div>
                                                </div>
                                                <nu-typography type="subtitle">{{item.title}}</nu-typography>
                                                <div>{{ item.short_description }}</div>
                                                <nu-link label="Aller à la liste des articles" to="/blog"> 
                                                    <div class="text-cinnabar link flex items-center gap-4 transition-all duration-500">
                                                        <nu-typography type="cta-text">Lire l'article</nu-typography>
                                                        <nu-arrow right />
                                                    </div>
                                                </nu-link>
                                            </div>
                                        </div>
                                        <div class="bg-onyx h-[1px] w-[45%] absolute right-0 -bottom-0" />
                                    </article>
                                </nu-link>
                            </div>
                        </template>
                    </ContentQuery>
                </div>
            </div>
        </section>
    </div>
</template>


<style scoped>
.picture__inner {
	@apply w-[130%] h-[130%] left-[-140%] top-[-15%] absolute transition z-10 ease-in-out duration-500 mix-blend-multiply;
	transform: rotate(5deg);
}
.tile:hover .picture__inner {
	transform: translate3d(100%, 0px, 0px) rotate(5deg);
}

.tile:hover .link {
	@apply gap-6
}

</style>
