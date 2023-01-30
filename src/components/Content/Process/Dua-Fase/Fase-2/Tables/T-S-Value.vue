<template>
  <span v-if="iR !== 1 && iC > 1">
    <span v-if="iC === data.key_cols2[n] + 1 && iR === data.key_rows2[n] + 1" class="text-danger">
      <KNvalue :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
    <span v-else-if="iC === data.key_cols2[n] + 1" class="text-success">
      <KCvalue :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
    <span v-else-if="iR === data.key_rows2[n] + 1" class="text-info">
      <KRvalue :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
    <span v-else>
      <DTvalue :iR="iR" :iC="iC" :n="n" :data="data"/>
    </span>
  </span>
</template>

<script>
import KNvalue from './Value/T-V-Key-Num.vue'
import KCvalue from './Value/T-V-Key-Col.vue'
import KRvalue from './Value/T-V-Key-Row.vue'
import DTvalue from './Value/T-V-Data.vue'

export default {
  name: 'Table-Value',
  props: ['iR', 'iC', 'n', 'data'],
  components: {
    KNvalue,
    KCvalue,
    KRvalue,
    DTvalue
  }
}
</script>
