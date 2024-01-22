<script lang="ts" setup>
const props = defineProps({
    color: { type: String, default: 'chinese-black'},
})
</script>

<template>
	<button :class="`!outline-none button relative font-inter ${props.color} cursor-pointer text-sm w-fit uppercase text-center p-[5px]`" >
		<div class="overflow-hidden button__inner relative transition ease-in-out duration-500">
			<div class="z-10 relative px-6 py-4 ">
				<nu-typography type="text-link" class="!font-medium"><slot /></nu-typography>
			</div>
		</div>
	</button>
</template>

<style>
.button.alabaster {
	@apply text-chinese-black
}
.button.chinese-black {
	@apply text-alabaster
}
.button.alabaster::before {
	@apply w-full h-[calc(50%-6px)] border-t border-r border-l border-alabaster absolute left-0 top-0;
	content: '';
}
.button.alabaster::after {
	@apply w-full h-[calc(50%-6px)] border-b border-r border-l border-alabaster absolute left-0 bottom-0;
	content: '';
}
.button.chinese-black::before {
	@apply w-full h-[calc(50%-6px)] border-t border-r border-l border-chinese-black absolute left-0 top-0;
	content: '';
}
.button.chinese-black .button__inner {
	@apply bg-chinese-black
}
.button.alabaster .button__inner {
	@apply bg-alabaster
}
.button.chinese-black::after {
	@apply w-full h-[calc(50%-6px)] border-b border-r border-l border-chinese-black absolute left-0 bottom-0;
	content: '';
}
.button__inner::before {
	@apply bg-cinnabar w-[200%] h-[200%] left-[-210%] top-[-50%] absolute transition z-10 ease-in-out duration-500;
	transform: rotate(5deg);
	content: '';
}
.button__inner::after {
	@apply bg-cinnabar h-[6px] w-[6px] right-0 bottom-0 absolute;
	content: '';
}

.button:hover .button__inner::before {
	transform: translate3d(100%, 0px, 0px) rotate(5deg);
}

.button:hover .button__inner {
	@apply text-chinese-black
}

.button:focus .button__inner::before {
	transform: translate3d(100%, 0px, 0px) rotate(5deg);
}

.button:focus .button__inner {
	@apply text-chinese-black
}

</style>
