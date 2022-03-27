import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  silentTranslationWarn: true,
  messages,
})

export { i18n }

export const install = (app: App) => {
  app.use(i18n)
}
