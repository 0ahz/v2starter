import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    redirect: '/',
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'mine',
        name: 'home-mine',
        component: () => import('@/views/home/mine.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404.vue'),
  },
]

export default routes
