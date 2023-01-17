const CreateTable1st = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    PrimalCreateTable1st (data) {
      return new Promise((resolve, reject) => {
        const table1st = []
        const nV = Number(data.getters.numb_v)
        const nC = Number(data.getters.numb_c)
        const nCol = nC
        const nRow = nC + nV + 3
        const data1st = JSON.parse(data.getters.table_1, (key, value) => {
          if (typeof value === 'string') {
            return value
          }
          return value
        })
        for (let i = 0; i <= nCol; i++) {
          table1st.push([])
          for (let j = 0; j <= nRow; j++) {
            if (i === 0 && j === 0) { // Value of VD
              table1st[i].push(['Z', ''])
            }
            if (i > 0 && j === 0) { // Value of VD
              table1st[i].push(['S', i])
            }
            if (j === 1) { // Value of Z
              if (i === 0) {
                table1st[i].push(1) // Row Z
              } else {
                table1st[i].push(0) // Row Non Z
              }
            }
            if (j > 1 && j < nV + 2) { // Value of X
              if (i === 0) {
                table1st[i].push(data1st[i][j - 2] * -1)
              } else {
                table1st[i].push(data1st[i][j - 2])
              }
            }
            if (j > nV + 1 && j < nV + nC + 2) { // Value of S
              if (i === 0) {
                table1st[i].push(0)
              } else if (i === j - nV - 1) {
                table1st[i].push(1) // Value of Si
              } else {
                table1st[i].push(0) // Value of Non Si
              }
            }
            if (j === nRow - 1) { // Value of NK
              table1st[i].push(data1st[i][data1st[i].length - 1])
            }
            if (j === nRow) { // Value of Index
              table1st[i].push(0)
            }
          }
        }
        resolve(table1st)
      })
    }
  }
}

export default CreateTable1st
