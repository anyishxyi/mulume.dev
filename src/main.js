import Vue from 'vue'
import VueMeta from 'vue-meta'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss' // global css
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

Vue.use(Buefy, VueMeta)

new Vue({
  render: h => h(App),
  router,
  refreshOnceOnNavigation: true
}).$mount('#app')
