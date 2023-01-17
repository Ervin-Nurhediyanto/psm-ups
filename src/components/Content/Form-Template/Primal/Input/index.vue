<template>
  <table class="row mx-1">
    <tr v-for="i in data.nC + 1" :key="i" class="w-100 p-0">
      <div v-if="i === 1" class="col-xl-12 my-1 p-1">Fungsi Tujuan:</div>
      <div v-if="i === 2" class="col-xl-12 my-1 p-1">Fungsi Kendala:</div>
      <th v-for="j in data.nV + 1" :key="j">
        <TypeOp :data="data" :i="i" :j="j" v-on:changeTypeOp="changeTypeOp"/>
        <span v-if="i === 1 && j === 1" class="px-1">Z = </span>
        <InputX :data="data" :i="i" :j="j" v-on:changeValueX="changeValueX"/>
        <span v-if="j < data.nV" class="px-1">+</span>
        <InputNK :data="data" :i="i" :j="j" v-on:changeValueNK="changeValueNK"/>
      </th>
    </tr>
  </table>
</template>

<script>
import TypeOp from './type-op.vue'
import InputX from './value-x.vue'
import InputNK from './value-NK.vue'

export default {
  name: 'Form-Primal-Input-Index',
  props: ['data'],
  data () {
    return {
    }
  },
  components: {
    TypeOp,
    InputX,
    InputNK
  },
  computed: {},
  methods: {
    changeTypeOp (data) {
      this.$emit('changeTypeOp', data)
    },
    changeValueX (data) {
      this.$emit('changeValueX', data)
    },
    changeValueNK (data) {
      this.$emit('changeValueNK', data)
    }
  }
}
</script>
