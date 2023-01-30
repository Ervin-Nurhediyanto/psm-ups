<template>
  <div class="my-2">
    <div class="text-danger"><b>Penyelesaian:</b></div>
    <CoDesA :data="data"/>
    <CoConA :data="data"/>
    <div class="my-2">Sehingga diperoleh model PL standar meminimalkan:</div>
    <CoDesAstd :data="data"/>
    <CoConAstd :data="data"/>
  </div>
</template>

<script>
import CoDesA from './Co-Des-A.vue'
import CoConA from './Co-Con-A.vue'
import CoDesAstd from './Model-Standard/Co-Des-A-Std.vue'
import CoConAstd from './Model-Standard/Co-Con-A-Std.vue'

export default {
  name: 'Fase-1-Completion-A',
  props: ['data'],
  data () {
    return {
    }
  },
  components: {
    CoDesA,
    CoConA,
    CoDesAstd,
    CoConAstd
  }
}
</script>
