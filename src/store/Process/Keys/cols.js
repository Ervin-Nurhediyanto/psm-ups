const KeyCols = {
  state: {
    keyCols: localStorage.getItem('keyCols') || [],
    keyCols2: localStorage.getItem('keyCols2') || []
  },
  getters: {
    keyCols (state) {
      return state.keyCols
    },
    keyCols2 (state) {
      return state.keyCols2
    }
  },
  mutations: {
    set_keyCols (state, payload) {
      state.keyCols = payload
    },
    set_keyCols2 (state, payload) {
      state.keyCols2 = payload
    }
  },
  actions: {
    add_keyCols (setex, payload) {
      setex.commit('set_keyCols', payload)
      localStorage.setItem('keyCols', payload)
    },
    add_keyCols2 (setex, payload) {
      setex.commit('set_keyCols2', payload)
      localStorage.setItem('keyCols2', payload)
    }
  }
}

export default KeyCols
