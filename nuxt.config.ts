// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['@nuxtjs/plausible', '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],
	plausible: {
		domain: 'nutshell-lab.com',
		apiHost: 'https://plausible.nutshell-lab.com'
	},
	site: {
		url: 'https://nutshell-lab.com',
	},
	app: {
		head: {
			script: [
				{
					defer: true,
					src: 'https://static.cloudflareinsights.com/beacon.min.js',
					'data-cf-beacon': '{"token": "165b78a79b8741cea254d27e292c3442"}'
				}
			]
		}
	}
})
