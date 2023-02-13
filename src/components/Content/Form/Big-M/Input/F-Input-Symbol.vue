<template>
  <span v-if="i !== 1 && j === data.numb_v + 1">
    <button
      class="btn btn-transparent bg-cream m-1 p-1 w-40px border border-1 border-light"
      @click.prevent="handleChange(data.symbols[i - 1], [i - 1])"
    >
      <b>{{ symbol }}</b>
    </button>
  </span>
</template>

<script>
export default {
  name: 'Form-Input-Symbols',
  props: ['data', 'i', 'j'],
  data () {
    return {
      symbol: this.data.symbols[this.i - 1]
    }
  },
  methods: {
    handleChange (symbol, index) {
      if (symbol === '≥') {
        symbol = '≤'
      } else if (symbol === '≤') {
        symbol = '='
      } else {
        symbol = '≥'
      }
      const data = {
        index: index,
        symbol: symbol
      }
      this.symbol = data.symbol
      this.$emit('changeValueSy', data)
    }
  }
}
</script>
