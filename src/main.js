import Vue from 'vue'
import VueMeta from 'vue-meta'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/fr'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss' // global css
import './assets/images'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

Vue.use(Element, { locale })

Vue.use(Buefy, VueMeta)

new Vue({
  render: h => h(App),
  router,
  refreshOnceOnNavigation: true
}).$mount('#app')
