<template>
  <span v-if="j !== data.numb_v + 1">
    <input
      type="number"
      class="w-40px text-center"
      v-model="data.input[i - 1][j - 1]"
      @change.prevent="handleChange([i - 1, j - 1, data.input[i - 1][j - 1]])"
    />
    <span class="px-1">X<span class="font-10px">{{ j }}</span></span>
  </span>
</template>

<script>
export default {
  name: 'Form-Input-X',
  props: ['data', 'i', 'j'],
  methods: {
    handleChange (data) {
      this.$emit('changeValueX', data)
    }
  }
}
</script>
