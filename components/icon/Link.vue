<script lang="ts" setup>
defineProps({
    width: { type: Number, default: 20 },
    height: { type: Number, default: 20 },
})
</script>

<template>
	<div class="cursor-pointer hover:text-chinese-black text-cinnabar transition-all duration-200">
		<svg role="img" aria-label="icon copy link" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.438 49.94">
            <path d="M28.269 25.04a6.8 6.8 0 0 0-5.91-3.71h-.14a6.734 6.734 0 0 0-4.689 1.89l-9.552 9.17a6.754 6.754 0 0 0-.192 9.56 6.79 6.79 0 0 0 9.576.2s3.266-3.08 4.692-4.51c3.013 1.07 7.777.72 7.777.72l-8.376 8.04a12.674 12.674 0 1 1-17.57-18.27l9.552-9.17a12.688 12.688 0 0 1 17.929.36 12.539 12.539 0 0 1 1.259 1.53zm-6.12-.16a6.777 6.777 0 0 0 5.91 3.7.646.646 0 0 0 .139.01 6.731 6.731 0 0 0 4.688-1.89l9.553-9.17a6.77 6.77 0 1 0-9.384-9.76s-3.266 3.08-4.693 4.5c-3.013-1.07-7.776-.72-7.776-.72l8.375-8.04a12.674 12.674 0 1 1 17.571 18.27l-9.553 9.17a12.675 12.675 0 0 1-17.928-.35 13.244 13.244 0 0 1-1.259-1.53z" fill="currentColor" stroke="currentColor" fill-rule="evenodd"></path>
        </svg>
	</div>
</template>


