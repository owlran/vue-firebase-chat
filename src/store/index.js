import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUser: (state) => state.user,
  },
});
