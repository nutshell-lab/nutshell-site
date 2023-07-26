// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/plausible', '@nuxtjs/tailwindcss'],
  plausible: {
    domain: 'nutshell-lab.com',
    apiHost: 'https://plausible.nutshell-lab.com'
  }
})