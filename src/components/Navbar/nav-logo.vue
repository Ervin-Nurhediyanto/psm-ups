<template>
  <div class="col-3 col-sm-2 col-md-1 col-xl-1 m-0 p-0 p-sm-2 p-md-2 p-xl-0 bg-info">
    <nav class="h-5vh m-0 p-0 navbar navbar-light d-flex justify-content-center align-content-center">
      <a class="navbar-brand" href="#" @click.prevent="handleClick">
        <img :src="image" width="30" height="30" alt="">
        <span>PSM</span>
      </a>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import image from '../../assets/logo.png'

export default {
  name: 'Nav-Logo',
  data () {
    return {
      image: image
    }
  },
  methods: {
    ...mapActions([
      'clearData',
      'add_type_meth'
    ]),
    handleClick () {
      this.clearData().then((res) => {
        this.add_type_meth('PRIMAL')
        this.$router.replace({
          name: 'Home'
        })
      })
    }
  }
}
</script>
