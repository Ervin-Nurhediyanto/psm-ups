<template>
  <div>
    <button class="btn btn-danger my-1 w-100 font-weight-bold" @click.prevent="handleCancel">
      <b>{{ btnText }}</b>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Btn-Cancel-Form-Dua-Fase',
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
      this.add_type_meth('DUA FASE')
      this.$emit('onReset', true)
    }
  }
}
</script>
