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
        table_1st: []
        // table_it: [],
        // key_cols: [],
        // key_rows: [],
        // key_numbs: [],
        // isOptimal: false
      }
    }
  },
  computed: {
    ...mapGetters({
      // table_it: 'table_it'
    })
  },
  methods: {
    ...mapActions([
      // 'add_table_1st',
      // 'add_table_it',
      // 'add_keyCols',
      // 'add_keyRows',
      // 'add_keyNumbs'
    ]),
    handleSubmit () {
      this.onProcess1st()
      // this.onProcessIts()
      // this.$router.replace({
      //   name: 'Process-Big-M'
      // })
    },
    onProcess1st () {
      console.log('BIG-M, On Pocess 1st')
      console.log(this.data)
      this.CalculateN()
    },
    CalculateN () {
      console.log('Hitung N')
      const nV = this.data.numb_v // Number of Variable
      const nC = this.data.numb_c // Number of Constraint
      let nS = 0 // Number of Slack
      let nA = 0 // Number of Pseudo
      const nAarr = []
      const nSarr = []
      for (let i = 1; i <= nC; i++) {
        const symbol = this.data.symbols[i]
        if (symbol === '=') {
          nA += 1
          nAarr.push({
            index: i,
            value: ['A', nA]
          })
        }
        if (symbol === '≤') {
          nS += 1
          nSarr.push({
            index: i,
            value: ['S', nS]
          })
        }
        if (symbol === '≥') {
          nA += 1
          nS += 1
          nAarr.push({
            index: i,
            value: ['A', nA]
          })
          nSarr.push({
            index: i,
            value: ['S', nS]
          })
        }
      }
      const nRow = nV + nS + nA + 4
      const nCol = nC + 2
      const payload = {
        nV: nV,
        nC: nC,
        nS: nS,
        nA: nA,
        nRow: nRow,
        nCol: nCol,
        nAarr: nAarr,
        nSarr: nSarr
      }
      this.createTable1st(payload)
    },
    createTable1st (payload) {
      console.log(payload)
      let A = 0
      let S = 0
      const table1st = []
      // let sIsAble = false
      // let sIsAble = []
      // const sIsAble = []
      for (let i = 0; i < payload.nCol; i++) {
        const symbol = this.data.symbols[i - 1]
        // sIsAble.push(false)
        table1st.push([])
        // let sIsAble = false
        for (let j = 0; j < payload.nRow; j++) {
          if (j === 0) { // Input VD
            if (i === 0) {
              table1st[i].push(['V', 'D'])
            } else if (i === 1) {
              table1st[i].push(['Z', ''])
            } else {
              if (symbol === '=') {
                A += 1
                table1st[i].push(['A', A])
              } else if (symbol === '≥') {
                A += 1
                S += 1
                table1st[i].push(['A', A])
              } else {
                S += 1
                table1st[i].push(['S', S])
              }
            }
          } else if (j === 1) { // Input Z
            if (i === 0) {
              table1st[i].push(['Z', ''])
            } else if (i === 1) {
              table1st[i].push([0, 1])
            } else {
              table1st[i].push([0, 0])
            }
          } else if (j > 1 && j < 2 + payload.nV) { // Input X
            if (i === 0) {
              table1st[i].push(['X', j - 1])
            // } else if (i === 1) { // Row Z
            //   table1st[i].push([0, 0]) // Value X input (Hitung M nanti diakhir)
            } else {
              table1st[i].push([0, this.data.input[i - 1][j - 2]])
            }
          } else if (j > 1 + payload.nV && j < 2 + payload.nV + payload.nS) { // Input S
            if (i === 0) {
              table1st[i].push(['S', j - (1 + payload.nV)])
            } else if (i === 1) {
              table1st[i].push([0, 0])
            } else if (symbol === '≤' && payload.nSarr[0].index === (i - 1) && j - (payload.nV + 2) === ) {
              table1st[i].push([0, 1])
              // table1st[i].push()
              // sIsAble[j - (2 + payload.nV)] = true
            } else if (symbol === '≥' && payload.nSarr[0].index === (i - 1)) {
              // table1st[i].push([0, -1])
              table1st[i].push([0, -1])
              // sIsAble[j - (2 + payload.nV)] = true
            } else {
              table1st[i].push([0, 0])
            }
          }
        }
      }
      console.log('Table 1st')
      console.log(table1st)
    }
  }
}
</script>
