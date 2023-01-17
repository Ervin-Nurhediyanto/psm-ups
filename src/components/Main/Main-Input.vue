<template>
  <div class="row-xl h-95vh d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-12 col-md-8 col-xl-5 px-0">
      <!-- <form class="h-100 w-100 shadow mt-2 p-3 rounded bg-dark-grey"> -->
      <form class="h-100 w-100 shadow mt-2 p-3 rounded bg-info">
        <Logo/>
        <InVariable/>
        <InConstraint/>
        <InMethode/>
        <div class="row">
          <div class="col">
            <BtnCancel :btnText="'RESET'"/>
          </div>
          <div class="col">
            <BtnSubmit :btnText="'SUBMIT'" :nameLink="'Input-Coefficient'"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '../Templates/Image/I-Logo.vue'
import InVariable from './Input/Input-Variables.vue'
import InConstraint from './Input/Input_Constraints.vue'
import InMethode from './Input/Input_Methode.vue'
// import BtnSubmit from '../Templates/Button/Submit.vue'
import BtnSubmit from '../Templates/Button/Submit/Btn-S-Main.vue'
import BtnCancel from '../Templates/Button/Cancel.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Main-Input',
  data () {
    return {
    }
  },
  components: {
    Logo,
    InVariable,
    InConstraint,
    InMethode,
    BtnSubmit,
    BtnCancel
  },
  computed: {
    ...mapGetters({
    })
  }
}
</script>
