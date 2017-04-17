import * as getters from './getters'
import * as actions from './actions'

import {
  GETUSERS,
  STOREUSER,
  DELETEUSER
} from './mutation-types'

const initialState = {
  users: []
}

// mutations
const mutations = {
  [GETUSERS] (state, users) {
    state.users = users
  },
  [STOREUSER] (state, user) {
    state.users.push(user)
  },
  [DELETEUSER] (state, user) {
    state.users = state.users.filter(function (el) {
      return el.id !== user.id
    })
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
