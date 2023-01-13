<template>
  <div class="col-12 h-100vh">
    <Navbar/>
    <TText/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar/navbar.vue'
import TText from '../../components/Templates/About/Text.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    TText
  }
}
</script>
