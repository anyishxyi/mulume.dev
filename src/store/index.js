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
    },
    SET_USER_LANGUAGE(state, language) {
			Cookies.set('nm-language', language, { expires: 365 })
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('SET_USER_THEME', theme)
    },
    getTheme({ commit }) {
      commit('GET_USER_THEME')
    },
		/**
		* Only setLanguage() methode because we can already get language in lang module
		 */
    setLanguage({ commit }, language) {
      commit('SET_USER_LANGUAGE', language)
    }
  }
})