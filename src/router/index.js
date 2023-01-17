import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form/index.vue'),
    children: [
      {
        path: '/form-primal',
        name: 'Form-Primal',
        component: () => import('../views/Form/Primal/index.vue')
      },
      {
        path: '/form-big-M',
        name: 'Form-Big-M',
        component: () => import('../views/Form/Big-M/index.vue')
      },
      {
        path: '/form-dua-fase',
        name: 'Form-Dua-Fase',
        component: () => import('../views/Form/Dua-Fase/index.vue')
      }
    ]
  },
  {
    path: '/process',
    name: 'Process',
    component: () => import('../views/Process/index.vue'),
    children: [
      {
        path: '/process-primal',
        name: 'Process-Primal',
        component: () => import('../views/Process/Primal/index.vue')
      },
      {
        path: '/process-big-M',
        name: 'Process-Big-M',
        component: () => import('../views/About/index.vue') // letak file belum pasti
      },
      {
        path: '/process-dau-fase',
        name: 'Process-Dua-Fase',
        component: () => import('../views/About/index.vue') // letak file belum pasti
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue') // letak file belum pasti
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
