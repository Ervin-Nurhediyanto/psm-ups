<template>
  <span>
    <div>{{ text }}</div>
    <div v-for="i in data.var_a.length" :key="i">
      <span class="p-0">{{ data.var_a[i - 1].table[0][0] }}</span>
      <span class="font-10px">{{ data.var_a[i - 1].table[0][1] }} </span>
      <span> = </span>
      <!-- NK -->
      <span>{{ data.var_a[i - 1].table[data.var_a[i - 1].table.length - 2][0] }}</span>
      <span v-for="j in data.var_a[i - 1].table.length" :key="j">
        <!-- operation -->
        <span v-if="j > 1 && j < data.var_a[i - 1].table.length - (2 + data.numb_a) && data.var_a[i - 1].table[j][0] >= 0"> - </span>
        <span v-if="j > 1 && j < data.var_a[i - 1].table.length - (2 + data.numb_a) && data.var_a[i - 1].table[j][0] < 0"> + </span>
        <!-- value -->
        <span v-if="j > 1 && j < data.var_a[i - 1].table.length - (2 + data.numb_a)">
          <span v-if="data.var_a[i - 1].table[j][0] >= 0">{{ data.var_a[i - 1].table[j][0] }}</span>
          <span v-else>{{ data.var_a[i - 1].table[j][0] * -1 }}</span>
        </span>
        <!-- variable -->
        <span v-if="j > 1 && j < data.var_a[i - 1].table.length - (2 + data.numb_a)">
          <span v-if="j < 2 + data.numb_v">
            <span class="p-0">X</span>
            <span class="font-10px">{{ j - 1 }} </span>
          </span>
          <span v-else-if="j < 2 + data.numb_v + data.numb_s">
            <span class="p-0">S</span>
            <span class="font-10px">{{ j - (1 + data.numb_v) }} </span>
          </span>
        </span>
      </span>
    </div>
  </span>
</template>

<script>
export default {
  name: 'Change-Variable-A',
  props: ['data'],
  data () {
    return {
      text: 'Dari fungsi kendala dapat diperoleh:'
    }
  }
}
</script>
