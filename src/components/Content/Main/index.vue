<template>
  <div class="row-xl d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-12 px-0">
      <form class="h-100 w-100 shadow mt-2 p-3 rounded bg-aqua">
        <Logo/>
        <Input :numb_v="numb_v" :numb_c="numb_c" :type_meth="type_meth" :type_option="type_option"/>
        <div class="row">
          <div class="col">
            <BtnCancel :btnText="'RESET'" v-on:handleCancel="handleCancel(event)"/>
          </div>
          <div class="col">
            <BtnSubmit :btnText="'SUBMIT'"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '../Image/I-Logo.vue'
import Input from '../Input/main-index.vue'
import BtnSubmit from '../Button/Submit/Btn-S-Main.vue'
import BtnCancel from '../Button/Cancel/Btn-C-Main.vue'

export default {
  name: 'Content-Main',
  data () {
    return {
      numb_v: 0,
      numb_c: 0,
      type_meth: '',
      type_option: ['PRIMAL', 'BIG M', 'DUA FASE'] // Tambahan Dual kalo sempet
    }
  },
  components: {
    Logo,
    Input,
    BtnSubmit,
    BtnCancel
  },
  methods: {
    handleCancel () {
      this.numb_v = 0
      this.numb_c = 0
      this.type_meth = 'PRIMAL'
    }
  }
}
</script>
