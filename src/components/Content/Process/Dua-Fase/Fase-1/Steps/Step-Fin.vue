<template>
  <div v-if="index === n" >
    <div class="mx-1 mb-1">
      <span>Jika sudah tidak ada lagi angka </span>
      <span v-if="type_op === 'MAX'">negatif</span>
      <span v-if="type_op === 'MIN'">positif</span>
      <span> pada baris A, maka tabel sudah optimal.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step-Final',
  props: ['index', 'n', 'type_op']
}
</script>
