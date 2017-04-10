import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import clients from './modules/clients'
import app from './modules/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    clients,
    app
  },
  strict: debug
})
