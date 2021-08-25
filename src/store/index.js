import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('createTask', task)
    }
  }
})
