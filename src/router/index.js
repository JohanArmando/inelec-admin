import Vue from 'vue'
import Router from 'vue-router'
import { requireAuth, isLoging } from '../services/RoutesServices'
import Login from '@/components/auth/Login'
import Recovery from '@/components/auth/Recovery'
import Admin from '@/components/admin/Admin'
import Dashboard from '@/components/admin/Dashboard'
import Clients from '@/components/admin/Clients'
import ListClients from '@/components/admin/clients/ListClients'
import NewClient from '@/components/admin/clients/NewClient'
import Users from '@/components/admin/Users'
import ListUsers from '@/components/admin/users/ListUsers'
import NewUser from '@/components/admin/users/NewUsers'
import RolUsers from '@/components/admin/users/RolUsers'
import PermissionsUsers from '@/components/admin/users/PermissionsUsers'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/admin',
      beforeEnter: requireAuth,
      component: Admin,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          component: Dashboard
        },
        {
          path: 'clients',
          component: Clients,
          children: [
            {
              path: '',
              component: ListClients
            },
            {
              path: 'new-client',
              component: NewClient
            }
          ]
        },
        {
          path: 'users',
          component: Users,
          children: [
            {
              path: '',
              component: ListUsers,
              beforeEnter: function (to, from, next) {
                next('/admin/users/list-users')
              }
            },
            {
              path: 'list-users',
              component: ListUsers

            },
            {
              path: 'new-users',
              component: NewUser
            },
            {
              path: 'rol-users',
              component: RolUsers
            },
            {
              path: 'permissions-users',
              component: PermissionsUsers
            }
          ]
        }
      ]
    }
  ]
})
