<template>
  <div v-if="index === nData" >
    <div class="mx-1 mb-1">
      Jika sudah tidak ada lagi angka negatif pada baris Z, maka tabel sudah optimal.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step-Final',
  props: ['index', 'nData']
}
</script>
