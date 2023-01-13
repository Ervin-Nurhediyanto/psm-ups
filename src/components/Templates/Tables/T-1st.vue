<template>
  <table class="row mx-1 bg-white">
    <tr><td>{{ data }}</td></tr>
    <tr v-for="inRow in Number(numb_c) + 2" :key="inRow" class="p-0">
      <th v-for="inCol in Number(numb_c) + Number(numb_v) + 4" :key="inCol" class="w-80px px-1 border border-dark text-center">
        <!-- Row 1 -->
        <span v-if="inRow === 1 && inCol === 1">VD</span>
        <span v-if="inRow === 1 && inCol === 2">Z</span>
        <!-- X variable -->
        <span v-if="(inRow === 1 && inCol > 2) && inCol <= Number(numb_v) + 2">X</span>
        <span v-if="(inRow === 1 && inCol > 2) && inCol <= Number(numb_v) + 2" class="font-10px">{{ inCol - 2 }}</span>
        <!-- S variable -->
        <span v-if="(inRow === 1 && inCol > 2 + Number(numb_v)) && inCol <= 2 + Number(numb_c) + Number(numb_v)">S</span>
        <span v-if="(inRow === 1 && inCol > 2 + Number(numb_v)) && inCol <= 2 + Number(numb_c) + Number(numb_v)" class="font-10px">{{ inCol - (2 + Number(numb_v)) }}</span>
        <!-- Number of NK -->
        <span v-if="(inRow === 1 && inCol === (Number(numb_c) + Number(numb_v) + 4) - 1)">NK</span>
        <!-- Number of Index -->
        <span v-if="(inRow === 1 && inCol === (Number(numb_c) + Number(numb_v) + 4))">Index</span>
        <!-- Col 1 -->
        <span v-if="inRow !== 1 && inCol === 1">
          <span v-if="iteration === 0">{{ data.table_1st[inRow - 2][inCol - 1][0] }}</span>
          <span v-else>{{ data.table_it[iteration - 1][inRow - 2][inCol - 1][0] }}</span>
        </span>
        <span v-if="inRow !== 1 && inCol === 1" class="font-10px">
          <span v-if="iteration === 0">{{ data.table_1st[inRow - 2][inCol - 1][1] }}</span>
          <span v-else>{{ data.table_it[iteration - 1][inRow - 2][inCol - 1][1] }}</span>
        </span>
        <!-- Data -->
        <span v-if="inRow !== 1 && inCol > 1">
          <!-- Number of Key -->
          <span v-if="inCol === data.key_cols[iteration] + 1 && inRow === data.key_rows[iteration] + 2" class="text-danger">
            <span v-if="iteration === 0">{{ Math.round(((data.table_1st[inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
            <span v-else>{{ Math.round(((data.table_it[iteration - 1][inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
          </span>
          <!-- Key Col -->
          <span v-else-if="inCol === data.key_cols[iteration] + 1" class="text-success">
            <span v-if="iteration === 0">{{ Math.round(((data.table_1st[inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
            <span v-else>{{ Math.round(((data.table_it[iteration - 1][inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
          </span>
          <!-- Key Row -->
          <span v-else-if="inRow === data.key_rows[iteration] + 2" class="text-info">
            <span v-if="iteration === 0">{{ Math.round(((data.table_1st[inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
            <span v-else>{{ Math.round(((data.table_it[iteration - 1][inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
          </span>
          <!-- Number of Table -->
          <span v-else>
            <span v-if="iteration === 0">{{ Math.round(((data.table_1st[inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
            <span v-else>{{ Math.round(((data.table_it[iteration - 1][inRow - 2][inCol - 1]) + Number.EPSILON) * 100) / 100 }}</span>
          </span>
        </span>
      </th>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Table-1st',
  props: ['iteration', 'data'],
  data () {
    return {
      // data: {
      //   table_1st: [],
      //   table_it: [],
      //   keyCols: [],
      //   keyRows: []
      // }
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      // table_1st: 'table_1st',
      // table_it: 'table_it',
      // numb_c: 'numb_c',
      // numb_v: 'numb_v',
      // keyCols: 'keyCols',
      // keyRows: 'keyRows'
    })
  },
  methods: {
  },
  mounted () {
  //   // Table 1st
  //   const data1st = JSON.parse(this.table_1st, (key, value) => {
  //     if (typeof value === 'string') {
  //       return value
  //     }
  //     return value
  //   })
  //   this.data.table_1st = data1st
  //   // Table Iteration
  //   const dataIt = JSON.parse(this.table_it, (key, value) => {
  //     if (typeof value === 'string') {
  //       return value
  //     }
  //     return value
  //   })
  //   this.data.table_it = dataIt
  //   // Key Cols
  //   const dataKeyCol = JSON.parse(this.keyCols, (key, value) => {
  //     if (typeof value === 'string') {
  //       return value
  //     }
  //     return value
  //   })
  //   this.data.keyCols = dataKeyCol
  //   // Key Rows
  //   const dataKeyRow = JSON.parse(this.keyRows, (key, value) => {
  //     if (typeof value === 'string') {
  //       return value
  //     }
  //     return value
  //   })
  //   this.data.keyRows = dataKeyRow
  }
}
</script>
