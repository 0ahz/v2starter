import { App } from 'vue'
import { createPinia } from 'pinia'

export const install = (app: App) => {
  app.use(createPinia())
}
