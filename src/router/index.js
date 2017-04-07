import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

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
      path: '/admin/administrator',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    }
  ]
})
