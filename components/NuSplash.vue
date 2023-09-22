<script lang="ts" setup>
</script>

<template>
	<div class="h-screen flex flex-col items-center justify-center">
		<slot>
			<div class="flex items-center gap-4">
					<nu-logo :width="300" :symbol="true" :text="true" :suffix="false" :colors="['cinnabar', 'alabaster', 'alabaster']"/>
			</div>
		</slot>
	</div>
</template>
