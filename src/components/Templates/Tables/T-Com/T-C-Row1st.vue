<template>
  <span>
    <VarVD :iR="iR" :iC="iC"/>
    <VarX :iR="iR" :iC="iC" :numbV="numbV"/>
    <VarS :iR="iR" :iC="iC" :numbV="numbV" :numbC="numbC"/>
    <VarNK :iR="iR" :iC="iC" :numbV="numbV" :numbC="numbC"/>
    <VarIN :iR="iR" :iC="iC" :numbV="numbV" :numbC="numbC"/>
  </span>
</template>

<script>
import VarVD from './T-C-VD.vue'
import VarX from './T-C-X.vue'
import VarS from './T-C-S.vue'
import VarNK from './T-C-NK.vue'
import VarIN from './T-C-Index.vue'

export default {
  name: 'Table-Com-Row1st',
  props: ['iR', 'iC', 'numbV', 'numbC'],
  components: {
    VarVD,
    VarX,
    VarS,
    VarNK,
    VarIN
  }
}
</script>
