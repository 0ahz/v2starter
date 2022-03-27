import 'virtual:windi.css'
import 'virtual:windi-devtools'

import '@/styles/main.css'

import { createApp } from 'vue'
import '@purge-icons/generated'

import { name, version } from '../package.json'

import App from './App.vue'
import plugins from './plugins'
import router from './router'

console.time('🕓 App Loaded')

createApp(App).use(plugins).use(router).mount('#app')

console.timeEnd('🕓 App Loaded')

console.group(`%c✨ App Information`, 'color:DodgerBlue')

if (import.meta.env.DEV) {
  console.info(`%c Name: ${name}`, 'color:DodgerBlue')
  console.info(`%c Version: ${version}`, 'color:DodgerBlue')
}

console.info(`%c Environment: ${import.meta.env.MODE}`, 'color:DodgerBlue')

console.groupEnd()
