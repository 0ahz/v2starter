import { App } from 'vue'

import Bus from './bus'

const plugins = [new Bus()]

export default {
  install(app: App) {
    plugins.forEach(plugin => {
      app.config.globalProperties[plugin.name] = plugin.create()
    })
  },
}
