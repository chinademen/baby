const pkg = require('./package')

module.exports = {
  mode: 'spa',

  head: {
    title: "香港验血-香港亲子DNA检测胎儿性别鉴定机构-香港贝安验血官网",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'keywords',
        content:
          '香港贝安验血是香港政府注册的平台，致力于：香港验血鉴定、DNA检测化验、DNA产前亲子鉴定、胎儿性别鉴定等服务。主要合作化验所：香港时代化验所、达雅高化验所、PG化验所、HK-DNA化验所。香港验血|香港验血预约|香港验血网站|香港验血DNA|香港验血机构|香港验血流程|7周香港验血|香港DNA化验所|香港DNA检测'
      }
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
