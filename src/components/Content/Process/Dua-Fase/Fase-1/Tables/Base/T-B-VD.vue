<template>
  <span>
    <span v-if="iR === 1 && iC === 1">VD</span>
    <span v-if="iR === 1 && iC === 2">A</span>
  </span>
</template>

<script>
export default {
  name: 'Table-Base-VD',
  props: ['iR', 'iC']
}
</script>
