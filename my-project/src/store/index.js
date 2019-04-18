import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** state */
const state = {
    count: 0,
};

/** mutations */
// Vuex 規定 state 內的變數無法直接修改，要透過 mutations 內的 method 才能修改。
const addCount = state => state.count++;

const mutations = {
  addCount,  
};

export default new Vuex.Store({
    state,
    mutations,
    actions: {

    },
});