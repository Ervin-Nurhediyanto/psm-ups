<template>
  <span>
    <span v-if="(iR === 1 && iC > 2 + numbV + numbS) && iC <= 2 + numbA + numbS + numbV">A<span v-if="(iR === 1 && iC > 2 + numbV) && iC <= 2 + numbA + numbS + numbV" class="font-10px">{{ iC - (2 + numbV + numbS) }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Base-A',
  props: ['iR', 'iC', 'numbV', 'numbS', 'numbA']
}
</script>
