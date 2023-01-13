<template>
  <table class="row mx-1 bg-white">
    <tr v-for="iR in numbC + 2" :key="iR" class="p-0">
      <div v-for="ncss in css.length" :key="ncss">
        <th v-for="iC in numbC + numbV + 4" :key="iC" :class="css[ncss - 1]">
          <Row1st :iR="iR" :iC="iC" :numbV="numbV" :numbC="numbC"/>
          <Col1st :iR="iR" :iC="iC" :numbV="numbV" :numbC="numbC" :n="n" :data="data"/>
          <TData :iR="iR" :iC="iC" :n="n" :data="data" />
        </th>
      </div>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import Row1st from './T-Com/T-C-Row1st.vue'
import Col1st from './T-Com/T-C-Col1st.vue'
import TData from './T-Data/T-Data.vue'

export default {
  name: 'Table-Simplex',
  props: ['n', 'data'],
  data () {
    return {
      numbC: 0,
      numbV: 0,
      css: [
        'd-none d-sm-none d-md-none d-xl-table-cell w-90px px-1 border border-dark text-center',
        'd-none d-sm-none d-md-table-cell d-xl-none w-60px px-0 border border-dark text-center font-10px',
        'd-table-cell d-sm-none d-md-none d-xl-none w-40px px-0 border border-dark text-center font-10px'
      ]
    }
  },
  components: {
    Row1st,
    Col1st,
    TData
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v'
    })
  },
  methods: {
  },
  mounted () {
    this.numbC = Number(this.numb_c)
    this.numbV = Number(this.numb_v)
  }
}
</script>
