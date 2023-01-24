const Symbols = {
  state: {
    symbols: localStorage.getItem('symbols') || 0
  },
  getters: {
    symbols (state) {
      return state.symbols
    }
  },
  mutations: {
    set_symbols (state, payload) {
      state.symbols = payload
    }
  },
  actions: {
    add_symbols (setex, payload) {
      setex.commit('set_symbols', payload)
      localStorage.setItem('symbols', payload)
    }
  }
}

export default Symbols
