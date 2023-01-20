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
          <CDes :type_op="data.type_op" :i="i" :data="data" :numb_c="data.numb_c" :numb_v="data.numb_v"/>
          <CCon :type_op="data.type_op" :i="i" :data="data" :numb_c="data.numb_c" :numb_v="data.numb_v"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CDes from '../Changes/C-Des-Fun.vue'
import CCon from '../Changes/C-Con-Fun.vue'

export default {
  name: 'Step-1st',
  props: ['index', 'data'],
  data () {
    return {
      text: 'Merubah model matematika menjadi bentuk baku simpleks dengan cara menambahkan batasan dengan variable slack pada pertidaksamaan lebih kecil sama dengan atau mengurangi dengan variable surplus pada pertidaksamaan lebih besar sama dengan.'
    }
  },
  components: {
    CDes,
    CCon
  }
}
</script>
