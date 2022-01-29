import { Toast } from 'vant'
import type { ToastOptions } from 'vant'

Toast.allowMultiple()

class CustomLoading {
  private instance?: any
  private options?: ToastOptions

  constructor(options: ToastOptions = {}) {
    const defaultOptions: ToastOptions = {
      className: 'custom-loading',
      duration: 0,
      forbidClick: true,
    }
    this.options = Object.assign(defaultOptions, options)
  }

  show(message: string = '正在加载') {
    if (this.instance) {
      if (message) {
        this.instance.message = message
      }
      return this.instance
    }
    const newOptions = Object.assign({}, this.options, { message })
    this.instance = Toast.loading(newOptions)
    return this.instance
  }

  close() {
    if (this.instance) {
      this.instance.close()
      this.instance = null
    }
  }

  hide() {
    this.close()
  }
}

export const loading = new CustomLoading()
