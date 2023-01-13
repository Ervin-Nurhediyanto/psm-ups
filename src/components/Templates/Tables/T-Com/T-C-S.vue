<template>
  <span>
    <span v-if="(iR === 1 && iC > 2 + numbV) && iC <= 2 + numbC + numbV">S</span>
    <span v-if="(iR === 1 && iC > 2 + numbV) && iC <= 2 + numbC + numbV" class="font-10px">
      {{ iC - (2 + numbV) }}
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Com-S',
  props: ['iR', 'iC', 'numbV', 'numbC']
}
</script>
