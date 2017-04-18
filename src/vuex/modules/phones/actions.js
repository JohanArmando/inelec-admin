import {
  GETALL,
  STORE,
  DELETE,
  UPDATE,
  GET
} from './mutation-types'

import axios from '../../../services/axios'

export function getPhones ({ commit }, userId) {
  return new Promise((resolve, reject) => {
    axios.get('/admin/users/' + userId + '/phones')
    .then(response => {
      commit(GETALL, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function getphone ({ commit }, userId, id) {
  return new Promise((resolve, reject) => {
    axios.get('/admin/users/' + userId + '/phones/' + id)
    .then(response => {
      commit(GET, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storePhone ({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.post('/admin/users/' + data.userId + '/phones', data.phone)
    .then(response => {
      commit(STORE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function updatePhone ({ commit }, userId, id, phone) {
  return new Promise((resolve, reject) => {
    axios.put('/admin/users/' + userId + '/phones/' + id, phone)
    .then(response => {
      commit(UPDATE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function deletePhone ({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.delete('/admin/users/' + data.userId + '/phones/' + data.id)
    .then(response => {
      commit(DELETE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}