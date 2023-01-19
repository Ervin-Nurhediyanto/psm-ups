<template>
  <div class="row my-2 mx-1">
    <div class="col">
      <div class="row rounded bg-white">
        <div class="col-9 col-sm-10 col-md-10 col-xl-10 d-flex align-items-center">
          <label class="form-label my-1">METODE SIMPLEKS</label>
        </div>
        <div class="col-3 col-sm-2 col-md-2 col-xl-2 p-0 rounded bg-warning">
          <div class="dropdown">
            <button
            class="w-100 my-1 btn btn-transparent dropdown-toggle font-12px text-white"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
              {{ type_meth }}
            </button>
            <div v-for="index in type_option.length" :key="index" >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="handleChange(type_option[index - 1])">
                    {{type_option[index - 1]}}
                  </a>
                </li>
                <!-- <li><a class="dropdown-item" href="#" @click.prevent="handleChange(type_option[index])">{{type_option[index]}}</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="handleChange(type_option[index + 1])">{{type_option[index + 1]}}</a></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Input-Methode',
  data () {
    return {
      type_meth: '',
      type_option: ['PRIMAL', 'BIG M', 'DUAL']
    }
  },
  mounted () {
    this.type_meth = 'PRIMAL'
    this.add_type_meth(this.type_meth)
  },
  methods: {
    ...mapActions([
      'add_type_meth'
    ]),
    handleChange (value) {
      this.type_meth = value
      this.add_type_meth(this.type_meth)
    }
  }
}
</script>
