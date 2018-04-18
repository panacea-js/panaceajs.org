<template>
<div class="panacea-default">
  <PanaceaSiteHeader/>
  <nuxt/>
  <PanaceaSiteFooter/>
</div>
</template>

<script>
import PanaceaSiteHeader from '~/components/organisms/PanaceaSiteHeader.vue'
import PanaceaSiteFooter from '~/components/organisms/PanaceaSiteFooter.vue'
export default {
  components: {
    PanaceaSiteHeader,
    PanaceaSiteFooter
  }
}
</script>

<style lang="scss">
.panacea-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .header,
  .footer {
    flex-grow: 0;
  }
  
  .content {
    flex-grow: 1;
  }
  
}
</style>
