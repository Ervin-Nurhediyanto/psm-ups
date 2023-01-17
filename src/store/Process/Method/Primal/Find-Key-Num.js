const FindKeyNum = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    PrimalFindKeyNum (data) {
      return new Promise((resolve, reject) => {
        const dataTable1st = JSON.parse(data.getters.table_1st, (key, value) => {
          if (typeof value === 'string') {
            return value
          }
          return value
        })
        const keyCol = JSON.parse(data.getters.keyCols, (key, value) => {
          if (typeof value === 'string') {
            return value
          }
          return value
        })
        const keyRow = JSON.parse(data.getters.keyRows, (key, value) => {
          if (typeof value === 'string') {
            return value
          }
          return value
        })
        const keyNum = dataTable1st[keyRow[0]][keyCol[0]]
        resolve(keyNum)
      })
    }
  }
}

export default FindKeyNum
