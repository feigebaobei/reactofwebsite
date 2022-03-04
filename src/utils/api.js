import axios from 'axios'
import { useNavigate } from "react-router-dom"
// import qs from 'qs'
// import router from '@/router/index'
// import store from '@/vuex/index.js'

let option = {
  baseURL: 'http://localhost:4000/',
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
        // 进入登录页面
        // router.push({
        //   path: '/login'
        // })xxx
        console.log('replace');
        let navigate = useNavigate()
        navigate('/', {replace: true})
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
  payOrder: (params, opt = {}) => {
    // console.log
    return instance(opt).post('/students', params)
  },
}

export default obj
