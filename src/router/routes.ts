import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/pages/about.vue'),
      },
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/index.vue'),
    children: [
      {
        path: '',
        name: 'demo-home',
        component: () => import('@/pages/home.vue'),
      },
      {
        path: 'about',
        name: 'demo-about',
        component: () => import('@/pages/about.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/404.vue'),
  },
]

export default routes
