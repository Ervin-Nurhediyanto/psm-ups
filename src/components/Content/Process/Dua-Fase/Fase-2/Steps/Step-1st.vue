<template>
  <div v-if="index === 1" class="row mx-1 p-1 bg-white">
    <div>{{ text }}</div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'Fase-1-Step-1st',
  props: ['index', 'data'],
  data () {
    return {
      text: 'Melanjutkan penyelesaian tabel simpleks pada fase I, dengan membuang kolom variabel semu dari tabel simpleks optimal fase I dan mengganti fungsi objectif A dengan fungsi objectif semula Z.'
    }
  }
}
</script>
