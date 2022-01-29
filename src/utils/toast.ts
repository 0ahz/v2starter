import { Toast } from 'vant'
import type { ToastOptions } from 'vant'

Toast.allowMultiple()

class CustomToast {
  private instance?: any
  private options?: ToastOptions

  constructor(options: ToastOptions = {}) {
    const defaultOptions: ToastOptions = {
      className: 'custom-toast',
      duration: 3000,
      overlay: false,
      forbidClick: false,
      closeOnClick: true,
    }
    this.options = Object.assign(defaultOptions, options)
  }

  show(message: string, duration: number = 3000) {
    if (this.instance) {
      this.instance.message = message
      return this.instance
    }
    const newOptions = Object.assign({}, this.options, { message, duration })
    this.instance = Toast(newOptions)
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

export const toast = new CustomToast()
