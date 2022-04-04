import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
})

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

export { routes }

export default router
