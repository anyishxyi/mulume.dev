import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en.json'
import frLocale from './fr.json'

Vue.use(VueI18n)

const messages = { fr: frLocale, en: enLocale }
export function getLanguage() {
  const savedLanguage = Cookies.get('language')
  
  if (savedLanguage) return savedLanguage

  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const lang = Object.keys(messages).find(locale => language.includes(locale))
  
  return lang ? lang : 'en'
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n