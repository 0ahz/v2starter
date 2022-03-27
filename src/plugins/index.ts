import { App } from 'vue'

export default {
  install(app: App): void {
    Object.values(import.meta.globEager('./**/index.ts')).map(plugin => {
      plugin.install?.(app)
    })
  },
}
