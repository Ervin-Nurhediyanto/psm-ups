<template>
  <span v-if="i > 1">
    <!-- {{ data.table_1st[i] }} -->
    <span v-for="j in data.table_1st[i].length" :key="j">
      <!-- Operation -->
      <span v-if="j === data.table_1st[i].length - 1" class="px-1">=</span>
      <span v-if="j > 3 && j < data.table_1st[i].length - 1 && data.table_1st[i][j - 1][0] >= 0" class="px-1">+</span>
      <!-- value -->
      <span v-if="j > 2 && j < data.table_1st[i].length" class="p-0">{{ data.table_1st[i][j - 1][0] }}</span>
      <!-- x var -->
      <span v-if="j > 2 && j <= 2 + numb_v">
        <span class="p-0">X</span>
        <span class="font-10px">{{ j - 2}} </span>
      </span>
      <!-- S var -->
      <span v-if="j > 2 + numb_v && j <= 2 + numb_v + numb_s">
        <span class="p-0">S</span>
        <span class="font-10px">{{ j - 2 - numb_v}} </span>
      </span>
      <!-- A var -->
      <span v-if="j > 2 + numb_v + numb_s && j <= 2 + numb_v + numb_s + numb_a">
        <span class="p-0">A</span>
        <span class="font-10px">{{ j - 2 - numb_v - numb_s}} </span>
      </span>
    </span>
    <!-- <span v-for="j in data.table_1st[i].length" :key="j">
      Operation =
      <span v-if="j === data.table_1st[i - 1].length - 3" class="px-1">=</span>
      <span v-if="j > 1 && j !== data.table_1st[i - 1].length - 3" class="px-1">+</span>
      value variable
      <span class="p-0">{{ data.table_1st[i][j + 1][0] }}</span>
      X variable
      <span v-if="j <= numb_v">
        <span class="p-0">X</span>
        <span class="font-10px">{{ j }}</span>
      </span>
      S variable
      <span v-else-if="j <= numb_v + numb_c && j !== data.table_1st[i - 1].length - 3">
        <span class="p-0">S</span>
        <span class="font-10px">{{ j - numb_v}}</span>
      </span> -->
    <!-- </span> -->
  </span>
</template>

<script>
export default {
  name: 'Change-Constraint-Function',
  props: ['type_op', 'i', 'data', 'numb_c', 'numb_v', 'numb_s', 'numb_a']
}
</script>
