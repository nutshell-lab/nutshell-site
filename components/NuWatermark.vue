<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>

<template>
	<div class="absolute @md:right-[14px] bottom-0 -right-[200px] flex flex-col watermark text-[12rem] leading-[6.75rem] rotate-180" :style="{writingMode: 'vertical-rl'}">
		<div>
			nutshellnutshellnutshell
		</div>
		<ClientOnly>
			<Parallaxy :speed="100" axis="y">
				<div>
					nutshellnutshellnutshell
				</div>
			</Parallaxy>
		</ClientOnly>
		<div>
			nutshellnutshellnutshell
		</div>
		<ClientOnly>
			<Parallaxy :speed="300" axis="y">
				<div>
					nutshellnutshellnutshell
				</div>
			</Parallaxy>
		</ClientOnly>
	</div>
</template>

<style>
.watermark {
	-webkit-text-stroke: 1.5px white;
	text-stroke: 1.5px white;
	font-weight: 600;
	font-family: 'Silka';
	color: transparent;
}
</style>
