<template>
  <div class="row-xl h-95vh d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-5 px-0">
      <form class="h-100 w-100 shadow mt-2 p-3 rounded bg-dark-grey">
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
</script>
