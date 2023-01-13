<template>
  <div class="row my-2 mx-1">
    <div class="col">
      <div class="row rounded bg-warning text-white">
        <div class="col-9 col-sm-10 col-md-10 col-xl-10 d-flex align-items-center mt-1">
          <label class="form-label text-center">NUMBER OF VARIABLES:</label>
        </div>
        <div class="col-3 col-sm-2 col-md-2 col-xl-2 p-0">
          <input type="text" class="form-control" v-model="numb_v" @change="handleChange"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Input-Variable',
  data () {
    return {
      numb_v: 0
    }
  },
  methods: {
    ...mapActions([
      'add_numb_v'
    ]),
    handleChange () {
      this.add_numb_v(Number(this.numb_v))
    }
  }
}
</script>
