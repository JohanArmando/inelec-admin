import * as getters from './getters'
import * as actions from './actions'

import {
  GETALL,
  GET,
  STORE,
  DELETE,
  UPDATE
} from './mutation-types'

const initialState = {
  roles: [],
  current_phone: ''
}

// mutations
const mutations = {

  [GETALL] (state, roles) {
    state.roles = roles
  },
  [GET] (state, phone) {
    state.current_phone = phone
  },
  [STORE] (state, phone) {
    state.roles.push(phone)
  },
  [DELETE] (state, phone) {
    console.log('delete')
    state.roles = state.roles.filter(function (el) {
      return el.id !== phone.id
    })
  },
  [UPDATE] (state, phone) {
    let roles = []
    state.roles.forEach(p => {
      if (phone.id !== p.id) {
        roles.push(p)
      } else {
        roles.push(phone)
      }
    })
    state.roles = phone
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
