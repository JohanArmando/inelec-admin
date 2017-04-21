import Vue from 'vue'
import Router from 'vue-router'
import { isLoging, notFound } from '../services/RoutesServices'
import Login from '@/components/auth/Login'
import Recovery from '@/components/auth/Recovery'
import Admin from './Admin'

Vue.use(Router)

export default new Router({
  routes: [
    Admin,
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
      beforeEnter: isLoging
    },
    {
      path: '/auth/recovery',
      name: 'Recovery',
      component: Recovery,
      beforeEnter: isLoging
    },
    {
      path: '*',
      beforeEnter: notFound,
      component: {
        template: '<div>No found</div>'
      }
    }
  ]
})
