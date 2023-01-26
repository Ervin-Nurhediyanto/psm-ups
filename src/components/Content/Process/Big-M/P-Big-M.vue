<template>
  <div class="col-12 col-sm-12 col-md-8 col-xl-11 h-100 px-0">
    <form v-for="index in data.n" :key="index" class="w-100 shadow mt-2 p-3 rounded bg-transparant">
      <div class="mx-1 mb-1">Langkah {{ index }}</div>
      <Step1st :index="index" :data="data"/>
      <Step2nd :index="index"/>
      <StepIts :index="index" :n="data.n"/>
      <StepFin :index="index" :n="data.n" :type_op="data.type_op"/>
      <TableBM v-if="index > 1" :n="index - 2" :data="data"/>
      <StepRes :index="index" :n="data.n" :data="data"/>
    </form>
  </div>
</template>

<script>
import Step1st from './Steps/Step-1st.vue'
import Step2nd from './Steps/Step-2nd.vue'
import StepIts from './Steps/Step-Its.vue'
import StepFin from './Steps/Step-Fin.vue'
import TableBM from './Tables/T-S-Big-M.vue'
import StepRes from './Steps/Step-Res.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Process-Big-M-Result',
  data () {
    return {
      data: {
        n: 2, // Number of Iterations
        table_1: [],
        table_it: [],
        table_1st: [],
        type_op: '',
        numb_c: 0,
        numb_v: 0,
        numb_a: 0,
        numb_s: 0,
        key_cols: [],
        key_rows: [],
        var_a: []
      }
    }
  },
  components: {
    Step1st,
    Step2nd,
    StepIts,
    StepFin,
    TableBM,
    StepRes
  },
  computed: {
    ...mapGetters({
      table_1: 'table_1',
      table_it: 'table_it',
      table_1st: 'table_1st',
      type_op: 'type_op',
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      numb_a: 'numb_a',
      numb_s: 'numb_s',
      keyCols: 'keyCols',
      keyRows: 'keyRows',
      var_a: 'var_a'
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
      }
    }
  },
  mounted () {
    this.parseData(this.table_1, 'table_1')
    this.parseData(this.table_it, 'table_it')
    this.parseData(this.table_1st, 'table_1st')
    this.parseData(this.keyCols, 'key_cols')
    this.parseData(this.keyRows, 'key_rows')
    this.parseData(this.var_a, 'var_a')
    this.data.n += this.data.table_it.length
    this.data.type_op = this.type_op
    this.data.numb_c = Number(this.numb_c)
    this.data.numb_v = Number(this.numb_v)
    this.data.numb_a = Number(this.numb_a)
    this.data.numb_s = Number(this.numb_s)
  }
}
</script>
