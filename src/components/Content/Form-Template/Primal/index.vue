<template>
  <div class="row-xl h-95vh d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-5 px-0">
      <form class="h-100 w-100 shadow mt-2 p-3 rounded bg-info">
        <Logo/>
        <Input
          :data="data"
          v-on:changeTypeOp="changeTypeOp"
          v-on:changeValueX="changeValueX"
          v-on:changeValueNK="changeValueNK"
        />
        <div class="row">
          <div class="col">
            <!-- <BtnCancel :btnText="'BACK'" :nameLink="'Main'"/> -->
          </div>
          <div class="col">
            <BtnSubmit :btnText="'SUBMIT'" :data="data"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '../../Image/I-Logo.vue'
import Input from './Input/index.vue'
import BtnSubmit from '../../Button/Submit/Btn-S-F-Primal.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Form-Primal-Index',
  data () {
    return {
      data: {
        input: [],
        type_op: 'MAX',
        nV: 0,
        nC: 0
      }
    }
  },
  components: {
    Logo,
    Input,
    BtnSubmit
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      type_op: 'type_op'
    })
  },
  mounted () {
    const input = []
    for (let i = 0; i < Number(this.numb_c) + 1; i++) {
      input.push([])
      for (let j = 0; j < Number(this.numb_v) + 1; j++) {
        input[i].push(0)
      }
    }
    this.data.input = input
    this.data.nV = Number(this.numb_v)
    this.data.nC = Number(this.numb_c)
    this.add_table_1(JSON.stringify(this.data.input))
    this.add_type_op(this.data.type_op)
  },
  methods: {
    ...mapActions([
      'add_table_1',
      'add_type_op'
    ]),
    changeTypeOp (data) {
      this.data.type_op = data
      this.add_type_op(this.data.type_op)
    },
    changeValueX (data) {
      this.data.input[data[0]][data[1]] = Number(data[2])
      this.add_table_1(JSON.stringify(this.data.input))
    },
    changeValueNK (data) {
      this.data.input[data[0]][data[1]] = Number(data[2])
      this.add_table_1(JSON.stringify(this.data.input))
    }
  }
}
</script>

<!-- <template>
  <div class="row-xl h-95vh d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-5 px-0">
      <form class="h-100 w-100 shadow mt-2 p-3 rounded bg-info">
        <Logo/>
        <Table/>
        <div class="row">
          <div class="col">
            <BtnCancel :btnText="'BACK'" :nameLink="'Main'"/>
          </div>
          <div class="col">
            <BtnSubmit :btnText="'SUBMIT'" :nameLink="'Process'"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '../Templates/Image/I-Logo.vue'
import Table from '../Templates/Tables/T-Coef.vue'
import BtnSubmit from '../Templates/Button/Submit.vue'
import BtnCancel from '../Templates/Button/Cancel.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Coefficient-Input',
  data () {
    return {
    }
  },
  components: {
    Logo,
    Table,
    BtnSubmit,
    BtnCancel
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v'
    })
  },
  mounted () {
  }
}
</script> -->
