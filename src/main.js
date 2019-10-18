import Vue from 'vue'
import App from './App.vue'
import router from '../plugins/router'
import store from '../plugins/store'

Vue.config.productionTip = false

import './assets/css/base.css'  // 公共样式全局暴露
import './assets/css/mui.min.css'
// import './assets/js/mui.min.js'
// import './assets/js/mui.js'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

