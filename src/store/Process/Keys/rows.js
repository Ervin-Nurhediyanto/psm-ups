const KeyRows = {
  state: {
    keyRows: localStorage.getItem('keyRows') || [],
    keyRows2: localStorage.getItem('keyRows2') || []
  },
  getters: {
    keyRows (state) {
      return state.keyRows
    },
    keyRows2 (state) {
      return state.keyRows2
    }
  },
  mutations: {
    set_keyRows (state, payload) {
      state.keyRows = payload
    },
    set_keyRows2 (state, payload) {
      state.keyRows2 = payload
    }
  },
  actions: {
    add_keyRows (setex, payload) {
      setex.commit('set_keyRows', payload)
      localStorage.setItem('keyRows', payload)
    },
    add_keyRows2 (setex, payload) {
      setex.commit('set_keyRows2', payload)
      localStorage.setItem('keyRows2', payload)
    }
  }
}

export default KeyRows
