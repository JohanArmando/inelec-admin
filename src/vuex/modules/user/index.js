import * as getters from './getters'
import * as actions from './actions'

import {
  LOGIN,
  LOGOUT,
  SIGNUP
} from './mutation-types'

const initialState = {
  stateLogin: false,
  user: {
    name: 'David Figueroa',
    email: 'davidfigueroar9@gmail.com'
  }
}

// mutations
const mutations = {
  [LOGIN] (state, user) {
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
