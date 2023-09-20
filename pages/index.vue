<script lang="ts" setup>
import NuLogo from '~/components/NuLogo.vue'
import NuButton from '~/components/NuButton.vue'
import NuTitle from '~/components/NuTitle.vue'
import NuCaption from '~/components/NuCaption.vue'
import NuHeroSection from '~/components/NuHeroSection.vue'
import NuSectionBreak from '~/components/NuSectionBreak.vue'
import NuSplash from '~/components/NuSplash.vue'
</script>


<template>
	<div class="">
		<nu-splash />
		<div class="mx-2">
			<nu-hero-section
				title="Comprendre le métier et le valoriser avec la tech."
				cta="valorisons le votre"
				>
				<template #caption>
					Un studio de <b class="font-bold">développement sur-mesure</b> à votre service.
				</template>
				<template #text>
					Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment  pertinentes.
				</template>
			</nu-hero-section>
			<nu-section-break>
				Ils ont crée de la valeur.
			</nu-section-break>
		</div>
	</div>
</template>
