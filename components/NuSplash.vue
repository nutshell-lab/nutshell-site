<script lang="ts" setup>
</script>

<template>
	<div class="bg-bottom h-screen flex flex-col items-center justify-center bg-[url('assets/logo_nutshell_red_full.png')] w-full bg-cover">
		<div class="z-10">
			<slot>
				<div class="flex items-center gap-4">
					<nu-logo :width="300" :symbol="true" :text="true" :suffix="false" :colors="['cinnabar', 'alabaster', 'alabaster']"/>
				</div>
			</slot>
		</div>
		</div>
</template>
