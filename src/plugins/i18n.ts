import VueI18n from 'vue-i18n'
import Vue from 'vue'
import fr from '@/lang/fr.json'

Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'fr',
    messages: { fr }// set locale messages
})
