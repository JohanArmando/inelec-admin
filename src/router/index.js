import Vue from 'vue'
import Router from 'vue-router'
import { requireAuth, isLoging } from '../services/RoutesServices'
import Login from '@/components/auth/Login'
import Recovery from '@/components/auth/Recovery'
import Admin from '@/components/admin/Admin'
import Dashboard from '@/components/admin/Dashboard'
import Clients from '@/components/admin/Clients'
import ListClients from '@/components/admin/clients/ListClients'
import ShowClient from '@/components/admin/clients/ShowClient'
import NewClient from '@/components/admin/clients/NewClient'
import Users from '@/components/admin/Users'
import ListUsers from '@/components/admin/users/ListUsers'
import NewUser from '@/components/admin/users/NewUsers'
import ShowUser from '@/components/admin/users/ShowUsers'
import RolUsers from '@/components/admin/users/RolUsers'
import InformationGeneral from '@/components/admin/users/InformationGeneral'
import Budgets from '@/components/admin/Budgets'
import Listbudget from '@/components/admin/budgets/Listbudget'
import Newbudget from '@/components/admin/budgets/Newbudget'

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
          name: 'Admin',
          component: Dashboard
        },
        {
          path: 'clients',
          component: Clients,
          children: [
            {
              path: '',
              name: 'Admin-clients',
              component: ListClients
            },
            {
              path: 'new-client',
              name: 'Admin-new-client',
              component: NewClient
            },
            { path: ':id',
              component: ShowClient,
              children: [
                {
                  // UserProfile will be rendered inside User's <router-view>
                  // when /user/:id/profile is matched
                  path: '',
                  component: {
                    template: '<div>Companies, user id: {{ $route.params.id }}</div>'
                  }
                },
                {
                  // UserPosts will be rendered inside User's <router-view>
                  // when /user/:id/posts is matched
                  path: 'phones',
                  component: {
                    template: '<div>Companies, client id: {{ $route.params.id }}</div>'
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'users',
          component: Users,
          children: [
            {
              path: '',
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
            { path: ':id',
              component: ShowUser,
              children: [
                {
                  // UserProfile will be rendered inside User's <router-view>
                  // when /user/:id/profile is matched
                  path: '',
                  component: InformationGeneral
                },
                {
                  // UserPosts will be rendered inside User's <router-view>
                  // when /user/:id/posts is matched
                  path: 'phones',
                  component: {
                    template: '<div>Companies, user id: {{ $route.params.id }}</div>'
                  }
                },
                {
                  // UserPosts will be rendered inside User's <router-view>
                  // when /user/:id/posts is matched
                  path: 'permissions',
                  component: {
                    template: '<div>Companies, user id: {{ $route.params.id }}</div>'
                  }
                },
                {
                  // UserPosts will be rendered inside User's <router-view>
                  // when /user/:id/posts is matched
                  path: 'history',
                  component: {
                    template: '<div>Companies, user id: {{ $route.params.id }}</div>'
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'budgets',
          component: Budgets,
          children: [
            {
              path: '',
              component: Listbudget

            },
            {
              path: 'new-budget',
              component: Newbudget
            }
          ]
        }
      ]
    }
  ]
})
