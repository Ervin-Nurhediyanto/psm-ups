<template>
  <span>
    <span v-if="(iR === 1 && iC === (numbS + numbV + 4))">Index</span>
  </span>
</template>

<script>
export default {
  name: 'Table-Base-Index',
  props: ['iR', 'iC', 'numbV', 'numbS']
}
</script>
