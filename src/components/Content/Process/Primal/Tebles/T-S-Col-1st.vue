<template>
  <span>
    <BaseCol :iR="iR" :iC="iC" :n="n" :data="data"/>
  </span>
</template>

<script>
import BaseCol from './Base/T-B-Col.vue'

export default {
  name: 'Table-Col-1st',
  props: ['iR', 'iC', 'n', 'data'],
  components: {
    BaseCol
  }
}
</script>
