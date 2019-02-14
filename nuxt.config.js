const pkg = require('./package')

module.exports = {
  mode: 'spa',

  head: {
    title: "专业验血",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/css/common.css'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],

  build: {
    transpile: [/^element-ui/],

    extend(config, ctx) {
      
    }
  }
}
