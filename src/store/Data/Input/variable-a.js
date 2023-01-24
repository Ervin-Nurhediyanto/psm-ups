const aVariable = {
  state: {
    numb_a: localStorage.getItem('numb_a') || 0,
    var_a: localStorage.getItem('var_a') || []
  },
  getters: {
    numb_a (state) {
      return state.numb_a
    },
    var_a (state) {
      return state.var_a
    }
  },
  mutations: {
    set_numb_a (state, payload) {
      state.numb_a = payload
    },
    set_var_a (state, payload) {
      state.var_a = payload
    }
  },
  actions: {
    add_numb_a (setex, payload) {
      setex.commit('set_numb_a', payload)
      localStorage.setItem('numb_a', payload)
    },
    add_var_a (setex, payload) {
      setex.commit('set_var_a', payload)
      localStorage.setItem('var_a', payload)
    }
  }
}

export default aVariable
