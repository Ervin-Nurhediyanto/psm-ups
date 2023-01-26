<template>
  <div class="row-xl h-100vh d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-5 h-80vh px-0">
      <!-- Main Dua Fase -->
      <FDFase/>
    </div>
  </div>
</template>

<script>
// import FBigM from '../../../components/Content/Form/Big-M/F-Big-M.vue'
import FDFase from '../../../components/Content/Form/Dua-Fase/F-Dua-Fase.vue'

export default {
  name: 'Form-Dua-Fase-Main',
  components: {
    FDFase
  }
}
</script>
