<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy'
</script>

<template>
    <nu-layout>
        <div class="bg-alabaster font-inter">
            <div class="bg-chinese-black py-40 relative">
                <div class="flex gap-14 absolute -right-12 bottom-0">
                    <nu-typography type="hero-title-filled" class="!text-[220px] !leading-[148px]">404</nu-typography>
                </div>
            </div>
            <section class="relative">
                <div class="flex gap-14 vertical-text rotate-180 absolute -right-10 mt-10">
                    <nu-typography type="hero-title-dark-filled" class="!text-[160px] !leading-[140px]">404</nu-typography>
                </div>
                <div class="container px-layout @lg:-mt-10 -mt-6 flex flex-col @lg:gap-8 gap-0">
                    <nu-typography type="hero-title-primary" class="@lg:!text-[110px] !text-[70px] @lg:leading-[90px] leading-[80px]">Désolé.</nu-typography>
                    <nu-typography type="hero-title-primary" class="@lg:!text-[110px] !text-[70px] @lg:leading-[90px] leading-[80px]">Page</nu-typography>
                    <nu-typography type="hero-title-dark-filled" class="@lg:!text-[110px] !text-[70px] @lg:leading-[90px] leading-[80px]">Introu<br class="@md:hidden block"/>vable.</nu-typography>

                    <div class="relative my-24 py-10">
                        <div class="ml-auto max-w-[600px] flex flex-col @md:flex-row gap-12 @lg:items-center relative>">
                            <div class="absolute top-0 right-0">
                                <div class="absolute h-[1px] bg-chinese-black w-screen right-0 bottom-0">
                                    <ClientOnly>
                                        <Parallaxy :speed="200" axis="x">
                                            <div class="bg-cinnabar h-[1px] w-[30px] z-20 relative"/>
                                        </Parallaxy>
                                    </ClientOnly>
                                </div>
                            </div>
                            <div class="flex-1"><nu-typography type="subtitle">Pas de panique on vous raccompagne</nu-typography></div>
                            <div class="">
                                <nu-link label="Envoyer nous un mail" to="/">
                                    <nu-button>
                                        Page d'accueil
                                    </nu-button>
                                </nu-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </nu-layout>
</template>