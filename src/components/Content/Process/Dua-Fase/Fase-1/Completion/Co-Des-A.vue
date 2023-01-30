<template>
  <div>Fase I minimalkan A =
    <span v-for="i in data.var_a.length" :key="i">
      <span v-if="i !== 1"> + </span>
      <span>{{ data.var_a[i - 1].value[0] }}</span>
      <span class="font-10px">{{ data.var_a[i - 1].value[1] }}</span>
    </span>
  </div>
</template>

<script>

export default {
  name: 'Fase-1-Completion-Des-A',
  props: ['data']
}
</script>
