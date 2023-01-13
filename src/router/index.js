import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
    redirect: {
      name: 'Main'
    },
    children: [
      {
        path: '/main',
        name: 'Main',
        component: () => import('../views/Home/main.vue')
      },
      {
        path: '/input-coefficient',
        name: 'Input-Coefficient',
        component: () => import('../views/Home/input.vue')
      },
      {
        path: '/process',
        name: 'Process',
        component: () => import('../views/Process/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
