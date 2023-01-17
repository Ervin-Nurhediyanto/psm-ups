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
export default {
  name: 'Form-Primal-Input-Type-Op',
  props: ['data', 'i', 'j'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    handleChange (value) {
      if (value === 'MAX') {
        this.$emit('changeTypeOp', 'MIN')
      } else {
        this.$emit('changeTypeOp', 'MAX')
      }
    }
  }
}
</script>
