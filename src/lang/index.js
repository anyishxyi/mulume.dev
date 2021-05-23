import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementFrLocale from 'element-ui/lib/locale/lang/fr'
import enLocale from './en.json'
import frLocale from './fr.json'

Vue.use(VueI18n)

const messages = {
  fr: {
    ...frLocale,
    ...elementFrLocale
  },
  en: {
    ...enLocale,
    ...elementEnLocale
  }
}

export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  // eslint-disable-next-line
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'fr'
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n