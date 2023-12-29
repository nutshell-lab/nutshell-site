<script lang="ts" setup>
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/vue"
import "swiper/css"
import type Swiper from "swiper";

defineProps({
    items: { type: Array as PropType<any[]>, default: [] },
	spaceBetween: { type: Number, default: 24 },
	centeredSlides: { type: Boolean, default: false },
})

const swiper = ref<Swiper | undefined>()

const onSwiper = (s: Swiper) => {
	swiper.value = s
}
</script>

<template>
	<div class="flex flex-col gap-6">
		<div>
			<swiper-component
				:slides-per-view="'auto'"
				:space-between="spaceBetween"
				:centered-slides="centeredSlides"
				class="!overflow-visible w-full"
				@swiper="onSwiper"
			>
				<swiper-slide class="@sm:!w-[fit-content]" v-for="(item, index) in items">
					<div data-aos="slide-up" :data-aos-delay="50 * index">
						<slot v-bind="{ item, index }"/>
					</div>
				</swiper-slide>
			</swiper-component>
		</div>
		<button v-if="swiper" @click="swiper.slideNext()" class="flex items-center gap-4 justify-start @md:justify-end @md:px-32 px-8">
			<nu-typography type="cta-text">SWIPE</nu-typography><nu-arrow right />
		</button>
	</div>
</template>
