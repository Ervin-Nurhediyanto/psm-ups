<template>
  <div class="col-5 col-sm-5  col-md-5 col-xl-5 mx-1  py-1 d-flex justify-content-center align-content-center">
    <span class="d-flex d-md-none d-xl-none font-18px text-white cursor-pointer" @click.prevent="handleClick">Home</span>
    <span class="d-none d-md-flex d-xl-none font-10px text-white cursor-pointer" @click.prevent="handleClick">Home</span>
    <span class="d-none d-md-none d-xl-flex text-white cursor-pointer" @click.prevent="handleClick">Home</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Nav-Menu-Home',
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
