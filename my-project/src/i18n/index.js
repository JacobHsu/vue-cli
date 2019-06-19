// https://github.com/kazupon/vue-i18n

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from './en-US.js'
import zhTW from './zh-TW.js'

Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
    en: {
       hello: 'hello world'
    },
    ja: {
        hello: 'こんにちは、世界'
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'en-US', //ja-JP
    //this.$i18n.locale // 通過切換locale的值來實現語言切換
    messages: {
        'en-US': enUS,
        'zh-TW': zhTW,
        'ja-JP': messages.ja
    },
})

export default i18n