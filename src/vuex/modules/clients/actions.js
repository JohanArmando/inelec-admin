import {
  GETCLIENTS
} from './mutation-types'

import axios from '../../../services/axios'

export function getClients ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/admin/clients')
    .then(response => {
      commit(GETCLIENTS, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
