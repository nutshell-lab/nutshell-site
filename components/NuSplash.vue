<script lang="ts" setup>
</script>

<template>
	<div class="bg-right-top bg-bottom h-screen flex flex-col items-center justify-center md:bg-[url('assets/logo_nutshell_top_right_red_full.svg')] w-full bg-contain bg-no-repeat">
		<div class="z-10">
			<slot>
				<div class="flex items-center gap-4">
					<nu-logo :width="300" :symbol="true" :text="true" :suffix="false" :colors="['cinnabar', 'alabaster', 'alabaster']"/>
				</div>
			</slot>
		</div>
		</div>
</template>
