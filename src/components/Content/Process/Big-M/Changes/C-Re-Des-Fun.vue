<template>
  <div class="row w-100 my-2">
    <div class="col-12 col-sm-12 col-md-12 col-xl-12 my-2">
      <span>{{ text }}</span>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-xl-2">
      <span><b>Fungsi Tujuan : </b></span>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-xl-10">
      <span v-if="i === 1">
        {{ data.table_1st[i - 1][i][0] }} <!-- z var -->
        <span v-for="j in data.table_1st[i].length" :key="j">
          <!-- Operation = -->
          <span v-if="j === data.table_1st[i].length - 1" class="p-0">=</span>
          <!-- Operation + -->
          <span v-if="j > 2 && j < data.table_1st[i].length - 1 && ((data.table_1st[i][j - 1][0] >= 0) || (data.table_1st[i][j - 1][1] !== 0))" class="p-0">+</span>
          <!-- value Basic -->
          <span v-if="j > 2 && j < data.table_1st[i].length && (data.table_1st[i][j - 1][1] !== 0)" class="p-0">{{ brackets[0] }}</span>
          <span v-if="j > 2 && j < data.table_1st[i].length" class="p-0">{{ data.table_1st[i][j - 1][0] }}</span>
          <!-- Operation + -->
          <span v-if="j > 2 && j < data.table_1st[i].length && (data.table_1st[i][j - 1][1] > 0)" class="p-0">+</span>
          <!-- value M -->
          <span v-if="j > 2 && j < data.table_1st[i].length && (data.table_1st[i][j - 1][1] !== 0)" class="p-0">{{ data.table_1st[i][j - 1][1] }}</span>
          <!-- M var -->
          <span v-if="j > 2 && j < data.table_1st[i].length && (data.table_1st[i][j - 1][1] !== 0)" class="p-0">M</span>
          <span v-if="j > 2 && j < data.table_1st[i].length && (data.table_1st[i][j - 1][1] !== 0)" class="p-0">{{ brackets[1] }}</span>
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
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Change-Re-Destination-Function',
  props: ['type_op', 'i', 'data', 'numb_c', 'numb_v', 'numb_s', 'numb_a'],
  data () {
    return {
      brackets: ['(', ')'],
      text: 'Sehingga bentuk baku simpleks dapat ditulis kembali sebagai berikut'
    }
  }
}
</script>
