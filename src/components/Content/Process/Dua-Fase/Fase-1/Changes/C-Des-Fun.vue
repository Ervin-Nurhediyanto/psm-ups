<template>
  <span v-if="i === 1">
    <span class="text-danger"><b>{{ type_op }}</b></span>
    <span> Z = </span>
    <span v-for="j in data.table_1[i - 1].length - 1" :key="j"><!-- x var -->
      <span v-if="data.table_1[i - 1][j - 1] >= 0 && j !== 1">+</span>
      <span>{{ data.table_1[i - 1][j - 1] }}</span><!-- value x -->
      <span v-if="j < data.table_1[i - 1].length">
        <span class="p-0">X</span>
        <span class="font-10px">{{ j }} </span>
      </span>
    </span>
    <span v-for="j in data.numb_s" :key="j"><!-- s var -->
      <span>+</span>
      <span>0</span>
      <span class="p-0">S</span>
      <span class="font-10px">{{ j }} </span>
    </span>
    <span v-for="j in data.numb_a" :key="j"><!-- a var -->
      <span v-if="type_op === 'MIN'">+</span>
      <span v-if="type_op === 'MAX'">-</span>
      <span>M</span>
      <span class="p-0">A</span>
      <span class="font-10px">{{ j }} </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Change-Destination-Function',
  props: ['type_op', 'i', 'data', 'numb_c', 'numb_v', 'numb_s', 'numb_a'],
  data () {
    return {
      brackets: ['(', ')']
    }
  }
}
</script>
