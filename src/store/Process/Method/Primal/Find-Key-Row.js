const FindKeyRow = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    PrimalFindKeyRow (data) {
      return new Promise((resolve, reject) => {
        const keyRow = {
          Index: 0,
          Value: 0
        }
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
        for (let i = 0; i < dataTable1st.length; i++) {
          const index = dataTable1st[i].length - 1
          const indexValue = dataTable1st[i][index]
          if (i > 0) {
            if (keyRow.Index === 0) {
              if (indexValue > 0) {
                keyRow.Index = i
                keyRow.Value = indexValue
              }
            } else {
              if (indexValue > 0) {
                if (indexValue < keyRow.Value) {
                  keyRow.Index = i
                  keyRow.Value = indexValue
                }
              }
            }
          }
        }
        // Choose Key Row (Zero Condition)
        for (let i = 0; i < dataTable1st.length; i++) {
          const index = dataTable1st[i].length - 1
          const indexValue = dataTable1st[i][index]
          const keyColValue = dataTable1st[i][keyCol[0]]
          if (i > 0) {
            if (keyRow.Index === 0) {
              if (indexValue === 0 && keyColValue > 0) {
                keyRow.Index = i
                keyRow.Value = indexValue
              }
            }
          }
        }
        resolve(keyRow)
      })
    }
  }
}

export default FindKeyRow
