import Vue from 'vue';
import Vuex from 'vuex';
import ChatModule from './ChatModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  modules: {
    chat: ChatModule,
  },
  getters: {
    getUser: (state) => state.user,
  },
});
