import Vue from 'vue'
import axios from '~/clientHttp/index.js'

Vue.prototype.$Axios = axios
Vue.use(axios)