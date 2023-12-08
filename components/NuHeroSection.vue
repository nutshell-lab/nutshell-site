<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
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
					<nu-link label="Envoyez-nous un email" to="mailto:hello@nutshell-lab.com">
						<nu-button>{{ cta }}</nu-button>
					</nu-link>
				</slot>
			</div>
			<div class="bg-chinese-black h-full w-[1px] absolute right-0 top-0 overflow-hidden hidden @lg:block">
				<ClientOnly>
					<Parallaxy :speed="300" axis="y" direction="opposite">
						<div class="bg-cinnabar h-[30px] w-[1px] z-20 relative"/>
					</Parallaxy>
				</ClientOnly>
			</div>
		</div>
	</div>
</template>
