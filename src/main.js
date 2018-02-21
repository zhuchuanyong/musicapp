// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入字体图标
import 'font-awesome/css/font-awesome.css'
// 引入mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
