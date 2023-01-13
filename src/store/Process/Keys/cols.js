const KeyCols = {
  state: {
    keyCols: localStorage.getItem('keyCols') || []
  },
  getters: {
    keyCols (state) {
      return state.keyCols
    }
  },
  mutations: {
    set_keyCols (state, payload) {
      state.keyCols = payload
    }
  },
  actions: {
    add_keyCols (setex, payload) {
      setex.commit('set_keyCols', payload)
      localStorage.setItem('keyCols', payload)
    }
  }
}

export default KeyCols
