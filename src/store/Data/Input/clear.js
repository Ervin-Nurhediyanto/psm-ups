const ClearData = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    clearData () {
      return new Promise(resolve => {
        const items = { ...localStorage }
        Object.keys(items).map(item => {
          localStorage.removeItem(item)
        })
        resolve()
      })
    }
  }
}

export default ClearData
