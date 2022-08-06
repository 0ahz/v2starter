import { App } from 'vue'
import SvgIcon from './SvgIcon.vue'

export const install = (app: App) => {
  app.component(SvgIcon.name, SvgIcon)
}
