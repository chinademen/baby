import axios from 'axios' 
import qs from 'qs' 
import { baseUrl } from './env.js'

// axios 配置
axios.defaults.timeout = 5000 // 设置请求超时
axios.defaults.baseURL = baseUrl // 默认请求地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  let URL = config.url.split(config.baseURL);
  return config
}, (error) => {
  console.error('错误的传参', 'fail')
  return Promise.reject(error)
})

// 返回
axios.interceptors.response.use((res) => {
  // 拦截器配置
  // if (res.data.success) {
  //   return Promise.reject(res)
  // }
  return res 
}, (error) => {
  // 请求失败
  return Promise.reject(error)
})

export default axios
