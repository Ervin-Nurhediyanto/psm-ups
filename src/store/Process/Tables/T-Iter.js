const TIterations = {
  state: {
    table_it: localStorage.getItem('table_it') || [],
    table_it2: localStorage.getItem('table_it2') || [] // Untuk Dua Fase
  },
  getters: {
    table_it (state) {
      return state.table_it
    },
    table_it2 (state) {
      return state.table_it2
    }
  },
  mutations: {
    set_table_it (state, payload) {
      state.table_it = payload
    },
    set_table_it2 (state, payload) {
      state.table_it2 = payload
    }
  },
  actions: {
    add_table_it (setex, payload) {
      setex.commit('set_table_it', payload)
      localStorage.setItem('table_it', payload)
    },
    add_table_it2 (setex, payload) {
      setex.commit('set_table_it2', payload)
      localStorage.setItem('table_it2', payload)
    }
  }
}

export default TIterations
