import * as getters from './getters'
import * as actions from './actions'

import {
  TOGGLESIDEBAR
} from './mutation-types'

const initialState = {
  sidebarStatus: false
}

// mutations
const mutations = {
  [TOGGLESIDEBAR] (state) {
    state.sidebarStatus = !state.sidebarStatus
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
