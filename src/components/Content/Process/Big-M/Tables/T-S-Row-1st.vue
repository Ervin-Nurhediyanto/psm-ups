<template>
  <span>
    <BaseVD :iR="iR" :iC="iC"/>
    <BaseX :iR="iR" :iC="iC" :numbV="numbV"/>
    <BaseS :iR="iR" :iC="iC" :numbV="numbV" :numbS="numbS"/>
    <BaseA :iR="iR" :iC="iC" :numbV="numbV" :numbS="numbS" :numbA="numbA"/>
    <BaseNK :iR="iR" :iC="iC" :numbV="numbV" :numbS="numbS" :numbA="numbA"/>
    <BaseI :iR="iR" :iC="iC" :numbV="numbV" :numbS="numbS" :numbA="numbA"/>
  </span>
</template>

<script>
import BaseVD from './Base/T-B-VD.vue'
import BaseX from './Base/T-B-X.vue'
import BaseS from './Base/T-B-S.vue'
import BaseA from './Base/T-B-A.vue'
import BaseNK from './Base/T-B-NK.vue'
import BaseI from './Base/T-B-Index.vue'

export default {
  name: 'Table-Row-1st',
  props: ['iR', 'iC', 'numbV', 'numbC', 'numbS', 'numbA'],
  components: {
    BaseVD,
    BaseX,
    BaseS,
    BaseA,
    BaseNK,
    BaseI
  }
}
</script>
