import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createI18n } from 'vue-i18n'
import { messages} from './lang/principalView'

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',
    messages
})




createApp(App).use(i18n).use(router).mount('#app')
