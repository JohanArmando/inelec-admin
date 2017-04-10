import * as getters from './getters'
import * as actions from './actions'

import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  SESSION
} from './mutation-types'

const initialState = {
  stateLogin: false,
  user: {
    name: '',
    email: ''
  }
}

// mutations
const mutations = {
  [LOGIN] (state, user) {
    state.user = user
    state.stateLogin = true
  },
  [SESSION] (state, user) {
    state.user = user
    state.stateLogin = true
  },
  [LOGOUT] (state, user) {
    state.user = {
      name: '',
      email: ''
    }
    state.stateLogin = false
  },
  [SIGNUP] (state, user) {
    state.user = user
    state.stateLogin = true
  }

}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
