<template>
  <span>
    <span v-if="iR !== 1 && iC === 1">
      <span v-if="n === 0">{{ data.table_1st[iR - 2][iC - 1][0] }}</span>
      <span v-else>{{ data.table_it[n - 1][iR - 2][iC - 1][0] }}</span>
    </span>
    <span v-if="iR !== 1 && iC === 1" class="font-10px">
      <span v-if="n === 0">{{ data.table_1st[iR - 2][iC - 1][1] }}</span>
      <span v-else>{{ data.table_it[n - 1][iR - 2][iC - 1][1] }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Com-Row1st',
  props: ['n', 'iR', 'iC', 'data']
}
</script>
