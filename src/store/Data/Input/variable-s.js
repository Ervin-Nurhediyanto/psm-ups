const sVariable = {
  state: {
    numb_s: localStorage.getItem('numb_s') || 0
  },
  getters: {
    numb_s (state) {
      return state.numb_s
    }
  },
  mutations: {
    set_numb_s (state, payload) {
      state.numb_s = payload
    }
  },
  actions: {
    add_numb_s (setex, payload) {
      setex.commit('set_numb_s', payload)
      localStorage.setItem('numb_s', payload)
    }
  }
}

export default sVariable
