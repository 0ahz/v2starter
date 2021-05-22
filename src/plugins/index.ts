import { App } from 'vue'

export default {
  install(app: App): void {
    Object.values(import.meta.globEager('./*.ts')).map(plugin => {
      plugin.install?.(app)
    })
  },
}
