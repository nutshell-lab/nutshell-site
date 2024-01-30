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
	vite: {
		plugins: [vsharp()],
	},
	css: ['~/assets/css/main.css'],
	modules: ['@nuxtjs/plausible', '@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-simple-sitemap', 'nuxt-route-meta'],
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
        process.env.CF_PAGES == "1" ? 'pages/faq/*' : '',
        process.env.CF_PAGES == "1" ? 'pages/cgv/*' : '',
        process.env.CF_PAGES == "1" ? 'pages/services/*' : '',
    ],
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
			script: [
				process.env.CF_PAGES == "1" ? {
					defer: true,
					src: 'https://static.cloudflareinsights.com/beacon.min.js',
					'data-cf-beacon': '{"token": "165b78a79b8741cea254d27e292c3442"}'
				} : {},
				{
					src: '//embed.typeform.com/next/embed.js'
				}
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
	}
})
