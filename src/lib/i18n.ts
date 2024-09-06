const langs = ['pt-BR', 'en', 'es'] as const
type I18N = Record<(typeof langs)[number], string>

type LanguagesType = {
  [key: string]: I18N
}

const navLanguage = navigator.language
const sessionLanguage = (sessionStorage.getItem('marvel:lang') ??
  langs.find(lang => lang === navLanguage)) as (typeof langs)[number]

const userLanguage: keyof I18N = sessionLanguage ?? 'pt-BR'

export function createI18n<T extends LanguagesType>(translations: T) {
  return function i18n<Key extends keyof T>(key: Key): string {
    const hasOwnProperty = Object.prototype.hasOwnProperty.call(
      translations,
      key,
    )

    if (!hasOwnProperty) {
      console.warn(`i18n não encontrada: ${key as string}`)
      return key as string
    }

    const translation: I18N = translations[key]

    if (!translation[userLanguage]) {
      return translation['pt-BR']
    }

    return translation[userLanguage]
  }
}
