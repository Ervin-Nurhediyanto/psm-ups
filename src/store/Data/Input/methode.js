const Methode = {
  state: {
    type_meth: localStorage.getItem('type_meth') || 'PRIMAL'
  },
  getters: {
    type_meth (state) {
      return state.type_meth
    }
  },
  mutations: {
    set_type_meth (state, payload) {
      state.type_meth = payload
    }
  },
  actions: {
    add_type_meth (setex, payload) {
      setex.commit('set_type_meth', payload)
      localStorage.setItem('type_meth', payload)
    }
  }
}

export default Methode
