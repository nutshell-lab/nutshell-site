<script lang="ts" setup>
defineProps({
    caption: String,
    title: String,
    text: String,
    cta: String,
})
</script>

<template>
	<div class="h-auto py-20 flex flex-col justify-center">
		<div class="flex flex-col gap-14 py-16 relative">
			<nu-typography type="caption">
				<slot name="caption">
					{{ caption }}
				</slot>
			</nu-typography>
			<div class="flex flex-col gap-6">
				<slot name="title">
					<nu-typography type="title">
						{{ title }}
					</nu-typography>
				</slot>
				<slot name="text">
					{{ text }}
				</slot>
				<slot name="cta">
					<nu-link label="Ouvrir le formulaire de contact" to="?contact">
						<nu-button class="mt-4">
							{{ cta }}
						</nu-button>
					</nu-link>
				</slot>
			</div>
			<div class="bg-chinese-black h-full w-[1px] absolute right-0 top-0 overflow-hidden hidden @lg:block">
				<nu-parallax :speed="300" axis="y" direction="opposite">
					<div class="bg-cinnabar h-[30px] w-[1px] z-20 relative"/>
				</nu-parallax>
			</div>
		</div>
	</div>
</template>
