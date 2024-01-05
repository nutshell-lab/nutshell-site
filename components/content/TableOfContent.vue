<script setup lang="ts">
import type { MarkdownRoot } from '@nuxt/content/dist/runtime/types';

type HeadingNode = { link: string, value?: string, children: HeadingNode[]}
const table_of_content = (body: MarkdownRoot | null) => {
    const headings = body?.children.filter(({ tag }) => tag === 'h2' || tag === 'h3')
    return headings?.reduce((acc, h) => {
        const heading = {
            link: `#${h.props?.id}`,
            value: h.children?.[0]?.value,
            children: []
        }
        if (h.tag === 'h2') return acc.concat(heading)
        else return acc.map((head, i) => i === (acc.length - 1) ? { ...head, children: head.children.concat(heading) } : head)
    }, <HeadingNode[]>[])
}
</script>

<template>
    <nav class="flex flex-col sm:flex-row py-12 gap-8 border-t border-b mt-12 items-center">
        <div class="sm:vertical-text flex-shrink sm:rotate-180">
            <nu-typography type="title" class="uppercase">Sommaire</nu-typography>
        </div>
        <div class="flex-1">
            <ContentDoc v-slot="{ doc }">
                <ol>
                    <li v-for="heading_2 in table_of_content(doc.body)">
                        <nu-link :to="heading_2.link" :label="`Aller vers la section ${heading_2.value}`">{{ heading_2.value }}</nu-link>
                        <ol v-if="heading_2.children.length > 0">
                            <li v-for="heading_3 in heading_2.children">
                                <nu-link :to="heading_3.link" :label="`Aller vers la sous-section ${heading_3.value} de la section ${heading_2.value}`">{{ heading_3.value }}</nu-link>
                            </li>
                        </ol>
                    </li> 
                </ol>
            </ContentDoc>
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