<script setup lang="ts">

const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())
</script>

<template>
    <nav v-if="doc" class="flex flex-col sm:flex-row py-12 gap-8 border-t border-b mt-12 items-center">
        <div class="sm:vertical-text flex-shrink sm:rotate-180">
            <nu-typography type="title" class="uppercase">Sommaire</nu-typography>
        </div>
        <div class="flex-1">
            <ol>
                <li v-for="h2 in doc.body?.toc?.links">
                    <nu-link :to="`#${h2.id}`" :label="`Aller vers la section ${h2.text}`">{{ h2.text }}</nu-link>
                    <ol v-if="h2.children && h2.children.length > 0">
                        <li v-for="h3 in h2.children">
                            <nu-link :to="`#${h3.id}`" :label="`Aller vers la sous-section ${h3.text} de la section ${h2.text}`">{{ h3.text }}</nu-link>
                        </li>
                    </ol>
                </li> 
            </ol>
        </div>
    </nav>
</template>

<style scoped>

nav :deep(ol) {
    @apply !list-none font-silka !mb-0;
}

nav :deep(li a) {
    @apply transition-all duration-300 underline underline-offset-2;
}

nav :deep(li a:hover) {
    @apply ml-2;
}

nav :deep(li ol) {
    @apply mt-2;
}

nav :deep(li) {
    @apply font-black text-lg @md:text-xl mb-2;
}

nav :deep(li li) {
    @apply font-normal text-base;
}

</style>