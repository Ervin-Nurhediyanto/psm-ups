<template>
  <div class="dropdown">
    <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      {{ choose }}
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" @click.prevent="handleChange">MAX</a></li>
      <li><a class="dropdown-item" href="#" @click.prevent="handleChange">MIN</a></li>
    </ul>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Drop-Down-Max-Min',
  data () {
    return {
      choose: 'MAX'
    }
  },
  mounted () {
    // this.type_meth = 'PRIMAL'
    // this.add_type_meth(this.type_meth)
  },
  methods: {
    ...mapActions([
      // 'add_type_meth'
    ]),
    handleChange () {
      if (this.choose === 'MAX') {
        this.choose = 'MIN'
      } else {
        this.choose = 'MAX'
      }
      // this.type_meth = value
      // this.add_type_meth(this.type_meth)
    }
  }
}
</script>
