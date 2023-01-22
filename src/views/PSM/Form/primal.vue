<template>
  <div class="row-xl h-100vh d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-5 h-70vh px-0">
      <FPrimal/>
    </div>
  </div>
</template>

<script>
import FPrimal from '../../../components/Content/Form/Primal/F-Primal.vue'

export default {
  name: 'Form-Primal-Main',
  components: {
    FPrimal
  }
}
</script>
