<template>
  <div>
    <div class="my-2"><b>Fungsi Kendala :</b></div>
    <div v-for="i in data.table_1st.length" :key="i">
      <span v-for="j in data.table_1st[i - 1].length" :key="j">
        <span v-if="i > 2">
          <span v-if="j > 2 && j < (data.table_1st[i - 1].length - 1)">
            <span v-if="j !== 3 && (data.table_1st[i - 1][j - 1] >= 0)"> + </span>
            <span>{{ data.table_1st[i - 1][j - 1] }}</span>
            <span v-if="j < (3 + data.numb_v)">
              <span>X<span class="font-10px">{{ j - 2 }}</span></span>
            </span>
            <span v-else-if="j < (3 + data.numb_v + data.numb_s)">
              <span>S<span class="font-10px">{{ j - (2 + data.numb_v) }}</span></span>
            </span>
            <span v-else-if="j < (3 + data.numb_v + data.numb_s + data.numb_a)">
              <span>A<span class="font-10px">{{ j - (2 + data.numb_v + data.numb_s) }}</span></span>
            </span>
          </span>
          <span v-if="j === (data.table_1st[i - 1].length - 1)">
            <span> = </span>
            <span>{{ data.table_1st[i - 1][j - 1] }}</span>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fase-1-Model-Standard-Con-A',
  props: ['data']
}
</script>
