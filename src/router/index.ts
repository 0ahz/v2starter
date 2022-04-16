import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import setupGuard from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
})

setupGuard(router)

export default router
