import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//axios 定义全局
Vue.prototype.$axios = axios

Vue.config.productionTip = false
//引入mock模拟数据
import '@/mock/mockServer'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
