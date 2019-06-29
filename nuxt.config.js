const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700|Questrial|Acme|Roboto|Rubik+Mono+One&display=swap' },
    ],
    script: [
      {
        src : '/js/jquery.js',
        type : 'text/javascript'
      },
      {
        src : '/js/perfectScrollBar.js',
        type : 'text/javascript'
      },
      {
        src : '/js/bannerSlider.js',
        type : 'text/javascript'
      },
      {
        src : '/js/main.js',
        type : 'text/javascript'
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    
    // '~assets/styles/bootstrap.css',
    // '~assets/styles/flexslider.css',
    // // '~assets/styles/font-awesome.css',
    // '~assets/styles/owl.carousel.css',
    // '~assets/styles/owl.theme.css',
    // '~assets/styles/smoothbox.css',
    '~assets/styles/style.css',
    '~assets/styles/workout.css',
    '~assets/styles/banner.css',
    '~assets/styles/table.css',
    '~assets/styles/main.css',
  ],

  script : [
    '~assets/js/main.js',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/moment.js',
    './plugins/sliderActivate.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL :  'https://allsportsapi.com/api/basketball/'
  },
  env: {
    AsAPIkey: 'f4923df15680d23685a89254c006b9f94acd6189c91d1fb6541aa7d124bb6a4d'
  },
  transition:{
    name:'fade',
    mode:'out-in'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
