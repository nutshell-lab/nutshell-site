<script lang="ts" setup>
defineProps({
    width: { type: Number, default: 20 },
    height: { type: Number, default: 20 },
})
</script>

<template>
	<div class="cursor-pointer hover:text-chinese-black text-cinnabar transition-all duration-200">
		<svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M39.62 100V54H24.87c-.75 0-.75 0-.75-.5V37c0-.5.25-.5.75-.5h14.75V22.25a24.75 24.75 0 0 1 2.25-10.5A19.54 19.54 0 0 1 52.12 2a22.75 22.75 0 0 1 9.76-2c3.75 0 7.75.25 11.5.25.74 0 1.5.25 2 .25s.51.25.51.5v14.75c0 .5-.25.5-.51.5h-8.76a21.88 21.88 0 0 0-4 .5 5.56 5.56 0 0 0-4.49 4.75 11.72 11.72 0 0 0-.26 3V36h16.75c.75 0 .75 0 .5.75-.5 3-.74 5.75-1.25 8.75a72.14 72.14 0 0 1-1 7.25c0 1 0 1-1 1H57.63V100Z" fill="currentColor" stroke="currentColor"></path>
        </svg>
	</div>
</template>


