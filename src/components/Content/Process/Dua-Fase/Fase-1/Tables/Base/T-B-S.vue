<template>
  <span>
    <span v-if="(iR === 1 && iC > 2 + numbV) && iC <= 2 + numbS + numbV">S<span v-if="(iR === 1 && iC > 2 + numbV) && iC <= 2 + numbS + numbV" class="font-10px">{{ iC - (2 + numbV) }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Base-S',
  props: ['iR', 'iC', 'numbV', 'numbS']
}
</script>
