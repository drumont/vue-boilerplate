import Vue from 'vue'
import Vuex from 'vuex'
import { admin } from './modules/admin/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: '1.0.0'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin: admin,
  },
  devtools: false
})
