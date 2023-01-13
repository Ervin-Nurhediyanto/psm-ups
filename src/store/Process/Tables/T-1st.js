const T1st = {
  state: {
    table_1: localStorage.getItem('table_1') || 0,
    table_1st: localStorage.getItem('table_1st') || 0
  },
  getters: {
    table_1 (state) {
      return state.table_1
    },
    table_1st (state) {
      return state.table_1st
    }
  },
  mutations: {
    set_table_1 (state, payload) {
      state.table_1 = payload
    },
    set_table_1st (state, payload) {
      state.table_1st = payload
    }
  },
  actions: {
    add_table_1 (setex, payload) {
      setex.commit('set_table_1', payload)
      localStorage.setItem('table_1', payload)
    },
    add_table_1st (setex, payload) {
      setex.commit('set_table_1st', payload)
      localStorage.setItem('table_1st', payload)
    }
  }
}

export default T1st
