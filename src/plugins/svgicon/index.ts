import { App } from 'vue'
import SvgIcon from './SvgIcon.vue'

import 'virtual:svg-icons-register'

export const install = (app: App) => {
  app.component(SvgIcon.name, SvgIcon)
}
