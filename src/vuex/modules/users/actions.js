import {
  GETUSERS,
  STOREUSER,
  DELETEUSER,
  UPDATEUSER,
  GETUSER
} from './mutation-types'

import axios from '../../../services/axios'

export function getUsers ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/admin/users')
    .then(response => {
      commit(GETUSERS, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function getUser ({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios.get('/admin/users/' + id)
    .then(response => {
      commit(GETUSER, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storeUser ({ commit }, user) {
  return new Promise((resolve, reject) => {
    axios.post('/admin/users', user)
    .then(response => {
      commit(STOREUSER, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function updateUser ({ commit }, user) {
  return new Promise((resolve, reject) => {
    axios.put('/admin/users/' + user.id, user)
    .then(response => {
      commit(UPDATEUSER, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function deleteUser ({ commit }, user) {
  return new Promise((resolve, reject) => {
    axios.delete('/admin/users/' + user.id)
    .then(response => {
      commit(DELETEUSER, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
