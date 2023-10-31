<script lang="ts" setup>
defineProps({
    topRight: { type: Boolean, default: false },
    bottom: { type: Boolean, default: true },
    right: { type: Boolean, default: false },
})
</script>

<template>
	<div class="flex justify-center">
		<!-- TOP RIGHT -->
		<svg v-if="topRight" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_27_932)">
				<path d="M37.5 0H16.6667V1.66667H37.155L0.0100098 38.8117L1.18834 39.99L38.3333 2.845V23.3333H40V2.5C40 1.12167 38.8783 0 37.5 0Z" fill="#EDEBE8"/>
			</g>
			<defs>
				<clipPath id="clip0_27_932">
					<rect width="40" height="40" fill="white"/>
				</clipPath>
			</defs>
		</svg>

		<!-- RIGHT -->
		<svg v-else-if="right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_27_965)">
				<path d="M23.5415 10.8928L18.8245 6.17578L18.1175 6.88278L22.7355 11.5008H-0.000488281V12.5008H22.7335L18.1165 17.1178L18.8235 17.8248L23.5415 13.1068C24.1515 12.4968 24.1515 11.5028 23.5415 10.8928Z" fill="#EDEBE8"/>
			</g>
			<defs>
				<clipPath id="clip0_27_965">
					<rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"/>
				</clipPath>
			</defs>
		</svg>

		<!-- BOTTOM -->
		<svg v-else-if="bottom" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_4_179)">
				<path d="M21.8454 39.2357L29.707 31.374L28.5287 30.1957L20.832 37.8924L20.832 -0.00097695L19.1654 -0.000977023L19.1654 37.889L11.4704 30.194L10.292 31.3724L18.1554 39.2357C19.172 40.2524 20.8287 40.2524 21.8454 39.2357Z" fill="currentColor"/>
			</g>
			<defs>
				<clipPath id="clip0_4_179">
					<rect width="40" height="40" fill="currentColor"/>
				</clipPath>
			</defs>
		</svg>

	</div>
</template>
