<script lang="ts" setup>

type Resources = 'dossiers' | 'projets'

const props = defineProps({
    resource: {
        type: String as PropType<Resources>,
        requried: true,
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

const { data: _data, pending, error, refresh } = await useAsyncData(
  `data-${props.resource}`,
  async () => {
    let data
    switch(props.resource) {
        case 'projets':
            data = await import('~/data/projets').then(m => m.default || m)
            break;
        default: data = await import('~/data/dossiers').then(m => m.default || m);
    }
    return data as any[]
  }
)

const data = computed(() => (_data.value || [])
    ?.filter((item) => !!props.where ? props.where(item) : item)
)

</script>

<template>
    <slot v-bind="{ data, pending, error, refresh }" />
</template>