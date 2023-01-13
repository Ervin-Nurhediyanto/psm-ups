<template>
  <div class="col-3 col-sm-3 col-md-1 col-xl-1 m-0 p-0">
    <nav class="h-5vh m-0 p-0 navbar navbar-light d-flex justify-content-center align-content-center">
      <a class="navbar-brand" href="#" @click.prevent="handleClick">
        <img :src="image" width="30" height="30" alt="">
        PSM
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
