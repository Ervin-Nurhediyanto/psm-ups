<template>
  <span>
    <span v-if="n === 0">
      {{ Math.round(((data.table_1st[iR - 2][iC - 1]) + Number.EPSILON) * 100) / 100 }}
    </span>
    <span v-else>
      {{ Math.round(((data.table_it[n - 1][iR - 2][iC - 1]) + Number.EPSILON) * 100) / 100 }}
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Data-Key-Row',
  props: ['iR', 'iC', 'n', 'data']
}
</script>
