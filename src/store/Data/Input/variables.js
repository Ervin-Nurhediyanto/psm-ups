const Variables = {
  state: {
    numb_v: localStorage.getItem('numb_v') || 0
  },
  getters: {
    numb_v (state) {
      return state.numb_v
    }
  },
  mutations: {
    set_numb_v (state, payload) {
      state.numb_v = payload
    }
  },
  actions: {
    add_numb_v (setex, payload) {
      setex.commit('set_numb_v', payload)
      localStorage.setItem('numb_v', payload)
    }
  }
}

export default Variables
