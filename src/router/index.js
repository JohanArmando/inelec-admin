import Vue from 'vue'
import Router from 'vue-router'
import { requireAuth, isAdmin, isLoging } from '../services/RoutesServices'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Admin from '@/components/admin/Admin'
import Dashboard from '@/components/admin/Dashboard'
import Clients from '@/components/admin/Clients'
import ListClients from '@/components/admin/clients/ListClients'
import NewClient from '@/components/admin/clients/NewClient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: isLoging
    },
    {
      path: '/admin',
      beforeEnter: requireAuth,
      component: Admin,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          beforeEnter: isAdmin,
          component: Dashboard
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: 'clients',
          component: Clients,
          children: [
            {
              path: '',
              component: ListClients,
              beforeEnter: function (to, from, next) {
                next('/admin/clients/list-clients')
              }
            },
            {
              path: 'list-clients',
              component: ListClients
            },
            {
              path: 'new-client',
              component: NewClient
            }
          ]
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'posts',
          component: Home
        }
      ]
    },
    {
      path: '/admin/administrator',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    }
  ]
})
