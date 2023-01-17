const CalculateIndex = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    PrimalCalculateIndex (data) {
      return new Promise((resolve, reject) => {
        const dataIndex = []
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
        const nCol = Number(data.getters.numb_c)
        const nRow = dataTable1st[0].length
        for (let i = 0; i <= nCol; i++) {
          const NK = dataTable1st[i][nRow - 2]
          const keyColValue = dataTable1st[i][keyCol[0]]
          if (keyColValue !== 0) {
            const indexValue = NK / keyColValue
            dataIndex.push(indexValue)
          } else {
            dataIndex.push('INFINITY')
          }
        }
        resolve(dataIndex)
      })
    }
  }
}

export default CalculateIndex
