<template>
  <span>
    <span v-if="(iR === 1 && iC === (numbC + numbV + 4) - 1)">NK</span>
  </span>
</template>

<script>
export default {
  name: 'Table-Com-S',
  props: ['iR', 'iC', 'numbV', 'numbC']
}
</script>
