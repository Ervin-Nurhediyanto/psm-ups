<template>
  <div v-if="index === 1" class="row mx-1 p-1 bg-white">
    <div>
      Merubah model matematika menjadi bentuk baku simpleks dengan cara menambahkan batasan dengan variable slack pada pertidaksamaan lebih kecil sama dengan atau mengurangi dengan variable surplus pada pertidaksamaan lebih besar sama dengan.
    </div>
    <div>
      <hr/>
      Bentuk baku simpleks:
      <div v-for="i in data.table_1st.length" :key="i" class="row w-100">
        <div class="col-12 col-sm-12 col-md-12 col-xl-2">
          <span v-if="i === 1"><b>Fungsi Tujuan : </b></span>
          <span v-if="i === 2"><b>Fungsi Kendala : </b></span>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-xl-10">
          <CFDes :type_op="type_op" :i="i" :data="data" :numb_c="numb_c" :numb_v="numb_v"/>
          <CFCon :type_op="type_op" :i="i" :data="data" :numb_c="numb_c" :numb_v="numb_v"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CFDes from './Changes/C-Func-Des.vue'
import CFCon from './Changes/C-Func-Con.vue'

export default {
  name: 'Step-1st',
  props: ['index'],
  data () {
    return {
      data: {
        table_1st: []
      }
    }
  },
  components: {
    CFDes,
    CFCon
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      type_op: 'type_op',
      table_1st: 'table_1st'
    })
  },
  methods: {
    parseData (data, keys) {
      const dataParse = JSON.parse(data, (key, value) => {
        if (typeof value === 'string') {
          return value
        }
        return value
      })
      if (keys === 'table_1st') {
        this.data.table_1st = dataParse
      }
    }
  },
  mounted () {
    this.parseData(this.table_1st, 'table_1st')
  }
}
</script>
