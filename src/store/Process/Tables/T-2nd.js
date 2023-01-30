const T2nd = { // Untuk Dua Fase
  state: {
    table_2: localStorage.getItem('table_2') || 0,
    table_2nd: localStorage.getItem('table_2nd') || 0
  },
  getters: {
    table_2 (state) {
      return state.table_2
    },
    table_2nd (state) {
      return state.table_2nd
    }
  },
  mutations: {
    set_table_2 (state, payload) {
      state.table_2 = payload
    },
    set_table_2nd (state, payload) {
      state.table_2st = payload
    }
  },
  actions: {
    add_table_2 (setex, payload) {
      setex.commit('set_table_2', payload)
      localStorage.setItem('table_2', payload)
    },
    add_table_2nd (setex, payload) {
      setex.commit('set_table_2nd', payload)
      localStorage.setItem('table_2nd', payload)
    }
  }
}

export default T2nd
