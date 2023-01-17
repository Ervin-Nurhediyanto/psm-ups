<template>
  <div>
    <button class="btn btn-primary my-1 w-100 font-weight-bold" @click.prevent="handleSubmit">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Btn-Submit-Form-Primal',
  props: ['btnText', 'data'],
  data () {
    return {
      dataProcess: {
        table_1st: []
      //   table_it: [],
      //   table_cons: [],
      //   key_cols: [],
      //   key_rows: [],
      //   key_numbs: [],
      //   numb_it: 0,
      //   isOptimal: false
      }
    }
  },
  computed: {
    ...mapGetters({
      table_1st: 'table_1st'
      // table_1: 'table_1', // ga tau dipake apa ngga
      // table_it: 'table_it'
    })
  },
  methods: {
    ...mapActions([
      'add_table_1st',
      'add_table_it',
      'add_keyCols',
      'add_keyRows',
      'add_keyNumbs',
      'PrimalCreateTable1st',
      'PrimalFindKeyCol',
      'PrimalCalculateIndex',
      'PrimalFindKeyRow',
      'PrimalFindKeyNum'
    ]),
    handleSubmit () {
      this.PrimalCreateTable1st().then(res => {
        this.add_table_1st(JSON.stringify(res))
        this.findKeyCol()
      })
      // this.$router.replace({
      //   name: 'Process-Primal'
      // })
    },
    findKeyCol () {
      this.PrimalFindKeyCol().then(res => {
        this.add_keyCols(JSON.stringify([res.Index]))
        this.calculateIndex()
      })
    },
    calculateIndex () {
      this.PrimalCalculateIndex().then(res => {
        const dataParse = JSON.parse(this.table_1st, (key, value) => {
          if (typeof value === 'string') {
            return value
          }
          return value
        })
        this.dataProcess.table_1st = dataParse
        for (let i = 0; i < res.length; i++) {
          const index = this.dataProcess.table_1st[0].length - 1
          this.dataProcess.table_1st[i][index] = res[i]
        }
        this.add_table_1st(JSON.stringify(this.dataProcess.table_1st))
      }).then(res => {
        this.findKeyRow()
      })
    },
    findKeyRow () {
      this.PrimalFindKeyRow().then(res => {
        this.add_keyRows(JSON.stringify([res.Index]))
      }).then(res => {
        this.findKeyNum()
      })
    },
    findKeyNum () {
      this.PrimalFindKeyNum().then(res => {
        this.add_keyNumbs(res)
      })
    }
  //   handleChangeVD (n, dataTable) {
  //     const data = dataTable
  //     const numbV = this.numb_v
  //     const numbC = this.numb_c
  //     const keyCol = this.data.key_cols[n]
  //     const keyRow = this.data.key_rows[n]
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (j === 0 && i === keyRow) {
  //           if (keyCol - 1 <= numbV) {
  //             data[i][j] = ['X', keyCol - 1]
  //           } else if (keyCol - 1 <= (numbV + numbC)) {
  //             data[i][j] = ['S', keyCol - numbV]
  //           }
  //         }
  //       }
  //     }
  //   },
  //   handleProcess () {
  //     let n = 0
  //     while (this.data.isOptimal === false) {
  //       if (n === 0) {
  //         this.data.table_it.push([])
  //         const data = this.data.table_1st
  //         // Change VD
  //         this.handleChangeVD(n, data)
  //         // Change Number of New Row
  //         this.changeNR(n, data)
  //         // Change Non Number of New Table Key Col
  //         this.changeNT(n, data)
  //         // // Change Number of New Table Key Col
  //         this.changeNC(n, data)
  //         // Choose New Key Col
  //         this.chooseKC(n, data)
  //       } else {
  //         this.data.table_it.push([])
  //         const dataParse = JSON.parse(this.table_it, (key, value) => {
  //           if (typeof value === 'string') {
  //             return value
  //           }
  //           return value
  //         })
  //         const data = dataParse[n - 1]
  //         // Change VD
  //         this.handleChangeVD(n, data)
  //         // Change Number of New Row
  //         this.changeNR(n, data)
  //         // Change Non Number of New Table Key Col
  //         this.changeNT(n, data)
  //         // // Change Number of New Table Key Col
  //         this.changeNC(n, data)
  //         // Choose New Key Col
  //         this.chooseKC(n, data)
  //       }
  //       n += 1
  //     }
  //   },
  //   changeNR (n, dataTable) {
  //     const data = dataTable
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (i === this.data.key_rows[n] && j > 0) {
  //           const oldNumb = data[i][j]
  //           const keyNumb = this.data.key_numbs[n]
  //           const newNumb = oldNumb / keyNumb
  //           data[i][j] = newNumb
  //           if (j === data[i].length - 1) {
  //             data[i][j] = 0
  //           }
  //         }
  //       }
  //     }
  //   },
  //   changeNT (n, dataTable) {
  //     const data = dataTable
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (i !== this.data.key_rows[n] && j > 0) {
  //           if (j !== this.data.key_cols[n]) {
  //             const oldNumb = data[i][j]
  //             const rowNumb = data[i][this.data.key_cols[n]]
  //             const colNumb = data[this.data.key_rows[n]][j]
  //             const newNumb = (oldNumb - (rowNumb * colNumb))
  //             data[i][j] = newNumb
  //             if (j === data[i].length - 1) {
  //               data[i][j] = 0
  //             }
  //           }
  //         }
  //       }
  //     }
  //   },
  //   changeNC (n, dataTable) {
  //     const data = dataTable
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (i !== this.data.key_rows[n] && j > 0) {
  //           if (j === this.data.key_cols[n]) {
  //             const oldNumb = data[i][j]
  //             const rowNumb = data[i][this.data.key_cols[n]]
  //             const colNumb = data[this.data.key_rows[n]][j]
  //             const newNumb = (oldNumb - (rowNumb * colNumb))
  //             data[i][j] = newNumb
  //             if (j === data[i].length - 1) {
  //               data[i][j] = 0
  //             }
  //           }
  //         }
  //       }
  //     }
  //     this.data.table_it[n] = data
  //     this.add_table_it(JSON.stringify(this.data.table_it))
  //   },
  //   chooseKC (n, dataTable) {
  //     const data = dataTable
  //     let keyCol = 0
  //     let keyColNumb = 0
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (i === 0 && j > 1) {
  //           const colNumb = data[i][j]
  //           // Max Function
  //           if (this.type_op === 'MAX' && colNumb < keyColNumb) {
  //             keyCol = j
  //             keyColNumb = colNumb
  //           }
  //           // Min Function
  //           if (this.type_op === 'MIN' && colNumb > keyColNumb) {
  //             keyCol = j
  //             keyColNumb = colNumb
  //           }
  //         }
  //       }
  //     }
  //     // Add New Key Col
  //     if (keyCol === 0) {
  //       this.data.isOptimal = true
  //     } else {
  //       this.data.key_cols.push(null)
  //       this.data.key_cols[n + 1] = keyCol
  //       this.add_keyCols(JSON.stringify(this.data.key_cols))
  //       // Calculate New Index
  //       this.calcIndx(n, data)
  //       // Add New Key Row
  //       this.addKeyRow(n, data)
  //       // Add New Key Numb
  //       this.addKeyNumb(n, data)
  //       // Update Table Const
  //       this.data.table_cons = data
  //     }
  //   },
  //   calcIndx (n, dataTable) {
  //     const data = dataTable
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (j === data[i].length - 1 && i > 0) {
  //           const NK = data[i][j - 1]
  //           const colNumb = data[i][this.data.key_cols[n + 1]]
  //           if (colNumb !== 0) {
  //             const indNumb = NK / colNumb
  //             data[i][j] = indNumb
  //             if (i === 0) {
  //               data[i][j] = 0
  //             }
  //           } else {
  //             data[i][j] = 'INFINITY'
  //           }
  //         }
  //       }
  //     }
  //   },
  //   addKeyRow (n, dataTable) {
  //     const data = dataTable
  //     let keyRow = 0
  //     let keyRowNumb = 0
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (j === data[i].length - 1) {
  //           const indNumb = data[i][j]
  //           if (keyRow === 0) {
  //             if (indNumb > 0) {
  //               keyRow = i
  //               keyRowNumb = indNumb
  //             }
  //           } else {
  //             if (indNumb > 0) {
  //               if (indNumb < keyRowNumb) {
  //                 keyRow = i
  //                 keyRowNumb = indNumb
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //     // Choose Key Row (Zero Condition)
  //     for (let i = 0; i < data.length; i++) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (j === data[i].length - 1) {
  //           const indNumb = data[i][j]
  //           const keyColNumb = this.data.table_1st[i][this.data.key_cols[n]]
  //           if (i > 0) {
  //             if (keyRow === 0) {
  //               if (indNumb === 0 && keyColNumb > 0) {
  //                 keyRow = i
  //                 keyRowNumb = indNumb
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //     this.data.key_rows.push(null)
  //     this.data.key_rows[n + 1] = keyRow
  //     this.add_keyRows(JSON.stringify(this.data.key_rows))
  //   },
  //   addKeyNumb (n, dataTable) {
  //     const data = dataTable
  //     const keyRow = this.data.key_rows[n + 1]
  //     const keyCol = this.data.key_cols[n + 1]
  //     const keyNumb = data[keyRow][keyCol]
  //     this.data.key_numbs.push(null)
  //     this.data.key_numbs[n + 1] = keyNumb
  //     this.add_keyNumbs(JSON.stringify(this.data.key_numbs))
  //   }
  }
}
</script>
