import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nm_theme: ''
  },
  mutations: {
    SET_USER_THEME(state, theme) {
      state.nm_theme = theme === '' ? 'ligthMode' : 'darkMode'
			Cookies.set('nm-theme', state.nm_theme, { expires: 365 })
    },
    GET_USER_THEME() {
			const theme = Cookies.getJSON('nm-theme')
			this.state.nm_theme = ( theme === undefined ) ? 'lightMode' : theme
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('SET_USER_THEME', theme)
    },
    getTheme({ commit }) {
      commit('GET_USER_THEME')
    }
  }
})