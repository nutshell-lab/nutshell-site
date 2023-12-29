<script lang="ts" setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>

<template>
	<div class="absolute @md:right-[14px] bottom-0 -right-[200px] flex flex-col rotate-180 vertical-text">
		<div>
			<nu-typography type="hero-title" class="!font-bold text-stroke-white !normal-case !text-[12rem] !leading-[6.75rem]">nutshellnutshellnutshell</nu-typography>
		</div>
		<ClientOnly>
			<Parallaxy :speed="200" axis="y">
				<div>
					<nu-typography type="hero-title" class="!font-bold text-stroke-white !normal-case !text-[12rem] !leading-[6.75rem]">nutshellnutshellnutshell</nu-typography>
				</div>
			</Parallaxy>
		</ClientOnly>
		<div>
			<nu-typography type="hero-title" class="!font-bold text-stroke-white !normal-case !text-[12rem] !leading-[6.75rem]">nutshellnutshellnutshell</nu-typography>
		</div>
		<ClientOnly>
			<Parallaxy :speed="375" axis="y">
				<div>
					<nu-typography type="hero-title" class="!font-bold text-stroke-white !normal-case !text-[12rem] !leading-[6.75rem]">nutshellnutshellnutshell</nu-typography>
				</div>
			</Parallaxy>
		</ClientOnly>
	</div>
</template>
