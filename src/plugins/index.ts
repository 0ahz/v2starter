import { App } from 'vue'

import EventBus from './EventBus'

const plugins = [new EventBus()]

export default {
  install(app: App) {
    plugins.forEach(plugin => {
      app.config.globalProperties[plugin.name] = plugin.create()
    })
  },
}
