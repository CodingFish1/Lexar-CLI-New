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
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/SupportPage.vue'),
    children: [
      // {
      //   path: '',
      //   component: 'warrantytable'
      // },
      {
        path: 'warranty',
        name: 'warrantytable',
        component: () => import('../components/gadgets/WarrantyTable.vue')
      },
      {
        path: 'disclaimer',
        name: 'disclaimer',
        component: () => import('../components/gadgets/DisclaimerContent.vue')
      }
    ]
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
