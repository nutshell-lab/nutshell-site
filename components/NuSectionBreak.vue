<script lang="ts" setup>
	import NuTitle from '~/components/NuTitle.vue'

	export interface Props {
		breaks: string[]
	}

	const props = withDefaults(defineProps<Props>(), {
		breaks: ['top', 'bottom']
	})

	const breakTop = props.breaks.includes('top')
	const breakBottom = props.breaks.includes('bottom')
</script>

<template>
	<div>
		<hr v-if="breakTop" class="text-chinese-black border-2" />
		<div class="mx-8 py-48 text-center text-5xl">
			<nu-title><slot /></nu-title>
		</div>
		<hr v-if="breakBottom" class="text-chinese-black border-2" />
	</div>
</template>
