<template>
  <form class="h-100 w-100 overflow scrollbar-none shadow mt-2 p-3 rounded bg-aqua">
    <Logo/>
    <!-- <FInput
      :data="data"
      v-on:changeTypeOp="changeTypeOp"
      v-on:changeValueX="changeValueX"
      v-on:changeValueSy="changeValueSy"
      v-on:changeValueNK="changeValueNK"
    /> -->
    <div class="row">
      <div class="col">
        <!-- <BtnReset
          :btnText="'RESET'"
          v-on:onReset="onReset"
        /> -->
      </div>
      <div class="col">
        <!-- <BtnSubmit
          :btnText="'SUBMIT'"
          :data="data"
        /> -->
      </div>
    </div>
  </form>
</template>

<script>
import Logo from '../../Templates/Image/I-Logo.vue'
// import FInput from './F-Big-M-Input.vue'
// import BtnSubmit from '../../Templates/Button/Submit/Btn-S-Form-Big-M.vue'
// import BtnReset from '../../Templates/Button/Cancel/Btn-C-Form-Big-M.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Form-Dua-Fase',
  data () {
    return {
      data: {
        // numb_c: 0,
        // numb_v: 0,
        // type_op: 'MIN',
        // input: [],
        // symbols: []
      }
    }
  },
  components: {
    Logo
    // FInput,
    // BtnSubmit,
    // BtnReset
  },
  computed: {
    ...mapGetters({
      // numb_c: 'numb_c',
      // numb_v: 'numb_v'
    })
  },
  methods: {
    ...mapActions([
      // 'add_table_1',
      // 'add_type_op',
      // 'add_symbols'
    ])
    // changeTypeOp (value) {
    //   this.data.type_op = value
    // },
    // changeValueX (data) {
    //   this.data.input[data[0]][data[1]] = Number(data[2])
    //   this.add_table_1(JSON.stringify(this.data.input))
    // },
    // changeValueSy (data) {
    //   this.data.symbols[data.index] = data.symbol
    //   this.add_symbols(JSON.stringify(this.data.symbols))
    // },
    // changeValueNK (data) {
    //   this.data.input[data[0]][data[1]] = Number(data[2])
    //   this.add_table_1(JSON.stringify(this.data.input))
    // },
    // onReset () {
    //   this.data.type_op = 'MIN'
    //   this.data.input = []
    //   this.data.symbols = []
    //   this.onLoad()
    // },
    // onLoad () {
    //   this.data.numb_c = Number(this.numb_c)
    //   this.data.numb_v = Number(this.numb_v)
    //   for (let i = 0; i < Number(this.numb_c) + 1; i++) {
    //     this.data.input.push([])
    //     for (let j = 0; j < Number(this.numb_v) + 1; j++) {
    //       this.data.input[i].push(0)
    //     }
    //     this.inputSymbol(i)
    //   }
    //   this.add_table_1(JSON.stringify(this.data.input))
    //   this.add_type_op(this.data.type_op)
    // },
    // inputSymbol (i) {
    //   if (i === 0) {
    //     this.data.symbols.push('=')
    //   } else {
    //     this.data.symbols.push('≥')
    //   }
    //   this.add_symbols(JSON.stringify(this.data.symbols))
    // }
  },
  mounted () {
    // this.onLoad()
  }
}
</script>
