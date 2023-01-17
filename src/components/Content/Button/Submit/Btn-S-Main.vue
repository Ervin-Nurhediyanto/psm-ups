<template>
  <div>
    <button class="btn btn-success my-1 w-100 font-weight-bold" @click.prevent="handleSubmit">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Btn-Submit-Main',
  props: ['btnText'],
  data () {
    return {
      data: {}
    }
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      type_meth: 'type_meth'
    })
  },
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
      if (this.numb_v <= 0 || this.numb_c <= 0) {
        Toast('error', 'variabel atau kendala tidak boleh kosong !!!')
      } else if (this.numb_v > this.numb_c) {
        Toast('error', 'jumlah variabel tidak boleh melebihi kendala !!!')
      } else {
        if (this.type_meth === 'PRIMAL') {
          this.$router.replace({
            name: 'Form-Primal'
          })
        } else if (this.type_meth === 'BIG M') {
          this.$router.replace({
            name: 'Form-Big-M'
          })
        } else if (this.type_meth === 'DUA FASE') {
          this.$router.replace({
            name: 'Form-Dua-Fase'
          })
        }
      }
    }
  }
}
</script>
