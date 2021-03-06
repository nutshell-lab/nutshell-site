const pkg = require('./package')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nutshell Lab - We build things',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nut-logo.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
    // script: [{ src: '/js/crisp.js' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#5e2e70' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/gradient.styl',
    '~/assets/style/vue-typer.styl',
    '~/assets/style/animation.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify'],

  mode: 'spa',
  target: 'static',

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-139712399-1'
      }
    ],
    [
      'nuxt-facebook-pixel-module',
      {
        track: 'PageView',
        pixelId: '838209666535750',
        disabled: false
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** Nuxt.js middlewares
  */
  // serverMiddleware: ['~/api/index.js']
}
