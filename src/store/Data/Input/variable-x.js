const xVariable = {
  state: {
    var_x: localStorage.getItem('var_x') || []
  },
  getters: {
    var_x (state) {
      return state.var_x
    }
  },
  mutations: {
    set_var_x (state, payload) {
      state.var_x = payload
    }
  },
  actions: {
    add_var_x (setex, payload) {
      setex.commit('set_var_x', payload)
      localStorage.setItem('var_x', payload)
    }
  }
}

export default xVariable
