<template>
  <span v-if="iR !== 1 && iC > 1">
    <span v-if="iC === data.key_cols[n] + 1 && iR === data.key_rows[n] + 2" class="text-danger">
      <DataKeyNumb :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
    <span v-else-if="iC === data.key_cols[n] + 1" class="text-success">
      <DataKeyCol :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
    <span v-else-if="iR === data.key_rows[n] + 2" class="text-info">
      <DataKeyRow :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
    <span v-else>
      <DataNumber :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
  </span>
</template>

<script>
import DataKeyNumb from './T-D-KeyNumb.vue'
import DataKeyCol from './T-D-KeyCol.vue'
import DataKeyRow from './T-D-KeyRow.vue'
import DataNumber from './T-Data-Numb.vue'

export default {
  name: 'Table-Data',
  props: ['iR', 'iC', 'n', 'data'],
  components: {
    DataKeyNumb,
    DataKeyCol,
    DataKeyRow,
    DataNumber
  }
}
</script>
