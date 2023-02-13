<template>
  <div class="row-xl h-100vh d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-5 h-60vh px-0">
      <form class="h-100 w-100 overflow scrollbar-none shadow mt-2 p-3 rounded bg-green">
        <Logo/>
        <Input
          :data="data"
          v-on:changeVar="changeVar"
          v-on:changeCon="changeCon"
          v-on:changeMethod="changeMethod"
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
    </div>
  </div>
</template>

<script>
import Logo from '../Templates/Image/I-Logo.vue'
import Input from './Input/C-Input-Main.vue'
import BtnSubmit from '../Templates/Button/Submit/Btn-S-Home-Input.vue'
import BtnReset from '../Templates/Button/Cancel/Btn-C-Home-Input.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Component-Home-Input',
  data () {
    return {
      data: {
        numb_v: 0,
        numb_c: 0,
        type_meth: 'PRIMAL',
        type_option: ['PRIMAL', 'BIG M', 'DUA FASE']
      }
    }
  },
  components: {
    Logo,
    Input,
    BtnSubmit,
    BtnReset
  },
  methods: {
    ...mapActions([
      'clearData',
      'add_type_meth'
    ]),
    changeVar (value) {
      this.data.numb_v = value
    },
    changeCon (value) {
      this.data.numb_c = value
    },
    changeMethod (value) {
      this.data.type_meth = value
    },
    onReset () {
      this.data.numb_v = 0
      this.data.numb_c = 0
      this.data.type_meth = 'PRIMAL'
    }
  },
  mounted () {
    this.clearData().then((res) => {
      this.add_type_meth('PRIMAL')
    })
  }
}
</script>
