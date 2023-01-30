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
  name: 'Btn-Submit-Form-Big-M',
  props: ['btnText', 'data'],
  data () {
    return {
      DT: {
        table_it: [],
        isOptimal: false
      }
    }
  },
  computed: {
    ...mapGetters({
      table_1st: 'table_1st',
      table_it: 'table_it'
    })
  },
  methods: {
    ...mapActions([
      'add_var_a',
      'add_table_1st',
      'add_table_it',
      'add_keyCols',
      'add_keyRows',
      'add_keyNumbs',
      'add_numb_s',
      'add_numb_a'
    ]),
    handleSubmit () {
      const data = {
        typeOp: this.data.type_op,
        input: this.data.input,
        n: {
          v: this.data.numb_v,
          c: this.data.numb_c,
          s: 0,
          a: 0,
          Col: 0,
          Row: 0
        },
        symbols: this.data.symbols,
        s: [],
        a: [],
        change: [],
        key: {
          col: [],
          row: [],
          num: []
        }
      }
      this.onCountN(data)
      this.$router.replace({
        name: 'Process-Big-M'
      })
    },
    onCountN (data) {
      for (let i = 0; i < data.symbols.length; i++) { // Count Symbol
        if (i > 0) {
          if (data.symbols[i] === '=') {
            data.a.push({
              index: i,
              value: ['A', (data.a.length + 1)]
            })
          }
          if (data.symbols[i] === '≤') {
            data.s.push({
              index: i,
              value: ['S', (data.s.length + 1)]
            })
          }
          if (data.symbols[i] === '≥') {
            data.a.push({
              index: i,
              value: ['A', (data.a.length + 1)]
            })
            data.s.push({
              index: i,
              value: ['S', (data.s.length + 1)]
            })
          }
        }
      }
      data.n.a += data.a.length
      data.n.s += data.s.length
      data.n.Col += (data.n.c + 2)
      data.n.Row += (data.n.v + data.n.s + data.n.a + 4)
      this.changeFunc(data)
    },
    changeFunc (data) {
      const nC = data.n.Col
      const nR = data.n.Row
      for (let i = 0; i < nC; i++) {
        data.change.push([])
        for (let j = 0; j < nR; j++) {
          if (j === 0) { // Change Col VD
            if (i === 0) {
              data.change[i].push(['V', 'D'])
            } else if (i === 1) {
              data.change[i].push(['Z', ''])
            } else {
              if (data.symbols[i - 1] === '=' || data.symbols[i - 1] === '≥') {
                for (let k = 0; k < data.n.a; k++) {
                  if ((i - 1) === data.a[k].index) {
                    data.change[i].push(data.a[k].value)
                  }
                }
              } else if (data.symbols[i - 1] === '≤') {
                for (let k = 0; k < data.n.s; k++) {
                  if ((i - 1) === data.s[k].index) {
                    data.change[i].push(data.s[k].value)
                  }
                }
              }
            }
          } else {
            if (i === 0) { // Change Row VD
              if (j === 1) {
                data.change[i].push(['Z', ''])
              } else if (j < data.n.v + 2) {
                data.change[i].push(['X', (j - 1)])
              } else if (j < data.n.v + 2 + data.n.s) {
                data.change[i].push(['S', (j - 1 - data.n.v)])
              } else if (j < data.n.v + 2 + data.n.s + data.n.a) {
                data.change[i].push(['A', (j - 1 - data.n.v - data.n.s)])
              } else if (j === nR - 2) {
                data.change[i].push('NK')
              } else if (j === nR - 1) {
                data.change[i].push('Index')
              }
            } else if (i === 1) { // Change Z Row
              if (j === 1) {
                data.change[i].push([1, 0])
              } else if (j < data.n.v + 2) {
                data.change[i].push([(data.input[i - 1][j - 2] * -1), 0])
              } else if (j < data.n.v + 2 + data.n.s) {
                data.change[i].push([0, 0])
              } else if (j < data.n.v + 2 + data.n.s + data.n.a) {
                data.change[i].push([0, 0])
              } else if (j === nR - 2) {
                data.change[i].push([(data.input[i - 1][data.input[i - 1].length - 1]), 0])
              } else if (j === nR - 1) {
                data.change[i].push([0, 0])
              }
            } else { // Change C Function
              if (j === 1) {
                data.change[i].push([0, 0])
              } else if (j < data.n.v + 2) {
                data.change[i].push([(data.input[i - 1][j - 2]), 0])
              } else if (j < data.n.v + 2 + data.n.s) {
                let value = 0
                for (let k = 0; k < data.n.s; k++) {
                  if ((i - 1) === data.s[k].index && (data.s[k].value[0] + data.s[k].value[1]) === (data.change[0][j][0] + data.change[0][j][1])) {
                    if (data.symbols[i - 1] === '≤') {
                      value = 1
                    } else if (data.symbols[i - 1] === '≥') {
                      value = -1
                    }
                  }
                }
                data.change[i].push([value, 0])
              } else if (j < data.n.v + 2 + data.n.s + data.n.a) {
                let value = 0
                for (let k = 0; k < data.n.a; k++) {
                  if ((i - 1) === data.a[k].index && (data.a[k].value[0] + data.a[k].value[1]) === (data.change[0][j][0] + data.change[0][j][1])) {
                    value = 1
                  }
                }
                data.change[i].push([value, 0])
              } else if (j === nR - 2) {
                data.change[i].push([(data.input[i - 1][data.input[i - 1].length - 1]), 0])
              } else if (j === nR - 1) {
                data.change[i].push([0, 0])
              }
            }
          }
        }
      }
      for (let i = 0; i < data.a.length; i++) {
        data.a[i].table = data.change[data.a[i].index + 1]
      }
      const countA = ['A']
      for (let i = 0; i < data.a.length; i++) {
        for (let j = 0; j < data.a[i].table.length; j++) {
          if (j > 0) {
            if (countA.length < data.a[i].table.length) {
              countA.push(data.a[i].table[j][0])
            } else {
              countA[j] = countA[j] + data.a[i].table[j][0]
            }
          }
        }
      }
      for (let i = 0; i < countA.length; i++) {
        if (i > 0 && (i < data.n.v + 2 + data.n.s)) {
          if (data.typeOp === 'MIN') {
            data.change[1][i][1] = data.change[1][i][1] + countA[i]
          } else if (data.typeOp === 'MAX') {
            data.change[1][i][1] = data.change[1][i][1] - countA[i]
          }
        } else if (i === countA.length - 2) {
          if (data.typeOp === 'MIN') {
            data.change[1][i][1] = data.change[1][i][1] + countA[i]
          } else if (data.typeOp === 'MAX') {
            data.change[1][i][1] = data.change[1][i][1] - countA[i]
          }
        }
      }
      data.countA = countA
      this.add_table_1st(JSON.stringify(data.change))
      this.add_var_a(JSON.stringify(data.a))
      this.add_numb_a(data.n.a)
      this.add_numb_s(data.n.s)
      this.onProcess(data)
    },
    onProcess (data) {
      let n = 0
      while (this.DT.isOptimal === false) {
        if (n === 0) {
          const parse = JSON.parse(this.table_1st, (key, value) => {
            if (typeof value === 'string') {
              return value
            }
            return value
          })
          data.table_it = [parse]
          this.findKeyCol(data, n)
        } else {
          const parse = JSON.parse(this.table_it, (key, value) => {
            if (typeof value === 'string') {
              return value
            }
            return value
          })
          data.table_it.push(parse[n - 1])
          this.findKeyCol(data, n)
        }
        n += 1
      }
    },
    findKeyCol (data, n) {
      const keyCol = {
        index: 0,
        value: [0, 0]
      }
      for (let i = 0; i < data.n.Row - 2; i++) {
        const dataB = (Math.round((data.table_it[n][1][i][0] + Number.EPSILON) * 100) / 100) // Data Basic
        const dataM = (Math.round((data.table_it[n][1][i][1] + Number.EPSILON) * 100) / 100) // Data Big M
        // const dataB = data.table_it[n][1][i][0] // Data Basic
        // const dataM = data.table_it[n][1][i][1] // Data Big M
        const dataValue = data.table_it[n][1][i]
        if (data.typeOp === 'MIN' && i > 1) { // Min Function
          if (keyCol.value[0] === 0 && keyCol.value[1] === 0) {
            if (dataM > 0) {
              keyCol.index = i
              keyCol.value = dataValue
            } else if (dataM === 0 && dataB > 0) {
              keyCol.index = i
              keyCol.value = dataValue
            }
          } else {
            if (dataM > 0 && dataM > keyCol.value[1]) {
              keyCol.index = i
              keyCol.value = dataValue
            } else if (keyCol.value[1] === 0 && dataM > keyCol.value[0]) {
              keyCol.index = i
              keyCol.value = dataValue
            }
          }
        }
        if (data.typeOp === 'MAX' && i > 1) { // Max Function
          if (keyCol.value[0] === 0 && keyCol.value[1] === 0) {
            if (dataM < 0) {
              keyCol.index = i
              keyCol.value = dataValue
            } else if (dataM === 0 && dataB < 0) {
              keyCol.index = i
              keyCol.value = dataValue
            }
          } else {
            if (dataM < 0 && dataM > keyCol.value[1]) {
              keyCol.index = i
              keyCol.value = dataValue
            } else if (keyCol.value[1] === 0 && dataM < keyCol.value[0]) {
              keyCol.index = i
              keyCol.value = dataValue
            }
          }
        }
      }
      data.key.col.push(keyCol.index)
      if (keyCol.index === 0) {
        this.DT.isOptimal = true
      } else {
        this.countIndex(data, n)
        this.add_keyCols(JSON.stringify(data.key.col))
      }
    },
    countIndex (data, n) {
      const keyCol = data.key.col[n]
      for (let i = 0; i < data.n.Col; i++) {
        for (let j = 0; j < data.n.Row; j++) {
          const value = data.table_it[n][i][j]
          const NK = data.table_it[n][i][data.n.Row - 2]
          if (j === keyCol && i > 1) {
            if (value[0] !== 0) {
              const indexValue = [NK[0] / value[0], 0]
              data.table_it[n][i][data.n.Row - 1] = indexValue
              if (n > 0) {
                data.table_it[n - 1][i][data.n.Row - 1] = indexValue
              }
              if (n === 0) { // input index table 1st
                this.add_table_1st(JSON.stringify(data.table_it[n]))
              }
            } else {
              data.table_it[n][i][data.n.Row - 1] = ['INFINITY', 0]
              if (n > 0) {
                data.table_it[n][i][data.n.Row - 1] = ['INFINITY', 0]
              }
              if (n === 0) { // input index table 1st
                this.add_table_1st(JSON.stringify(data.table_it[n]))
              }
            }
          }
        }
      }
      this.add_table_it(JSON.stringify(data.table_it))
      this.findKeyRow(data, n)
    },
    findKeyRow (data, n) {
      const keyRow = {
        index: 0,
        value: [0, 0]
      }
      for (let i = 0; i < data.n.Col; i++) {
        const indexValue = data.table_it[n][i][data.n.Row - 1]
        if (i > 1) {
          if (keyRow.value[0] === 0) {
            if (indexValue[0] > 0) {
              keyRow.index = i
              keyRow.value = indexValue
            }
          } else {
            if (indexValue[0] > 0 && indexValue[0] < keyRow.value[0]) {
              keyRow.index = i
              keyRow.value = indexValue
            }
          }
        }
      }
      // Zero Condition
      for (let i = 0; i < data.n.Col; i++) {
        const indexValue = data.table_it[n][i][data.n.Row - 1]
        const keyColValue = data.table_it[n][i][data.key.col[n]]
        if (i > 1) {
          if (indexValue[0] === 0 && keyRow.value[0] === 0) {
            if (keyColValue[0] > 0) {
              keyRow.index = i
              keyRow.value = indexValue
            }
          }
        }
      }
      data.key.row.push(keyRow.index)
      this.changeNR(data, n)
      this.add_keyRows(JSON.stringify(data.key.row))
    },
    changeNR (data, n) {
      data.key.num.push(data.table_it[n][data.key.row[n]][data.key.col[n]])
      this.add_keyNumbs(JSON.stringify(data.key.num))
      for (let i = 0; i < data.n.Col; i++) {
        for (let j = 0; j < data.n.Row; j++) {
          const value = data.table_it[n][i][j]
          if (i === data.key.row[n] && j > 0) {
            if (data.key.num[n][0] !== 0) {
              const newValue = value[0] / data.key.num[n][0]
              data.table_it[n][i][j] = [newValue, 0]
            } else {
              data.table_it[n][i][j] = ['INFINTY', 0]
            }
          }
        }
      }
      this.changeNT(data, n)
      this.add_keyNumbs(JSON.stringify(data.key.num))
    },
    changeNT (data, n) {
      for (let i = 0; i < data.n.Col; i++) {
        for (let j = 0; j < data.n.Row; j++) {
          const value = data.table_it[n][i][j]
          const keyColValue = data.table_it[n][i][data.key.col[n]]
          const keyRowValue = data.table_it[n][data.key.row[n]][j]
          if (i > 0 && j > 0) {
            if (i !== data.key.row[n] && j !== data.key.col[n]) {
              const newValue = [value[0] - (keyColValue[0] * keyRowValue[0]), value[1] - (keyColValue[1] * keyRowValue[0])]
              data.table_it[n][i][j] = newValue
            }
          }
        }
      }
      this.changeNC(data, n)
    },
    changeNC (data, n) {
      for (let i = 0; i < data.n.Col; i++) {
        for (let j = 0; j < data.n.Row; j++) {
          const value = data.table_it[n][i][j]
          const keyColValue = data.table_it[n][i][data.key.col[n]]
          const keyRowValue = data.table_it[n][data.key.row[n]][j]
          if (i > 0 && j > 0) {
            if (i !== data.key.row[n] && j === data.key.col[n]) {
              const newValue = [value[0] - (keyColValue[0] * keyRowValue[0]), value[1] - (keyColValue[1] * keyRowValue[0])]
              data.table_it[n][i][j] = newValue
            }
          }
        }
      }
      this.changeVD(data, n)
    },
    changeVD (data, n) {
      for (let i = 0; i < data.n.Col; i++) {
        for (let j = 0; j < data.n.Row; j++) {
          const newValue = data.table_it[n][0][data.key.col[n]]
          if (i === data.key.row[n] && j === 0) {
            data.table_it[n][i][j] = newValue
          }
        }
      }
      this.postData(data, n)
    },
    postData (data, n) {
      for (let i = 0; i < data.n.Col; i++) {
        for (let j = 0; j < data.n.Row; j++) {
          if (j === (data.n.Row - 1) && i > 0) {
            data.table_it[n][i][j] = [0, 0]
          }
        }
      }
      this.add_table_it(JSON.stringify(data.table_it))
    }
  }
}
</script>
