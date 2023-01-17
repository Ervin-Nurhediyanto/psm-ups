const FindKeyCol = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    PrimalFindKeyCol (data) {
      return new Promise((resolve, reject) => {
        const keyCol = {
          Index: 0,
          Value: 0
        }
        const typeOp = data.getters.type_op
        const dataTable1st = JSON.parse(data.getters.table_1st, (key, value) => {
          if (typeof value === 'string') {
            return value
          }
          return value
        })
        for (let i = 0; i < dataTable1st[0].length - 1; i++) {
          if (i > 1) {
            const dataValue = dataTable1st[0][i]
            // MAX Function
            if (typeOp === 'MAX' && dataValue < keyCol.Value) {
              keyCol.Index = i
              keyCol.Value = dataValue
            }
            // MIN Function
            if (typeOp === 'MIN' && dataValue > keyCol.Value) {
              keyCol.Index = i
              keyCol.Value = dataValue
            }
          }
        }
        resolve(keyCol)
      })
    }
  }
}

export default FindKeyCol
