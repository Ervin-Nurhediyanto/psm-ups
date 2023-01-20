<template>
  <div>
    <button
      class="btn btn-success my-1 w-100"
      @click.prevent="handleSubmit"
    >
      <b>{{ btnText }}</b>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Btn-Submit-Form-Primal',
  props: ['btnText', 'data'],
  data () {
    return {
      data_process: {
        table_1st: [],
        table_it: [],
        key_cols: [],
        key_rows: [],
        key_numbs: [],
        isOptimal: false
      }
    }
  },
  computed: {
    ...mapGetters({
      table_it: 'table_it'
    })
  },
  methods: {
    ...mapActions([
      'add_table_1st',
      'add_table_it',
      'add_keyCols',
      'add_keyRows',
      'add_keyNumbs'
    ]),
    handleSubmit () {
      this.onProcess1st()
      this.onProcessIts()
      this.$router.replace({
        name: 'Process-Primal'
      })
    },
    onProcessIts () {
      let n = 0
      while (this.data_process.isOptimal === false) {
        if (n === 0) { // Table 1st
          this.data_process.table_it.push([])
          const data = this.data_process.table_1st
          this.changeVD(n, data) // Change VD
          this.changeNR(n, data) // Change New Row
          this.changeNT(n, data) // Change New Table
          this.changeNC(n, data) // Change New Col
          this.findKeyCol(n, data) // Find Key Col
        } else { // Table Its
          this.data_process.table_it.push([])
          const parse = JSON.parse(this.table_it, (key, value) => {
            if (typeof value === 'string') {
              return value
            }
            return value
          })
          const data = parse[n - 1]
          this.changeVD(n, data) // Change VD
          this.changeNR(n, data) // Change New Row
          this.changeNT(n, data) // Change New Table
          this.changeNC(n, data) // Change New Col
          this.findKeyCol(n, data) // Find Key Col
        }
        n += 1
      }
    },
    findKeyCol (n, data) {
      let keyCol = 0
      let keyColValue = 0
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (i === 0 && j > 1) {
            const value = data[i][j]
            // Max Function
            if (this.data.type_op === 'MAX' && value < keyColValue) {
              keyCol = j
              keyColValue = value
            }
            // Min Function
            if (this.data.type_op === 'MIN' && value > keyColValue) {
              keyCol = j
              keyColValue = value
            }
          }
        }
      }
      if (keyCol === 0) { // Check Optimal
        this.data_process.isOptimal = true
      } else {
        this.data_process.key_cols.push(null)
        this.data_process.key_cols[n + 1] = keyCol // Add New Key Col
        this.add_keyCols(JSON.stringify(this.data_process.key_cols))
        this.calculateIndex(n, data)
        this.findKeyRow(n, data)
        this.findKeyNum(n, data)
      }
    },
    calculateIndex (n, data) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (j === data[i].length - 1 && i > 0) {
            const NK = data[i][j - 1]
            const keyColValue = data[i][this.data_process.key_cols[n + 1]]
            if (keyColValue !== 0) {
              const indexValue = NK / keyColValue
              data[i][j] = indexValue
              if (i === 0) {
                data[i][j] = 0
              }
            } else {
              data[i][j] = 'INFINITY'
            }
          }
        }
      }
    },
    findKeyRow (n, data) {
      let keyRow = 0
      let keyRowValue = 0
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (j === data[i].length - 1) {
            const value = data[i][j]
            if (keyRow === 0) {
              if (value > 0) {
                keyRow = i
                keyRowValue = value
              }
            } else {
              if (value > 0) {
                if (value < keyRowValue) {
                  keyRow = i
                  keyRowValue = value
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < data.length; i++) { // Zero Condition
        for (let j = 0; j < data[i].length; j++) {
          if (j === data[i].length - 1) {
            const value = data[i][j]
            const keyColValue = this.data_process.table_1st[i][this.data_process.key_cols[n]]
            if (i > 0) {
              if (keyRow === 0) {
                if (value === 0 && keyColValue > 0) {
                  keyRow = i
                  keyRowValue = value
                }
              }
            }
          }
        }
      }
      this.data_process.key_rows.push(null)
      this.data_process.key_rows[n + 1] = keyRow
      this.add_keyRows(JSON.stringify(this.data_process.key_rows))
    },
    findKeyNum (n, data) {
      const keyRow = this.data_process.key_rows[n + 1]
      const keyCol = this.data_process.key_cols[n + 1]
      const keyNum = data[keyRow][keyCol]
      this.data_process.key_numbs.push(null)
      this.data_process.key_numbs[n + 1] = keyNum
      this.add_keyNumbs(JSON.stringify(this.data_process.key_numbs))
    },
    changeVD (n, data) {
      const nV = this.data.numb_v
      const nC = this.data.numb_c
      const keyCol = this.data_process.key_cols[n]
      const keyRow = this.data_process.key_rows[n]
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (j === 0 && i === keyRow) {
            if (keyCol - 1 <= nV) {
              data[i][j] = ['X', keyCol - 1]
            } else if (keyCol - 1 <= (nV + nC)) {
              data[i][j] = ['S', keyCol - nV]
            }
          }
        }
      }
    },
    changeNR (n, data) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (i === this.data_process.key_rows[n] && j > 0) {
            const value = data[i][j]
            const keyNumValue = this.data_process.key_numbs[n]
            const newValue = value / keyNumValue
            data[i][j] = newValue
            if (j === data[i].length - 1) {
              data[i][j] = 0
            }
          }
        }
      }
    },
    changeNT (n, data) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (i !== this.data_process.key_rows[n] && j > 0) {
            if (j !== this.data_process.key_cols[n]) {
              const value = data[i][j]
              const keyRowValue = data[i][this.data_process.key_cols[n]]
              const keyColValue = data[this.data_process.key_rows[n]][j]
              const newValue = (value - (keyRowValue * keyColValue))
              data[i][j] = newValue
              if (j === data[i].length - 1) {
                data[i][j] = 0
              }
            }
          }
        }
      }
    },
    changeNC (n, data) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (i !== this.data_process.key_rows[n] && j > 0) {
            if (j === this.data_process.key_cols[n]) {
              const value = data[i][j]
              const keyRowValue = data[i][this.data_process.key_cols[n]]
              const keyColValue = data[this.data_process.key_rows[n]][j]
              const newValue = (value - (keyRowValue * keyColValue))
              data[i][j] = newValue
              if (j === data[i].length - 1) {
                data[i][j] = 0
              }
            }
          }
        }
      }
      this.data_process.table_it[n] = data
      this.add_table_it(JSON.stringify(this.data_process.table_it))
    },
    onProcess1st () {
      const nV = this.data.numb_v // Number of Variable
      const nC = this.data.numb_c // Number of Constraint and Colom
      const nR = nV + nC + 3 // Number of Row
      const data = this.data.input
      const typeOp = this.data.type_op
      const table1st = this.data_process.table_1st
      let keyCol = 0
      let keyColValue = 0
      let keyRow = 0
      let keyRowValue = 0
      let KeyNumValue = 0
      if (table1st.length < 1) { // Input 1st
        for (let i = 0; i <= nC; i++) {
          table1st.push([])
          for (let j = 0; j <= nR; j++) {
            if (i === 0 && j === 0) { // Input VD
              table1st[i].push(['Z', ''])
            } else if (i > 0 && j === 0) { // Input VD
              table1st[i].push(['S', i])
            } else if (j === 1) {
              if (i === 0) { // Input Z value
                table1st[i].push(1)
              } else {
                table1st[i].push(0)
              }
            } else if (j < nV + 2) {
              if (i === 0) { // Input X value
                table1st[i].push(data[i][j - 2] * -1)
              } else {
                table1st[i].push(data[i][j - 2])
              }
            } else if (j < nR - 1) { // Input S value
              if (i === 0) {
                table1st[i].push(0)
              } else if (i === j - nV - 1) {
                table1st[i].push(1)
              } else {
                table1st[i].push(0)
              }
            } else if (j < nR) { // Input NK value
              table1st[i].push(data[i][data[i].length - 1])
            } else if (j === nR) {
              if (i === 0) { // Find Key Col
                for (let k = 0; k < table1st[i].length - 1; k++) {
                  if (k > 1) {
                    // Max Function
                    if (typeOp === 'MAX' && table1st[i][k] < keyColValue) {
                      keyCol = k
                      keyColValue = table1st[i][k]
                    }
                    // Min Function
                    if (typeOp === 'MIN' && table1st[i][k] > keyColValue) {
                      keyCol = k
                      keyColValue = table1st[i][k]
                    }
                  }
                }
              }
              const NK = table1st[i][table1st[i].length - 1]
              const KeyColDiv = table1st[i][keyCol]
              if (KeyColDiv !== 0) {
                const indexValue = NK / KeyColDiv
                table1st[i].push(indexValue)
              } else {
                table1st[i].push('INFINITY')
              }
            }
          }
        }
        for (let i = 0; i < table1st.length; i++) { // Find Key Row
          const indexValue = table1st[i][table1st[i].length - 1]
          if (i > 0) {
            if (keyRow === 0) {
              if (indexValue > 0) {
                keyRow = i
                keyRowValue = indexValue
              }
            } else {
              if (indexValue > 0) {
                if (indexValue < keyRowValue) {
                  keyRow = i
                  keyRowValue = indexValue
                }
              }
            }
          }
        }
        for (let i = 0; i < table1st.length; i++) { // Zero Condition
          const indexValue = table1st[i][table1st[i].length - 1]
          const keyColDiv = table1st[i][keyCol]
          if (i > 0) {
            if (keyRow === 0) {
              if (indexValue === 0 && keyColDiv > 0) {
                keyRow = i
                keyRowValue = indexValue
              }
            }
          }
        }
        KeyNumValue = table1st[keyRow][keyCol]
        this.postData1st(keyCol, keyRow, KeyNumValue)
      }
    },
    postData1st (keyCol, keyRow, KeyNumValue) {
      this.data_process.key_cols.push(keyCol) // Key Col
      this.add_keyCols(JSON.stringify(this.data_process.key_cols))
      this.data_process.key_rows.push(keyRow) // Key Row
      this.add_keyRows(JSON.stringify(this.data_process.key_rows))
      this.data_process.key_numbs.push(KeyNumValue) // Key Numb
      this.add_keyNumbs(JSON.stringify(this.data_process.key_numbs))
      this.add_table_1st(JSON.stringify(this.data_process.table_1st))
    }
  }
}
</script>
