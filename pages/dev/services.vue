<script lang="ts" setup>
definePageMeta({
  theme: 'light',
})
</script>

<template>
    <div class="bg-chinese-black text-alabaster">
        <section class="px-layout container pt-40 pb-40">
            <div class="@md:pr-24 flex flex-col gap-24 relative">
                <h1 data-aos="slide-up">
                    <nu-typography type="hero-title" class="text-stroke-alabaster">Services</nu-typography>
                </h1>
                <div class="text-right ml-auto flex flex-col gap-6">
                    <nu-typography type="title">
                        Nous pensons que nous devrions vivre dans un monde ou toute entreprise
                        devrait travailler avec l'outil qui lui correspond.<br />
                    </nu-typography>
                    <nu-typography type="title" class="text-cinnabar">
                        <strong >Et notre mission est de rendre cela possible.</strong>
                    </nu-typography>
                </div>
            </div>
        </section>

        <section class="py-layout py-32 container border-t border-onyx">
            <div class="flex flex-row gap-32">
                <div class="flex-shrink">
                    <nu-typography type="title" class="font-normal text-onyx">/0<span class="text-cinnabar">1</span></nu-typography>
                </div>
                <div class="flex-1">
                    <nu-typography type="headline-filled">Produits<br />et SaaS</nu-typography>
                </div>
                <div class="flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </section>

        <section class="py-layout py-32 container border-t border-onyx">
            <div class="flex flex-row gap-32">
                <div class="flex-shrink">
                    <nu-typography type="title" class="font-normal text-onyx">/0<span class="text-cinnabar">2</span></nu-typography>
                </div>
                <div class="flex-1">
                    <nu-typography type="headline-filled">Dev<br />sur-mesure</nu-typography>
                </div>
                <div class="flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </section>

        <section class="py-layout py-32 container border-t border-onyx">
            <div class="flex flex-row gap-32">
                <div class="flex-shrink">
                    <nu-typography type="title" class="font-normal text-onyx">/0<span class="text-cinnabar">3</span></nu-typography>
                </div>
                <div class="flex-1">
                    <nu-typography type="headline-filled">Design et<br />ergonomie</nu-typography>
                </div>
                <div class="flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </section>

        <section class="py-layout py-32 container border-t border-onyx">
            <div class="flex flex-row gap-32">
                <div class="flex-shrink">
                    <nu-typography type="title" class="font-normal text-onyx">/0<span class="text-cinnabar">4</span></nu-typography>
                </div>
                <div class="flex-1">
                    <nu-typography type="headline-filled">Data et<br />Business<br />Intelligence</nu-typography>
                </div>
                <div class="flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </section>

        <section class="bg-silver">
            <nu-section-break class="small-container px-layout place-self-center text-stroke-chinese-black" variant="light">
                <nu-typography type="headline">Une question<br />sans réponse ? </nu-typography>
                <nu-link label="Ouvrir le formulaire de contact" to="?contact">
                    <nu-button class="mt-4">
                        Nous contacter
                    </nu-button>
                </nu-link>
            </nu-section-break>
        </section>
    </div>
</template>

<style>
@reference "~/assets/css/main.css";

.test div {
    @apply w-[150px]
}

</style>