import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Admin from '@/components/admin/Admin'
import Homeadmin from '@/components/admin/Home'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!localStorage.token) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function isLoging (to, from, next) {
  if (localStorage.token) {
    next('/admin/administrator')
  } else {
    next()
  }
}

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
          path: '/',
          component: Homeadmin
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'profile',
          component: Home
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
