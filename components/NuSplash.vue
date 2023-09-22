<script lang="ts" setup>
</script>

<template>
	<div class="h-screen bg-chinese-black flex flex-col items-center justify-center">
		<div class="flex items-center gap-4">
			<slot>
				<nu-logo :symbol="false" :text="false" :suffix="true"/>
			</slot>
		</div>
	</div>
</template>
