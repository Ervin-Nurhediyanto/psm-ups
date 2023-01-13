<template>
  <span v-if="i > 1">
    <span v-for="j in data.table_1st[i - 1].length - 3" :key="j">
      <!-- Operation = -->
      <span v-if="j === data.table_1st[i - 1].length - 3" class="px-1">=</span>
      <span v-if="j > 1 && j !== data.table_1st[i - 1].length - 3" class="px-1">+</span>
      <!-- value variable -->
      <span class="p-0">{{ data.table_1st[i - 1][j + 1] }}</span>
      <!-- X variable -->
      <span v-if="j <= numb_v">
        <span class="p-0">X</span>
        <span class="font-10px">{{ j }}</span>
      </span>
      <!-- S variable -->
      <span v-else-if="j <= numb_v + numb_c && j !== data.table_1st[i - 1].length - 3">
        <span class="p-0">S</span>
        <span class="font-10px">{{ j - numb_v}}</span>
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Change-F-Con',
  props: ['type_op', 'i', 'data', 'numb_c', 'numb_v']
}
</script>
