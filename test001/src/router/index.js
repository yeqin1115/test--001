import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: { iShow: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
    meta: { iShow: false }
  },
  {
    path: '/login',
    name: "login",
    component: () => import('../components/login'),
    meta: { iShow: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/fisx/register'),
    meta: { iShow: true }
  },

]

const router = new VueRouter({
  routes
})

export default router
