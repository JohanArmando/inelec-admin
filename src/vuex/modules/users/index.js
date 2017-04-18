import * as getters from './getters'
import * as actions from './actions'

import {
  GETUSERS,
  GETUSER,
  STOREUSER,
  DELETEUSER,
  UPDATEUSER
} from './mutation-types'

const initialState = {
  users: [],
  current_user: ''
}

// mutations
const mutations = {

  [GETUSERS] (state, users) {
    state.users = users
  },
  [GETUSER] (state, user) {
    state.current_user = user
  },
  [STOREUSER] (state, user) {
    state.users.push(user)
  },
  [DELETEUSER] (state, user) {
    state.users = state.users.filter(function (el) {
      return el.id !== user.id
    })
  },
  [UPDATEUSER] (state, user) {
    state.current_user = user
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
