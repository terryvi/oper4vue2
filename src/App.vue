
import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routerConfig from './router/'
import App from './App'

Vue.use(VueRouter)
Vue.use(Element)

const router = new VueRouter(routerConfig);
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})