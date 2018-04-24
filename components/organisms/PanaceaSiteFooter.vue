<template>
<footer class="footer" role="contentinfo">
  <div class="footer__contain">
    <PanaceaExternalLinks/>
    <PanaceaCopyright/>
  </div>
</footer>
</template>

<script>
import PanaceaExternalLinks from '~/components/molecules/PanaceaExternalLinks.vue'
import PanaceaCopyright from '~/components/molecules/PanaceaCopyright.vue'
export default {
  components: {
    PanaceaExternalLinks,
    PanaceaCopyright
  }
}
</script>

<style lang="scss">
.footer {
  background: $color--navy;  
}
</style>
