<template>
  <div class="col-6 col-sm-6 col-md-6 col-xl-6 py-1 d-flex justify-content-center align-content-center">
    <span class="text-white cursor-pointer" @click.prevent="handleClick">About</span>
  </div>
</template>

<script>
export default {
  name: 'Nav-Menu-About',
  methods: {
    handleClick () {
      this.$router.replace({
        name: 'About'
      })
    }
  }
}
</script>
