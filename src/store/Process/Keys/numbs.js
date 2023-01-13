const KeyNumbs = {
  state: {
    keyNumbs: localStorage.getItem('keyNumbs') || []
  },
  getters: {
    keyNumbs (state) {
      return state.keyNumbs
    }
  },
  mutations: {
    set_keyNumbs (state, payload) {
      state.keyNumbs = payload
    }
  },
  actions: {
    add_keyNumbs (setex, payload) {
      setex.commit('set_keyNumbs', payload)
      localStorage.setItem('keyNumbs', payload)
    }
  }
}

export default KeyNumbs
