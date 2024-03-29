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
  phones: [],
  current_phone: ''
}

// mutations
const mutations = {

  [GETALL] (state, phones) {
    state.phones = phones
  },
  [GET] (state, phone) {
    state.current_phone = phone
  },
  [STORE] (state, phone) {
    state.phones.push(phone)
  },
  [DELETE] (state, phone) {
    console.log('delete')
    state.phones = state.phones.filter(function (el) {
      return el.id !== phone.id
    })
  },
  [UPDATE] (state, phone) {
    let phones = []
    state.phones.forEach(p => {
      if (phone.id !== p.id) {
        phones.push(p)
      } else {
        phones.push(phone)
      }
    })
    state.phones = phones
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
