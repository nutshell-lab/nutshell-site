<script lang="ts" setup>
import NuLogo from '~/components/NuLogo.vue'
import NuButton from '~/components/NuButton.vue'
import NuTitle from '~/components/NuTitle.vue'
import NuCaption from '~/components/NuCaption.vue'
defineProps({
	caption: String,
	title: String,
	text: String,
	cta: String,
})
</script>

<template>
	<div class="h-screen px-4 py-32 flex flex-col justify-center">
		<div class="flex flex-col gap-14">
			<nu-caption class="">
				<slot name="caption">
					{{ caption }}
				</slot>
			</nu-caption>
			<div class="flex flex-col gap-6">
				<slot name="title">
					<nu-title>
						{{ title }}
					</nu-title>
				</slot>
				<p class="">
					<slot name="text">
						{{ text }}
					</slot>
				</p>
				<slot name="cta">
					<nu-button>
						{{ cta }}
					</nu-button>
				</slot>
			</div>
		</div>
	</div>
</template>
