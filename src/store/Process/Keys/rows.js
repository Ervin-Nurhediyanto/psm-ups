const KeyRows = {
  state: {
    keyRows: localStorage.getItem('keyRows') || []
  },
  getters: {
    keyRows (state) {
      return state.keyRows
    }
  },
  mutations: {
    set_keyRows (state, payload) {
      state.keyRows = payload
    }
  },
  actions: {
    add_keyRows (setex, payload) {
      setex.commit('set_keyRows', payload)
      localStorage.setItem('keyRows', payload)
    }
  }
}

export default KeyRows
