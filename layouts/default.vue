<template>
<div>
  <PanaceaSiteHeader/>
  <nuxt/>
  <PanaceaSiteFooter/>
  <PanaceaCookies/>
</div>
</template>

<script>
import PanaceaSiteHeader from '~/components/organisms/PanaceaSiteHeader.vue'
import PanaceaSiteFooter from '~/components/organisms/PanaceaSiteFooter.vue'
import PanaceaCookies from '~/components/molecules/PanaceaCookies.vue'
export default {
  components: {
    PanaceaSiteHeader,
    PanaceaSiteFooter,
    PanaceaCookies
  }
}
</script>

<style lang="scss">
.panacea-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  perspective: 1000px;

  .header,
  .footer {
    flex-grow: 0;
  }
  
  .content {
    flex-grow: 1;
  }
  
}

/* styles */
.page-enter-active,
.page-leave-active {
  transition: transform ( $timing / 2 ) ease;
  will-change: transform;
}

.page-enter {
  transform: translateX(-101vw);
}

.page-leave-to {
  transform: translateX(101vw);
}
</style>
