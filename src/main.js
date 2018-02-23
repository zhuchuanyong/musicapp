// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// 引入字体图标
import 'font-awesome/css/font-awesome.css'
// 引入mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入axios
import axios from 'axios'
// 引入vuex store
import store from './store/index'
Vue.prototype.axios = axios
Vue.use(MintUi)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
