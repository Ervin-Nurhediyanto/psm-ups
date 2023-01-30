<template>
  <div>
    <div class="mx-3 my-1"><b>Fase I</b></div>
    <form v-for="index in data.n" :key="index" class="w-100 shadow mt-2 p-3 rounded bg-transparant">
      <div class="mx-1 mb-1">Langkah {{ index }}</div>
      <Step1st :index="index" :data="data"/>
      <Step2nd :index="index"/>
      <StepIts :index="index" :n="data.n"/>
      <StepFin :index="index" :n="data.n" :type_op="'MIN'"/>
      <TableDF v-if="index > 1" :n="index - 2" :data="data"/>
      <StepRes :index="index" :n="data.n" :data="data"/>
    </form>
  </div>
</template>

<script>
import Step1st from './Steps/Step-1st.vue'
import Step2nd from './Steps/Step-2nd.vue'
import StepIts from './Steps/Step-Its.vue'
import StepFin from './Steps/Step-Fin.vue'
import TableDF from './Tables/T-S-Dua-Fase.vue'
import StepRes from './Steps/Step-Res.vue'

export default {
  name: 'Process-Fase-1',
  props: ['data'],
  components: {
    Step1st,
    Step2nd,
    StepIts,
    StepFin,
    TableDF,
    StepRes
  }
}
</script>
