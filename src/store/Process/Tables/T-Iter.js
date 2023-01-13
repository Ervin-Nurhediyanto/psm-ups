const TIterations = {
  state: {
    table_it: localStorage.getItem('table_it') || []
  },
  getters: {
    table_it (state) {
      return state.table_it
    }
  },
  mutations: {
    set_table_it (state, payload) {
      state.table_it = payload
    }
  },
  actions: {
    add_table_it (setex, payload) {
      setex.commit('set_table_it', payload)
      localStorage.setItem('table_it', payload)
    }
  }
}

export default TIterations
