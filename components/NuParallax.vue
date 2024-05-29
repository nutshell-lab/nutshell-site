<script lang="ts" setup>

const Parallaxy = defineAsyncComponent(() =>
  import('@lucien144/vue3-parallaxy')
)

</script>

<template>
	<ClientOnly>
		<slot name="fallback" />
		<Parallaxy v-bind="$attrs">
			<slot />
		</Parallaxy>
	</ClientOnly>
</template>
