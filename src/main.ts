import 'normalize.css'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

import './styles/main.css'

import { createApp } from 'vue'
import '@purge-icons/generated'

import App from './App.vue'
import plugins from './plugins'
import router from './router'

const app = createApp(App)

app.use(plugins)
app.use(router)

app.mount('#app')
