<script lang="ts" setup>
	import NuLogoChip from '~/components/NuLogoChip.vue'

	defineProps({
		variant: {type: String, default: "dark"}
	})
</script>

<template>
	<div class="container">
		<div v-if="variant == 'light'">
			<div class="flex flex-col items-center text-center h-[504px] justify-center uppercase gap-6">
				<slot />
			</div>
		</div>
		<div v-else>
			<div class="flex flex-col h-[504px] justify-center gap-6">
				<nu-logo-chip class="text-cinnabar relative top-14 right-4 z-0"/>
				<div class="z-10 flex flex-col justify-center gap-6">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

