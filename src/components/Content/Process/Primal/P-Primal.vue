<template>
  <div class="col-12 col-sm-12 col-md-8 col-xl-11 h-100 px-0">
    <form v-for="index in data.n" :key="index" class="w-100 shadow mt-2 p-3 rounded bg-transparant">
      <div class="mx-1 mb-1">Langkah {{ index }}</div>
      <Step1st :index="index" :data="data"/>
      <Step2nd :index="index" :data="data"/>
      <StepIts :index="index" :n="data.n"/>
      <StepFin :index="index" :n="data.n" :type_op="data.type_op"/>
      <TableSP v-if="index > 1" :n="index - 2" :data="data"/>
      <StepRes :index="index" :n="data.n" :data="data"/>
    </form>
  </div>
</template>

<script>
import Step1st from './Steps/Step-1st.vue'
import Step2nd from './Steps/Step-2nd.vue'
import StepIts from './Steps/Step-Its.vue'
import StepFin from './Steps/Step-Fin.vue'
import TableSP from './Tebles/T-S-Primal.vue'
import StepRes from './Steps/Step-Res.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Process-Primal-Result',
  data () {
    return {
      data: {
        n: 2, // Number of Iterations
        table_it: [],
        table_1st: [],
        type_op: '',
        numb_c: 0,
        numb_v: 0,
        key_cols: [],
        key_rows: []
      }
    }
  },
  components: {
    Step1st,
    Step2nd,
    StepIts,
    StepFin,
    TableSP,
    StepRes
  },
  computed: {
    ...mapGetters({
      table_it: 'table_it',
      table_1st: 'table_1st',
      type_op: 'type_op',
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      keyCols: 'keyCols',
      keyRows: 'keyRows'
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
      }
    }
  },
  mounted () {
    this.parseData(this.table_it, 'table_it')
    this.parseData(this.table_1st, 'table_1st')
    this.parseData(this.keyCols, 'key_cols')
    this.parseData(this.keyRows, 'key_rows')
    this.data.n += this.data.table_it.length
    this.data.type_op = this.type_op
    this.data.numb_c = Number(this.numb_c)
    this.data.numb_v = Number(this.numb_v)
  }
}
</script>
