import { App } from 'vue'
import mitt, { Emitter as MittEmitter } from 'mitt'

type Events = {
  [k: string]: any
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $ebus: MittEmitter<Events>
  }
}

export function install(app: App): void {
  app.config.globalProperties.$ebus = mitt()
}
