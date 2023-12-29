<script lang="ts" setup>
defineProps({
    width: { type: Number, default: 20 },
    height: { type: Number, default: 20 },
})
</script>

<template>
	<div class="cursor-pointer hover:text-chinese-black text-cinnabar transition-all duration-200">
		<svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M31.41 90.66c37.74 0 58.39-31.3 58.39-58.39v-2.64A41.79 41.79 0 0 0 100 19a41.57 41.57 0 0 1-11.8 3.24 20.62 20.62 0 0 0 9-11.37 40.55 40.55 0 0 1-13 5 20.52 20.52 0 0 0-35.49 14 22.67 22.67 0 0 0 .52 4.68A58.29 58.29 0 0 1 6.92 13.11a20.6 20.6 0 0 0 6.37 27.41A20.75 20.75 0 0 1 4 38v.28a20.55 20.55 0 0 0 16.45 20.08 20 20 0 0 1-5.4.72 20.27 20.27 0 0 1-3.85-.36A20.53 20.53 0 0 0 30.37 73a41.15 41.15 0 0 1-25.49 8.8A39.47 39.47 0 0 1 0 81.49a58.39 58.39 0 0 0 31.41 9.17" fill="currentColor" stroke="currentColor"></path>
        </svg>
	</div>
</template>


