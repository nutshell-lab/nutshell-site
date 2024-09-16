<script lang="ts" setup>
defineProps({
	word: {
		type: String,
		default: "Nutshell"
	}
})
</script>

<template>
	<nu-parallax :speed="300" axis="x">
		<template #fallback>
			<!-- this will be rendered on server side -->
			<div class="flex gap-14 relative left-[-267px]">
				<template v-for="x in Array(3).keys()">
					<nu-typography type="hero-title">{{ word }}</nu-typography>
					<nu-typography type="hero-title-filled">{{ word }}</nu-typography>
				</template>
			</div>
		</template>
		<div class="flex gap-14">
			<template v-for="x in Array(6).keys()">
				<nu-typography type="hero-title">{{ word }}</nu-typography>
				<nu-typography type="hero-title-filled">{{ word }}</nu-typography>
			</template>
		</div>
	</nu-parallax>
</template>
