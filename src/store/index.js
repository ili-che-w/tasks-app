import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, date}) {
      const idx = state.tasks.find(task => task.id === id)
      const task = state.tasks[idx]
      state.tasks[idx] = {...task, description, date}
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('createTask', task)
    },
    updateTask({ commit }, task) {
      commit('updateTask', task)
    }
  },
  getters: {
    tasks: state => state.tasks,
    taskById: state => id => state.tasks.find(task => task.id === id)
  }
})
