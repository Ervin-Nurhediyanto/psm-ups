<template>
  <table class="row mx-1">
    <tr v-for="inRow in (Number(numb_c) + 1)" :key="inRow" class="w-100 p-0">
      <div v-if="inRow === 1" class="col-xl-12 my-1 p-1">Fungsi Tujuan:</div>
      <div v-if="inRow === 2" class="col-xl-12 my-1 p-1">Fungsi Kendala:</div>
      <th v-for="inCol in Number(numb_v) + 1" :key="inCol" class="">
        <span v-if="inRow === 1 && inCol === 1" @click.prevent="handleChange" class="cursor-pointer hover-text-red">{{ typeOp }}</span>
        <span v-if="inRow === 1 && inCol === 1" class="px-1">Z = </span>
        <input v-if="inCol !== Number(numb_v) + 1" type="text" class="w-40px text-center" v-model="data[inRow - 1][inCol - 1]" @change.prevent="handleSubmit([inRow - 1, inCol - 1])"/>
        <span v-if="inCol !== Number(numb_v) + 1" class="px-1">X</span>
        <span v-if="inCol !== Number(numb_v) + 1" class="font-10px">{{ inCol }}</span>
        <span v-if="inCol < Number(numb_v)" class="px-1">+</span>
        <span v-if="inRow !== 1 && inCol === Number(numb_v) + 1" class="px-1">≤</span>
        <input v-if="inRow !== 1 && inCol === Number(numb_v) + 1" type="text" class="w-40px text-center" v-model="data[inRow - 1][inCol - 1]" @change.prevent="handleSubmit([inRow - 1, inCol - 1])" />
      </th>
    </tr>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Table-Coefficient',
  data () {
    return {
      data: [],
      typeOp: 'MAX'
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      numb_c: 'numb_c',
      numb_v: 'numb_v',
      type_op: 'type_op'
    })
  },
  mounted () {
    const coef = []
    for (let i = 0; i < Number(this.numb_c) + 1; i++) {
      coef.push([])
      for (let j = 0; j < Number(this.numb_v) + 1; j++) {
        coef[i].push(0)
      }
    }
    this.data = coef
    this.add_table_1(JSON.stringify(coef))
    this.add_type_op(this.typeOp)
  },
  methods: {
    ...mapActions([
      'add_table_1',
      'add_type_op'
    ]),
    handleChange () {
      if (this.typeOp === 'MAX') {
        this.typeOp = 'MIN'
      } else {
        this.typeOp = 'MAX'
      }
      this.add_type_op(this.typeOp)
      // const Toast = (icon, title) => {
      //   this.$swal.mixin().fire({
      //     icon: icon,
      //     title: title,
      //     toast: true,
      //     position: 'top-end',
      //     showConfirmButton: false,
      //     timer: 3000,
      //     timerProgressBar: true
      //   })
      // }
      // Toast('error', 'Opsi Minimum belum tersedia')
    },
    handleSubmit (index) {
      this.data[index[0]][index[1]] = Number(this.data[index[0]][index[1]])
      this.add_table_1(JSON.stringify(this.data))
    }
  }
}
</script>
