import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductList.vue'),
    children: [

    ]
  },
  {
    path: '/products/:id',
    name: 'productdetail',
    component: () => import('../views/_ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
  // linkActiveClass: 'active',
  // scrollBehavior (to, from, savedPosition) {
  //   if (to.fullPath.match('products')) {
  //     console.log(to.fullPath)
  //     return {
  //       top: 2000
  //     }
  //   }
  // }
})

export default router
