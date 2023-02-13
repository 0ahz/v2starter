import '@/styles/fonts.css'
import '@/styles/tailwind.css'
import '@/styles/nprogress.css'
import '@/styles/global.css'

import { createApp } from 'vue'

import { name, version } from '../package.json'

import App from '@/App.vue'
import router from '@/router'
import plugins from '@/plugins'

console.time('🕓 App Loaded')

createApp(App).use(router).use(plugins).mount('#app')

console.timeEnd('🕓 App Loaded')

console.group(`%c✨ App Information `, 'color:DodgerBlue')

if (import.meta.env.DEV) {
  console.info(`%c👉 Name: ${name}`, 'color:DodgerBlue')
  console.info(`%c👉 Version: ${version}`, 'color:DodgerBlue')
}

console.info(`%c👉 Environment: ${import.meta.env.MODE}`, 'color:DodgerBlue')

console.info(
  `%c       ____      _             _
__   _|___ \\ ___| |_ __ _ _ __| |_ ___ _ __
\\ \\ / / __) / __| __/ _\` | '__| __/ _ \\ '__|
 \\ V / / __/\\__ \\ || (_| | |  | ||  __/ |
  \\_/ |_____|___/\\__\\__,_|_|   \\__\\___|_|`,
  'color:DodgerBlue',
)

console.info('%c✨✨✨', 'color:DodgerBlue')

console.groupEnd()
