import * as getters from './getters'
import * as actions from './actions'

import {
  GETALL
} from './mutation-types'

const initialState = {
  sections: []
}

// mutations
const mutations = {

  [GETALL] (state, sections) {
    state.sections = sections
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
