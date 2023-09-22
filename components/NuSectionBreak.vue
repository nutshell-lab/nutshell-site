<script lang="ts" setup>
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
		<div class="mx-8 py-48 text-center font-bold text-silka text-5xl">
			<slot />
		</div>
		<hr v-if="breakBottom" class="text-chinese-black border-2" />
	</div>
</template>
