// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/plausible'],
  plausible: {
    domain: 'plausible.nutshell-lab.com'
  }
})
