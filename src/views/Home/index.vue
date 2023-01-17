<template>
  <div class="col-12 h-100vh">
    <div class="h-5vh">
      <Navbar/>
    </div>
    <div class="h-95vh d-flex justify-content-center align-items-center">
      <Content/>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar/navbar.vue'
import Content from '../../components/Content/Main/index.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Content
  }
}
</script>
