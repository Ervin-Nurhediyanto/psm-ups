<template>
  <div class="col-6 col-sm-6 col-md-6 col-xl-6 py-1 d-flex justify-content-center align-content-center">
    <span class="text-white cursor-pointer" @click.prevent="handleClick">Home</span>
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
