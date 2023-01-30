<template>
  <div v-if="index === 1" class="row mx-1 p-1 bg-white">
    <div>{{ text }}</div>
    <div>
      <hr/>
      Bentuk baku simpleks:
      <div v-for="i in data.table_1st.length" :key="i" class="row w-100">
        <div class="col-12 col-sm-12 col-md-12 col-xl-2">
          <span v-if="i === 1"><b>Fungsi Tujuan : </b></span>
          <span v-if="i === 2"><b>Fungsi Kendala : </b></span>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-xl-10">
          <CDes
            :i="i"
            :data="data"
            :numb_c="data.numb_c"
            :numb_v="data.numb_v"
            :numb_s="data.numb_s"
            :numb_a="data.numb_a"
            :type_op="data.type_op"
          />
          <CCon
            :i="i"
            :data="data"
            :numb_c="data.numb_c"
            :numb_v="data.numb_v"
            :numb_s="data.numb_s"
            :numb_a="data.numb_a"
            :type_op="data.type_op"
          />
        </div>
      </div>
      <CompA :data="data"/>
    </div>
  </div>
</template>

<script>
import CDes from '../Changes/C-Des-Fun.vue'
import CCon from '../Changes/C-Con-Fun.vue'
import CompA from '../Completion/Co-A.vue'

export default {
  name: 'Fase-1-Step-1st',
  props: ['index', 'data'],
  data () {
    return {
      text: 'Meminimalkan fungsi objectif dari A = Σ Ai dengan kendala sesuai model Persamaan Linear yang akan diselesaikan. Bila A minimal = 0 maka lanjut ke fase II, tetapi bila A minimal ≠ 0 maka STOP, tidak dilanjutkan ke fase II dan tidak ditemukan penyelesaian fisibel.'
    }
  },
  components: {
    CDes,
    CCon,
    CompA
  }
}
</script>
