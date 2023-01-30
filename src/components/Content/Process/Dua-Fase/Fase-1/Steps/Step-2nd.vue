<template>
  <div v-if="index === 2" >
    <div class="mx-1 mb-1">
      Buat tabel awal simpleks.
    </div>
    <hr/>
    <div class="mx-1 mb-1">
      Menentukan kolom kunci (kolom kunci ditandai dengan angka <span class="text-success"><b>hijau</b></span>): Untuk kasus maksimum, pilih angka negatif terbesar pada baris Z. Untuk kasus minimum, pilih angka positif terbesar pada baris Z.
    </div>
    <hr/>
    <div class="mx-1 mb-1">
      Menghitung nilai index: Dengan membagi NK dengan angka pada kolom kunci yang sebaris.
    </div>
    <hr/>
    <div class="mx-1 mb-1">
      Menentukan baris kunci (baris kunci ditandai dengan angka <span class="text-info"><b>biru</b></span>): pilih angka positif terkecil pada index.
    </div>
    <hr/>
    <div class="mx-1 mb-1">
      Perpotongan antara baris kunci dan kolom kunci adalah angka kunci (angka kunci ditandai dengan angka <span class="text-danger"><b>merah</b></span>)
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step-2nd',
  props: ['index']
}
</script>
