const KeyNumbs = {
  state: {
    keyNumbs: localStorage.getItem('keyNumbs') || [],
    keyNumbs2: localStorage.getItem('keyNumbs2') || []
  },
  getters: {
    keyNumbs (state) {
      return state.keyNumbs
    },
    keyNumbs2 (state) {
      return state.keyNumbs2
    }
  },
  mutations: {
    set_keyNumbs (state, payload) {
      state.keyNumbs = payload
    },
    set_keyNumbs2 (state, payload) {
      state.keyNumbs2 = payload
    }
  },
  actions: {
    add_keyNumbs (setex, payload) {
      setex.commit('set_keyNumbs', payload)
      localStorage.setItem('keyNumbs', payload)
    },
    add_keyNumbs2 (setex, payload) {
      setex.commit('set_keyNumbs2', payload)
      localStorage.setItem('keyNumbs2', payload)
    }
  }
}

export default KeyNumbs
