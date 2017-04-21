import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import clients from './modules/clients'
import app from './modules/app'
import users from './modules/users'
import phones from './modules/phones'
import roles from './modules/roles'
import sections from './modules/sections'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    clients,
    app,
    users,
    phones,
    roles,
    sections
  },
  strict: debug
})
