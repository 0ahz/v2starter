import { App } from 'vue'

export const install = (app: App) => {
  app.config.globalProperties.$fnName = () => ''
}
