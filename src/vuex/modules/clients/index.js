import * as getters from './getters'
import * as actions from './actions'

import {
  GETCLIENTS
} from './mutation-types'

const initialState = {
  clients: []
}

// mutations
const mutations = {
  [GETCLIENTS] (state, clients) {
    state.clients = clients
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
