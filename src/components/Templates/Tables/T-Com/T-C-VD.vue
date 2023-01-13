<template>
  <span>
    <span v-if="iR === 1 && iC === 1">VD</span>
    <span v-if="iR === 1 && iC === 2">Z</span>
  </span>
</template>

<script>
export default {
  name: 'Table-Com-Row1st',
  props: ['iR', 'iC']
}
</script>
