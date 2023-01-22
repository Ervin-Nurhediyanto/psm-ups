<template>
  <table class="row w-100 mx-1 bg-white">
    <tr v-for="iR in data.numb_c + 2" :key="iR" class="p-0">
      <div v-for="ncss in css.length" :key="ncss">
        <th v-for="iC in data.numb_c + data.numb_v + 4" :key="iC" :class="css[ncss - 1]" class="w-100px">
          <Row1st :iR="iR" :iC="iC" :numbV="data.numb_v" :numbC="data.numb_c"/>
          <Col1st :iR="iR" :iC="iC" :numbV="data.numb_v" :numbC="data.numb_c" :n="n" :data="data"/>
          <TValue :iR="iR" :iC="iC" :n="n" :data="data" />
        </th>
      </div>
    </tr>
  </table>
</template>

<script>
import Row1st from '../Tebles/T-S-Row-1st.vue'
import Col1st from '../Tebles/T-S-Col-1st.vue'
import TValue from '../Tebles/T-S-Value.vue'

export default {
  name: 'Table-Simplex-Primal',
  props: ['n', 'data'],
  data () {
    return {
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
    TValue
  }
}
</script>
