import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  backgroundColor: '#fff',
}

const mutations = {
  changeBackground (state, color) {
    state.backgroundColor = color
  }
}

const actions = {
  changeBackground (context, color) {
    context.commit('changeBackground', color)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
});
 
export default store;