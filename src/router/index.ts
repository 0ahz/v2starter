import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
})

router.beforeEach(async (to, from) => {
  console.log('beforeEach: ', to, from)
  return true
})

router.afterEach(async (to, from, failure) => {
  console.log('afterEach: ', to, from, failure)
})

export { routes }

export default router
