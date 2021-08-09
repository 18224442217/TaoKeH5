import axios from 'axios'
import Cache from '../utils/cache'
// import store from '../store'
import { Toast, Notify } from 'vant'
import Router from '../router/index'

// const baseURL = '/'
const service = axios.create({
  // process.env.VUE_APP_BASE_API
  baseURL:window.api_url,
  crossDomain:true,
  withCredentials: true, // 允许携带cookie
  timeout: 50000, // 超时时间
  retry: 2, // 超时请求次数
  retryDelay: 1000 // 超时请求间隙
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 处理请求之前的配置
    const token = Cache.getToken()
    if (token) config.headers['token'] = token
    config.headers['client_id'] = 'webApp'
    config.headers['client_secret'] = 'webApp'
    if (config.headers.isUpload) {
      return config
    }
    // config.data = {
    //   n: config.data
    // }
    return config
  },
  (error) => {
    // 请求失败的处理
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    // 处理响应数据
    if (response.status === 200) {

      let res = response.data
      
      if (res?.code === 1) {
        return Promise.resolve(res)
      } else {
        if (res.msg) Toast.fail(res.msg)
        return Promise.reject(res?.msg || '')
      }
    } else {
      const error = new Error(response.statusText)
      Notify({
        message: '请求失败，请稍后重试',
        type: 'danger',
        duration: 2000
      })
      return Promise.reject(error)
    }
  },
  (error) => {
    // 请求超时的之后，抛出 error.code = ECONNABORTED的错误..错误信息是 timeout of  xxx ms exceeded
    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') !== -1
    ) {
      const config = error.config
      // If config does not exist or the retry option is not set, reject
      if (!config || !config.retry) return Promise.reject(error)

      // Set the variable for keeping track of the retry count
      config.__retryCount = config.__retryCount || 1

      // Check if we've maxed out the total number of retries
      if (config.__retryCount >= config.retry) {
        return Promise.reject(error)
      }

      // Increase the retry count
      config.__retryCount += 1

      // Create new promise to handle exponential backoff
      const backoff = new Promise(resolve => {
        setTimeout(() => {
          // console.log("resolve");
          resolve()
        }, config.retryDelay || 1)
      })

      return backoff.then(() => $axios(config))
    } else if (error && error.response) {
      if (error.response.status === 401) {
        Notify({
          message: '权限校验失败，请重新登录后重试',
          type: 'danger',
          duration: 2000
        })
        Router.push({ name: 'login' })
      } else {
        Notify({
          message: '请求失败，请稍后重试',
          type: 'danger',
          duration: 2000
        })
      }
      return Promise.reject(error.response.data)
    }
  }
)

export default service
