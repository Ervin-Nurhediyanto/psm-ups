<template>
  <div class="h-30vh d-flex justify-content-center shadow-sm rounded bg-white">
    <div class="h-30vh w-50 d-flex justify-content-center">
      <img v-bind:src="image" alt="Logo" class="h-100 w-auto"/>
    </div>
  </div>
</template>

<script>
import image from '../../../assets/logo.png'

export default {
  name: 'Image-Logo',
  data () {
    return {
      image: image
    }
  }
}
</script>
