<script lang="ts" setup>
const props = defineProps({
    width: { type: Number, default: 31 },
})

const height = props.width * 1.42
const viewbox = `0 0 ${props.width} ${height}`
</script>

<template>
	<div>
		<svg role="img" aria-label="" :width="width" :height="height" :viewBox="viewbox" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.104183 0.164965L0.119227 5.06882C0.14065 8.05658 1.79259 10.7564 4.43835 12.1021L23.8807 21.9189L0.212855 34.2059L0.236037 43.9137L30.8209 27.8202L30.7833 15.8966L0.104183 0.164965Z" fill="currentColor"/>
		</svg>
	</div>
</template>
