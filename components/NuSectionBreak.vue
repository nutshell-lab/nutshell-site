<script lang="ts" setup>
defineProps({
    variant: { type: String, default: "dark" },
	watermark: { type: Boolean, default: false }
})
</script>

<template>
	<div class="container">
		<div v-if="variant == 'light'">
			<div class="flex flex-col items-center text-center h-[504px] justify-center gap-6">
				<slot />
			</div>
			<nu-watermark v-if="watermark" class="font-normal hidden @2xl:block"/>
		</div>
		<div v-else>
			<div class="flex flex-col h-[504px] justify-center gap-6">
				<nu-logo-chip class="text-cinnabar relative z-0"/>
				<div class="z-10 flex flex-col justify-center gap-6">
					<slot />
				</div>
				<nu-watermark v-if="watermark" />
			</div>
		</div>
	</div>
</template>
