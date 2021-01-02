/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // getters,
  state: {
    userTheme: ''
  },
  mutations: {
    SET_USER_THEME(state, theme) {
      state.userTheme = theme
      console.log('state.userTheme : ', state.userTheme)
      localStorage.setItem('user-theme', JSON.stringify(state.userTheme))
    },
    CLEAR_USER_THEME() {
      localStorage.removeItem('user-theme')
      location.reload()
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('SET_USER_THEME', theme)
    },
    clearTheme({ commit }) {
      commit('CLEAR_USER_THEME')
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.userTheme
    }
  }
})
