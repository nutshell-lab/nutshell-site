<script lang="ts" setup>
	import NuUseCaseTile from "./NuUseCaseTile.vue"
	import {Swiper, SwiperSlide} from 'swiper/vue'
	import 'swiper/css'

	defineProps({
		items: {type: Array, default: []}
	})
</script>

<template>
	<div class="flex flex-col gap-4">
		<!--div class="grid grid-flow-col grid-rows-1 gap-6"-->
		<div>
			<swiper
				:space-between="24">
				<swiper-slide class="max-w-[375px]" v-for="i in items">
					<nu-use-case-tile :title="i.title" :subtitle="i.subtitle" :picture="i.picture" :id="i.id" />
				</swiper-slide>
			</swiper>
		</div>
		<div class="flex items-center gap-4 justify-start md:justify-end md:px-32">
			<div class="uppercase font-light">SWIPE</div><nu-arrow :right="true" />
		</div>
	</div>
</template>
