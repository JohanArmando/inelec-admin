import {
  GETALL
} from './mutation-types'

import axios from '../../../services/axios'

export function getSections ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/admin/sections')
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
