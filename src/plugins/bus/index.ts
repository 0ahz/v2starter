import mitt, { Emitter as MittEmitter } from 'mitt'
import { IPlugin } from '../plugin'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bus: MittEmitter
  }
}

export default class Emitter implements IPlugin {
  name: string = '$bus'

  create(option?: any): MittEmitter {
    return mitt()
  }
}
