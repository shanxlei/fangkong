import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'




import '@/icons' // icon
import '@/permission' // permission control

import axios from 'axios'

axios.defaults.baseURL = 'http://www.nihao.com';
axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token')|| '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.response.use(function (response) {
 
  // 200 : 成功
  // 400：失败  ，msg内容就是错误信息
  // 401：登陆超时，跳转到登陆页面
  if (response.data.code == 400) {
    Vue.$message.error(response.data.msg);
  }
  if (response.data.code == 401) {
    window.localStorage.removeItem('token')
    store.dispatch('user/logout')
    router.push(`/login`)
  }
  if (response.data.code == 200) {
    return response;
  }

 
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.prototype.$axios= axios;

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}


 

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
