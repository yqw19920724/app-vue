import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moduleHome from './modules/home';

const store = new Vuex.Store({
  modules: {
    home: moduleHome
  }
});
 
export default store;