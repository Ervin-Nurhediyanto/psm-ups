<template>
  <span
    v-if="i === 1 && j === 1"
    class="cursor-pointer hover-text-red"
    @click.prevent="handleChange(data.type_op)"
  >
    {{ data.type_op }}
  </span>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Form-Input-Type-Op',
  props: ['data', 'i', 'j'],
  methods: {
    ...mapActions([
      'add_type_op'
    ]),
    handleChange (value) {
      if (value === 'MAX') {
        this.$emit('changeTypeOp', 'MIN')
        this.add_type_op('MIN')
      } else {
        this.$emit('changeTypeOp', 'MAX')
        this.add_type_op('MAX')
      }
    }
  }
}
</script>
