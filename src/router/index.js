import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
