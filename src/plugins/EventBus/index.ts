import mitt, { Emitter as MittEmitter } from 'mitt'
import { IPlugin } from '../plugin'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $ebus: MittEmitter
  }
}

export default class Emitter implements IPlugin {
  name: string = '$ebus'

  create(option?: any): MittEmitter {
    return mitt()
  }
}
