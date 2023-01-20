<template>
  <div>
    <InputV :numb_v="data.numb_v" v-on:changeVar="changeVar"/>
    <InputC :numb_c="data.numb_c" v-on:changeCon="changeCon"/>
    <InputM :type_meth="data.type_meth" :type_option="data.type_option" v-on:changeMethod="changeMethod"/>
  </div>
</template>

<script>
import InputV from './C-Input-Var.vue'
import InputC from './C-Input-Con.vue'
import InputM from './C-Input-Meth.vue'

export default {
  name: 'Input-Main',
  props: ['data'],
  components: {
    InputV,
    InputC,
    InputM
  },
  methods: {
    changeVar (value) {
      this.$emit('changeVar', value)
    },
    changeCon (value) {
      this.$emit('changeCon', value)
    },
    changeMethod (value) {
      this.$emit('changeMethod', value)
    }
  }
}
</script>
