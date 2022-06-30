import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/login',
    component: () => import('@/views/Main.vue'),
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },{
        path: '/attack',
        name: 'attack',
        component: () => import('../views/attack')
      },{
        path: '/defense',
        name: 'defense',
        component: () => import('../views/defense')
      },{
        path: '/results',
        name: 'results',
        component: () => import('../views/results')
      },{
        path: '/user',
        name: 'user',
        component: () => import('../views/user')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
