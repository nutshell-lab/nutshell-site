<script lang="ts" setup>
const route = useRoute()
type Crumb = { path: string, name: string }
const crumbs = computed(() => route.path.replace(/\/\/*/g,"/").replace(/\/+$/,"").split('/').reduce((acc, crumb) => {
	const last_path = acc[acc.length - 1]?.path || ''
	return acc.concat({
		path: `${last_path}${crumb}/`,
		name: crumb.replaceAll('-', ' ') || 'Accueil'
	})
}, <Crumb[]>[]))
</script>

<template>
	<nav id="breadcrumbs">
		<ul class="flex gap-6">
			<li v-for="(crumb, i) in crumbs" :key="i" class="flex gap-6 items-center">
				<div>
					<!-- i === crumbs.length - 1 -->
					<nu-link :label="`Aller sur la page ${crumb.name}`" :to="crumb.path" :disabled="true">
						<nu-typography type="cta-text" class="normal-case text-onyx" :class="{ 'opacity-50 font-medium': i === crumbs.length - 1, 'underline underline-offset-2': i !== crumbs.length - 1 }">
							<div class="capitalize-first">{{ crumb.name }}</div>
						</nu-typography>
					</nu-link>
				</div>
				<div v-if="i !== crumbs.length - 1" class="bg-cinnabar h-[6px] w-[6px]" />
			</li>
		</ul>
	</nav>
</template>
