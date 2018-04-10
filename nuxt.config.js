const resolve = require('path').resolve
const normalizeCssPath = require.resolve('normalize.css')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'panacea',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A vue/nuxt website for the js cms panacea.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kelly+Slab|Open+Sans:400,700&amp;subset=greek,latin-ext' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Styles configuration
  */
  css: [
    normalizeCssPath
  ],
  /*
  ** Modules configuration
  */
  modules: [
    ['nuxt-sass-resources-loader', [
      resolve(__dirname, 'assets/stylesheets/global.scss'),
    ]]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
