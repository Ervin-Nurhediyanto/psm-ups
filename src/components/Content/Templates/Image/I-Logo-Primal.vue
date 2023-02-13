<template>
  <div class="h-50 w-100 d-flex justify-content-center shadow-sm rounded bg-white">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center">
      <img v-bind:src="image" alt="Logo" class="h-100 w-auto"/>
    </div>
  </div>
</template>

<script>
import imgPrimal from '../../../../assets/logo_primal.png'

export default {
  name: 'Image-Logo',
  data () {
    return {
      image: imgPrimal
    }
  }
}
</script>
