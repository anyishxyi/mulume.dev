import Vue from 'vue'
import App from './App.vue'

import '@/styles/index.scss' // global css

import router from './router'

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
