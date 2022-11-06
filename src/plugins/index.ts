import { App } from 'vue'

type PluginInstall = (app: App, ...options: any[]) => any

export default {
  install(app: App): void {
    const plugins = import.meta.glob<{
      install: PluginInstall
      disabled?: boolean
    }>('./**/index.ts', {
      eager: true,
    })
    Object.values(plugins).forEach(plugin => {
      if (!plugin.disabled) {
        plugin.install?.(app)
      }
    })
  },
}
