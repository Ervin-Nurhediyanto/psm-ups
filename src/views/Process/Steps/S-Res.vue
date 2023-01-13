<template>
  <div v-if="index === nData" class="mx-1 mb-1">
    <div>
      Hasil Optimal:
    </div>
    <div v-for="i in data.table_it[index - 3].length" :key="i">
      <div v-if="data.table_it[index - 3][i - 1][0][0] === 'Z'">
        {{ data.table_it[index - 3][i - 1][0][0] }} :
        {{ Math.round(((data.table_it[index - 3][i - 1][data.table_it[index - 3][i - 1].length - 2]) + Number.EPSILON) * 100) / 100 }}
      </div>
      <div v-if="data.table_it[index - 3][i - 1][0][0] === 'X'">
        <span class="p-0">{{ data.table_it[index - 3][i - 1][0][0] }}</span>
        <span class="font-10px">{{ data.table_it[index - 3][i - 1][0][1] }}</span> :
        {{ Math.round(((data.table_it[index - 3][i - 1][data.table_it[index - 3][i - 1].length - 2]) + Number.EPSILON) * 100) / 100 }}
      </div>
    </div>
    <div v-for="j in v_res.length" :key="j">
      <div v-if="v_res.length > 0">
        <span class="p-0">{{ v_res[j - 1].vd}}</span>
        <span class="font-10px">{{ v_res[j - 1].vdn}}</span> :
        <span class="p-0">0</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Step-Result',
  props: ['index', 'nData', 'data'],
  data () {
    return {
      v_res: []
    }
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v'
    })
  },
  methods: {
    handleNonVDavailable () {
      for (let iv = 1; iv <= this.numb_v; iv++) {
        let isAvailable = false
        for (let i = 0; i < this.data.table_it[this.index - 3].length; i++) {
          const vd = this.data.table_it[this.index - 3][i][0][0]
          const vdn = this.data.table_it[this.index - 3][i][0][1]
          if (vd === 'X' && Number(vdn) === iv) {
            isAvailable = true
          }
        }
        if (isAvailable === false) {
          this.v_res.push({
            vd: 'X',
            vdn: iv
          })
        }
      }
    }
  },
  mounted () {
    this.handleNonVDavailable()
  }
}
</script>
