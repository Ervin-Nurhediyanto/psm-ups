<template>
  <div class="col-12 col-sm-12 col-md-8 col-xl-11 h-100 px-0">
    <Fase1 :data="data"/>
    <Fase2 :data="data" v-if="isFase2 === true"/>
  </div>
</template>

<script>
import Fase1 from './Fase-1/P-Fase-1.vue'
import Fase2 from './Fase-2/P-Fase-2.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Process-Dua-Fase-Result',
  data () {
    return {
      data: {
        n: 2, // Number of Iterations
        n2: 2, // Number of Iterations Fase 2
        table_1: [],
        table_it: [],
        table_it2: [],
        table_1st: [],
        table_2nd: [],
        type_op: '',
        numb_c: 0,
        numb_v: 0,
        numb_a: 0,
        numb_s: 0,
        key_cols: [],
        key_cols2: [],
        key_rows: [],
        key_rows2: [],
        var_a: []
      },
      isFase2: false
    }
  },
  components: {
    Fase1,
    Fase2
  },
  computed: {
    ...mapGetters({
      table_1: 'table_1',
      table_it: 'table_it',
      table_it2: 'table_it2',
      table_1st: 'table_1st',
      table_2nd: 'table_2nd',
      type_op: 'type_op',
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      numb_a: 'numb_a',
      numb_s: 'numb_s',
      keyCols: 'keyCols',
      keyRows: 'keyRows',
      var_a: 'var_a',
      keyCols2: 'keyCols2',
      keyRows2: 'keyRows2'
    })
  },
  methods: {
    ...mapActions([]),
    parseData (data, keys) {
      const parse = JSON.parse(data, (key, value) => {
        if (typeof value === 'string') {
          return value
        }
        return value
      })
      if (keys === 'table_it') {
        this.data.table_it = parse
        const NK = parse[parse.length - 1][1][parse[parse.length - 1][1].length - 2]
        const A = Math.round(((NK) + Number.EPSILON) * 100) / 100
        if (A === 0) {
          this.isFase2 = true
        }
        // console.log(A)
      } else if (keys === 'table_1st') {
        this.data.table_1st = parse
      } else if (keys === 'key_cols') {
        this.data.key_cols = parse
      } else if (keys === 'key_rows') {
        this.data.key_rows = parse
      } else if (keys === 'table_1') {
        this.data.table_1 = parse
      } else if (keys === 'var_a') {
        this.data.var_a = parse
      } else if (keys === 'key_cols2') {
        this.data.key_cols2 = parse
      } else if (keys === 'table_2nd') {
        this.data.table_2nd = parse
      } else if (keys === 'table_it2') {
        this.data.table_it2 = parse
      } else if (keys === 'key_rows2') {
        this.data.key_rows2 = parse
      }
    }
  },
  mounted () {
    this.parseData(this.table_1, 'table_1')
    this.parseData(this.table_it, 'table_it')
    this.parseData(this.table_it2, 'table_it2')
    this.parseData(this.table_1st, 'table_1st')
    this.parseData(this.table_2nd, 'table_2nd')
    this.parseData(this.keyCols, 'key_cols')
    this.parseData(this.keyCols2, 'key_cols2')
    this.parseData(this.keyRows, 'key_rows')
    this.parseData(this.keyRows2, 'key_rows2')
    this.parseData(this.var_a, 'var_a')
    this.data.n += this.data.table_it.length
    this.data.n2 += this.data.table_it2.length
    this.data.type_op = this.type_op
    this.data.numb_c = Number(this.numb_c)
    this.data.numb_v = Number(this.numb_v)
    this.data.numb_a = Number(this.numb_a)
    this.data.numb_s = Number(this.numb_s)
  }
}
</script>
