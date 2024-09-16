import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },

 imports: {
					presets: [
									{
													from: 'vee-validate',
													imports: ['useForm']
									}
					]
	},

 // vite: {
	// 	plugins: [vsharp()],
	// },
	css: ['~/assets/css/main.css'],

 modules: [
					'@nuxtjs/plausible',
					'@nuxtjs/tailwindcss',
					'@nuxt/content',
					'nuxt-simple-sitemap',
					'nuxt-route-meta',
					"@nuxt/image"
	],

 plausible: {
					domain: 'nutshell-lab.com',
					apiHost: 'https://plausible.nutshell-lab.com'
	},

 site: {
					url: 'https://nutshell-lab.com',
	},

 content: {
					contentHead: false
	},

 sitemap: {
					strictNuxtContentPaths: true,
					exclude: [
									'/mentions-legales',
									'/faq',
									'/cgv',
									'/services'
					],
	},

 ignore: [
					process.env.CF_PAGES == "1" ? 'pages/dev/*' : '',
					process.env.CF_PAGES == "1" ? 'pages/faq.vue' : '',
					process.env.CF_PAGES == "1" ? 'pages/cgv.vue' : '',
					process.env.CF_PAGES == "1" ? 'pages/services.vue' : '',
	],

 // fonts: {
	// 	families: [
	// 		// do not resolve this font with any provider from `@nuxt/fonts`
	// 		{ name: 'Silka', provider: 'local' },
	// 		// only resolve this font with the `google` provider
	// 		{ name: 'Inter', provider: 'local' },
	// 	],
	// 	experimental: {
	// 	  // You can enable support for adding preload links to the initially rendered HTML.
	// 	  // There is a known upstream issue with rendering unaesthetic links with a `../` in the URL.
	// 	  addPreloadLinks: true
	// 	}
	// },
	app: {
					pageTransition: { name: 'page', mode: 'out-in' },
					head: {
									htmlAttrs: {
											lang: 'fr'
									},
									meta: [
													{
																	name: 'theme-color',
																	content: '#161616',
													},
									],
									link: [
													{
																	rel: 'icon',
																	href: '/favicon.ico'
													},
													{
																	rel: 'apple-touch-icon',
																	href: '/apple-touch-icon.png'
													}
									]
					}
	},

 compatibilityDate: '2024-09-16'
})