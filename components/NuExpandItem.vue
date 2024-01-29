<script lang="ts" setup>
const open = ref(false)
const toggle = () => (open.value = !open.value) 
</script>

<template>
	<div class="flex flex-col">
		<button class="flex gap-8 @md:gap-12 justify-between items-center" @click="toggle" :aria-expanded="open">
			<div class="flex-1 text-left">
				<slot name="activator">
					Placeholder
				</slot>
			</div>
			<div class="flex-shrink h-5 w-5 relative">
				<div class="absolute left-[calc(50%-1px)] top-0 w-[2px] h-full bg-chinese-black transition-all duration-300" :class="{ 'rotate-90': open }" />
				<div class="absolute top-[calc(50%-1px)] left-0 h-[2px] w-full bg-chinese-black" />
			</div>
		</button>
		<div :aria-hidden="!open" :class="{ 'max-h-[0px]': !open, 'max-h-[1000px]': open }" class="overflow-hidden transition-all duration-500">
			<div class="pb-12 pt-8">
				<slot />
			</div>
		</div>
	</div>
</template>
