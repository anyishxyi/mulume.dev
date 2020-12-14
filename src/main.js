import Vue from 'vue'
import VueMeta from 'vue-meta'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

import '@/styles/index.scss' // global css

import router from './router'

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

new Vue(VueMeta, Buefy, {
  render: h => h(App),
  router,
  refreshOnceOnNavigation: true
}).$mount('#app')
