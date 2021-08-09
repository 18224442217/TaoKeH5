import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// ui 框架
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import { CountDown } from 'vant'
Vue.use(CountDown)
Vue.use(Vant)
// 懒加载
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
