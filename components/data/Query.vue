<script lang="ts" setup>
import projects from '~/data/projets'
import dossiers from '~/data/dossiers'

type Resources = 'dossiers' | 'projets'

const props = defineProps({
    resource: {
        type: String as PropType<Resources>,
        required: true,
        default: 'dossiers'
    },
    /**
     * Filter results
     */
    where: {
        type: Function as PropType<(a: any) => boolean>,
        required: false,
        default: undefined
    },
})

const data = computed(() => {
        let data
        switch(props.resource) {
            case 'projets':
                data = projects
                break;
            default: data = dossiers
        }
        return (data || [])?.filter((item) => !!props.where ? props.where(item) : item)
    }
)

</script>

<template>
    <slot v-bind="{ data }" />
</template>
