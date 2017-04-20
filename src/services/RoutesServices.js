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

export function notFound (to, from, next) {
  window.$toast.error('La pagina socilitada no existe')
  next('/admin')
}
