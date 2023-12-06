<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import NuUseCaseTile from "./NuUseCaseTile.vue"
import "swiper/css"

defineProps({
    items: { type: Array as PropType<{ disabled: boolean, slug: string, title: string, subtitle: string, picture: string, id: string }[]>, default: [] },
})
</script>

<template>
	<div class="flex flex-col gap-4">
		<div>
			<swiper
				:slides-per-view="'auto'"
				:space-between="24"
				class="!overflow-visible"
			>
				<swiper-slide class="max-w-[375px]" v-for="(i, index) in items">
					<div data-aos="slide-up" :data-aos-delay="50 * index">
						<nu-link :label="`Découvrez le cas ${i.title}`" :to="`/work/${i.slug}`" :disabled="i.disabled">
							<nu-use-case-tile :title="i.title" :subtitle="i.subtitle" :picture="i.picture" :id="i.id" :disabled="i.disabled"/>
						</nu-link>
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="flex items-center gap-4 justify-start @md:justify-end @md:px-32">
			<div class="uppercase font-light">SWIPE</div><nu-arrow :right="true" />
		</div>
	</div>
</template>
