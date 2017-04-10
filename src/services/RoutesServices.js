export function requireAuth (to, from, next) {
  if (!localStorage.token) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export function isLoging (to, from, next) {
  if (localStorage.token) {
    next('/admin')
  } else {
    next()
  }
}

export function isAdmin (to, from, next) {
  next('/admin')
}
