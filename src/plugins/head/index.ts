import { App } from 'vue'
import { createHead } from '@vueuse/head'

export const install = (app: App) => {
  app.use(createHead())
}
