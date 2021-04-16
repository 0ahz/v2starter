import { App } from 'vue'
import mitt, { Emitter as MittEmitter } from 'mitt'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $ebus: MittEmitter
  }
}

export function install(app: App): void {
  app.config.globalProperties['$ebus'] = mitt()
}
