import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './api/mock.js'
import axios from 'axios'

import '@/css/global.css'
import '@/assets/styles/base.css'
import '@/assets/styles/common.css'
import '@/assets/iconfont/iconfont.css'

import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
})
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
