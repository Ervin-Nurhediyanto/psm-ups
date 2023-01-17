<template>
  <div class="col-12 h-100vh">
    <div class="h-5vh">
      <Navbar/>
    </div>
    <div class="h-95vh">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar/navbar.vue'

export default {
  name: 'Form',
  components: {
    Navbar
  }
}
</script>
