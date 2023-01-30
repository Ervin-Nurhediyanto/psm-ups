<template>
  <div>
    <div class="my-2">Dari Fungsi Kendala diperoleh:</div>
    <div v-for="i in data.var_a.length" :key="i">
      <span>{{ data.var_a[i - 1].value[0] }}</span>
      <span class="font-10px">{{ data.var_a[i - 1].value[1] }}</span>
      <span> = </span>
      <span v-for="j in data.var_a[i - 1].table.length" :key="j">
        <!-- NK Value -->
        <span v-if="j === 1">
          {{ data.var_a[i - 1].table[data.var_a[i - 1].table.length - 2] }}
        </span>
        <span v-if="j > 1 && j < data.var_a[i - 1].table.length - (2 + data.numb_a)">
          <span v-if="data.var_a[i - 1].table[j] >= 0">
             - {{ data.var_a[i - 1].table[j]}}
          </span>
          <span v-if="data.var_a[i - 1].table[j] < 0">
             + {{ data.var_a[i - 1].table[j] * -1}}
          </span>
          <span v-if="j < (2 + data.numb_v)">
            X<span class="font-10px">{{ j - 1 }}</span>
          </span>
          <span v-if="j > (1 + data.numb_v) && j < (2 + data.numb_v + data.numb_s)">
            S<span class="font-10px">{{ j - (1 + data.numb_v)}}</span>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fase-1-Completion-Con-A',
  props: ['data']
}
</script>
