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
  name: 'Btn-Submit-Form-Dua-Fase',
  props: ['btnText', 'data'],
  data () {
    return {
      DT: {
        isOptimal: false,
        isOptimal2: false
      }
    }
  },
  computed: {
    ...mapGetters({
      table_it: 'table_it',
      table_it2: 'table_it2',
      table_1st: 'table_1st',
      table_2nd: 'table_2nd'
    })
  },
  methods: {
    ...mapActions([
      'add_var_a',
      'add_var_x',
      'add_numb_a',
      'add_numb_s',
      'add_keyCols',
      'add_keyCols2',
      'add_keyRows',
      'add_keyRows2',
      'add_keyNumbs',
      'add_keyNumbs2',
      'add_table_1st',
      'add_table_2nd',
      'add_table_it',
      'add_table_it2',
      'add_table_2'
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
          num: [],
          col2: [],
          row2: [],
          num2: []
        }
      }
      this.onCountN(data)
      this.changeFunc(data)
      this.createTable1st(data)
      this.onProcess(data)
      // Disini kasih handle error input
      this.$router.replace({
        name: 'Process-Dua-Fase'
      })
    },
    onProcess (data) {
      this.onFase1st(data)
      if (this.DT.isOptimal === true) {
        this.onFase2nd(data)
      }
    },
    onFase1st (data) {
      const fase = 1
      data.isFase2nd = false
      data.typeOp1st = 'MIN'
      console.log('Fase 1')
      let n = 0
      while (this.DT.isOptimal === false) {
        console.log(`Iterasi ke- ${n}`)
        if (n === 0) {
          const parse = JSON.parse(this.table_1st, (key, value) => {
            if (typeof value === 'string') {
              return value
            }
            return value
          })
          data.table_it = [parse]
          this.findKeyCol(data, n, fase)
          this.checkOptimal(data, n, fase)
        } else {
          const parse = JSON.parse(this.table_it, (key, value) => {
            if (typeof value === 'string') {
              return value
            }
            return value
          })
          data.table_it.push(parse[n - 1])
          this.findKeyCol(data, n, fase)
          this.checkOptimal(data, n, fase)
        }
        n += 1
      }
    },
    onFase2nd (data) {
      const nFase1 = data.table_it.length
      const nCFase1 = data.table_it[nFase1 - 1].length
      const nRFase1 = data.table_it[nFase1 - 1][1].length
      const AFase1 = data.table_it[nFase1 - 1][1][nRFase1 - 2]
      const AValue = (Math.round((AFase1 + Number.EPSILON) * 100) / 100)
      const dataFase1 = data.table_it[nFase1 - 1]
      data.table_2nd = [[]]
      for (let i = 0; i < nCFase1; i++) {
        data.table_2nd[0].push([])
        for (let j = 0; j < nRFase1 - data.n.a; j++) {
          if (j === (nRFase1 - data.n.a - 2)) {
            data.table_2nd[0][i].push(dataFase1[i][nRFase1 - 2])
          } else if (j === (nRFase1 - data.n.a - 1)) {
            data.table_2nd[0][i].push(dataFase1[i][nRFase1 - 1])
          } else {
            data.table_2nd[0][i].push(dataFase1[i][j])
          }
        }
      }
      data.x = []
      for (let i = 0; i < data.table_2nd[0].length; i++) {
        const value = data.table_2nd[0][i][0]
        if (value[0] === 'X') {
          data.x.push({
            index: i,
            value: value,
            table: data.table_2nd[0][i]
          })
        }
      }
      const countX = [['Z', '']]
      for (let i = 0; i < data.x.length; i++) {
        for (let j = 0; j < data.x[i].table.length; j++) {
          const value = data.x[i].table[j]
          const input = data.input[0][data.x[i].value[1] - 1]
          if (j > 0) {
            const resValue = value * input
            if (countX.length < data.x[i].table.length) {
              countX.push(resValue)
            } else {
              countX[j] = countX[j] + resValue
            }
          }
        }
      }
      for (let i = 0; i < countX.length; i++) {
        if (i > 0) {
          if (i === 1) {
            countX[i] = 1
          } else if (i < data.n.v + 2) {
            countX[i] = 0
          }
        }
      }
      data.table_2nd[0][0][1] = ['Z', '']
      data.countX = countX
      data.table_2nd[0][1] = data.countX
      data.n.Row2 = data.table_2nd[0][0].length
      this.add_var_x(JSON.stringify(data.x))
      this.add_table_2(JSON.stringify(data.table_2nd[0]))
      this.add_table_2nd(JSON.stringify(data.table_2nd[0]))
      if (AValue === 0) {
        console.log('Lanjut')
        const fase = 2
        data.isFase2nd = true
        data.typeOp2nd = data.typeOp
        let n = 0
        console.log(`Fase ${fase}`)
        while (this.DT.isOptimal2 === false) {
          console.log(`Iterasi ke- ${n}`)
          if (n === 0) {
            data.table_it2 = [data.table_2nd[0]]
            this.findKeyCol(data, n, fase)
            this.checkOptimal(data, n, fase)
          } else {
            const parse = JSON.parse(this.table_it2, (key, value) => {
              if (typeof value === 'string') {
                return value
              }
              return value
            })
            data.table_it2.push(parse[n - 1])
            this.findKeyCol(data, n, fase)
            this.checkOptimal(data, n, fase)
          }
          n += 1
        }
      } else {
        console.log('Tidak Ada Penyelesaian')
      }
      console.log(data)
    },
    findKeyCol (data, n, fase) {
      const keyCol = {
        index: 0,
        value: 0
      }
      if (fase === 1) {
        for (let i = 0; i < data.n.Row - 2; i++) {
          const value = data.table_it[n][1][i]
          if (data.typeOp1st === 'MIN' && i > 1) {
            if (keyCol.value === 0) {
              if ((Math.round((value + Number.EPSILON) * 100) / 100) > 0) {
                keyCol.index = i
                keyCol.value = value
              }
            } else {
              if ((Math.round((value + Number.EPSILON) * 100) / 100) > 0 && value > keyCol.value) {
                keyCol.index = i
                keyCol.value = value
              }
            }
          }
        }
        data.key.col.push(keyCol.index)
      }
      if (fase === 2) {
        for (let i = 0; i < data.n.Row2 - 2; i++) {
          const value = data.table_it2[n][1][i]
          if (data.typeOp2nd === 'MIN' && i > 1) {
            if (keyCol.value === 0) {
              if ((Math.round((value + Number.EPSILON) * 100) / 100) > 0) {
                keyCol.index = i
                keyCol.value = value
              }
            } else {
              if ((Math.round((value + Number.EPSILON) * 100) / 100) > 0 && value > keyCol.value) {
                keyCol.index = i
                keyCol.value = value
              }
            }
          } else if (data.typeOp2nd === 'MAX' && i > 1) {
            if (keyCol.value === 0) {
              if ((Math.round((value + Number.EPSILON) * 100) / 100) < 0) {
                keyCol.index = i
                keyCol.value = value
              }
            } else {
              if ((Math.round((value + Number.EPSILON) * 100) / 100) < 0 && value < keyCol.value) {
                keyCol.index = i
                keyCol.value = value
              }
            }
          }
        }
        data.key.col2.push(keyCol.index)
      }
    },
    checkOptimal (data, n, fase) {
      if (fase === 1) {
        if (data.key.col[n] === 0) {
          this.DT.isOptimal = true
        } else {
          this.add_keyCols(JSON.stringify(data.key.col))
          this.countIndex(data, n, fase)
          this.findKeyRow(data, n, fase)
          this.changeNR(data, n, fase)
          this.changeNT(data, n, fase)
          this.changeNC(data, n, fase)
          this.changeVD(data, n, fase)
          this.postData(data, n, fase)
        }
      }
      if (fase === 2) {
        if (data.key.col2[n] === 0) {
          this.DT.isOptimal2 = true
        } else {
          this.add_keyCols2(JSON.stringify(data.key.col2))
          this.countIndex(data, n, fase)
          this.findKeyRow(data, n, fase)
          this.changeNR(data, n, fase)
          this.changeNT(data, n, fase)
          this.changeNC(data, n, fase)
          this.changeVD(data, n, fase)
          this.postData(data, n, fase)
        }
      }
    },
    changeNR (data, n, fase) {
      if (fase === 1) {
        data.key.num.push(data.table_it[n][data.key.row[n]][data.key.col[n]])
        this.add_keyNumbs(JSON.stringify(data.key.num))
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row; j++) {
            const value = data.table_it[n][i][j]
            if (i === data.key.row[n] && j > 0) {
              if (data.key.num[n] !== 0) {
                const newValue = value / data.key.num[n]
                data.table_it[n][i][j] = newValue
              } else {
                data.table_it[n][i][j] = 'INFINTY'
              }
            }
          }
        }
      }
      if (fase === 2) {
        data.key.num2.push(data.table_it2[n][data.key.row2[n]][data.key.col2[n]])
        this.add_keyNumbs2(JSON.stringify(data.key.num2))
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row2; j++) {
            const value = data.table_it2[n][i][j]
            if (i === data.key.row2[n] && j > 0) {
              if (data.key.num2[n] !== 0) {
                const newValue = value / data.key.num2[n]
                data.table_it2[n][i][j] = newValue
              } else {
                data.table_it2[n][i][j] = 'INFINTY'
              }
            }
          }
        }
      }
    },
    changeNT (data, n, fase) {
      if (fase === 1) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row; j++) {
            const value = data.table_it[n][i][j]
            const keyColValue = data.table_it[n][i][data.key.col[n]]
            const keyRowValue = data.table_it[n][data.key.row[n]][j]
            if (i > 0 && j > 0) {
              if (i !== data.key.row[n] && j !== data.key.col[n]) {
                const newValue = value - (keyColValue * keyRowValue)
                data.table_it[n][i][j] = newValue
              }
            }
          }
        }
      }
      if (fase === 2) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row2; j++) {
            const value = data.table_it2[n][i][j]
            const keyColValue = data.table_it2[n][i][data.key.col2[n]]
            const keyRowValue = data.table_it2[n][data.key.row2[n]][j]
            if (i > 0 && j > 0) {
              if (i !== data.key.row2[n] && j !== data.key.col2[n]) {
                const newValue = value - (keyColValue * keyRowValue)
                data.table_it2[n][i][j] = newValue
              }
            }
          }
        }
      }
    },
    changeNC (data, n, fase) {
      if (fase === 1) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row; j++) {
            const value = data.table_it[n][i][j]
            const keyColValue = data.table_it[n][i][data.key.col[n]]
            const keyRowValue = data.table_it[n][data.key.row[n]][j]
            if (i > 0 && j > 0) {
              if (i !== data.key.row[n] && j === data.key.col[n]) {
                const newValue = value - (keyColValue * keyRowValue)
                data.table_it[n][i][j] = newValue
              }
            }
          }
        }
      }
      if (fase === 2) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row2; j++) {
            const value = data.table_it2[n][i][j]
            const keyColValue = data.table_it2[n][i][data.key.col2[n]]
            const keyRowValue = data.table_it2[n][data.key.row2[n]][j]
            if (i > 0 && j > 0) {
              if (i !== data.key.row2[n] && j === data.key.col2[n]) {
                const newValue = value - (keyColValue * keyRowValue)
                data.table_it2[n][i][j] = newValue
              }
            }
          }
        }
      }
    },
    changeVD (data, n, fase) {
      if (fase === 1) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row; j++) {
            const newValue = data.table_it[n][0][data.key.col[n]]
            if (i === data.key.row[n] && j === 0) {
              data.table_it[n][i][j] = newValue
            }
          }
        }
      }
      if (fase === 2) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row2; j++) {
            const newValue = data.table_it2[n][0][data.key.col2[n]]
            if (i === data.key.row2[n] && j === 0) {
              data.table_it2[n][i][j] = newValue
            }
          }
        }
      }
    },
    postData (data, n, fase) {
      if (fase === 1) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row; j++) {
            if (j === (data.n.Row - 1) && i > 0) {
              data.table_it[n][i][j] = 0
            }
          }
        }
        this.add_table_it(JSON.stringify(data.table_it))
      }
      if (fase === 2) {
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row2; j++) {
            if (j === (data.n.Row2 - 1) && i > 0) {
              data.table_it2[n][i][j] = 0
            }
          }
        }
        this.add_table_it2(JSON.stringify(data.table_it2))
      }
    },
    countIndex (data, n, fase) {
      if (fase === 1) {
        const keyCol = data.key.col[n]
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row; j++) {
            const value = data.table_it[n][i][j]
            const NK = data.table_it[n][i][data.n.Row - 2]
            if (j === keyCol && i > 1) {
              if (value !== 0) {
                const indexValue = NK / value
                data.table_it[n][i][data.n.Row - 1] = indexValue
                if (n > 0) {
                  data.table_it[n - 1][i][data.n.Row - 1] = indexValue
                }
                if (n === 0) { // input index table 1st
                  this.add_table_1st(JSON.stringify(data.table_it[n]))
                }
              } else {
                data.table_it[n][i][data.n.Row - 1] = 'INFINITY'
                if (n > 0) {
                  data.table_it[n][i][data.n.Row - 1] = 'INFINITY'
                }
                if (n === 0) { // input index table 1st
                  this.add_table_1st(JSON.stringify(data.table_it[n]))
                }
              }
            }
          }
        }
        this.add_table_it(JSON.stringify(data.table_it))
      }
      if (fase === 2) {
        const keyCol = data.key.col2[n]
        for (let i = 0; i < data.n.Col; i++) {
          for (let j = 0; j < data.n.Row2; j++) {
            const value = data.table_it2[n][i][j]
            const NK = data.table_it2[n][i][data.n.Row2 - 2]
            if (j === keyCol && i > 1) {
              if (value !== 0) {
                const indexValue = NK / value
                data.table_it2[n][i][data.n.Row2 - 1] = indexValue
                if (n > 0) {
                  data.table_it2[n - 1][i][data.n.Row2 - 1] = indexValue
                }
                if (n === 0) { // input index table 2nd
                  this.add_table_2nd(JSON.stringify(data.table_it2[n]))
                }
              } else {
                data.table_it2[n][i][data.n.Row2 - 1] = 'INFINITY'
                if (n > 0) {
                  data.table_it2[n][i][data.n.Row2 - 1] = 'INFINITY'
                }
                if (n === 0) { // input index table 2nd
                  this.add_table_2nd(JSON.stringify(data.table_it2[n]))
                }
              }
            }
          }
        }
        this.add_table_it2(JSON.stringify(data.table_it2))
      }
    },
    findKeyRow (data, n, fase) {
      const keyRow = {
        index: 0,
        value: 0
      }
      if (fase === 1) {
        for (let i = 0; i < data.n.Col; i++) {
          const indexValue = data.table_it[n][i][data.n.Row - 1]
          if (i > 1) {
            if (keyRow.value === 0) {
              if (indexValue > 0) {
                keyRow.index = i
                keyRow.value = indexValue
              }
            } else {
              if (indexValue > 0 && indexValue < keyRow.value) {
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
            if (indexValue === 0 && keyRow.value === 0) {
              if (keyColValue > 0) {
                keyRow.index = i
                keyRow.value = indexValue
              }
            }
          }
        }
        data.key.row.push(keyRow.index)
        this.add_keyRows(JSON.stringify(data.key.row))
      }
      if (fase === 2) {
        for (let i = 0; i < data.n.Col; i++) {
          const indexValue = data.table_it2[n][i][data.n.Row2 - 1]
          if (i > 1) {
            if (keyRow.value === 0) {
              if (indexValue > 0) {
                keyRow.index = i
                keyRow.value = indexValue
              }
            } else {
              if (indexValue > 0 && indexValue < keyRow.value) {
                keyRow.index = i
                keyRow.value = indexValue
              }
            }
          }
        }
        // Zero Condition
        for (let i = 0; i < data.n.Col; i++) {
          const indexValue = data.table_it2[n][i][data.n.Row2 - 1]
          const keyColValue = data.table_it2[n][i][data.key.col2[n]]
          if (i > 1) {
            if (indexValue === 0 && keyRow.value === 0) {
              if (keyColValue > 0) {
                keyRow.index = i
                keyRow.value = indexValue
              }
            }
          }
        }
        data.key.row2.push(keyRow.index)
        this.add_keyRows2(JSON.stringify(data.key.row2))
      }
    },
    createTable1st (data) {
      data.change[0][1] = ['A', '']
      data.change[1] = data.countA
      this.add_table_1st(JSON.stringify(data.change))
      this.add_var_a(JSON.stringify(data.a))
      this.add_numb_a(data.n.a)
      this.add_numb_s(data.n.s)
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
    },
    changeFuncColVD (data, i) {
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
    },
    changeFuncRowVD (data, i, j, nR) {
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
    },
    changeFuncRowZ (data, i, j, nR) {
      if (j === 1) {
        data.change[i].push(1)
      } else if (j < data.n.v + 2) {
        data.change[i].push((data.input[i - 1][j - 2] * -1))
      } else if (j < data.n.v + 2 + data.n.s) {
        data.change[i].push(0)
      } else if (j < data.n.v + 2 + data.n.s + data.n.a) {
        data.change[i].push(-1)
      } else if (j === nR - 2) {
        data.change[i].push((data.input[i - 1][data.input[i - 1].length - 1])) // NK
      } else if (j === nR - 1) {
        data.change[i].push(0) // Index
      }
    },
    changeFuncSvar (data, i, j) {
      let value = 0
      for (let k = 0; k < data.n.s; k++) {
        if ((i - 1) === (data.s[k].index)) {
          if ((data.s[k].value[0] + data.s[k].value[1]) === (data.change[0][j][0] + data.change[0][j][1])) {
            if (data.symbols[i - 1] === '≤') {
              value = 1
            } else if (data.symbols[i - 1] === '≥') {
              value = -1
            }
          }
        }
      }
      data.change[i].push(value)
    },
    changeFuncAvar (data, i, j) {
      let value = 0
      for (let k = 0; k < data.n.a; k++) {
        if ((i - 1) === data.a[k].index) {
          if ((data.a[k].value[0] + data.a[k].value[1]) === (data.change[0][j][0] + data.change[0][j][1])) {
            value = 1
          }
        }
      }
      data.change[i].push(value)
    },
    changeFuncC (data, i, j, nR) {
      if (j === 1) {
        data.change[i].push(0)
      } else if (j < data.n.v + 2) {
        data.change[i].push((data.input[i - 1][j - 2]))
      } else if (j < data.n.v + 2 + data.n.s) {
        this.changeFuncSvar(data, i, j)
      } else if (j < data.n.v + 2 + data.n.s + data.n.a) {
        this.changeFuncAvar(data, i, j)
      } else if (j === nR - 2) {
        data.change[i].push((data.input[i - 1][data.input[i - 1].length - 1]))
      } else if (j === nR - 1) {
        data.change[i].push(0)
      }
    },
    changeFuncDataA (data) {
      for (let i = 0; i < data.a.length; i++) {
        data.a[i].table = data.change[data.a[i].index + 1]
      }
      const countA = [['A', '']]
      for (let i = 0; i < data.a.length; i++) {
        for (let j = 0; j < data.a[i].table.length; j++) {
          if (j > 0) {
            if (countA.length < data.a[i].table.length) {
              countA.push(data.a[i].table[j])
            } else {
              countA[j] = countA[j] + data.a[i].table[j]
            }
          }
        }
      }
      for (let i = 0; i < countA.length; i++) {
        if (i === 1) {
          countA[i] = 1
        }
        if (i > (1 + data.n.v + data.n.s) && i < countA.length - 2) {
          countA[i] = 0
        }
      }
      data.countA = countA
    },
    changeFunc (data) {
      const nC = data.n.Col
      const nR = data.n.Row
      for (let i = 0; i < nC; i++) {
        data.change.push([])
        for (let j = 0; j < nR; j++) {
          if (j === 0) {
            this.changeFuncColVD(data, i)
          } else {
            if (i === 0) {
              this.changeFuncRowVD(data, i, j, nR)
            } else if (i === 1) {
              this.changeFuncRowZ(data, i, j, nR)
            } else {
              this.changeFuncC(data, i, j, nR)
            }
          }
        }
      }
      this.changeFuncDataA(data)
    }
  }
}
</script>
