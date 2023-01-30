<template>
  <div v-if="index === n" class="mx-1 my-2">
    <span v-if="(Math.round(((A[A.length - 2]) + Number.EPSILON) * 100) / 100) === 0">
      <span>Nilai A = 0, sehingga dilanjutkan ke penyelesaian fase II</span>
    </span>
    <span v-if="(Math.round(((A[A.length - 2]) + Number.EPSILON) * 100) / 100) !== 0">
      <span>Nilai A ≠ 0, sehingga tidak ada penyelesaian</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Step-Result',
  props: ['index', 'n', 'data'],
  data () {
    return {
      A: this.data.table_it[this.data.table_it.length - 1][1]
    }
  }
}
</script>
