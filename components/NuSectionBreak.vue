<script lang="ts" setup>
	import NuLogoChip from '~/components/NuLogoChip.vue'

	defineProps({
		variant: {type: String, default: "dark"}
	})
</script>

<template>
	<div v-if="variant == 'light'">
		<div class="flex flex-col items-center text-center font-black h-[504px] text-[40px] justify-center uppercase gap-6">
			<slot />
		</div>
	</div>
	<div v-else>
		<div class="flex flex-col font-black h-[504px] text-[40px] justify-center gap-6">
			<nu-logo-chip class="text-cinnabar"/>
			<slot />
		</div>
	</div>
</template>

