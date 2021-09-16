import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout';
import system from './system';
import organization from './organization';
Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login') },
  { path: '/register', name: 'register', component: () => import('@/views/register') },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard')
    }]
  },

  {
    path: '/error',
    component: Layout,
    children: [{
      path: 'index',
      name: 'error',
      component: () => import('@/views/error')
    }]
  },

  {
    path: '/example',
    component: Layout,
    children: [{
      path: 'index',
      name: 'example',
      component: () => import('@/views/example')
    }]
  },

  system,
  organization,

  { path: '*', component: () => import('@/views/dashboard') },

]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;