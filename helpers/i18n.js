import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../languages/en.json'
import th from '../languages/th.json'
import detector from 'i18next-browser-languagedetector'

const resources = {
    en,
    th
}

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        detection: {
            lookupCookie: 'lang',
            caches: ['cookie']
        },
        resources,
        // lng: 'en',
        fallbackLng: 'th',
        // debug: true,
        interpolation: { escapeValue: false }
    })

export default i18n
