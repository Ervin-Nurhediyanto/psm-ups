<template>
  <div class="col-12 h-5vh m-0 p-0 shadow bg-warning">
    <div class="row m-0 p-0 justify-content-between">
      <NavLogo/>
      <NavMenu/>
    </div>
  </div>
</template>

<script>
import NavLogo from './nav-logo.vue'
import NavMenu from './nav-menu.vue'

export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  components: {
    NavLogo,
    NavMenu
  }
}
</script>
