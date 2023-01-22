<template>
  <form class="h-100 w-100 overflow scrollbar-none shadow mt-2 p-3 rounded bg-aqua">
    <Logo/>
    <FInput
      :data="data"
      v-on:changeTypeOp="changeTypeOp"
      v-on:changeValueX="changeValueX"
      v-on:changeValueNK="changeValueNK"
    />
    <div class="row">
      <div class="col">
        <BtnReset
          :btnText="'RESET'"
          v-on:onReset="onReset"
        />
      </div>
      <div class="col">
        <BtnSubmit
          :btnText="'SUBMIT'"
          :data="data"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Logo from '../../Templates/Image/I-Logo.vue'
import FInput from './F-Primal-Input.vue'
import BtnSubmit from '../../Templates/Button/Submit/Btn-S-Form-Primal.vue'
import BtnReset from '../../Templates/Button/Cancel/Btn-C-Form-Primal.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Form-Primal',
  data () {
    return {
      data: {
        numb_c: 0,
        numb_v: 0,
        type_op: 'MAX',
        input: []
      }
    }
  },
  components: {
    Logo,
    FInput,
    BtnSubmit,
    BtnReset
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v'
    })
  },
  methods: {
    ...mapActions([
      'add_table_1',
      'add_type_op'
    ]),
    changeTypeOp (value) {
      this.data.type_op = value
    },
    changeValueX (data) {
      this.data.input[data[0]][data[1]] = Number(data[2])
      this.add_table_1(JSON.stringify(this.data.input))
    },
    changeValueNK (data) {
      this.data.input[data[0]][data[1]] = Number(data[2])
      this.add_table_1(JSON.stringify(this.data.input))
    },
    onReset () {
      this.data.type_op = 'MAX'
      this.data.input = []
      this.onLoad()
    },
    onLoad () {
      this.data.numb_c = Number(this.numb_c)
      this.data.numb_v = Number(this.numb_v)
      for (let i = 0; i < Number(this.numb_c) + 1; i++) {
        this.data.input.push([])
        for (let j = 0; j < Number(this.numb_v) + 1; j++) {
          this.data.input[i].push(0)
        }
      }
      this.add_table_1(JSON.stringify(this.data.input))
      this.add_type_op(this.data.type_op)
    }
  },
  mounted () {
    this.onLoad()
  }
}
</script>
