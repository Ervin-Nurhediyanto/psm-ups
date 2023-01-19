<template>
  <div class="row-xl h-95vh d-flex justify-content-center align-items-center overflow scrollbar-none">
    <div class="col-12 col-sm-12 col-md-8 col-xl-11 h-100 px-0">
      <form v-for="index in data.numb_it" :key="index" class="w-100 shadow mt-2 p-3 rounded bg-transparant">
        <!-- Process Methode Primal-->
        <div class="mx-1 mb-1">Langkah {{ index }}</div>
        <S1st :index="index"/>
        <S2nd :index="index"/>
        <SIts :index="index" :nData="data.numb_it"/>
        <SFin :index="index" :nData="data.numb_it"/>
        <TSimplex v-if="index > 1" :n="index - 2" :data="data"/>
        <SRes :index="index" :nData="data.numb_it" :data="data"/>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TSimplex from '../../components/Templates/Tables/T-Simplex.vue'
import S1st from './Steps/S-1st.vue'
import S2nd from './Steps/S-2nd.vue'
import SIts from './Steps/S-Its.vue'
import SFin from './Steps/S-Fin.vue'
import SRes from './Steps/S-Res.vue'

export default {
  name: 'Process',
  data () {
    return {
      data: {
        table_1st: [],
        table_it: [],
        key_cols: [],
        key_rows: [],
        key_numbs: [],
        isOptimal: false,
        numb_it: 2
      }
    }
  },
  components: {
    TSimplex,
    S1st,
    S2nd,
    SIts,
    SFin,
    SRes
  },
  computed: {
    ...mapGetters({
      table_1st: 'table_1st',
      table_it: 'table_it',
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      keyCols: 'keyCols',
      keyRows: 'keyRows',
      keyNumbs: 'keyNumbs',
      type_op: 'type_op'
    })
  },
  methods: {
    ...mapActions([
      'add_table_it',
      'add_table_1st',
      'add_keyCols',
      'add_keyRows',
      'add_keyNumbs'
    ]),
    parseData (data, keys) {
      const dataParse = JSON.parse(data, (key, value) => {
        if (typeof value === 'string') {
          return value
        }
        return value
      })
      if (keys === 'table_1st') {
        this.data.table_1st = dataParse
      } else if (keys === 'table_it') {
        this.data.table_it = dataParse
      } else if (keys === 'key_cols') {
        this.data.key_cols = dataParse
      } else if (keys === 'key_rows') {
        this.data.key_rows = dataParse
      } else if (keys === 'key_numbs') {
        this.data.key_numbs = dataParse
      }
    }
  },
  mounted () {
    // Parse Data
    this.parseData(this.table_1st, 'table_1st')
    this.parseData(this.table_it, 'table_it')
    this.parseData(this.keyCols, 'key_cols')
    this.parseData(this.keyRows, 'key_rows')
    this.parseData(this.keyNumbs, 'key_numbs')
    this.data.numb_it += this.data.table_it.length
  }
}
</script>
