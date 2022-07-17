import type { Router } from 'vue-router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

export default function setupGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    console.log('beforeEach: ', to, from)
    if (!NProgress.isStarted()) {
      NProgress.start()
    }
    return true
  })

  router.afterEach(async (to, from, failure) => {
    console.log('afterEach: ', to, from, failure)
    NProgress.done()
  })
}
