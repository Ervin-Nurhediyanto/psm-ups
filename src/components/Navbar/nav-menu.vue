<template>
  <div class="col-3 col-sm-2 col-md-2 col-xl-1 m-0 p-0 d-flex align-content-center">
    <div class="row m-0 p-0">
      <NavHome/>
      <NavAbout/>
    </div>
  </div>
</template>

<script>
import NavHome from './Menu/Home.vue'
import NavAbout from './Menu/About.vue'

export default {
  name: 'Nav-Menu',
  components: {
    NavHome,
    NavAbout
  }
}
</script>
