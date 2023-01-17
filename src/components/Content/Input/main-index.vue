<template>
  <div class="">
    <Variable :numb_v="numb_v"/>
    <Constraint :numb_c="numb_c"/>
    <Method :type_meth="type_meth" :type_option="type_option"/>
  </div>
</template>

<script>
import Variable from './variables.vue'
import Constraint from './constraints.vue'
import Method from './method.vue'

export default {
  name: 'Content-Main-Input',
  props: ['numb_v', 'numb_c', 'type_meth', 'type_option'],
  components: {
    Variable,
    Constraint,
    Method
  }
}
</script>
