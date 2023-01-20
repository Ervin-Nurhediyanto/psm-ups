<template>
  <table class="row mx-1">
    <tr v-for="i in data.numb_c + 1" :key="i" class="w-100 p-0">
      <div v-if="i === 1" class="col-xl-12 my-1 p-1">Fungsi Tujuan:</div>
      <div v-if="i === 2" class="col-xl-12 my-1 p-1">Fungsi Kendala:</div>
      <th v-for="j in data.numb_v + 1" :key="j">
        <TypeOp :data="data" :i="i" :j="j" v-on:changeTypeOp="changeTypeOp"/>
        <span v-if="i === 1 && j === 1" class="px-1">Z = </span>
        <InputX :data="data" :i="i" :j="j" v-on:changeValueX="changeValueX"/>
        <span v-if="j < data.numb_v" class="px-1">+</span>
        <InputNK :data="data" :i="i" :j="j" v-on:changeValueNK="changeValueNK"/>
      </th>
    </tr>
  </table>
</template>

<script>
import TypeOp from './Input/F-Input-Type-Op.vue'
import InputX from './Input/F-Input-X.vue'
import InputNK from './Input/F-Input-NK.vue'

export default {
  name: 'Form-Input-Primal',
  props: ['data'],
  components: {
    TypeOp,
    InputX,
    InputNK
  },
  methods: {
    changeTypeOp (value) {
      this.$emit('changeTypeOp', value)
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
