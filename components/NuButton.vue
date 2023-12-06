<script lang="ts" setup>
</script>

<template>
	<button class="button relative font-inter border text-cinnabar border-cinnabar bg-alabaster cursor-pointer text-sm w-fit uppercase text-center" >
		<div class="overflow-hidden button__inner relative transition ease-in-out duration-500">
			<div class="z-10 relative px-6 py-4 ">

				<slot />
			</div>
		</div>
	</button>
</template>

<style>
.button__inner::before {
	@apply bg-cinnabar w-[200%] h-[200%] left-[-210%] top-[-50%] absolute transition z-10 ease-in-out duration-500;
	transform: rotate(5deg);
	content: '';
}

.button:hover:hover .button__inner::before {
	transform: translate3d(100%, 0px, 0px) rotate(5deg);
}

.button:hover .button__inner {
	@apply text-alabaster
}

</style>
