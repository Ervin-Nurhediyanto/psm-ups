<template>
  <div>
    <button class="btn btn-danger my-1 w-100 font-weight-bold" @click.prevent="handleCancel">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Btn-Cancel-Form-Primal',
  props: ['btnText'],
  data () {
    return {
      data: {}
    }
  },
  methods: {
    ...mapActions([
      'add_type_meth'
    ]),
    handleCancel () {
      this.add_type_meth('PRIMAL')
      this.$emit('onReset', true)
    }
  }
}
</script>
