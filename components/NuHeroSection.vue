<script lang="ts" setup>
import NuButton from "~/components/NuButton.vue"
import NuLogo from "~/components/NuLogo.vue"
import NuTypography from "~/components/NuTypography.vue"
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
