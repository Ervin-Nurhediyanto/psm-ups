<template>
  <span>
    <VarVCol :iR="iR" :iC="iC" :n="n" :data="data"/>
  </span>
</template>

<script>
import VarVCol from './T-C-VCol.vue'

export default {
  name: 'Table-Com-Row1st',
  props: ['iR', 'iC', 'n', 'data'],
  components: {
    VarVCol
  }
}
</script>
