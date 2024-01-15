<script lang="ts" setup>
definePageMeta({
  theme: 'light',
})
</script>

<template>
    <div>
        <section class="bg-silver">
            <div class="px-layout container pt-44 pb-24">
                <h1 data-aos="slide-up">
                    <nu-typography type="hero-title-filled">Si vous en avez besoin, on peut sûrement vous le
                    fabriquer.</nu-typography>
                </h1>
            </div>
        </section>
        <section id="cases" class="@lg:py-32 py-20 @lg:bg-gradient-to-b bg-chinese-black from-silver from-[240px] to-chinese-black to-[240px] text-alabaster flex flex-col">
            <div class="containr px-layout flex @lg:flex-row flex-col @lg:gap-24 gap-8 relative items-stretch">
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

        <section>
            <nu-section-break class="small-container px-layout place-self-center text-stroke-chinese-black" variant="light">
                <nu-typography type="headline">Commençons <br />à discuter.</nu-typography>
                <nu-link label="Envoyer nous un mail" to="mailto:hello@nutshell-lab.com">
                    <nu-button class="mt-4">Nous contacter</nu-button>
                </nu-link>
            </nu-section-break>
        </section>
    </div>
</template>

<style>

.left::before {
    @apply hidden @lg:block absolute bg-gradient-to-b from-silver from-[112px] to-chinese-black to-[112px] z-10 h-full w-[50vw] right-0 top-0;
    content: '';
}

.left::after {
    @apply hidden @lg:block absolute bg-gradient-to-b from-chinese-black from-[178px] to-alabaster to-[178px] z-10 h-[calc(100%+64px)] w-[1px] right-0 bottom-0;
    content: '';
}

</style>