import { App } from 'vue'

export const install = (app: App) => {
  app.config.errorHandler = function (err, vm, info) {
    console.error(err, info)
  }
}
