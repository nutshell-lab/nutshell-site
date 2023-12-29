import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: {
		plugins: [vsharp()],
	},
	css: ['~/assets/css/main.css'],
	modules: ['@nuxtjs/plausible', '@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-simple-sitemap', '@vite-pwa/nuxt'],
	plausible: {
		domain: 'nutshell-lab.com',
		apiHost: 'https://plausible.nutshell-lab.com'
	},
	pwa: {
		manifest: {
			name: 'Nutshell Lab',
			short_name: 'Nutshell',
			theme_color: '#161616',
		},
	},
	site: {
		url: 'https://nutshell-lab.com',
	},
	sitemap: {
		strictNuxtContentPaths: true,
		exclude: [
			'/mentions-legales',
			'/blog/**' // TODO: to remove after one article is written
		],
	},
	ignore: [
        process.env.CF_PAGES == "1" ? 'pages/dev/*' : '',
        process.env.CF_PAGES == "1" ? 'pages/blog/*' : '',  // TODO: to remove after one article is written
        process.env.CF_PAGES == "1" ? 'pages/cases/enterprise-resource-planning.vue' : ''  // TODO: to remove when it's completed
    ],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
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
