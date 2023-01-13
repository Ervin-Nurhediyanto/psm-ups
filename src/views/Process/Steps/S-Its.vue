<template>
  <div v-if="index > 2 && index < nData" >
    <div class="mx-1 mb-1">
      Ulangi langkah 2.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step-Iterations',
  props: ['index', 'nData']
}
</script>
