<script lang="ts" setup>
defineProps({
	title: String,
	highlight: { type: String, required: false },
	picture: String,
	disabled: { type: Boolean, default: false },
	description: { type: String, required: false },
	slug: String,
})
</script>

<template>
	<article :style="{'--image-url': `url('${picture}')`}" :class="`tile relative text-alabaster border border-alabaster min-w-[300px] w-full @md:w-[375px] h-[376px] flex flex-col bg-[image:var(--image-url)]`">
		<div class="overflow-hidden tile__inner relative h-full w-full">
			<div class="mix-blend-multiply absolute h-full w-full" :class="{ 'bg-cinnabar': !disabled, 'bg-onyx': disabled }"/>
			<div class="z-20 px-6 py-8 h-full w-full">
				<div class="z-10 relative h-full flex flex-col justify-between">
					<div class="flex flex-col gap-4">
						<header class="font-bold text-2xl">
							{{ title }}
						</header>
						<div>
							<p>{{ description }}</p>
						</div>
					</div>
					<div class="flex justify-between items-center">
						<div class="px-2"><nu-arrow top-right :class="{ 'hidden': disabled }" /></div>
						<div class="font-black text-5xl">{{ highlight }}</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.tile__inner::before {
	@apply bg-chinese-black w-[130%] h-[130%] left-[-15%] top-[-10%] absolute transition z-10 ease-in-out duration-500 mix-blend-normal;
	transform: rotate(5deg);
	content: '';
}
.tile:hover .tile__inner::before {
	transform: translate3d(400px, 0px, 0px) rotate(5deg);
}

</style>
