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
	<div class="h-screen px-4 py-20 flex flex-col">
		<nu-caption class="h-1/3">
			<slot name="caption">
				{{ caption }}
			</slot>
		</nu-caption>
		<div class="px-4 flex flex-col h-full justify-between">
			<slot name="title">
				<nu-title>
					{{ title }}
				</nu-title>
			</slot>
			<p class="text-3xl">
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
</template>
