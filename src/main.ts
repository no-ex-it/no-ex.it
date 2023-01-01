import {createApp} from 'vue'

import App from './components/App.vue'
import router from './router'
import store from './store'
import {plugin, defaultConfig} from '@formkit/vue'
import {createProPlugin, repeater} from '@formkit/pro'

import "bulma/css/bulma.css"
import "./assets/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@mdi/font/scss/materialdesignicons.scss";
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

const proPlugin = createProPlugin('fk-52971f34220', {
    repeater
})
const config = defaultConfig({
    plugins: [proPlugin],
    locale: 'de',
})
createApp(App).use(router).use(store).use(plugin, config).mount('#app')
