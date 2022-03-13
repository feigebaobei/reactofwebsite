import axios from 'axios'
// import qs from 'qs'
// import router from '@/router/index'
// import store from '@/vuex/index.js'
import config from '../config'

let option = {
  // baseURL: 'http://localhost:4000/',
  baseURL: `http://${config.serveHost}:${config.servePort}/`,
  timeout: 5000,
  headers: {
    // Authorization: `bearer ${store.state.user.token}`
    // Authorization: `bearer ${store.getters.getToken()}`
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  },
  withCredentials: true
}

let instance = (opt) => {
  let inst = axios.create(Object.assign({}, option, opt))
  inst.interceptors.request.use(config => { // config是axios的配置项
    // config.headers.Authorization = `bearer ${store.getters.getToken}`
    // 因生命周期的原因需要在请求前添加Authorization
    // console.log(config)
    return config
  }, error => {
    return Promise.reject(error)
  })
  inst.interceptors.response.use(response => {
    return response
  }, error => {
    let err = null
    switch (error.response.status) {
      case 401:
        err = {error: '', message: 'no login'}
        window.location.replace(window.location.origin + '/login')
        break
      case 403:
        // err = {error: '', message: 'no login'}
        err = error
        break
      default:
        err = error
        break
    }
    return Promise.reject(err)
  })
  return inst
}

const obj = {
  // test
//   root: params => {
//     return instance.post('users', params)
//   },
//   testCookie: params => {
//     return instance.get('users', params)
//   },
//   dishTest: params => {
//     return instance.post('dish/test', params)
//   },
  postLevelCert: (params, opt = {}) => {
    // console.log
    return instance(opt).post('/students/levelCert', params)
  },
  login: (params, opt = {}) => {
    // return instance(opt).get('/users/login', {params})
    return instance(opt).post('/users/login', params)
  },
  getLevelCert: (params, opt = {}) => {
    return instance(opt).get('/students/levelCert', {params})
  }
}

export default obj
