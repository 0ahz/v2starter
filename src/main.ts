import 'normalize.css'

import { createApp } from 'vue'
import '@purge-icons/generated'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
