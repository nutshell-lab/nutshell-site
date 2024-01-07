import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: {
		plugins: [vsharp()],
	},
	css: ['~/assets/css/main.css'],
	modules: ['@nuxtjs/plausible', '@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-simple-sitemap'],
	plausible: {
		domain: 'nutshell-lab.com',
		apiHost: 'https://plausible.nutshell-lab.com'
	},
	site: {
		url: 'https://nutshell-lab.com',
	},
	sitemap: {
		strictNuxtContentPaths: true,
		exclude: [
			'/mentions-legales',
			'/blog/**', // TODO: to remove after one article is written
		],
	},
	ignore: [
        process.env.CF_PAGES == "1" ? 'pages/dev/*' : '',
        process.env.CF_PAGES == "1" ? 'pages/blog/*' : '',  // TODO: to remove after one article is written
    ],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			meta: [
				{
					name: 'theme-color',
					content: '#161616',
				},
			],
			script: [
				{
					defer: true,
					src: 'https://static.cloudflareinsights.com/beacon.min.js',
					'data-cf-beacon': '{"token": "165b78a79b8741cea254d27e292c3442"}'
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
