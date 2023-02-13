<template>
  <div>
    <button
      class="btn btn-primary my-1 w-100"
      @click.prevent="handleSubmit"
    >
      <b>{{ btnText }}</b>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Btn-Submit-Home-Input',
  props: ['btnText', 'data'],
  methods: {
    handleSubmit () {
      const Toast = (icon, title) => {
        this.$swal.mixin().fire({
          icon: icon,
          title: title,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
      }
      if (this.data.numb_v <= 0 || this.data.numb_c <= 0) {
        Toast('error', 'variabel atau kendala tidak boleh kosong !!!')
      } else if (this.data.numb_v > this.data.numb_c) {
        Toast('error', 'jumlah variabel tidak boleh melebihi kendala !!!')
      } else {
        if (this.data.type_meth === 'PRIMAL') {
          this.$router.replace({
            name: 'Form-Primal'
          })
        } else if (this.data.type_meth === 'BIG M') {
          this.$router.replace({
            name: 'Form-Big-M'
          })
        } else if (this.data.type_meth === 'DUA FASE') {
          this.$router.replace({
            name: 'Form-Dua-Fase'
          })
        }
      }
    }
  }
}
</script>
