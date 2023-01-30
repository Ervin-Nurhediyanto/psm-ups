<template>
  <span>
    <span v-if="(iR === 1 && iC === (numbS + numbA + numbV + 4) - 1)">NK</span>
  </span>
</template>

<script>
export default {
  name: 'Table-Com-NK',
  props: ['iR', 'iC', 'numbV', 'numbS', 'numbA']
}
</script>
