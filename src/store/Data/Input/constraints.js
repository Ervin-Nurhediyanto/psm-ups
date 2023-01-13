const Constraints = {
  state: {
    numb_c: localStorage.getItem('numb_c') || 0
  },
  getters: {
    numb_c (state) {
      return state.numb_c
    }
  },
  mutations: {
    set_numb_c (state, payload) {
      state.numb_c = payload
    }
  },
  actions: {
    add_numb_c (setex, payload) {
      setex.commit('set_numb_c', payload)
      localStorage.setItem('numb_c', payload)
    }
  }
}

export default Constraints
