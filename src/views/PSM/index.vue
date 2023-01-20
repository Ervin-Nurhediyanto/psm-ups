<template>
  <div class="col-12 h-100vh">
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import Navbar from '../../components/Navbar/navbar.vue'

export default {
  name: 'Main-Index',
  components: {
    Navbar
  }
}
</script>
