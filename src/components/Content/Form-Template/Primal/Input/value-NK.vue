<template>
  <span v-if="i !== 1 && j === data.nV + 1" >
    <span class="px-1">≤</span>
    <input
      type="number"
      class="w-40px text-center"
      v-model="data.input[i - 1][j - 1]"
      @change.prevent="handleChange([i - 1, j - 1, data.input[i - 1][j - 1]])"
    />
  </span>
</template>

<script>
export default {
  name: 'Form-Primal-Input-Value-NK',
  props: ['data', 'i', 'j'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    handleChange (data) {
      this.$emit('changeValueNK', data)
    }
  }
}
</script>
