<script lang="ts" setup>
import NuLogo from '~/components/NuLogo.vue'
import NuButton from '~/components/NuButton.vue'
import NuTitle from '~/components/NuTitle.vue'
import NuCaption from '~/components/NuCaption.vue'
import NuHeroSection from '~/components/NuHeroSection.vue'
import NuSectionBreak from '~/components/NuSectionBreak.vue'
</script>

<template>
	<div class="bg-chinese-black gap-8 w-full h-96 flex justify-center items-center">
		<nu-logo />
	</div>
	<div class="w-full flex justify-center">
		<div class="container px-2">
			<div class="my-20">
				<div class="text-xs uppercase font-inter">nutshell_system</div>
				<h2 class="text-5xl uppercase font-black">logo</h2>
				<div class="my-20 grid grid-cols-2 gap-8">
					<div class="col-span-2 font-silka text-3xl">Default to Picto</div>
					<div class="text-2xl bg-raisin-black text-alabaster flex pl-4 items-center">&lt;nu-logo /&gt;</div>
					<div class="w-fit"><nu-logo class=""/></div>

					<div class="col-span-2 font-silka text-3xl">With text</div>
					<div class="text-2xl bg-raisin-black text-alabaster flex pl-4 items-center">&lt;nu-logo :text="true" /&gt;</div>
					<nu-logo :text="true" />

					<div class="col-span-2 font-silka text-3xl">With text and suffix</div>
					<div class="text-2xl bg-raisin-black text-alabaster flex pl-4 items-center">&lt;nu-logo <br/>:text="true" <br/>:suffix="true"/&gt;</div>
					<nu-logo :text="true" :suffix="true" />

					<div class="col-span-2 font-silka text-3xl">Only text and suffix</div>
					<div class="text-2xl bg-raisin-black text-alabaster flex pl-4 items-center">&lt;nu-logo <br/> :symbol="false" <br/> :text="true" <br/> :suffix="true"/&gt;</div>
					<nu-logo :symbol="false" :text="true" :suffix="true" />

					<div class="col-span-2 font-silka text-3xl">Apply colors</div>
					<div class="text-2xl bg-raisin-black text-alabaster flex pl-4 items-center">&lt;nu-logo <br/> :symbol="true" <br/> :text="true" <br/> :suffix="true" <br/> :colors="['lime', 'cinnabar', 'onyx']" /&gt;</div>
					<nu-logo :symbol="true" :text="true" :suffix="true" :colors="['lime', 'cinnabar', 'onyx']" />
				</div>
			</div>
			<div class="my-20">
				<div class="text-xs uppercase font-inter">nutshell_system</div>
				<h2 class="text-5xl uppercase font-black">colors</h2>
				<div class="py-8 grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-6">
					<div class="flex">
						<div class="bg-cinnabar w-20 h-20" />
						<span class="vertical-text font-bold text-xs">cinnabar</span>
					</div>
					<div class="flex">
						<div class="bg-alabaster w-20 h-20" />
						<span class="vertical-text font-bold text-xs">alabaster</span>
					</div>
					<div class="flex">
						<div class="bg-chinese-black w-20 h-20" />
						<span class="vertical-text font-bold text-xs">chinese<br/>black</span>
					</div>
					<div class="flex">
						<div class="bg-onyx w-20 h-20" />
						<span class="vertical-text font-bold text-xs">onyx</span>
					</div>
					<div class="flex">
						<div class="bg-raisin-black w-20 h-20" />
						<span class="vertical-text font-bold text-xs">raisin<br/>black</span>
					</div>
					<div class="flex">
						<div class="bg-lime w-20 h-20" />
						<span class="vertical-text font-bold text-xs">lime</span>
					</div>
				</div>

				<div>
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
				</div>

				<div>
					<nu-section-break />
				</div>

				<div class="">
					<div class="my-8">
						<div class="font-inter uppercase text-xs">FONTS</div>
						<h5 class="font-silka uppercase mb-4 text-3xl font-black">Cinnabar</h5>
						<p class="font-inter">Cinnabar (/ˈsɪnəˌbɑːr/; from Ancient Greek κιννάβαρι (kinnábari)), or cinnabarite (/ˌsɪnəˈbɑːraɪt/), is the bright scarlet to brick-red form of mercury(II) sulfide (HgS). It is the most common source ore for refining elemental mercury and is the historic source for the brilliant red or scarlet pigment termed vermilion and associated red mercury pigments.</p>
					</div>
					<div class="my-8">
						<div class="font-inter uppercase text-xs">FONTS</div>
						<h5 class="font-silka uppercase mb-4 text-3xl font-black">Alabaster</h5>
						<p class="font-inter">Alabaster is a mineral and a soft rock used for carvings and as a source of plaster powder. Archaeologists, geologists, and the stone industry have different definitions and usages for the word alabaster. In archaeology, the term alabaster is a category of objects and artefacts made from the varieties of two different minerals: (i) the fine-grained, massive type of gypsum, and (ii) the fine-grained, banded type of calcite.</p>
					</div>
					<div class="my-8">
						<div class="font-inter uppercase text-xs">FONTS</div>
						<h5 class="font-silka uppercase mb-4 text-3xl font-black">Chinese Black</h5>
						<p class="font-inter">Chinese Black (黑, hēi), corresponding to water, is generally understood as a neutral color although appearing in many negative contexts in idioms and common names. "Black help" (黑幫, hēibāng) is the usual name for Chinese organized crime and the Thick Black Theory of the late Qing intellectual Li Zongwu (李宗吾, 12079–1943) is an exhortation to Machiavellianism. In modern China, black is used in clothing, especially in professional contexts.</p>
					</div>
					<div class="my-8">
						<div class="font-inter uppercase text-xs">FONTS</div>
						<h5 class="font-silka uppercase mb-4 text-3xl font-black">Onyx</h5>
						<p class="font-inter">Onyx is the parallel-banded variety of chalcedony, an oxide mineral. Agate and onyx are both varieties of layered chalcedony that differ only in the form of the bands; agate has curved bands while onyx has parallel bands.</p>
					</div>
					<div class="my-8">
						<div class="font-inter uppercase text-xs">FONTS</div>
						<h5 class="font-silka uppercase mb-4 text-3xl font-black">Black Raisin</h5>
						<p class="font-inter">Raisin black, Raisin varieties depend on the type of grape and appear in a variety of sizes and colors including green, black, brown, purple, blue, and yellow. Seedless varieties include the sultana (the common American type is known as Thompson Seedless in the United States), the Zante currants (black Corinthian raisins, Vitis vinifera L. var. Apyrena) and Flame grapes.</p>
					</div>
					<div class="my-8">
						<div class="font-inter uppercase text-xs">FONTS</div>
						<h5 class="font-silka uppercase mb-4 text-3xl font-black">Lime</h5>
						<p class="font-inter">Alabaster is a mineral and a soft rock used for carvings and as a source of plaster powder. Archaeologists, geologists, and the stone industry have different definitions and usages for the word alabaster. In archaeology, the term alabaster is a category of objects and artefacts made from the varieties of two different minerals: (i) the fine-grained, massive type of gypsum, and (ii) the fine-grained, banded type of calcite.</p>
						<p class="font-inter">Lime, A lime is a citrus fruit, which is typically round, green in color, 3–6 centimetres (1.2–2.4 in) in diameter, and contains acidic juice vesicles. There are several species of citrus trees whose fruits are called limes, including the Key lime (Citrus aurantiifolia), Persian lime, Makrut lime, and desert lime.</p>
					</div>
				</div>

				<div>
					<div class="flex flex-col">
						<div class="font-silka bg-chinese-black text-alabaster flex flex-col gap-8 py-20 px-20">
							<span>Silka</span>
							<span class="text-9xl">Aa</span>
							<div class="flex flex-col">
								<span>0123456789</span>
								<span>abcdefghijklmnopqrstuvwxyz</span>
								<span class="uppercase">abcdefghijklmnopqrstuvwxyz</span>
							</div>
						</div>
						<div class="font-inter bg-cinnabar text-alabaster flex flex-col gap-8 py-20 px-20">
							<span>Inter</span>
							<span class="text-9xl">Aa</span>
							<div class="flex flex-col">
								<span>0123456789</span>
								<span>abcdefghijklmnopqrstuvwxyz</span>
								<span class="uppercase">abcdefghijklmnopqrstuvwxyz</span>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div class="flex flex-col">
						<div class="font-silka bg-chinese-black text-alabaster flex flex-col gap-8 py-20 px-20">
							<span>Silka</span>
							<div class="flex flex-col">
								<span class="font-thin">This is thin</span>
								<span class="font-extralight">This is extralight</span>
								<span class="font-light">This is light</span>
								<span class="font-normal">This is normal</span>
								<span class="font-medium">This is medium</span>
								<span class="font-semibold">This is semibold</span>
								<span class="font-bold">This is bold</span>
								<span class="font-black">This is black</span>
							</div>
						</div>
					</div>
					<div class="font-inter bg-cinnabar text-alabaster flex flex-col gap-8 py-20 px-20">
						<span>Inter</span>
						<div class="flex flex-col">
							<span class="font-thin">This is thin</span>
							<span class="font-extralight">This is extralight</span>
							<span class="font-light">This is light</span>
							<span class="font-normal">This is normal</span>
							<span class="font-medium">This is medium</span>
							<span class="font-semibold">This is semibold</span>
							<span class="font-bold">This is bold</span>
							<span class="font-black">This is black</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-cinnabar gap-8 w-full h-96 flex justify-center items-center">
		<nu-logo color="alabaster"/>
	</div>
</template>
