const Optimization = {
  state: {
    type_op: localStorage.getItem('type_op') || 'MAX'
  },
  getters: {
    type_op (state) {
      return state.type_op
    }
  },
  mutations: {
    set_type_op (state, payload) {
      state.type_op = payload
    }
  },
  actions: {
    add_type_op (setex, payload) {
      setex.commit('set_type_op', payload)
      localStorage.setItem('type_op', payload)
    }
  }
}

export default Optimization
