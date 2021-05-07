import Vue from 'vue'
import VueMeta from 'vue-meta'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/fr'

import store from './store'
import App from './App.vue'
import router from './router'
import i18n from './lang'

import '@/assets/styles/index.scss' // global css
import '@/assets/images/index' //for svg files

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueMeta)

new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
  refreshOnceOnNavigation: true,
  // created () {
  //   const userTheme = localStorage.getItem('user-theme')
  //   if (userTheme) {
  //     const theme = JSON.parse(userTheme)
  //     this.$store.commit('SET_USER_THEME', theme)
  //   }
  // }
}).$mount('#app')
