<template>
  <span>
    <span v-if="n === 0">
      <span>
        {{ Math.round(((data.table_2nd[iR - 1][iC - 1]) + Number.EPSILON) * 100) / 100 }}
      </span>
    </span>
    <span v-else>
      <span>
        {{ Math.round(((data.table_it2[n - 1][iR - 1][iC - 1]) + Number.EPSILON) * 100) / 100 }}
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Value-Key-Number',
  props: ['iR', 'iC', 'n', 'data']
}
</script>
