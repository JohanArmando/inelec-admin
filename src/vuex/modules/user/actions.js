import {
  LOGIN,
  LOGOUT,
  SIGNUP
} from './mutation-types'

import axios from '../../../services/axios'

export function login ({ commit }, user) {
  return new Promise((resolve, reject) => {
    axios.post('/auth/login', { email: user.email, password: user.password })
    .then(response => {
      console.log(response.data)
      commit(LOGIN, response.data.auth.user)
      localStorage.token = response.data.auth.token
      resolve(response.data.auth.user)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function signup ({ commit }, user) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      commit(SIGNUP, user)
      localStorage.token = Math.random().toString(36).substring(7)
      resolve(user)
    }, 1000)
  })
}

export function logout ({ commit }, user) {
  delete localStorage.token
  commit(LOGOUT, user)
}
