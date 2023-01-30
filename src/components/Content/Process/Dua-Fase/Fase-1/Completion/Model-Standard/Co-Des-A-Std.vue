<template>
  <div>
    <span v-for="i in data.table_1st[1].length" :key="i">
      <span v-if="i === 1">
        <span>{{ data.table_1st[1][i - 1][0] }}</span>
        <span> + </span>
      </span>
      <span v-if="i > 2 && i < data.table_1st[1].length - (1 + data.numb_a)">
        <span v-if="i > 3 && data.table_1st[1][i - 1] >= 0">+ </span>
        <span>{{ data.table_1st[1][i - 1] }}</span>
        <span v-if="i < 3 + data.numb_v">
          <span>X</span>
          <span class="font-10px">{{ i - 2 }} </span>
        </span>
        <span v-else-if="i < 3 + data.numb_v + data.numb_s">
          <span>S</span>
          <span class="font-10px">{{ i - (2 + data.numb_v) }} </span>
        </span>
      </span>
      <span v-if="i === data.table_1st[1].length - 1">
        <span> = </span>
        <span>{{ data.table_1st[1][i - 1] }}</span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Fase-1-Model-Standard-Des-A',
  props: ['data']
}
</script>
