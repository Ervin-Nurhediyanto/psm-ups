import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/PSM/index.vue'),
    redirect: {
      name: 'Home'
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/PSM/Home/index.vue')
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('../views/PSM/Form/index.vue'),
        redirect: {
          name: 'Form-Primal'
        },
        children: [
          {
            path: '/form-primal',
            name: 'Form-Primal',
            component: () => import('../views/PSM/Form/primal.vue')
          }
        ]
      },
      {
        path: '/process',
        name: 'Process',
        component: () => import('../views/PSM/Process/index.vue'),
        redirect: {
          name: 'Process-Primal'
        },
        children: [
          {
            path: '/process-primal',
            name: 'Process-Primal',
            component: () => import('../views/PSM/Process/primal.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue') // Perlu Diedit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
