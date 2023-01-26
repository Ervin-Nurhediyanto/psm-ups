<template>
  <span>
    <span v-if="n === 0">
      <span>
        {{ Math.round(((data.table_1st[iR - 1][iC - 1][0]) + Number.EPSILON) * 100) / 100 }}
      </span>
      <span v-if="Math.round(((data.table_1st[iR - 1][iC - 1][1]) + Number.EPSILON) * 100) / 100 !== 0">
        <span v-if="data.table_1st[iR - 1][iC - 1][1] > 0">+</span>
        {{ Math.round(((data.table_1st[iR - 1][iC - 1][1]) + Number.EPSILON) * 100) / 100 }}M
      </span>
    </span>
    <span v-else>
      <span>
        {{ Math.round(((data.table_it[n - 1][iR - 1][iC - 1][0]) + Number.EPSILON) * 100) / 100 }}
      </span>
      <span v-if="Math.round(((data.table_it[n - 1][iR - 1][iC - 1][1]) + Number.EPSILON) * 100) / 100 !== 0">
        <span v-if="data.table_it[n - 1][iR - 1][iC - 1][1] > 0">+</span>
        {{ Math.round(((data.table_it[n - 1][iR - 1][iC - 1][1]) + Number.EPSILON) * 100) / 100 }}M
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Value-Data',
  props: ['iR', 'iC', 'n', 'data']
}
</script>
