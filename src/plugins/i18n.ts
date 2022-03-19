import { App } from 'vue'
import { createI18n } from 'vue-i18n'

const messages: Record<string, any> = {}

Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(
  ([key, value]) => {
    const matchs = key.match(/locales\/(.*)\.y(a)?ml/)
    if (matchs && matchs.length) {
      messages[matchs[1]] = value.default
    }
  },
)

export function install(app: App): void {
  const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'zh-cn',
    messages,
  })
  app.use(i18n)
}
