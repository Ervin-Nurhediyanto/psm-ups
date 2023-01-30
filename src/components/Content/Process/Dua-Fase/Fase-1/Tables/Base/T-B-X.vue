<template>
  <span>
    <span v-if="(iR === 1 && iC > 2) && iC <= numbV + 2">X<span v-if="(iR === 1 && iC > 2) && iC <= numbV + 2" class="font-10px">{{ iC - 2 }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Table-Base-X',
  props: ['iR', 'iC', 'numbV']
}
</script>
